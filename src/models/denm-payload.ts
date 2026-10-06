import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { managementSchema, type Management } from "./management.js";
import { situationSchema, type Situation } from "./situation.js";

/** The payload of the DENM PDU. */
export type DenmPayload = {
  /**
   * This represent the management container describing the meta information about the event, such
   * as the detection time, the event's location, the source of the event, and the notification
   * distance.
   */
  management: Management;
  /**
   * This represents the situation container describing the event and the reliability of the
   * detection source.
   */
  situation?: Situation;
};

export const denmPayloadSchema: Schema<DenmPayload> = s.object<DenmPayload>({
  management: managementSchema,
  situation: s.optional(s.lazy(() => situationSchema)),
});
