import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V1ListOfLicensesToRemoveRequest = {
  type?: string;
  deviceList: string[];
};

export const v1ListOfLicensesToRemoveRequestSchema: Schema<V1ListOfLicensesToRemoveRequest> =
  s.object<V1ListOfLicensesToRemoveRequest>({
    type: s.optional(s.string()),
    deviceList: s.array(s.string()),
  });
