export default function convertHourToMinutes(time: string): number {
  // 8:00

  const [hour, minutes] = time.split(':').map(Number);

  const totalMinutes = hour * 60 + minutes;

  return totalMinutes;
}
