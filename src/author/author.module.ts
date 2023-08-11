import { Module, forwardRef } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorResolver } from './author.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from './schema/author.schema';
import { BookModule } from 'src/book/book.module';

@Module({
  imports: [
    forwardRef(() => BookModule),
    MongooseModule.forFeature([{ name: Author.name, schema: AuthorSchema }]),
  ],
  providers: [AuthorResolver, AuthorService],
  exports: [AuthorService],
})
export class AuthorModule {}
