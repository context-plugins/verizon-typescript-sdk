import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DropResponseItem = {
  imei?: string;
};

export const dropResponseItemSchema: Schema<DropResponseItem> = s.object<DropResponseItem>({
  imei: s.optional(s.string()),
});
