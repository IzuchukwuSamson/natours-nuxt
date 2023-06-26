import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Tour } from './entities/tour.entity';

@Injectable()
export class TourService {
  constructor(@InjectRepository(Tour) private repo: Repository<Tour>) {}

  create(createTourDto: CreateTourDto) {
    const newTour = this.repo.create(createTourDto);
    // console.log(newTour);
    return newTour;
  }

  async findAll(): Promise<Tour[]> {
    const tours = await this.repo.find();

    return tours;
  }

  async findOne(id: number) {
    const tour = await this.repo.findOne({ where: { id } });

    return tour;
  }

  async update(id: number, attrs: Partial<Tour>) {
    const tour = await this.findOne(id);
    if (!tour) {
      throw new NotFoundException('Song not found');
    }

    Object.assign(tour, attrs);

    return this.repo.save(tour);
  }

  async remove(id: number) {
    const tour = await this.findOne(id);
    if (!tour) {
      throw new NotFoundException('Song not found');
    }

    return this.repo.remove(tour);
  }
}
