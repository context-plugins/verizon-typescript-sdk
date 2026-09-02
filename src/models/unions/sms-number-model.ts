import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { cellphonenumberSchema, type Cellphonenumber } from "../cellphonenumber.js";

export type SmsNumberModel = Cellphonenumber;

export const smsNumberModelSchema: Schema<SmsNumberModel> = s.of<SmsNumberModel>(
  s.union([s.lazy(() => cellphonenumberSchema)]),
);
