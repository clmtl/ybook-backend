import { Controller, Post, Param, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { identity } from 'rxjs';
import { PostLikesService } from './post-likes.service';

@ApiTags('post-likes')
@Controller()
export class PostLikesController {
  constructor(private readonly postLikesService: PostLikesService) {}

  @Post('users/:userId/posts/:postId')
  create(@Param('userId') userId: string, @Param('postId') postId: string) {
    return this.postLikesService.create(userId, postId);
  }

  @Get('post-likes')
  findAll(@Param('postId') postId: string) {
    return this.postLikesService.findAll(postId);
  }
}
