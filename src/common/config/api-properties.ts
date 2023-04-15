import { ApiPropertyOptions } from '@nestjs/swagger';

export const API_PROP: { [key: string]: ApiPropertyOptions } = {
  POPULATE: {
    description:
      'Campos a popular. Separados pos comas. Ej: "admin,categories"',
    required: false,
  },
  PAGE: {
    description: 'Pagina a mostrar. Ej: "1"',
    default: 0,
    required: false,
  },
  PER_PAGE: {
    description: 'Cantidad de elementos por pagina. Ej: "10"',
    default: 10,
    required: false,
  },
};
