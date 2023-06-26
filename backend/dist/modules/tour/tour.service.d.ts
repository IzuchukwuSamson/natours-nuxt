import { CreateTourDto } from './dto/create-tour.dto';
import { Repository } from 'typeorm';
import { Tour } from './entities/tour.entity';
export declare class TourService {
    private repo;
    constructor(repo: Repository<Tour>);
    create(createTourDto: CreateTourDto): Tour;
    findAll(): Promise<Tour[]>;
    findOne(id: number): Promise<Tour>;
    findUserTours(id: string): Promise<Tour[] | null>;
    update(id: number, attrs: Partial<Tour>): Promise<Tour>;
    remove(id: number): Promise<Tour>;
}
