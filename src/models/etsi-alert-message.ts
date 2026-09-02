import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { etsiAlertPayloadSchema, type EtsiAlertPayload } from "./etsi-alert-payload.js";

export type EtsiAlertMessage = {
  etsiAlert: EtsiAlertPayload;
};

export const etsiAlertMessageSchema: Schema<EtsiAlertMessage> = s.object<EtsiAlertMessage>({
  etsiAlert: etsiAlertPayloadSchema,
});
