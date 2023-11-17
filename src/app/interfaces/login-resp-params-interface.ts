export interface ILoginRespParams {
  user: {
    id: string;
    role: string;
    email: string;
    passwordRecoveryToken: string;
    accessToken: string;
    created_at: Date;
    updated_at: Date;
  };
}
