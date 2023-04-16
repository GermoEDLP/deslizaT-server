import { ApiOperationOptions } from '@nestjs/swagger';

export enum API_OP_KEYS {}

export const API_OP: Partial<Record<API_OP_KEYS, ApiOperationOptions>> = {};
