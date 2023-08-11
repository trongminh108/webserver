import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './schema/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  create(createBookInput: CreateBookInput) {
    return 'This action adds a new book';
  }

  async findAll(condition = null) {
    if (condition === null) return await this.bookModel.find();
    return await this.bookModel.find(condition);
  }

  async findOne(id: string) {
    return await this.bookModel.findById(id);
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
