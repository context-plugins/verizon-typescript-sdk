import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountLabelsSchema, type AccountLabels } from "./account-labels.js";

export type AssociateLabelRequest = {
  accountName: string;
  labels: AccountLabels;
};

export const associateLabelRequestSchema: Schema<AssociateLabelRequest> = s.object<AssociateLabelRequest>({
  accountName: s.string(),
  labels: accountLabelsSchema,
});
