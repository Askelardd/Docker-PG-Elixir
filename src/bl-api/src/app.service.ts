import { Injectable } from '@nestjs/common';
import {StudentsService} from "./students/students.service";


@Injectable()
export class AppService {
  //constructor(private StudentsService: StudentsService) {}
constructor(private StudentsService: StudentsService) {}


  getHello(): string {
    return 'Hello World!';
  }

  async getStudents(): Promise<any[]> {
    const Students = await this.StudentsService.findAll();
    return Students;
  }
  async insertStudent(Student: any): Promise<string> {

    await this.StudentsService.create(Student);
    return 'Student inserido';
  }

  async deleteStudent(id: number): Promise<string> {
      await this.StudentsService.delete(id);
      return 'Student apagado';
  }

  async updateStudent(id: number, Student: any): Promise<string> {
      await this.StudentsService.update(id, Student);
      return 'Student atualizado';
  }

}


