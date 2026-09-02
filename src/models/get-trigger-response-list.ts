import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { getTriggerResponseSchema, type GetTriggerResponse } from "./get-trigger-response.js";

export type GetTriggerResponseList = {
  triggers?: GetTriggerResponse[];
};

export const getTriggerResponseListSchema: Schema<GetTriggerResponseList> = s.object<GetTriggerResponseList>({
  triggers: s.optional(s.array(s.lazy(() => getTriggerResponseSchema))),
});
