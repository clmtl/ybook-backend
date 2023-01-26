import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostCommentsService } from './post-comments.service';
import { CreatePostCommentDto } from './dto/create-post-comment.dto';


@ApiTags('comment')
@Controller()
export class PostCommentsController {

    constructor(private readonly postCommentsService: PostCommentsService) {}

    @Post('users/:userId/posts/:postId')
    create(@Param('userId') userId: string, @Param('postId') postId: string, @Body() CreatePostCommentDto: CreatePostCommentDto) {
      return this.postCommentsService.create(userId, postId, CreatePostCommentDto);
    }

    @Get('posts/:postId/comments/:limit?')
    findAll(@Param('postId') postId: string, @Param('limit') limit?: string) {
        return this.postCommentsService.findAll(postId, limit);
    }

}
