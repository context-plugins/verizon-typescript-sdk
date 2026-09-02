import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dropResponseItemSchema, type DropResponseItem } from "./drop-response-item.js";

export type DropResponse = {
  items?: DropResponseItem[];
};

export const dropResponseSchema: Schema<DropResponse> = s.object<DropResponse>({
  items: s.optional(s.array(s.lazy(() => dropResponseItemSchema))),
});
