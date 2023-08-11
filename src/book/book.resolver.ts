import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BookService } from './book.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { AuthorService } from 'src/author/author.service';

@Resolver('Book')
export class BookResolver {
  constructor(
    private readonly bookService: BookService,
    private readonly authorService: AuthorService,
  ) {}

  @Mutation('createBook')
  create(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.bookService.create(createBookInput);
  }

  @Query('books')
  findAll() {
    return this.bookService.findAll();
  }

  @Query('book')
  findOne(@Args('id') id: string) {
    return this.bookService.findOne(id);
  }

  @ResolveField('author')
  async books(@Parent() book) {
    const { authorId } = book;
    return this.authorService.findOne(authorId);
  }

  @Mutation('updateBook')
  update(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation('removeBook')
  remove(@Args('id') id: number) {
    return this.bookService.remove(id);
  }
}
