import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iceSchema, type Ice } from "./ice.js";

export type DescriptionOfRoadSurfaceIce = {
  ice: Ice;
};

export const descriptionOfRoadSurfaceIceSchema: Schema<DescriptionOfRoadSurfaceIce> =
  s.object<DescriptionOfRoadSurfaceIce>({
    ice: iceSchema,
  });
