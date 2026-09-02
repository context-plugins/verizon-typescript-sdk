import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FlowInfo = {
  flowServer?: string;
  flowDevice?: string;
  flowDirection?: string;
  flowProtocol?: string;
  qciOption?: string;
};

export const flowInfoSchema: Schema<FlowInfo> = s.object<FlowInfo>({
  flowServer: s.optional(s.string()),
  flowDevice: s.optional(s.string()),
  flowDirection: s.optional(s.string()),
  flowProtocol: s.optional(s.string()),
  qciOption: s.optional(s.string()),
});
