import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { BookService } from 'src/book/book.service';

@Resolver('Author')
export class AuthorResolver {
  constructor(
    private readonly authorService: AuthorService,
    private bookService: BookService,
  ) {}

  @Mutation('createAuthor')
  create(@Args('createAuthorInput') createAuthorInput: CreateAuthorInput) {
    return this.authorService.create(createAuthorInput);
  }

  @Query('authors')
  findAll() {
    return this.authorService.findAll();
  }

  @Query('author')
  findOne(@Args('id') id: string) {
    return this.authorService.findOne(id);
  }

  @ResolveField('books')
  async books(@Parent() author) {
    const { id } = author;
    return this.bookService.findAll({ authorId: id });
  }

  @Mutation('updateAuthor')
  update(@Args('updateAuthorInput') updateAuthorInput: UpdateAuthorInput) {
    return this.authorService.update(updateAuthorInput.id, updateAuthorInput);
  }

  @Mutation('removeAuthor')
  remove(@Args('id') id: number) {
    return this.authorService.remove(id);
  }
}
