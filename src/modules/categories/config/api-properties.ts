import { ApiPropertyOptions } from '@nestjs/swagger';
import { CATEGORY_TYPE } from '../entities';

export enum API_PROP_KEYS {
  NAME = 'NAME',
  DESC = 'DESC',
  TYPE = 'TYPE',
  ADMIN = 'ADMIN',
}

export const API_PROP: Partial<Record<API_PROP_KEYS, ApiPropertyOptions>> = {
  NAME: {
    description: 'Nombre de la categoría',
    example: 'Categoría 1',
  },
  DESC: {
    description: 'Descripción de la categoría',
    example: 'Descripción de la categoría 1',
  },
  TYPE: {
    description: 'Tipo de la categoría',
    enum: CATEGORY_TYPE,
  },
  ADMIN: {
    description: 'Administrador de la categoría',
    example: '5f9f1c9c1c9d440000a1b1b1',
  },
};
