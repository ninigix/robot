export function parseInput(input: string): { command: string; args: string[] } {
  const parts = input.trim().toUpperCase().split(/\s+/);
  const command = parts[0];
  const args = parts[1]?.split(`,`);

  return { command, args };
}
