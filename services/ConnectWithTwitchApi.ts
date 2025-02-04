import { ConnectionError } from '@/models/Errors'
export class connectWithTwitchApi {
  private readonly config = useRuntimeConfig()
  private attemptsLimit = 3
  private attempts = ref(0)

  constructor() {}

  // async useGetHttpMethod<T>(endpoint: string): Promise<T | undefined> {
  //   const { data, error } = await useFetch(
  //     `${this.config.public.twitchDefaultApi}${endpoint}`,
  //     {
  //       method: 'GET',
  //       headers: {
  //         Authorization: this.config.public.twitchAuthorization,
  //         'Client-Id': this.config.public.twitchClientId,
  //       },
  //     }
  //   )
  //   this.attempts.value++
  //   console.log('attempts: ' + this.attempts.value)
  //   if (error.value) {
  //     if (this.attempts.value < this.attemptsLimit) {
  //       setTimeout(async () => {
  //         await this.useGetHttpMethod(endpoint)
  //       }, 500)
  //     }
  //     if (this.attempts.value === this.attemptsLimit) {
  //       console.log('Ha ocurrido un error, inténtelo más tarde')
  //     }
  //     return
  //   } else if (data.value) {
  //     return data.value as T
  //   }
  // }

  async useGetHttpMethod<T>(endpoint: string): Promise<T | undefined> {
    try {
      const response: T = await $fetch(
        `${this.config.public.twitchDefaultApi}${endpoint}`,
        {
          method: 'GET',
          headers: {
            Authorization: this.config.public.twitchAuthorization,
            'Client-Id': this.config.public.twitchClientId,
          },
          onResponseError() {
            throw new ConnectionError('Error en la API de Twitch')
          },
        }
      )

      this.attempts.value++
      return response
    } catch (error) {
      if (error instanceof ConnectionError) {
        if (this.attempts.value < this.attemptsLimit) {
          this.attempts.value++
          return new Promise((resolve) =>
            setTimeout(async () => {
              resolve(await this.useGetHttpMethod<T>(endpoint))
            }, 250)
          )
        }
        alert('Ha ocurrido un error, inténtelo más tarde.')
        return undefined
      }
      alert('Error inesperado')
      return undefined
    }
  }
}
