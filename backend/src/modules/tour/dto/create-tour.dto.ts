import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateTourDto {
  @IsString()
  name: string;

  @IsNumber()
  duration: number;

  @IsString()
  difficulty: string;

  // @IsNumber()
  // ratingsAverage: number;

  // @IsNumber()
  // ratingsQuantity: number;

  @IsNumber()
  price: number;

  // @IsNumber()
  // priceDiscount: number;

  @IsString()
  summary: string;

  @IsString()
  description: string;

  @IsString()
  imageCover: string;

  // @IsDate()
  // startDates: Date;

  // @IsString()
  // startLocation: string;

  // @IsString()
  // locations: string;
}
