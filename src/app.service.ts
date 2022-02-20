import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  constructor(private httpService: HttpService) { }

  getUser(params) {
    const clientId = "Iv1.5c5906816666c600";
    const clientSecret = "1d29344733dad46077234442f8177523d739113c";

    return this.httpService
      .get(`http://api.github.com/repos/${params.username}/apigithub/commits?client_id=${clientId}&client_secret=${clientSecret}`)
      .pipe(
        map((response) => response.data),
        map((data) => ({
          datos: data
        }))
      );
  }
}
