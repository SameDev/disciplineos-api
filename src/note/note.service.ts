import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import type { UpsertNoteDto } from './dto/upsert-note.dto';

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  findAll(userId: string) {
    return this.prisma.note.findMany({
      where: { userId },
      orderBy: { updatedAt: 'desc' },
    });
  }

  upsert(userId: string, dto: UpsertNoteDto) {
    return this.prisma.note.upsert({
      where: { userId_key: { userId, key: dto.key } },
      update: { content: dto.content, type: dto.type },
      create: { userId, ...dto },
    });
  }

  remove(userId: string, key: string) {
    return this.prisma.note.deleteMany({ where: { userId, key } });
  }
}
