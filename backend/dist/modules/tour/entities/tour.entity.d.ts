import { User } from 'src/modules/user/entities/user.entity';
export declare class Tour {
    id: number;
    slug: string;
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
    guide: User[];
    createdAt: Date;
    updatedAt: Date;
    generateSlug(): void;
    logInsert(): void;
    logUpdate(): void;
    logRemove(): void;
}
