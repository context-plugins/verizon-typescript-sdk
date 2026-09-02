import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rockSchema, type Rock } from "./rock.js";

export type DescriptionOfRoadSurfaceRock = {
  rock: Rock;
};

export const descriptionOfRoadSurfaceRockSchema: Schema<DescriptionOfRoadSurfaceRock> =
  s.object<DescriptionOfRoadSurfaceRock>({
    rock: rockSchema,
  });
