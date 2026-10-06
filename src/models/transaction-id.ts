import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The transaction ID of the request that you want to cancel, from the POST /devicelocations
 * synchronus response.
 */
export type TransactionId = {
  txid?: string;
};

export const transactionIdSchema: Schema<TransactionId> = s.object<TransactionId>({
  txid: s.optional(s.string()),
});
