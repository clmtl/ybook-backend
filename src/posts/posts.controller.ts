import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@ApiTags('posts')
@Controller()
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('users/:id/posts')
  create(@Param('id') id: string, @Body() createPostDto: CreatePostDto) {
    return this.postsService.create(id, createPostDto);
  }

  @Get('posts')
  findAll() {
    return this.postsService.findAll();
  }

  @Get('posts/:id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Delete('posts/:id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
