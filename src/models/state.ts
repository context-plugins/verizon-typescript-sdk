import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type State = {
  name?: string;
  workflowSequenceNumber?: number;
  servicePlans?: string[];
};

export const stateSchema: Schema<State> = s.object<State>({
  name: s.optional(s.string()),
  workflowSequenceNumber: s.optional(s.number()),
  servicePlans: s.optional(s.array(s.string())),
});
