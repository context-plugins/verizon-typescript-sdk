import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RoadSignPosition = {
  lat: number;
  long: number;
};

export const roadSignPositionSchema: Schema<RoadSignPosition> = s.object<RoadSignPosition>({
  lat: s.number(),
  long: s.number(),
});
