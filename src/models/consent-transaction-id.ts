import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The transaction ID of the request that you want to cancel, from the POST /devicelocations
 * synchronus response.
 */
export type ConsentTransactionId = {
  transactionId?: string;
  status?: string;
};

export const consentTransactionIdSchema: Schema<ConsentTransactionId> = s.object<ConsentTransactionId>({
  transactionId: s.optional(s.string()),
  status: s.optional(s.string()),
});
