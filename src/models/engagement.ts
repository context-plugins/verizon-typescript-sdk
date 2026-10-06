import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountServiceSchema, type AccountService } from "./account-service.js";

/** The engagements associated with the account. */
export type Engagement = {
  /** The engagement ID. */
  engagementId?: string;
  /** The charging group name. */
  chargingGroup?: string;
  /** The services associated with the account. */
  services?: AccountService[];
};

export const engagementSchema: Schema<Engagement> = s.object<Engagement>({
  engagementId: s.optional(s.string()),
  chargingGroup: s.optional(s.string()),
  services: s.optional(s.array(s.lazy(() => accountServiceSchema))),
});
