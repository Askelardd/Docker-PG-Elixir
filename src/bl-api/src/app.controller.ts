import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  @Get('students')
  getstudents(): Promise<any[]> {
      return this.appService.getStudents();
  }

  @Post('students')
  insertStudent(@Body() Student: any): Promise<string> {
      console.log("Student Controller");
      console.log(Student);
      return this.appService.insertStudent(Student);
  }

  @Delete('students/:id')
  async deleteStudent(id: number): Promise<string> {
    return await this.appService.deleteStudent(id);
  }

  @Put('students/:id')
  async updateStudent(@Param()id: number, @Body()Student: any): Promise<string> {
    return await this.appService.updateStudent(id, Student);
  }
  
}


