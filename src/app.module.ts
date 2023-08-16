import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatModule } from './cat/cat.module';
import { PostsModule } from './posts/posts.module';
import { StoreModule } from 'store/store.module';
import {TypeOrmModule} from '@nestjs/typeorm';
@Module({
  imports: [UsersModule, CatModule, PostsModule, StoreModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      entities: [],
      synchronize: true,
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
