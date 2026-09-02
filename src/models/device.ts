import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Device = {
  id: string;
  kind: string;
};

export const deviceSchema: Schema<Device> = s.object<Device>({
  id: s.string(),
  kind: s.string(),
});
