import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
export declare class TourController {
    private readonly tourService;
    constructor(tourService: TourService);
    create(createTourDto: CreateTourDto): import("./entities/tour.entity").Tour;
    findAll(): Promise<import("./entities/tour.entity").Tour[]>;
    findOne(id: string): Promise<import("./entities/tour.entity").Tour>;
    update(id: string, updateTourDto: UpdateTourDto): Promise<import("./entities/tour.entity").Tour>;
    remove(id: string): Promise<import("./entities/tour.entity").Tour>;
}
