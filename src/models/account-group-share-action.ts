import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { notifySchema, type Notify } from "./notify.js";

export type AccountGroupShareAction = {
  notify?: Notify;
};

export const accountGroupShareActionSchema: Schema<AccountGroupShareAction> =
  s.object<AccountGroupShareAction>({
    notify: s.optional(s.lazy(() => notifySchema)),
  });
