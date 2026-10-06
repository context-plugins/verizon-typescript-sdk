import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagedAccAddedList = {
  /** Account name */
  id?: string;
  /** Transaction identifier */
  txid?: string;
};

export const managedAccAddedListSchema: Schema<ManagedAccAddedList> = s.object<ManagedAccAddedList>({
  id: s.optional(s.string()),
  txid: s.optional(s.string()),
});
