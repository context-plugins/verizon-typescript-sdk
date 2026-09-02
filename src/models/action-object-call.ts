import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { actionobjectSchema, type Actionobject } from "./actionobject.js";

export type ActionObjectCall = {
  action?: Actionobject;
};

export const actionObjectCallSchema: Schema<ActionObjectCall> = s.object<ActionObjectCall>({
  action: s.optional(s.lazy(() => actionobjectSchema)),
});
