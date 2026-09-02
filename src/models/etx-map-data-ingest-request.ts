import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EtxMapDataIngestRequest = {
  messageId: number;
  value: Record<string, unknown>;
  msgIssueRevision?: number;
};

export const etxMapDataIngestRequestSchema: Schema<EtxMapDataIngestRequest> =
  s.object<EtxMapDataIngestRequest>({
    messageId: s.number(),
    value: s.record(s.string(), s.unknown()),
    msgIssueRevision: s.optional(s.number()),
  });
