import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { snowSchema, type Snow } from "./snow.js";

export type DescriptionOfRoadSurfaceSnow = {
  /** Indicates the surface of the roadway is snow. */
  snow: Snow;
};

export const descriptionOfRoadSurfaceSnowSchema: Schema<DescriptionOfRoadSurfaceSnow> =
  s.object<DescriptionOfRoadSurfaceSnow>({
    snow: snowSchema,
  });
