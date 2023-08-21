import { join } from 'path';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { FilesUploadModule } from './files-upload/files-upload.module';

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
      installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/files', // Prefix tương tự như trong đoạn mã của bạn
      serveStaticOptions: {
        index: false, // Tắt hiển thị tệp index.html
      },
    }),
    AuthorModule,
    BookModule,
    FilesUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
