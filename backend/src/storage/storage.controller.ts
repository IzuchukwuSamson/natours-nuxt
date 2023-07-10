import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  Res,
  ServiceUnavailableException,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { StorageService } from '../storage/storage.service';
import { StorageFile } from 'src/storage/utils/storage-file';

//   @Controller('storage')
@Controller('media')
export class StorageController {
  constructor(private storageService: StorageService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        files: 1,
        fileSize: 1024 * 1024,
      },
    }),
  )
  async uploadFile(
    @UploadedFile() @Body() mediaId: string,
    file: Express.Multer.File,
  ) {
    await this.storageService.save(
      `media ${mediaId}`,
      file.mimetype,
      file.buffer,
      [{ mediaId }],
    );
    console.log(file);
  }

  @Get('/:mediaId')
  async downloadMedia(@Param('mediaId') mediaId: string, @Res() res: Response) {
    let storageFile: StorageFile;
    try {
      storageFile = await this.storageService.get('media/' + mediaId);
    } catch (e) {
      if (e.message.toString().includes('No such object')) {
        throw new NotFoundException('image not found');
      } else {
        throw new ServiceUnavailableException('internal error');
      }
    }
    res.setHeader('Content-Type', storageFile.contentType);
    res.setHeader('Cache-Control', 'max-age=60d');
    res.end(storageFile.buffer);
  }
}
