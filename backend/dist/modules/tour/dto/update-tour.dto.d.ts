import { CreateTourDto } from './create-tour.dto';
declare const UpdateTourDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTourDto>>;
export declare class UpdateTourDto extends UpdateTourDto_base {
    name: string;
    duration: number;
    difficulty: string;
    ratingsAverage: number;
    ratingsQuantity: number;
    price: number;
    priceDiscount: number;
    summary: string;
    description: string;
    imageCover: string;
    startDates: Date;
    startLocation: string;
    locations: string;
}
export {};
