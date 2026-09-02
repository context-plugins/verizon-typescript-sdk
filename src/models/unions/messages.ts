import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { messageSchema, type Message } from "../message.js";
import { message1Schema, type Message1 } from "../message1.js";
import { message2Schema, type Message2 } from "../message2.js";
import { message3Schema, type Message3 } from "../message3.js";

export type Messages = Message | Message1 | Message2 | Message3;

export const messagesSchema: Schema<Messages> = s.of<Messages>(
  s.union([
    s.lazy(() => messageSchema),
    s.lazy(() => message1Schema),
    s.lazy(() => message2Schema),
    s.lazy(() => message3Schema),
  ]),
);
