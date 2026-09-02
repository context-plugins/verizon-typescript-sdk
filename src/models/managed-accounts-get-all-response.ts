import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { managedAccAddedListSchema, type ManagedAccAddedList } from "./managed-acc-added-list.js";
import {
  managedAccProvisionedListSchema,
  type ManagedAccProvisionedList,
} from "./managed-acc-provisioned-list.js";

export type ManagedAccountsGetAllResponse = {
  accountName?: string;
  managedAccAddedList?: ManagedAccAddedList[];
  managedAccProvisionedList?: ManagedAccProvisionedList[];
};

export const managedAccountsGetAllResponseSchema: Schema<ManagedAccountsGetAllResponse> =
  s.object<ManagedAccountsGetAllResponse>({
    accountName: s.optional(s.string()),
    managedAccAddedList: s.optional(s.array(s.lazy(() => managedAccAddedListSchema))),
    managedAccProvisionedList: s.optional(s.array(s.lazy(() => managedAccProvisionedListSchema))),
    _keysMap: {
      managedAccAddedList: "ManagedAccAddedList",
    },
  });
