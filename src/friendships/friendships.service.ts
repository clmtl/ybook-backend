import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class FriendshipsService {
  create(fromId: string, toId: string) {
    const prisma = new PrismaClient();
    return prisma.friendship.create({
      data: {
        fromId: parseInt(fromId),
        toId: parseInt(toId),
      },
    });
  }

  findAll(toId: string) {
    const prisma = new PrismaClient();
    return prisma.friendship.findMany({
      where: { toId: parseInt(toId) },
      include: {
        to: true,
        from: true,
      },
    });
  }
}
