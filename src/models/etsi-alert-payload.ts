import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { denmPayloadSchema, type DenmPayload } from "./denm-payload.js";
import { headerSchema, type Header } from "./header.js";

export type EtsiAlertPayload = {
  header: Header;
  denm: DenmPayload;
};

export const etsiAlertPayloadSchema: Schema<EtsiAlertPayload> = s.object<EtsiAlertPayload>({
  header: headerSchema,
  denm: denmPayloadSchema,
});
