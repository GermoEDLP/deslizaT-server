import { ApiOperationOptions } from '@nestjs/swagger';

export enum API_OP_KEYS {
  CREATE = 'CREATE',
  FIND_ALL = 'FIND_ALL',
  FIND_ONE = 'FIND_ONE',
  UPDATE = 'UPDATE',
  DELETE = 'DELETE',
}

export const API_OP: Partial<Record<API_OP_KEYS, ApiOperationOptions>> = {
  CREATE: {
    summary: 'Crear una categoría',
    description: 'Crear una categoría.',
  },
  FIND_ALL: {
    summary: 'Buscar todas las categorías',
    description: 'Buscar todas las categorías.',
  },
  FIND_ONE: {
    summary: 'Buscar una categoría por ID',
    description: 'Buscar una categoría. por ID',
  },
  UPDATE: {
    summary: 'Actualizar una categoría',
    description: 'Actualizar una categoría.',
  },
  DELETE: {
    summary: 'Borrar una categoría',
    description: 'Borrar una categoría.',
  },
};
