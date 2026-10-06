import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateSchema, type State } from "./state.js";

/** Service associated with the account. */
export type AccountService = {
  /** The name of the service plan. */
  name?: string;
  /** The description of the service plan. */
  description?: string;
  /** The state of the service plan. */
  states?: State[];
};

export const accountServiceSchema: Schema<AccountService> = s.object<AccountService>({
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  states: s.optional(s.array(s.lazy(() => stateSchema))),
});
