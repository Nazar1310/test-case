export interface IResponse<T> {
  status: ResponseStatus;
  data: T;
  message?: string;
}
export enum ResponseStatus {
  Success = 'success',
  Error = 'error'
}
