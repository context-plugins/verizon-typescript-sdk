import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gravelSchema, type Gravel } from "./gravel.js";

export type DescriptionOfRoadSurfaceGravel = {
  gravel: Gravel;
};

export const descriptionOfRoadSurfaceGravelSchema: Schema<DescriptionOfRoadSurfaceGravel> =
  s.object<DescriptionOfRoadSurfaceGravel>({
    gravel: gravelSchema,
  });
