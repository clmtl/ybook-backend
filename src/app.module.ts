import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PostLikesModule } from './post-likes/post-likes.module';

@Module({
  imports: [UsersModule, PostsModule, PostLikesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
