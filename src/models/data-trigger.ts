import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountLevelObjectSchema, type AccountLevelObject } from "./account-level-object.js";

export type DataTrigger = {
  accountLevel?: AccountLevelObject;
};

export const dataTriggerSchema: Schema<DataTrigger> = s.object<DataTrigger>({
  accountLevel: s.optional(s.lazy(() => accountLevelObjectSchema)),
});
