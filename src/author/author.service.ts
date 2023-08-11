import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { Author } from './schema/author.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private AuthorModel: Model<Author>) {}
  create(createAuthorInput: CreateAuthorInput) {
    return 'This action adds a new author';
  }

  async findAll() {
    return await this.AuthorModel.find();
  }

  async findOne(id: string) {
    return await this.AuthorModel.findById(id);
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
