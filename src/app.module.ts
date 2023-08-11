import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { AuthorModule } from './author/author.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

const URI =
  'mongodb+srv://trongminh108:luuminhtrong8811@demographql.1bbal4w.mongodb.net/?retryWrites=true&w=majority';
@Module({
  imports: [
    MongooseModule.forRoot(URI),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./src/**/*.graphql'],
    }),
    AuthorModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
