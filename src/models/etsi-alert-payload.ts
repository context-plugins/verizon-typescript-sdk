import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { denmPayloadSchema, type DenmPayload } from "./denm-payload.js";
import { headerSchema, type Header } from "./header.js";

/** DENM (Decentralized Environmental Notification Message) payload as defined in ETSI. */
export type EtsiAlertPayload = {
  /** The header of the DENM PDU. */
  header: Header;
  /** The payload of the DENM PDU. */
  denm: DenmPayload;
};

export const etsiAlertPayloadSchema: Schema<EtsiAlertPayload> = s.object<EtsiAlertPayload>({
  header: headerSchema,
  denm: denmPayloadSchema,
});
