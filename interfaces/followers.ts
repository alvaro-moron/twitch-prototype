export interface Followers {
  user_id: string
  user_name: string
  user_login: string
  followed_at: string
}

export type arrayFollowers = {
  total: number
  data: Followers[]
}
