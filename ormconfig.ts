import { CommentEntity } from 'src/entities/comment/entity';
import { TopicEntity } from 'src/entities/topic/entity';
import { UserEntity } from 'src/entities/user/entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

const config: MysqlConnectionOptions = {
  type: 'mysql',
  database: 'testDb',
  host: 'localhost',
  port: 3306,
  username: 'software', //use .env
  password: 'soft@123!@#', //use .env
  //   password: 'NO',
  entities: [UserEntity, TopicEntity, CommentEntity],
  synchronize: false, //false in production
  //   dropSchema: true,
};
export default config;
