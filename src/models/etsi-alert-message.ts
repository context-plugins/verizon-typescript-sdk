import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { etsiAlertPayloadSchema, type EtsiAlertPayload } from "./etsi-alert-payload.js";

/**
 * Decentralized Environmental Notification Message (DENM) message and its mandatory fields. It is
 * used in order to alert road users of a detected event using ITS communication technologies.
 */
export type EtsiAlertMessage = {
  /** DENM (Decentralized Environmental Notification Message) payload as defined in ETSI. */
  etsiAlert: EtsiAlertPayload;
};

export const etsiAlertMessageSchema: Schema<EtsiAlertMessage> = s.object<EtsiAlertMessage>({
  etsiAlert: etsiAlertPayloadSchema,
});
