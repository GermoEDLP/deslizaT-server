import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  brand: string;

  @IsString()
  @IsOptional()
  model: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsOptional()
  quantity: number;
}
