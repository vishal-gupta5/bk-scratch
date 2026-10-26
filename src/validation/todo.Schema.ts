import { z } from "zod";

const todoValidationSchema = z.object({
  id: z.string().describe("Id of the todo"),
  title: z.string().describe("Title of the todo"),
  description: z.string().optional().describe("Description of the todo"),
  idCompleted: z
    .boolean()
    .default(false)
    .describe("If Todo item is completed!"),
});

export type Todo = z.infer<typeof todoValidationSchema>;
