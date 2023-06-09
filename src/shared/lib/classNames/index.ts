export default function cx(
  className: string,
  mods?: Record<string, boolean>,
  additional?: Array<string | undefined>
): string {
  const modsCombined = Object.entries(mods || {})
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key);

  const classResult = [
    className,
    ...(modsCombined || []),
    ...(additional || []),
  ]
    .join(' ')
    .trim();

  return classResult;
}
