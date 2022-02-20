import { Injectable } from '@nestjs/common';


@Injectable()
export class AppService {
  getUser(params) {
    return 'Hello World!';
  }
}
