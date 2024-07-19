import { Controller, Get, Param } from '@nestjs/common';
import { CursosService } from './cursos.service';

@Controller('cursos')
export class CursosController {
  constructor (private cursosServices: CursosService){}

  @Get()
  async getCursos() {
    const cursos = await this.cursosServices.getCursos()
    return cursos
  }

  @Get(":cursoId")
  async getCurso(@Param('cursosId') cursosId) {
    const curso = await this.cursosServices.getCurso(cursosId)
    return curso
  }
}


