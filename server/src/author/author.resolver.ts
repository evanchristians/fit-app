import { Inject } from '@nestjs/common';
import {
  Args,


  Parent, Query,
  ResolveField, Resolver
} from '@nestjs/graphql';
import { Post } from './../post/post.model';
import { PostService } from './../post/post.service';
import { Author } from './author.model';
import { AuthorService } from './author.service';
@Resolver(of => Author)
export class AuthorResolver {
  constructor(
    @Inject(Author) private authorService: AuthorService,
    @Inject(PostService) private postService: PostService,
  ) {}
  @Query(returns => Author)
  async customer(@Args('id') id: string): Promise<Author> {
    return await this.authorService.findOne(id);
  }
  @ResolveField(returns => [Post])
  async invoices(@Parent() customer) {
    const { id } = customer;
    console.log(customer);
    return this.postService.findByCustomer(id);
  }
  @Query(returns => [Author])
  async customers(): Promise<Author[]> {
    return await this.authorService.findAll();
  }
}
