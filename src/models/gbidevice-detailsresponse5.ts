import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gbiaccountNameobject5Schema, type GbiaccountNameobject5 } from "./gbiaccount-nameobject5.js";

export type GbideviceDetailsresponse5 = {
  hasMoreData?: boolean;
  devices?: GbiaccountNameobject5[];
};

export const gbideviceDetailsresponse5Schema: Schema<GbideviceDetailsresponse5> =
  s.object<GbideviceDetailsresponse5>({
    hasMoreData: s.optional(s.boolean()),
    devices: s.optional(s.array(s.lazy(() => gbiaccountNameobject5Schema))),
  });
