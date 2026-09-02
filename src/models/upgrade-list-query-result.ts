import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { firmwareUpgradeSchema, type FirmwareUpgrade } from "./firmware-upgrade.js";

export type UpgradeListQueryResult = {
  hasMoreFlag?: boolean;
  lastSeenUpgradeId?: number;
  reportList?: FirmwareUpgrade[] | null;
};

export const upgradeListQueryResultSchema: Schema<UpgradeListQueryResult> = s.object<UpgradeListQueryResult>({
  hasMoreFlag: s.optional(s.boolean()),
  lastSeenUpgradeId: s.optional(s.number()),
  reportList: s.optionalNullable(s.array(s.lazy(() => firmwareUpgradeSchema))),
});
