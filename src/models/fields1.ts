import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  searchDeviceByPropertyFieldsSchema,
  type SearchDeviceByPropertyFields,
} from "./search-device-by-property-fields.js";

export type Fields1 = {
  item?: SearchDeviceByPropertyFields;
};

export const fields1Schema: Schema<Fields1> = s.object<Fields1>({
  item: s.optional(s.lazy(() => searchDeviceByPropertyFieldsSchema)),
});
