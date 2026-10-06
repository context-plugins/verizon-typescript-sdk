import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * JSON representation of a J2735/ETSI MapData message for ingestion. The value field must contain a
 * valid MAP message body conforming to the SAE J2735 or ETSI TS 103 301 standard.
 */
export type EtxMapDataIngestRequest = {
  /** SAE J2735 DSRCmsgID for the MAP message type. */
  messageId: number;
  /** The decoded MAP message body containing intersection and lane data. */
  value: Record<string, unknown>;
  /** Issue revision number of the MAP message. */
  msgIssueRevision?: number;
};

export const etxMapDataIngestRequestSchema: Schema<EtxMapDataIngestRequest> =
  s.object<EtxMapDataIngestRequest>({
    messageId: s.int(),
    value: s.record(s.string(), s.unknown()),
    msgIssueRevision: s.optional(s.int()),
  });
