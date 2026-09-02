import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { offsetSystemSchema, type OffsetSystem } from "./offset-system.js";

export type GeographicalPathDescription = {
  path: OffsetSystem;
};

export const geographicalPathDescriptionSchema: Schema<GeographicalPathDescription> =
  s.object<GeographicalPathDescription>({
    path: offsetSystemSchema,
  });
