import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V1ListOfLicensesToRemoveResult = {
  count?: number;
  deviceList?: string[];
};

export const v1ListOfLicensesToRemoveResultSchema: Schema<V1ListOfLicensesToRemoveResult> =
  s.object<V1ListOfLicensesToRemoveResult>({
    count: s.optional(s.number()),
    deviceList: s.optional(s.array(s.string())),
  });
