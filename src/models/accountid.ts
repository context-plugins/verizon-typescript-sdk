import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Accountid = {
  accountName?: string;
  mtasAccountNumber?: string;
};

export const accountidSchema: Schema<Accountid> = s.object<Accountid>({
  accountName: s.optional(s.string()),
  mtasAccountNumber: s.optional(s.string()),
});
