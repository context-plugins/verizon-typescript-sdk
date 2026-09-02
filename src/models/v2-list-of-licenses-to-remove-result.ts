import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2ListOfLicensesToRemoveResult = {
  count: number;
  deviceList: string[];
};

export const v2ListOfLicensesToRemoveResultSchema: Schema<V2ListOfLicensesToRemoveResult> =
  s.object<V2ListOfLicensesToRemoveResult>({
    count: s.number(),
    deviceList: s.array(s.string()),
  });
