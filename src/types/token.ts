export enum Token {
  Access = 'accessToken',
  Refresh = 'refreshToken',
}

export interface TokenStorage {
  [Token.Access]: string;
  [Token.Refresh]?: string;
}
