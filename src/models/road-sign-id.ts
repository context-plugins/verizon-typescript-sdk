import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { roadSignPositionSchema, type RoadSignPosition } from "./road-sign-position.js";

export type RoadSignId = {
  position: RoadSignPosition;
  viewAngle: string;
};

export const roadSignIdSchema: Schema<RoadSignId> = s.object<RoadSignId>({
  position: roadSignPositionSchema,
  viewAngle: s.string(),
});
