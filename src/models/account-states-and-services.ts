import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { engagementSchema, type Engagement } from "./engagement.js";

/** Returns a list and details of all custom services and states defined for a specified account. */
export type AccountStatesAndServices = {
  /** The engagements associated with the account. */
  engagement: Engagement[];
};

export const accountStatesAndServicesSchema: Schema<AccountStatesAndServices> =
  s.object<AccountStatesAndServices>({
    engagement: s.array(s.lazy(() => engagementSchema)),
  });
