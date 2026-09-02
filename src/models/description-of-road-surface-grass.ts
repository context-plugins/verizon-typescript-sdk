import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { grassSchema, type Grass } from "./grass.js";

export type DescriptionOfRoadSurfaceGrass = {
  grass: Grass;
};

export const descriptionOfRoadSurfaceGrassSchema: Schema<DescriptionOfRoadSurfaceGrass> =
  s.object<DescriptionOfRoadSurfaceGrass>({
    grass: grassSchema,
  });
