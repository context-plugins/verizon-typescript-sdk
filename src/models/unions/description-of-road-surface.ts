import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  descriptionOfRoadSurfaceAsphaltOrTarSchema,
  type DescriptionOfRoadSurfaceAsphaltOrTar,
} from "../description-of-road-surface-asphalt-or-tar.js";
import {
  descriptionOfRoadSurfaceCindersSchema,
  type DescriptionOfRoadSurfaceCinders,
} from "../description-of-road-surface-cinders.js";
import {
  descriptionOfRoadSurfaceGrassSchema,
  type DescriptionOfRoadSurfaceGrass,
} from "../description-of-road-surface-grass.js";
import {
  descriptionOfRoadSurfaceGravelSchema,
  type DescriptionOfRoadSurfaceGravel,
} from "../description-of-road-surface-gravel.js";
import {
  descriptionOfRoadSurfaceIceSchema,
  type DescriptionOfRoadSurfaceIce,
} from "../description-of-road-surface-ice.js";
import {
  descriptionOfRoadSurfacePortlandCementSchema,
  type DescriptionOfRoadSurfacePortlandCement,
} from "../description-of-road-surface-portland-cement.js";
import {
  descriptionOfRoadSurfaceRockSchema,
  type DescriptionOfRoadSurfaceRock,
} from "../description-of-road-surface-rock.js";
import {
  descriptionOfRoadSurfaceSnowSchema,
  type DescriptionOfRoadSurfaceSnow,
} from "../description-of-road-surface-snow.js";

export type DescriptionOfRoadSurface =
  | DescriptionOfRoadSurfacePortlandCement
  | DescriptionOfRoadSurfaceAsphaltOrTar
  | DescriptionOfRoadSurfaceGravel
  | DescriptionOfRoadSurfaceGrass
  | DescriptionOfRoadSurfaceCinders
  | DescriptionOfRoadSurfaceRock
  | DescriptionOfRoadSurfaceIce
  | DescriptionOfRoadSurfaceSnow;

export const descriptionOfRoadSurfaceSchema: Schema<DescriptionOfRoadSurface> =
  s.of<DescriptionOfRoadSurface>(
    s.union([
      s.lazy(() => descriptionOfRoadSurfacePortlandCementSchema),
      s.lazy(() => descriptionOfRoadSurfaceAsphaltOrTarSchema),
      s.lazy(() => descriptionOfRoadSurfaceGravelSchema),
      s.lazy(() => descriptionOfRoadSurfaceGrassSchema),
      s.lazy(() => descriptionOfRoadSurfaceCindersSchema),
      s.lazy(() => descriptionOfRoadSurfaceRockSchema),
      s.lazy(() => descriptionOfRoadSurfaceIceSchema),
      s.lazy(() => descriptionOfRoadSurfaceSnowSchema),
    ]),
  );
