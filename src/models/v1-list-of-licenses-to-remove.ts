import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V1ListOfLicensesToRemove = {
  count?: number;
  hasMoreData?: boolean;
  updateTime?: Date;
  deviceList?: string[];
};

export const v1ListOfLicensesToRemoveSchema: Schema<V1ListOfLicensesToRemove> =
  s.object<V1ListOfLicensesToRemove>({
    count: s.optional(s.number()),
    hasMoreData: s.optional(s.boolean()),
    updateTime: s.optional(s.dateTime()),
    deviceList: s.optional(s.array(s.string())),
  });
