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
  Request,
} from '@nestjs/common';

import {
  ApiTags,
  ApiResponse,
  ApiBody,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';

import { TourService } from './tour.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';
import { Tour } from './entities/tour.entity';
import { AuthGuard } from '../auth/guards/auth.guard';
import { Serialize } from '../serialize.interceptor';
import { TourDto } from './dto/tour.dto';
import { Role } from 'src/common/enum/role.enum';
import { Roles } from 'src/common/decorators/role.decorator';

@ApiTags('tour')
@Controller('tour')
@Serialize(TourDto)
// @UseGuards(AuthGuard)
export class TourController {
  constructor(private readonly tourService: TourService) {}

  /**
   *  CREATE A TOUR
   */
  @Post('create')
  // @UseGuards(AuthGuard)
  // @Roles(Role.ADMIN)
  @ApiResponse({
    status: 201,
    description: 'Tour created successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiBody({ type: [CreateTourDto] })
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createTourDto: CreateTourDto) {
    return this.tourService.create(createTourDto);
  }

  /**
   *  GET ALL TOURS
   */
  @ApiResponse({
    status: 200,
    description: 'Get all tours.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @Get()
  // @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Tour[]> {
    return this.tourService.findAll();
  }

  /**
   *  GET A TOUR BY ID
   */
  @Get(':id')
  // @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.tourService.findOne(+id);
  }

  /**
   * GET USER TOURS
   */
  // @UseGuards(AuthGuard)
  @ApiResponse({
    status: 200,
    description: 'Get Tours related to a user.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiParam({ name: 'mytours' })
  @Get('mytours')
  async getUserTours(@Request() req: any): Promise<Tour[]> {
    const { id } = req.user;
    return await this.tourService.findUserTours(id);
  }

  /**
   * UPDATE A TOUR
   */
  // @UseGuards(AuthGuard)
  // @Roles(Role.ADMIN)
  @ApiResponse({
    status: 200,
    description: 'Tour updated successfully.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiParam({ name: 'id' })
  @ApiBody({ type: [UpdateTourDto] })
  @Patch(':id')
  @HttpCode(HttpStatus.CREATED)
  update(@Param('id') id: string, @Body() updateTourDto: UpdateTourDto) {
    return this.tourService.update(+id, updateTourDto);
  }

  /**
   * DELETE A TOUR
   */
  @ApiResponse({
    status: 200,
    description: 'Tour deleted successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  @ApiParam({ name: 'id' })
  @Delete(':id')
  // @UseGuards(AuthGuard)
  // @Roles(Role.ADMIN)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.tourService.remove(+id);
  }
}
