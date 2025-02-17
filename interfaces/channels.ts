export interface Channels {
  broadcaster_language: string
  broadcaster_login: string
  display_name: string
  game_id: string
  game_name: string
  id: string
  is_live: boolean
  tag_ids: String[]
  tags: string[]
  thumbnail_url: string
  title: string
  started_at: Date
}

export type arrayChannels = {
  data: Channels[]
}
