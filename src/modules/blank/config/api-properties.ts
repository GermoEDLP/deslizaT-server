import { ApiPropertyOptions } from '@nestjs/swagger';
import { CATEGORY_TYPE } from '../entities';

export enum API_PROP_KEYS {}

export const API_PROP: Partial<Record<API_PROP_KEYS, ApiPropertyOptions>> = {};
