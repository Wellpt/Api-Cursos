/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { CURSOS } from './courses.mock';

@Injectable()
export class CursosService {
  cursos = CURSOS

  getCursos(): Promise<any> {
    return new Promise(resolve => {
      resolve(this.cursos)
    })
  }

  getCurso(cursoId): Promise<any> {
    let id = Number(cursoId);
    return new Promise(resolve => {
        const curso = this.cursos.find(curso => curso.id === id)
        if (!curso) {
            throw new HttpException('O curso com esse id não existe!', 404);
        }
        resolve(curso);
    })
  }
}