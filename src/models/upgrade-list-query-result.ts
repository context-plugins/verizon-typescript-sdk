import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { firmwareUpgradeSchema, type FirmwareUpgrade } from "./firmware-upgrade.js";

/** Upgrade information. */
export type UpgradeListQueryResult = {
  /** True if there are more devices to retrieve. */
  hasMoreFlag?: boolean;
  /** If hasMoreData=true, the startIndex to use for the next request. 0 if hasMoreData=false. */
  lastSeenUpgradeId?: number;
  /** Array of upgrade objects with the specified status. */
  reportList?: FirmwareUpgrade[] | null;
};

export const upgradeListQueryResultSchema: Schema<UpgradeListQueryResult> = s.object<UpgradeListQueryResult>({
  hasMoreFlag: s.optional(s.boolean()),
  lastSeenUpgradeId: s.optional(s.int()),
  reportList: s.optionalNullable(s.array(s.lazy(() => firmwareUpgradeSchema))),
});
