import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageIdSchema, type MessageId } from "./message-id.js";
import { protocolVersionSchema, type ProtocolVersion } from "./protocol-version.js";

/** The header of the DENM PDU. */
export type Header = {
  /** The protocol version of the DENM. */
  protocolVersion: ProtocolVersion;
  /** The type of ITIS message (typically 1 for DENM). */
  messageId: MessageId;
  /** The station identifier of the ITS-S. */
  stationId: number;
};

export const headerSchema: Schema<Header> = s.object<Header>({
  protocolVersion: protocolVersionSchema,
  messageId: messageIdSchema,
  stationId: s.int(),
});
