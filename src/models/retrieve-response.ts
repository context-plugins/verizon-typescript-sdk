import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { retrieveResponseItemSchema, type RetrieveResponseItem } from "./retrieve-response-item.js";

export type RetrieveResponse = {
  items?: RetrieveResponseItem[];
};

export const retrieveResponseSchema: Schema<RetrieveResponse> = s.object<RetrieveResponse>({
  items: s.optional(s.array(s.lazy(() => retrieveResponseItemSchema))),
});
