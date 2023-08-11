
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateAuthorInput {
    exampleField?: Nullable<number>;
}

export class UpdateAuthorInput {
    id: number;
}

export class CreateBookInput {
    exampleField?: Nullable<number>;
}

export class UpdateBookInput {
    id: number;
}

export class Author {
    __typename?: 'Author';
    id?: Nullable<string>;
    name?: Nullable<string>;
    age?: Nullable<number>;
    books?: Nullable<Nullable<Book>[]>;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract authors(): Nullable<Author>[] | Promise<Nullable<Author>[]>;

    abstract author(id: string): Nullable<Author> | Promise<Nullable<Author>>;

    abstract books(): Nullable<Book>[] | Promise<Nullable<Book>[]>;

    abstract book(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract createAuthor(createAuthorInput: CreateAuthorInput): Author | Promise<Author>;

    abstract updateAuthor(updateAuthorInput: UpdateAuthorInput): Author | Promise<Author>;

    abstract removeAuthor(id: number): Nullable<Author> | Promise<Nullable<Author>>;

    abstract createBook(createBookInput: CreateBookInput): Book | Promise<Book>;

    abstract updateBook(updateBookInput: UpdateBookInput): Book | Promise<Book>;

    abstract removeBook(id: string): Nullable<Book> | Promise<Nullable<Book>>;
}

export class Book {
    __typename?: 'Book';
    id?: Nullable<string>;
    name?: Nullable<string>;
    genre?: Nullable<string>;
    authorId?: Nullable<string>;
    author?: Nullable<Author>;
}

type Nullable<T> = T | null;
