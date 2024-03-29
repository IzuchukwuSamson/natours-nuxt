import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  UseGuards,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
  Request,
  Response,
} from '@nestjs/common';
import { ApiBody, ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageUploadService } from './uploads.service';
//   import { JwtAuthGuard } from '../auth/guards/jwt-guard.guard';
import slugify from 'slugify';
import * as fs from 'fs';

@ApiTags('upload Image')
@Controller('upload')
export class UploadsController {
  constructor(private readonly imageUploadService: ImageUploadService) {}

  //   @UseGuards(JwtAuthGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('image'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Request() req,
  ): Promise<string | Error> {
    // const { id } = req.user;
    // if (!id) throw new BadRequestException('Invalid UserID');
    const folder = `uploads/${slugify}/picture`;
    try {
      const imagePath = await this.imageUploadService.uploadImage(file, folder);
      return imagePath;
    } catch (error) {
      return new BadRequestException(error.message);
    }
  }
  @Get('media/picture')
  async getImage(@Request() req, @Response() res): Promise<any> {
    const { imagePath } = req.body;
    await this.imageUploadService.getImage(
      // to be able to view on browser too, an option for client-side
      imagePath || req.query.imagePath,
      res,
    );
  }

  @Delete('media/picture')
  async deleteImage(@Request() req, @Response() res): Promise<any> {
    const { imagePath } = req.body;
    await this.imageUploadService
      .deleteImage(imagePath)
      .then(() => {
        return { message: 'Image deleted successfully' };
      })
      .catch((error) => {
        if (error instanceof NotFoundException) {
          throw new NotFoundException('Image not found');
        }
        console.log({ errorDeletingImage: error });
        throw error;
      });
  }
}
