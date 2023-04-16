export enum STATUS_VALUE {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  SUSPEND = 'SUSPEND',
  DONE = 'DONE',
}

export const STATUS_CODE: Record<STATUS_VALUE, number> = {
  [STATUS_VALUE.NEW]: 0,
  [STATUS_VALUE.IN_PROGRESS]: 1,
  [STATUS_VALUE.SUSPEND]: 2,
  [STATUS_VALUE.DONE]: 3,
};

export class Status {
  value: STATUS_VALUE;

  code: number;

  setedAt: Date;

  error: string;

  info: string;

  constructor(value?: STATUS_VALUE, error?: string, info?: string) {
    this.value = value || STATUS_VALUE.NEW;
    this.code = STATUS_CODE[this.value];
    if (error) this.error = error;
    if (info) this.info = info;
    this.setedAt = new Date();
  }
}
