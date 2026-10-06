import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionId = {
  /** Unique ID for originating station. */
  originatingStationId: number;
  /** Counter used to differenciate multiple DENMs from same station. */
  sequenceNumber: number;
};

export const actionIdSchema: Schema<ActionId> = s.object<ActionId>({
  originatingStationId: s.int(),
  sequenceNumber: s.int(),
});
