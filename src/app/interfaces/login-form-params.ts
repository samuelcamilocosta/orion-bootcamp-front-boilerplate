import { ILoginParams } from './login-params.interface';

export interface IFormParams extends ILoginParams {
  checkbox: boolean;
}
