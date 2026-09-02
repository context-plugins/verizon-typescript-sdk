import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

export type AccountService = {
  name?: string;
  description?: string;
  states?: State[];
};

export const accountServiceSchema: Schema<AccountService> = s.object<AccountService>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  states: s.optional(s.array(s.lazy(() => stateSchema))),
});
