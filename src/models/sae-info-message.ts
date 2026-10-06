import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { saeInfoPayloadSchema, type SaeInfoPayload } from "./sae-info-payload.js";

/**
 * Traveler Information Message (TIM) message and its mandatory fields. The traveler information
 * message is used to send various types of information (advisory and road sign types) to equipped
 * devices.
 */
export type SaeInfoMessage = {
  /** Traveler Information Message (TIM) payload as defined in SAE J2735. */
  saeInfo: SaeInfoPayload;
};

export const saeInfoMessageSchema: Schema<SaeInfoMessage> = s.object<SaeInfoMessage>({
  saeInfo: saeInfoPayloadSchema,
});
