export type Password = {
  hash: string;
  salt: string;
  iterations: number;
};
export type PasswordWithAttempt = Password & { attempts: number };
