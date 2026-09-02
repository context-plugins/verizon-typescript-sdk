import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransactionId = {
  txid?: string;
};

export const transactionIdSchema: Schema<TransactionId> = s.object<TransactionId>({
  txid: s.optional(s.string()),
});
