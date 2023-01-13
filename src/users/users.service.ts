import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    const prisma = new PrismaClient();
    return prisma.user.create({
      data: {
        email: createUserDto.email,
        firstname: createUserDto.firstname,
        lastname: createUserDto.lastname,
      },
    });
  }

  findAll() {
    const prisma = new PrismaClient();
    return prisma.user.findMany();
  }

  // findOne(id: number) {
  //   //add token<=>id match
  //   const prisma = new PrismaClient();
  //   return prisma.user.findUnique({
  //     where: { id },
  //     include: {
  //       posts: true,
  //       postLikes: true,
  //       postComment: true,
  //       fromFriendship: true,
  //       toFrienship: true,
  //       blockedUsers: true,
  //       blockedByUsers: true,
  //       conversationsSent: true,
  //       conversationsReceived: true,
  //       conversationMessages: true,
  //     },
  //   });
  // }

  async update(id: number, updateUserDto: UpdateUserDto) {
    //add token<=>id match
    const prisma = new PrismaClient();
    try {
      return await prisma.user.update({
        where: { id },
        data: {
          email: updateUserDto.email,
          firstname: updateUserDto.firstname,
          lastname: updateUserDto.lastname,
          avatarS3Key: updateUserDto.avatarS3Key,
          coverPicS3Key: updateUserDto.coverPicS3Key,
        },
      });
    } catch (error) {
      return error;
    }
  }

  remove(id: number) {
    //add token<=>id match
    const prisma = new PrismaClient();
    return prisma.user.delete({
      where: { id },
    });
  }
}
