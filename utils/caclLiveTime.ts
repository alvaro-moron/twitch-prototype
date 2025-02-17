export function caclLiveTime(startedAt: Date) {
  const startTime = new Date(startedAt)
  const now = new Date()
  const diffMs = now.getTime() - startTime.getTime()
  const hours = Math.floor(diffMs / (1000 * 60 * 60))
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000)
  const streamDuration = `${hours}h ${minutes}m ${seconds}s`
  return streamDuration
}
