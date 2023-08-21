import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Subscription,
} from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { BookService } from 'src/book/book.service';
import { PubSub } from 'graphql-subscriptions';
import { Author } from './schema/author.schema';

@Resolver('Author')
export class AuthorResolver {
  pubSub: PubSub = new PubSub();
  PUSH_INFO_AUTHOR = 'postInfoAuthor';
  constructor(
    private readonly authorService: AuthorService,
    private bookService: BookService,
  ) {}

  @Query('authors')
  async findAll() {
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

  @Mutation('createAuthor')
  async create(@Args('createAuthorInput') author: Author) {
    await this.pubSub.publish(this.PUSH_INFO_AUTHOR, {
      pushInfoAuthors: 'A new Author created',
    });
    return await this.authorService.create(author);
  }

  @Mutation('updateAuthor')
  update(@Args('id') id: string, @Args('updateAuthorInput') newAuthor: Author) {
    return this.authorService.update(id, newAuthor);
  }

  @Mutation('removeAuthor')
  remove(@Args('id') id: string) {
    return this.authorService.remove(id);
  }

  @Subscription()
  pushInfoAuthors() {
    return this.pubSub.asyncIterator(this.PUSH_INFO_AUTHOR);
  }
}
