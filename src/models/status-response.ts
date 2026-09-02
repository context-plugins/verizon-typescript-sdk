import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subrequestSchema, type Subrequest } from "./subrequest.js";

export type StatusResponse = {
  requestId?: string;
  status?: string;
  subrequests?: Subrequest[];
};

export const statusResponseSchema: Schema<StatusResponse> = s.object<StatusResponse>({
  requestId: s.optional(s.string()),
  status: s.optional(s.string()),
  subrequests: s.optional(s.array(s.lazy(() => subrequestSchema))),
});
