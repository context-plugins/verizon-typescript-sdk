import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Status of the diagnostic services subscription. */
export type DiagnosticsSubscription = {
  /**
   * Account identifier in "##########-#####". An account name is usually numeric, and must include
   * any leading zeros.
   */
  accountName: string;
  /** The date and time of when the subscription was created. */
  createdOn: Date;
  /** The date and time of when the subscription was last updated. */
  lastUpdated: Date;
  /** Number of licenses currently assigned to devices. */
  totalAllowed: number;
  /** Number of licenses currently used by the devices. */
  totalUsed: number;
  /** Name of the SKU for the account. */
  skuName: string;
};

export const diagnosticsSubscriptionSchema: Schema<DiagnosticsSubscription> =
  s.object<DiagnosticsSubscription>({
    accountName: s.string(),
    createdOn: s.dateTime(),
    lastUpdated: s.dateTime(),
    totalAllowed: s.int(),
    totalUsed: s.int(),
    skuName: s.string(),
  });
