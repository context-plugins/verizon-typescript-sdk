import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cindersSchema, type Cinders } from "./cinders.js";

export type DescriptionOfRoadSurfaceCinders = {
  cinders: Cinders;
};

export const descriptionOfRoadSurfaceCindersSchema: Schema<DescriptionOfRoadSurfaceCinders> =
  s.object<DescriptionOfRoadSurfaceCinders>({
    cinders: cindersSchema,
  });
