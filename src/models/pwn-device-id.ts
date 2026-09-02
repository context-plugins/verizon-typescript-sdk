import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PwnDeviceId = {
  id: string;
  kind: string;
};

export const pwnDeviceIdSchema: Schema<PwnDeviceId> = s.object<PwnDeviceId>({
  id: s.string(),
  kind: s.string(),
});
