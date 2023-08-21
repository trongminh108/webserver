import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './schema/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookInput: CreateBookInput) {
    return await new this.bookModel(createBookInput).save();
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

  async remove(id: string) {
    return await this.bookModel.findByIdAndDelete(id);
  }
}
