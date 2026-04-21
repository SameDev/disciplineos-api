import { Controller, Get, Put, Delete, Body, Param, UseGuards, Request } from '@nestjs/common';
import { NoteService } from './note.service';
import { UpsertNoteSchema } from './dto/upsert-note.dto';
import type { UpsertNoteDto } from './dto/upsert-note.dto';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get()
  findAll(@Request() req: { user: { sub: string } }) {
    return this.noteService.findAll(req.user.sub);
  }

  @Put()
  upsert(
    @Request() req: { user: { sub: string } },
    @Body(new ZodValidationPipe(UpsertNoteSchema)) dto: UpsertNoteDto,
  ) {
    return this.noteService.upsert(req.user.sub, dto);
  }

  @Delete(':key')
  remove(
    @Request() req: { user: { sub: string } },
    @Param('key') key: string,
  ) {
    return this.noteService.remove(req.user.sub, key);
  }
}
