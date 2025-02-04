declare module '#app' {
  interface RuntimeConfig {
    public: {
      twitchAuthorization: string
      twitchClientId: string
      twitchDefaultApi: string
    }
  }
}
