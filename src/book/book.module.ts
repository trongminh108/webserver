import { Module, forwardRef } from '@nestjs/common';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schema/book.schema';
import { AuthorModule } from 'src/author/author.module';

@Module({
  imports: [
    forwardRef(() => AuthorModule),
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  providers: [BookResolver, BookService],
  exports: [BookService],
})
export class BookModule {}
