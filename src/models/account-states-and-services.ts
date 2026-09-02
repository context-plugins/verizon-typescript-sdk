import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { engagementSchema, type Engagement } from "./engagement.js";

export type AccountStatesAndServices = {
  engagement: Engagement[];
};

export const accountStatesAndServicesSchema: Schema<AccountStatesAndServices> =
  s.object<AccountStatesAndServices>({
    engagement: s.array(s.lazy(() => engagementSchema)),
  });
