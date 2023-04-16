import { ApiResponseOptions } from '@nestjs/swagger';

export enum API_RES_KEYS {}

export const API_RES: Partial<Record<API_RES_KEYS, ApiResponseOptions>> = {};
