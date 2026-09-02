import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { saeAlertPayloadSchema, type SaeAlertPayload } from "./sae-alert-payload.js";

export type SaeAlertMessage = {
  saeAlert: SaeAlertPayload;
};

export const saeAlertMessageSchema: Schema<SaeAlertMessage> = s.object<SaeAlertMessage>({
  saeAlert: saeAlertPayloadSchema,
});
