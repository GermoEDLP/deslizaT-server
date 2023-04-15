import { ApiPropertyOptions } from '@nestjs/swagger';

export enum API_PROP_KEY {
  CODE = 'CODE',
  MESSAGE = 'MESSAGE',
  STATUSCODE = 'STATUSCODE',
  SUCCESS = 'SUCCESS',
  SUCCESS_ERROR = 'SUCCESS_ERROR',
  CODE_ERROR = 'CODE_ERROR',
  STATUSCODE_ERROR = 'STATUSCODE_ERROR',
  MESSAGE_ERROR = 'MESSAGE_ERROR',
}

export const RESPONSE_API_PROPERTY: Record<API_PROP_KEY, ApiPropertyOptions> = {
  CODE: {
    description: 'Código interno de la operación',
    example: '2001',
  },
  MESSAGE: {
    description: 'Mensaje de la operación',
    example: 'Operación exitosa',
    type: String,
  },
  STATUSCODE: {
    description: 'Status de petición HTTP',
    example: '200',
    type: Number,
  },
  SUCCESS: {
    description: 'Indica si la operación fue exitosa',
    example: true,
    type: Boolean,
  },
  SUCCESS_ERROR: {
    description: 'Indica si la operacion fue exitosa o no.',
    required: true,
    type: Boolean,
  },
  CODE_ERROR: {
    description: 'Código interno de la operación.',
    required: true,
    example: 2100,
    type: Number,
  },
  STATUSCODE_ERROR: {
    description: 'Status de petición HTTP.',
    required: true,
    example: 500,
    type: Number,
  },
  MESSAGE_ERROR: {
    description: 'Mensaje de la operación.',
    required: true,
    example: 'Error interno del sistema',
    type: String,
  },
};
