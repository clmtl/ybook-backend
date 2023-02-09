import { Controller, Post, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { FriendshipsService } from './friendships.service';

@ApiTags('friendships')
@Controller()
export class FriendshipsController {
  constructor(private readonly friendshipsService: FriendshipsService) {}

  @Post('users/:fromId/friendships/:toId')
  create(@Param('fromId') fromId: string, @Param('toId') toId: string) {
    return this.friendshipsService.create(fromId, toId);
  }

  @Get('users/friendships/:toId')
  findAll(@Param('toId') toId: string) {
    return this.friendshipsService.findAll(toId);
  }
}
