export class Response {
  message: string;

  statusCode: number;

  success: boolean;
}

export interface IResponseProps {
  message?: string;
  statusCode?: number;
  success?: boolean;
}
