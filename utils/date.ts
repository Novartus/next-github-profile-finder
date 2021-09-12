export function getJoinedDate(data: string): string {
  const day = data.slice(8, 10);
  const month = data.slice(5, 7);
  const year = data.slice(0, 4);

  return `Joined on ${day} ${month} ${year}`;
}
