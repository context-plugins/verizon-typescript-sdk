import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { portlandCementSchema, type PortlandCement } from "./portland-cement.js";

export type DescriptionOfRoadSurfacePortlandCement = {
  portlandCement: PortlandCement;
};

export const descriptionOfRoadSurfacePortlandCementSchema: Schema<DescriptionOfRoadSurfacePortlandCement> =
  s.object<DescriptionOfRoadSurfacePortlandCement>({
    portlandCement: portlandCementSchema,
  });
