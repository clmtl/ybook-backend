import { Controller, Post, Param, Get, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostLikesService } from './post-likes.service';

@ApiTags('post-likes')
@Controller()
export class PostLikesController {
  constructor(private readonly postLikesService: PostLikesService) {}

  @Post('users/:userId/posts/:postId/likes')
  create(@Param('userId') userId: string, @Param('postId') postId: string) {
    return this.postLikesService.create(userId, postId);
  }

  @Delete('users/:userId/posts/:postId/likes')
  remove(@Param('userId') userId: string, @Param('postId') postId: string) {
    return this.postLikesService.remove(userId, postId);
  }

  @Get('posts/:postId/likes')
  findAll(@Param('postId') postId: string) {
    return this.postLikesService.findAll(postId);
  }
}
