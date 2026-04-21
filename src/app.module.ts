import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { CompletionModule } from './completion/completion.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [PrismaModule, AuthModule, UserModule, TaskModule, CompletionModule, NoteModule],
})
export class AppModule {}
