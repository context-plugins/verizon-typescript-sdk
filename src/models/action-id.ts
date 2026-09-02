import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ActionId = {
  originatingStationId: number;
  sequenceNumber: number;
};

export const actionIdSchema: Schema<ActionId> = s.object<ActionId>({
  originatingStationId: s.number(),
  sequenceNumber: s.number(),
});
