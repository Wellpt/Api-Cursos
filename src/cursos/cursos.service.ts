import { Injectable } from '@nestjs/common';
import { COURSES } from './courses.mock';

@Injectable()
export class CursosService {
  cursos = COURSES

  getCursos(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.cursos)
    })
  }

}
