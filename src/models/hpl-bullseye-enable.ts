import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A flag that shows if Hyper Precise is enabled (true) or disabled (false). */
export type HplBullseyeEnable = {
  bullseyeEnable?: boolean;
};

export const hplBullseyeEnableSchema: Schema<HplBullseyeEnable> = s.object<HplBullseyeEnable>({
  bullseyeEnable: s.optional(s.boolean()),
  _keysMap: {
    bullseyeEnable: "BullseyeEnable",
  },
});
