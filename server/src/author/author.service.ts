import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  findAll(): import("./author.model").Author[] | PromiseLike<import("./author.model").Author[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: string): any {
    throw new Error("Method not implemented.");
  }
}
