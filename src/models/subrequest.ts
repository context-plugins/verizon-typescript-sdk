import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { gioDeviceIdSchema, type GioDeviceId } from "./gio-device-id.js";

export type Subrequest = {
  ids?: GioDeviceId;
  status?: string;
};

export const subrequestSchema: Schema<Subrequest> = s.object<Subrequest>({
  ids: s.optional(s.lazy(() => gioDeviceIdSchema)),
  status: s.optional(s.string()),
});
