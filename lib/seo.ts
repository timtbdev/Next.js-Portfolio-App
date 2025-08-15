export function truncateTitle(title: string, maxLength: number = 60): string {
  return title.length > maxLength
    ? title.slice(0, maxLength - 3) + "..."
    : title;
}
export function truncateDescription(
  description: string,
  maxLength: number = 160,
): string {
  return description.length > maxLength
    ? description.slice(0, maxLength - 3) + "..."
    : description;
}
