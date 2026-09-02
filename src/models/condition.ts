import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { keyschunk2Schema, type Keyschunk2 } from "./keyschunk2.js";

export type Condition = {
  condition?: Keyschunk2[];
};

export const conditionSchema: Schema<Condition> = s.object<Condition>({
  condition: s.optional(s.array(s.lazy(() => keyschunk2Schema))),
});
