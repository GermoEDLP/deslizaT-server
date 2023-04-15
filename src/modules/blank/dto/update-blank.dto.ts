import { PartialType } from '@nestjs/swagger';
import { CreateBlankDto } from './create-blank.dto';

export class UpdateBlankDto extends PartialType(CreateBlankDto) {}
