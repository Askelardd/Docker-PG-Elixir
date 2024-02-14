import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class StudentsService 
{
  private prisma = new PrismaClient();

    async findAll(): Promise<any[]> {
      return this.prisma.students.findMany();
  }

  async create(student: any): Promise<any> {

    console.log("Student Service");
    console.log(student);

    if (!student.id) {
        //Procurar o ultimo id
        const Student = await this.findAll();
        console.log(Student);
        console.log(student.id);

        const lastId = Student[Student.length - 1].id;
        if(lastId == undefined) {
          student.id = 1;
        } else {
          student.id = lastId + 1;
        }
    }
    console.log("student Service");
    console.log(student);
    return this.prisma.students.create({
        data: student
    });
  }

  async delete(id: number): Promise<any> {
    return this.prisma.students.delete({
        where: { id: id }
    });
  }

  async update(id: number , student: any): Promise<any> {
    console.log("hello");
    console.log(student);
    console.log(id);
    console.log(student.category);

    return this.prisma.students.update({
        where: { id: id },
        data: {
            category: student.category,
            reportingdistrictname: student.reportingdistrictname,
        }
    });
}

}

