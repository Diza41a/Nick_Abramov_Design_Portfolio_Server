import { Injectable, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

const { IMGBB_API_KEY } = process.env;
const API_URL = `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`;

@Injectable()
export class UploadService {
  constructor() {}

  async uploadImage(imageHashString: string): Promise<string> {
    const imageHash = imageHashString.replace(
      /^data:image\/(png|jpg);base64,/,
      '',
    );
    return axios
      .post(
        API_URL,
        { image: imageHash },
        { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } },
      )
      .then((res) => {
        const url: string = res.data.data.url;
        return url;
      })
      .catch((err) => {
        throw new InternalServerErrorException(err.response.data.error.message);
      });
  }
}
