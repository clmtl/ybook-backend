import { Injectable } from '@nestjs/common';
import { CreatePostCommentDto } from './dto/create-post-comment.dto';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PostCommentsService {
    create(userId: string, postId: string, CreatePostCommentDto: CreatePostCommentDto) {
        const prisma = new PrismaClient();
        return prisma.postComment.create({
            data: {
                text: CreatePostCommentDto.text,
                userId: parseInt(userId),
                postId: parseInt(postId),
            },
        });
    }

    findAll(postId: string, limit: string) {
        const prisma = new PrismaClient();
        return prisma.postComment.findMany({
            take: typeof limit === 'string' ? parseInt(limit) : undefined,
            orderBy: [
                {
                    createdAt: 'desc',
                },
            ], 
            where: { 
                postId: parseInt(postId),
            },
        });
    }

}
