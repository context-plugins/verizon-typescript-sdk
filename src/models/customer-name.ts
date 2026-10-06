import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The customer name to be used for line usage taxation. */
export type CustomerName = {
  /** An optional title for the customer, such as “Mr.” or “Dr.” */
  title?: string;
  /** The customer's first name. */
  firstName: string;
  /** The customer's middle name. */
  middleName?: string;
  /** The customer's last name. */
  lastName: string;
  /** An optional suffix for the customer name, such as “Jr.” or “III.” */
  suffix?: string;
};

export const customerNameSchema: Schema<CustomerName> = s.object<CustomerName>({
  title: s.optional(s.string()),
  firstName: s.string(),
  middleName: s.optional(s.string()),
  lastName: s.string(),
  suffix: s.optional(s.string()),
});
