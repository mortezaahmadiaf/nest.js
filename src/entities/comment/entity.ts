import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hash } from 'bcrypt';
import { UserEntity } from '../user/entity';
import { TopicEntity } from '../topic/entity';
@Entity('comments')
export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  text: string;

  @ManyToOne((type) => UserEntity, (user) => user.comments)
  user: UserEntity;

  @ManyToOne((type) => TopicEntity, (topic) => topic.comments)
  topic: TopicEntity;
}
