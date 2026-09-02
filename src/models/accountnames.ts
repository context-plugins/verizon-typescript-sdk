import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Accountnames = {
  accountNameList?: string[];
};

export const accountnamesSchema: Schema<Accountnames> = s.object<Accountnames>({
  accountNameList: s.optional(s.array(s.string())),
});
