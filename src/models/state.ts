import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Each service includes custom states. */
export type State = {
  /** The name of the state. */
  name?: string;
  /** The workflow sequence number of this state. */
  workflowSequenceNumber?: number;
  /** The service plans that can be used to charge for services for devices in this state. */
  servicePlans?: string[];
};

export const stateSchema: Schema<State> = s.object<State>({
  name: s.optional(s.string()),
  workflowSequenceNumber: s.optional(s.float64()),
  servicePlans: s.optional(s.array(s.string())),
});
