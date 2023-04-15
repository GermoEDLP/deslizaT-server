import { IsNumber } from 'class-validator';

export class Response<T> {
  @IsNumber()
  code: number;

  message: string;

  statusCode: number;

  success: boolean;

  data?: T;
  error?: T;

  constructor(
    module: ModuleDataResponse,
    type: string,
    props?: IResponseProps,
  ) {
    const res: IResponse = module[type];
    for (const key in res) {
      this[key] = res[key];
    }
    if (props) {
      for (const key in props) {
        this[key] = props[key];
      }
    }
  }
}

export interface IResponseProps {
  message?: string;
  statusCode?: number;
  data?: string | object | object[];
  error?: string | object | object[];
}

export interface IResponse {
  code: number;
  message: string;
  statusCode: number;
  success: boolean;
  data?: string | object | object[];
  error?: string | object | object[];
}

export type ModuleDataResponse = { [key: string]: IResponse };
