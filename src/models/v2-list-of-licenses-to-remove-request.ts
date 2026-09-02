import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2ListOfLicensesToRemoveRequest = {
  type?: string;
  count?: number;
  deviceList: string[];
};

export const v2ListOfLicensesToRemoveRequestSchema: Schema<V2ListOfLicensesToRemoveRequest> =
  s.object<V2ListOfLicensesToRemoveRequest>({
    type: s.optional(s.string()),
    count: s.optional(s.number()),
    deviceList: s.array(s.string()),
  });
