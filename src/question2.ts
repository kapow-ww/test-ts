export function getClockAngle(hh_mm: string): number {
  let result: number;
  let hourAngle, minAngle: number;
  let firstAngle, secondAngle: number;

  let [h, m] = String(hh_mm).split(":").map(Number);

  h = h > 12 ? h - 12 : h;

  minAngle = 6 * m;

  hourAngle = 30 * h + 0.5 * m;

  firstAngle = Math.abs(hourAngle - minAngle);

  secondAngle = 360 - firstAngle;

  result = firstAngle < secondAngle ? firstAngle : secondAngle;

  return result;
}
