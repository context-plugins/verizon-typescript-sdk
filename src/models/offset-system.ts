import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { offsetSchema, type Offset } from "./offset.js";

/**
 * The OffsetSystem data frame selects a sequence of node offsets described in the Lat-Long offset
 * method.
 */
export type OffsetSystem = {
  /** The sequence of node offsets then describes a path or polygon in the Lat-Long system. */
  offset: Offset;
};

export const offsetSystemSchema: Schema<OffsetSystem> = s.object<OffsetSystem>({
  offset: offsetSchema,
});
