import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PostCommentsModule } from './post-comments/post-comments.module';
import { PostLikesModule } from './post-likes/post-likes.module';

@Module({
  imports: [UsersModule, PostsModule, PostCommentsModule, PostLikesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
