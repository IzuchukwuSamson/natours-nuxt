import { Expose } from 'class-transformer';

export class TourDto {
  @Expose()
  name: string;

  @Expose()
  duration: number;

  @Expose()
  difficulty: string;

  @Expose()
  ratingsAverage: number;

  @Expose()
  ratingsQuantity: number;

  @Expose()
  price: number;

  @Expose()
  priceDiscount: number;

  @Expose()
  summary: string;

  @Expose()
  description: string;

  @Expose()
  imageCover: string;

  @Expose()
  startDates: Date;

  @Expose()
  startLocation: string;

  @Expose()
  locations: string;
}
