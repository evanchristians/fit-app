import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Author } from '../author/author.model';

@ObjectType()
@Entity()
export class Post {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column('text')
  title: string;

  @Field()
  @Column('text')
  content: string;

  @Field(type => Author)
  @ManyToOne(
    type => Author,
    author => author.posts,
  )
  author: Author;

  @Field()
  @Column()
  points: number;

  @Field()
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
