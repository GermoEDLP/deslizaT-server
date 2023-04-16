import { ApiPropertyOptions } from '@nestjs/swagger';
import { Address, Social } from '../entities';

export enum API_PROP_KEYS {
  NAME = 'NAME',
  LASTNAME = 'LASTNAME',
  ADDRESS = 'ADDRESS',
  PHONE = 'PHONE',
  EMAIL = 'EMAIL',
  SOCIAL = 'SOCIAL',
  SOCIAL_TWITTER = 'SOCIAL_TWITTER',
  SOCIAL_FACEBOOK = 'SOCIAL_FACEBOOK',
  SOCIAL_INSTAGRAM = 'SOCIAL_INSTAGRAM',
  ADDRESS_STREET = 'ADDRESS_STREET',
  ADDRESS_NUMBER = 'ADDRESS_NUMBER',
  ADDRESS_CITY = 'ADDRESS_CITY',
  ADDRESS_FLOOR = 'ADDRESS_FLOOR',
  ADDRESS_APPARTMENT = 'ADDRESS_APPARTMENT',
}

export const API_PROP: Partial<Record<API_PROP_KEYS, ApiPropertyOptions>> = {
  NAME: {
    description: 'Name of the user',
    example: 'John',
  },
  LASTNAME: {
    description: 'Lastname of the user',
    example: 'Doe',
  },
  ADDRESS: {
    description: 'Address of the user',
    type: Address,
  },
  PHONE: {
    description: 'Phone of the user',
    example: '123456789',
  },
  EMAIL: {
    description: 'Email of the user',
    example: 'test@test.com',
  },
  SOCIAL: {
    description: 'Social of the user',
    type: Social,
  },
  SOCIAL_TWITTER: {
    description: 'Twitter of the user',
    example: '@example',
    required: false,
  },
  SOCIAL_FACEBOOK: {
    description: 'Facebook of the user',
    example: 'example',
    required: false,
  },
  SOCIAL_INSTAGRAM: {
    description: 'Instagram of the user',
    example: '@example',
    required: false,
  },
  ADDRESS_STREET: {
    description: 'Street of the user',
    example: 'Calle 123',
  },
  ADDRESS_NUMBER: {
    description: 'Number of the user',
    example: '123',
  },
  ADDRESS_CITY: {
    description: 'City of the user',
    example: 'Buenos Aires',
  },
  ADDRESS_FLOOR: {
    description: 'Floor of the user',
    example: '1',
    required: false,
  },
  ADDRESS_APPARTMENT: {
    description: 'Appartment of the user',
    example: 'A',
    required: false,
  },
};
