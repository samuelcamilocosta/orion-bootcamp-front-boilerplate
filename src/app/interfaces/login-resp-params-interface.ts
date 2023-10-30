export interface ILoginRespParams {
  user: {
    id: string;
    email: string;
    passwordRecoveryToken: string;
    accessToken: string;
  };
}
