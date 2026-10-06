import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountDeviceListSchema, type AccountDeviceList } from "./account-device-list.js";

export type RetrieveMonitorsRequest = {
  /** The name of a billing account. */
  accountName: string;
  /** The devices for which you want to restore service, specified by device identifier. */
  devices: AccountDeviceList[];
  /** The name of a billing account. */
  monitorType?: string;
};

export const retrieveMonitorsRequestSchema: Schema<RetrieveMonitorsRequest> =
  s.object<RetrieveMonitorsRequest>({
    accountName: s.string(),
    devices: s.array(s.lazy(() => accountDeviceListSchema)),
    monitorType: s.optional(s.string()),
  });
