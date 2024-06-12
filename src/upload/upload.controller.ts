import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/services/auth.guard';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseGuards(AuthGuard)
  @Post('')
  uploadImage(@Body() { imageHash }: { imageHash: string }): Promise<string> {
    return this.uploadService.uploadImage(imageHash);
  }
}
