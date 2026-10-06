import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { offsetSystemSchema, type OffsetSystem } from "./offset-system.js";

/**
 * This data frame can describe a complex path of arbitrary size using node offset method (LL
 * offsets).
 */
export type GeographicalPathDescription = {
  /**
   * The OffsetSystem data frame selects a sequence of node offsets described in the Lat-Long offset
   * method.
   */
  path: OffsetSystem;
};

export const geographicalPathDescriptionSchema: Schema<GeographicalPathDescription> =
  s.object<GeographicalPathDescription>({
    path: offsetSystemSchema,
  });
