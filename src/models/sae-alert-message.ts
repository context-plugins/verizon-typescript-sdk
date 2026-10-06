import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { saeAlertPayloadSchema, type SaeAlertPayload } from "./sae-alert-payload.js";

/**
 * Road Side Alert (RSA) message and its mandatory fields. This message is used to send alerts for
 * nearby hazards to travelers. This message is defined in the SAE J2735 Standard. The system
 * supports all mandatory fields, but only a subset of the optional fields.
 */
export type SaeAlertMessage = {
  /** Road Side Alert (RSA) message payload as defined in SAE J2735. */
  saeAlert: SaeAlertPayload;
};

export const saeAlertMessageSchema: Schema<SaeAlertMessage> = s.object<SaeAlertMessage>({
  saeAlert: saeAlertPayloadSchema,
});
