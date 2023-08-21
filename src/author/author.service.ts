import { Injectable } from '@nestjs/common';
import { Author } from './schema/author.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class AuthorService {
  pubSub: PubSub = new PubSub();
  constructor(@InjectModel(Author.name) private AuthorModel: Model<Author>) {}

  async create(author: Author) {
    return await new this.AuthorModel(author).save();
  }

  async findAll() {
    return await this.AuthorModel.find();
  }

  async findOne(id: string) {
    return await this.AuthorModel.findById(id);
  }

  async update(id: string, newAuthor: Author) {
    await this.AuthorModel.findByIdAndUpdate(id, newAuthor);
    return await this.AuthorModel.findById(id);
  }

  async remove(id: string) {
    return await this.AuthorModel.findByIdAndDelete(id);
  }
}
