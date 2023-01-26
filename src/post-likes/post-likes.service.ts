import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PostLikesService {
  create(userId: string, postId: string) {
    const prisma = new PrismaClient();
    return prisma.postLike.create({
      data: {
        userId: parseInt(userId),
        postId: parseInt(postId),
      },
    });
  }

  findAll() {
    const prisma = new PrismaClient();
    return prisma.postLike.findMany();
  }
}
