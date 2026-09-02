import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  gbiaddressAndcustomerinfo5Schema,
  type GbiaddressAndcustomerinfo5,
} from "../gbiaddress-andcustomerinfo5.js";
import { gbideviceIdarray5Schema, type GbideviceIdarray5 } from "../gbidevice-idarray5.js";

export type DeviceListWithServiceAddress1 = GbideviceIdarray5 | GbiaddressAndcustomerinfo5;

export const deviceListWithServiceAddress1Schema: Schema<DeviceListWithServiceAddress1> =
  s.of<DeviceListWithServiceAddress1>(
    s.union([s.lazy(() => gbideviceIdarray5Schema), s.lazy(() => gbiaddressAndcustomerinfo5Schema)]),
  );
