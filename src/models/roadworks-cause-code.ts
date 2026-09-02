import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RoadworksCauseCode = {
  roadworks3: number;
};

export const roadworksCauseCodeSchema: Schema<RoadworksCauseCode> = s.object<RoadworksCauseCode>({
  roadworks3: s.number(),
});
