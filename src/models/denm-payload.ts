import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { managementSchema, type Management } from "./management.js";
import { situationSchema, type Situation } from "./situation.js";

export type DenmPayload = {
  management: Management;
  situation?: Situation;
};

export const denmPayloadSchema: Schema<DenmPayload> = s.object<DenmPayload>({
  management: managementSchema,
  situation: s.optional(s.lazy(() => situationSchema)),
});
