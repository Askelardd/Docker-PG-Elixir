import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { StudentsService } from './students/students.service';


@Module({
  imports: [TeachersModule],
  controllers: [AppController],
  providers: [AppService, StudentsService],
})
export class AppModule{ 

  configure(consumer) {
    consumer.apply((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
    }).forRoutes('*');
  }
}

