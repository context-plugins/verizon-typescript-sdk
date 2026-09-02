import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { saeInfoPayloadSchema, type SaeInfoPayload } from "./sae-info-payload.js";

export type SaeInfoMessage = {
  saeInfo: SaeInfoPayload;
};

export const saeInfoMessageSchema: Schema<SaeInfoMessage> = s.object<SaeInfoMessage>({
  saeInfo: saeInfoPayloadSchema,
});
