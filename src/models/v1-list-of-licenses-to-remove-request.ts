import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of devices to removes. */
export type V1ListOfLicensesToRemoveRequest = {
  /**
   * Set to 'append' to append the devices in the current request to the existing list. If there is
   * no existing list then it will be created with only these devices. Leave this parameter out when
   * you want to replace the existing list with the devices in the current request.
   */
  type?: string;
  /** The IMEIs of the devices. */
  deviceList: string[];
};

export const v1ListOfLicensesToRemoveRequestSchema: Schema<V1ListOfLicensesToRemoveRequest> =
  s.object<V1ListOfLicensesToRemoveRequest>({
    type: s.optional(s.string()),
    deviceList: s.array(s.string()),
  });
