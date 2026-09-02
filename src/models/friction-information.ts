import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  descriptionOfRoadSurfaceSchema,
  type DescriptionOfRoadSurface,
} from "./unions/description-of-road-surface.js";

export type FrictionInformation = {
  roadSurfaceDescription: DescriptionOfRoadSurface;
};

export const frictionInformationSchema: Schema<FrictionInformation> = s.object<FrictionInformation>({
  roadSurfaceDescription: descriptionOfRoadSurfaceSchema,
});
