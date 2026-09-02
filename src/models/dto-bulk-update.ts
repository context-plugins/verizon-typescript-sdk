import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bulkUpdateSmartalertSchema, type BulkUpdateSmartalert } from "./bulk-update-smartalert.js";
import {
  theIDresourceandDeviceIdSchema,
  type TheIDresourceandDeviceId,
} from "./the-idresourceand-device-id.js";

export type DtoBulkUpdate = {
  accountname?: string;
  resourceidentifiers?: TheIDresourceandDeviceId[];
  smartalert?: BulkUpdateSmartalert;
};

export const dtoBulkUpdateSchema: Schema<DtoBulkUpdate> = s.object<DtoBulkUpdate>({
  accountname: s.optional(s.string()),
  resourceidentifiers: s.optional(s.array(s.lazy(() => theIDresourceandDeviceIdSchema))),
  smartalert: s.optional(s.lazy(() => bulkUpdateSmartalertSchema)),
});
