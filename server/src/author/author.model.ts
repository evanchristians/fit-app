import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from '../post/post.model';
@ObjectType()
@Entity()
export class Author {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 500, nullable: false })
  username: string;

  @Field()
  @Column('text', { nullable: false })
  email: string;

  @Field(type => [Post], { nullable: true })
  @OneToMany(
    type => Post,
    post => post.author,
  )
  posts: Post[];

  @Field()
  @Column()
  @CreateDateColumn()
  created_at: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updated_at: Date;
}
