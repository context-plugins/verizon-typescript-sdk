import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusListSchema, type StatusList } from "./status-list.js";

export type ManagedAccountsAddResponse = {
  txId?: string;
  statusList?: StatusList[];
};

export const managedAccountsAddResponseSchema: Schema<ManagedAccountsAddResponse> =
  s.object<ManagedAccountsAddResponse>({
    txId: s.optional(s.string()),
    statusList: s.optional(s.array(s.lazy(() => statusListSchema))),
    _keysMap: {
      txId: "TxId",
    },
  });
