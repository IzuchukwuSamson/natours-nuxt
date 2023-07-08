import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour } from './entities/tour.entity';
export declare class TourController {
    private readonly tourService;
    constructor(tourService: TourService);
    create(createTourDto: CreateTourDto): Promise<Tour>;
    findAll(): Promise<Tour[]>;
    findOne(id: string): Promise<Tour>;
    getUserTours(req: any): Promise<Tour[]>;
    update(id: string, updateTourDto: UpdateTourDto): Promise<Tour>;
    remove(id: string): Promise<Tour>;
}
