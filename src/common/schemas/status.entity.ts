import { Schema } from '@nestjs/mongoose';

export enum STATUS_VALUE {
  CREATED = 'created',
  SENDED = 'sended',
  ANSWERED = 'answered',
  DELETED = 'deleted',
  ERROR = 'error',
}

export const STATUS_CODE: Record<STATUS_VALUE, number> = {
  [STATUS_VALUE.CREATED]: 0,
  [STATUS_VALUE.SENDED]: 1,
  [STATUS_VALUE.ANSWERED]: 2,
  [STATUS_VALUE.DELETED]: 3,
  [STATUS_VALUE.ERROR]: 4,
};

export class Status {
  value: STATUS_VALUE;

  code: number;

  setedAt: Date;

  error: string;

  info: string;

  constructor(value?: STATUS_VALUE, error?: string, info?: string) {
    this.value = value || STATUS_VALUE.CREATED;
    this.code = STATUS_CODE[this.value];
    if (error) this.error = error;
    if (info) this.info = info;
    this.setedAt = new Date();
  }
}
