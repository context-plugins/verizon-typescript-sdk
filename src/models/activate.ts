import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Activate = {
  profile: string;
};

export const activateSchema: Schema<Activate> = s.object<Activate>({
  profile: s.string(),
});
