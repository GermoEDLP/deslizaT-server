export enum STATUS_VALUE {
  NEW = 'NEW',
  IN_PROGRESS = 'IN_PROGRESS',
  WAITING = 'WAITING',
  SUSPEND = 'SUSPEND',
  DONE = 'DONE',
  CLOSE = 'CLOSE',
  DELETED = 'DELETED',
}

export const STATUS_LABEL: Record<STATUS_VALUE, string> = {
  [STATUS_VALUE.NEW]: 'Nuevo',
  [STATUS_VALUE.IN_PROGRESS]: 'En progreso',
  [STATUS_VALUE.WAITING]: 'En espera',
  [STATUS_VALUE.SUSPEND]: 'Suspendido',
  [STATUS_VALUE.DONE]: 'Terminado',
  [STATUS_VALUE.CLOSE]: 'Cerrado',
  [STATUS_VALUE.DELETED]: 'Eliminado',
};

export class Status {
  value: STATUS_VALUE;
  label: string;
  setedAt: Date;
  error: string;
  info: string;

  constructor({
    value,
    error,
    info,
  }: {
    value?: STATUS_VALUE;
    error?: string;
    info?: string;
  }) {
    this.value = value || STATUS_VALUE.NEW;
    this.label = STATUS_LABEL[this.value];
    if (error) this.error = error;
    if (info) this.info = info;
    this.setedAt = new Date();
  }
}
