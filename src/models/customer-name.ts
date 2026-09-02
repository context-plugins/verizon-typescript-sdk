import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomerName = {
  title?: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  suffix?: string;
};

export const customerNameSchema: Schema<CustomerName> = s.object<CustomerName>({
  title: s.optional(s.string()),
  firstName: s.string(),
  middleName: s.optional(s.string()),
  lastName: s.string(),
  suffix: s.optional(s.string()),
});
