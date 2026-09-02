import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2ListOfLicensesToRemove = {
  count: number;
  hasMoreData: boolean;
  updateTime: string;
  deviceList: string[];
};

export const v2ListOfLicensesToRemoveSchema: Schema<V2ListOfLicensesToRemove> =
  s.object<V2ListOfLicensesToRemove>({
    count: s.number(),
    hasMoreData: s.boolean(),
    updateTime: s.string(),
    deviceList: s.array(s.string()),
  });
