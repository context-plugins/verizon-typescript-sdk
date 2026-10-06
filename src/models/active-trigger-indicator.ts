import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Whether the trigger is active or not. */
export type ActiveTriggerIndicator = {
  /**
   * Indicates if the trigger is active<br />True - trigger is active<br />False - trigger is not
   * active.
   */
  active?: boolean;
};

export const activeTriggerIndicatorSchema: Schema<ActiveTriggerIndicator> = s.object<ActiveTriggerIndicator>({
  active: s.optional(s.boolean()),
});
