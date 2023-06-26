import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour } from './entities/tour.entity';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('tour')
// @UseGuards(AuthGuard)
export class TourController {
  constructor(private readonly tourService: TourService) {}

  @Post('create')
  // @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTourDto: CreateTourDto) {
    return this.tourService.create(createTourDto);
  }

  @Get()
  // @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Tour[]> {
    return this.tourService.findAll();
  }

  @Get(':id')
  // @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.tourService.findOne(+id);
  }

  @Patch(':id')
  // @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  update(@Param('id') id: string, @Body() updateTourDto: UpdateTourDto) {
    return this.tourService.update(+id, updateTourDto);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.tourService.remove(+id);
  }
}
