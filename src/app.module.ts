import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatModule } from './cat/cat.module';
import { PostsModule } from './posts/posts.module';
import { StoreModule } from 'store/store.module';

@Module({
  imports: [UsersModule, CatModule, PostsModule, StoreModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
