import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ManagedAccProvisionedList = {
  id?: string;
  txid?: string;
};

export const managedAccProvisionedListSchema: Schema<ManagedAccProvisionedList> =
  s.object<ManagedAccProvisionedList>({
    id: s.optional(s.string()),
    txid: s.optional(s.string()),
  });
