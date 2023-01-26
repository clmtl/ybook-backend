import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  create(userId: string, createPostDto: CreatePostDto) {
    const prisma = new PrismaClient();
    return prisma.post.create({
      data: {
        htmlContent: createPostDto.htmlContent,
        userId: parseInt(userId),
      },
    });
  }

  findAll() {
    const prisma = new PrismaClient();
    return prisma.post.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
      include: {
        postLikes: true,
        postComments: true,
        postAttachments: true,
        user: true,
      },
    });
  }

  findOne(postId: string) {
    const prisma = new PrismaClient();
    return prisma.post.findUnique({
      where: { id: parseInt(postId) },
      include: {
        postLikes: true,
        postComments: true,
        postAttachments: true,
        user: true,
      },
    });
  }

  remove(postId: string) {
    const prisma = new PrismaClient();
    return prisma.post.delete({
      where: { id: parseInt(postId) },
    });
  }
}
