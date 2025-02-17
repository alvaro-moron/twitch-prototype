export function formatTwitchPreview(url: string, width: string, height: string) {
  return url.replace('{width}', width).replace('{height}', height)
}
