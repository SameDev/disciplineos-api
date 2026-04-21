import { z } from 'zod';

export const UpsertNoteSchema = z.object({
  type: z.enum(['daily', 'weekly', 'monthly']),
  key: z.string().min(1),
  content: z.string(),
});

export type UpsertNoteDto = z.infer<typeof UpsertNoteSchema>;
