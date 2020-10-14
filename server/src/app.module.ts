import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { AuthorResolver } from './author/author.resolver';
import { PostService } from './post/post.service';
import { AuthorService } from './author/author.service';
import { Author } from './author/author.model';
import { Post } from './post/post.model';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'fitapp',
      entities: ['dist/**/*.model.js'],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AuthorResolver,
    AuthorService,
    Author,
    PostService,
    Post,
  ],
})
export class AppModule {}
