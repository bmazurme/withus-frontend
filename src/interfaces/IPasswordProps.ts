export interface IPasswordProps {
  handler: ({ password, token }: Record<string, string>) => void,
}
