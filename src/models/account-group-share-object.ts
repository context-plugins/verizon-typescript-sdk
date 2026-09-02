import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  accountGroupShareIndividual1Schema,
  type AccountGroupShareIndividual1,
} from "./account-group-share-individual1.js";

export type AccountGroupShareObject = {
  accountGroupShare?: AccountGroupShareIndividual1;
};

export const accountGroupShareObjectSchema: Schema<AccountGroupShareObject> =
  s.object<AccountGroupShareObject>({
    accountGroupShare: s.optional(s.lazy(() => accountGroupShareIndividual1Schema)),
  });
