import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  gbiaddressAndcustomerinfo25Schema,
  type GbiaddressAndcustomerinfo25,
} from "../gbiaddress-andcustomerinfo25.js";
import { gbideviceIdarray25Schema, type GbideviceIdarray25 } from "../gbidevice-idarray25.js";

export type DeviceListWithServiceAddress = GbideviceIdarray25 | GbiaddressAndcustomerinfo25;

export const deviceListWithServiceAddressSchema: Schema<DeviceListWithServiceAddress> =
  s.of<DeviceListWithServiceAddress>(
    s.union([s.lazy(() => gbideviceIdarray25Schema), s.lazy(() => gbiaddressAndcustomerinfo25Schema)]),
  );
