import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { offsetSchema, type Offset } from "./offset.js";

export type OffsetSystem = {
  offset: Offset;
};

export const offsetSystemSchema: Schema<OffsetSystem> = s.object<OffsetSystem>({
  offset: offsetSchema,
});
