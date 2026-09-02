import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { asphaltOrTarSchema, type AsphaltOrTar } from "./asphalt-or-tar.js";

export type DescriptionOfRoadSurfaceAsphaltOrTar = {
  asphaltOrTar: AsphaltOrTar;
};

export const descriptionOfRoadSurfaceAsphaltOrTarSchema: Schema<DescriptionOfRoadSurfaceAsphaltOrTar> =
  s.object<DescriptionOfRoadSurfaceAsphaltOrTar>({
    asphaltOrTar: asphaltOrTarSchema,
  });
