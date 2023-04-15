import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Request, Response } from 'express';
import {
  CannotCreateEntityIdMapError,
  EntityNotFoundError,
  QueryFailedError,
} from 'typeorm';
import { BadRequestException } from '@nestjs/common';
import { IResponseProps, ResponseError } from '../classes';

export class DataException {
  message: string;
  constructor(error: string) {
    this.message = error;
  }
}

export class CustomException extends ResponseError<string> {
  @ApiProperty({
    type: String,
    description: 'Mensaje de error',
  })
  error: string;
  constructor(data?: string, props?: IResponseProps) {
    super(data, props);
  }
}

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let message =
      exception instanceof BadRequestException
        ? exception['response']['message']
        : (exception as any).message;

    let status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    Logger.error(
      message,
      (exception as any).stack,
      `${request.method} ${request.url}`,
    );

    switch (exception.constructor) {
      case QueryFailedError: // this is a TypeOrm error
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as QueryFailedError).message.split('\n')[0];
        break;
      case EntityNotFoundError: // this is another TypeOrm error
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as EntityNotFoundError).message.split('\n')[0];
        break;
      case CannotCreateEntityIdMapError: // and another
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as CannotCreateEntityIdMapError).message;
        break;
    }

    console.log(
      status,
      exception.constructor,
      message,
      (exception as any).stack,
      `${request.method} ${request.url}`,
    );

    const data =
      typeof response === 'string'
        ? response
        : response['message']
        ? JSON.stringify(response['message'])
        : message;

    const errorProps = {
      statusCode: status,
      success: false,
      message: response['error'],
    };

    const errorResp = new CustomException(data, errorProps);

    response.status(status).json(errorResp);
  }
}
