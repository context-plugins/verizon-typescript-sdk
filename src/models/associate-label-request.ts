import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountLabelsSchema, type AccountLabels } from "./account-labels.js";

export type AssociateLabelRequest = {
  /**
   * The name of a billing account. An account name is usually numeric, and must include any leading
   * zeros.
   */
  accountName: string;
  /** Maximum of 2,000 objects are allowed in the array. */
  labels: AccountLabels;
};

export const associateLabelRequestSchema: Schema<AssociateLabelRequest> = s.object<AssociateLabelRequest>({
  accountName: s.string(),
  labels: accountLabelsSchema,
});
