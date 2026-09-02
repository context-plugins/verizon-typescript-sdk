import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageIdSchema, type MessageId } from "./message-id.js";
import { protocolVersionSchema, type ProtocolVersion } from "./protocol-version.js";

export type Header = {
  protocolVersion: ProtocolVersion;
  messageId: MessageId;
  stationId: number;
};

export const headerSchema: Schema<Header> = s.object<Header>({
  protocolVersion: protocolVersionSchema,
  messageId: messageIdSchema,
  stationId: s.number(),
});
