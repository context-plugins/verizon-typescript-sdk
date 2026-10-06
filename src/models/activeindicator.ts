import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { activeSchema, type Active } from "./active.js";

export type Activeindicator = {
  /** A flag to indicate of the trigger is active, true, or not, false */
  active?: Active;
};

export const activeindicatorSchema: Schema<Activeindicator> = s.object<Activeindicator>({
  active: s.optional(s.lazy(() => activeSchema)),
});
