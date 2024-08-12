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
  entities: [UserEntity],
  synchronize: false, //false in production
  //   dropSchema: true,
};
export default config;
