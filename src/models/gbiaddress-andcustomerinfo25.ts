import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  gbiaddressAndcustomerinfo5Schema,
  type GbiaddressAndcustomerinfo5,
} from "./gbiaddress-andcustomerinfo5.js";

export type GbiaddressAndcustomerinfo25 = {
  primaryPlaceofuse?: GbiaddressAndcustomerinfo5;
};

export const gbiaddressAndcustomerinfo25Schema: Schema<GbiaddressAndcustomerinfo25> =
  s.object<GbiaddressAndcustomerinfo25>({
    primaryPlaceofuse: s.optional(s.lazy(() => gbiaddressAndcustomerinfo5Schema)),
  });
