import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { UpdateDto, CreateDto } from './dto';

@Controller('rest/todo')
export class TodoController {
  @Get()
  getAllAction(): string {
    return 'Todo Get All';
  }

  @Get(':id')
  getOneAction(@Param('id') id: number): string {
    return 'Todo Get One by id = ' + id;
  }

  @Post()
  saveAction(@Body() todo: CreateDto): CreateDto {
    console.log(todo);
    return todo;
  }

  @Put(':id')
  upadateAction(@Param('id') id: string, @Body() todo: UpdateDto): UpdateDto {
    console.log('Search by ID ', id);
    console.log(todo, 'saved');
    return todo;
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string {
    return 'Delete Todo by id = ' + id;
  }
}
