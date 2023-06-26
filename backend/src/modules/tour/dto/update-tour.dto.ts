import { PartialType } from '@nestjs/mapped-types';
import { CreateTourDto } from './create-tour.dto';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTourDto extends PartialType(CreateTourDto) {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsNumber()
  duration: number;

  @IsOptional()
  @IsString()
  difficulty: string;

  @IsOptional()
  @IsNumber()
  ratingsAverage: number;

  @IsOptional()
  @IsNumber()
  ratingsQuantity: number;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  priceDiscount: number;

  @IsOptional()
  @IsString()
  summary: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  imageCover: string;

  @IsOptional()
  @IsDate()
  startDates: Date;

  @IsOptional()
  @IsString()
  startLocation: string;

  @IsOptional()
  @IsString()
  locations: string;
}
