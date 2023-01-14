import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  create(createPostDto: CreatePostDto) {
    const prisma = new PrismaClient();
    return prisma.post.create({
      data: {
        htmlContent: createPostDto.htmlContent,
        userId: createPostDto.userId,
      },
    });
  }

  findAll() {
    const prisma = new PrismaClient();
    return prisma.post.findMany({
      include: {
        postLikes: true,
        postComments: true,
        postAttachments: true,
        user: true,
      },
    });
  }

  findOne(postId: number) {
    const prisma = new PrismaClient();
    return prisma.post.findUnique({
      where: { id: postId },
      include: {
        postLikes: true,
        postComments: true,
        postAttachments: true,
        user: true,
      },
    });
  }

  remove(postId: number) {
    const prisma = new PrismaClient();
    return prisma.post.delete({
      where: { id: postId },
    });
  }
}
