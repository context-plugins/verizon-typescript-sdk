import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ConsentDeleteRequest = {
  accountName?: string;
  deviceList?: string[];
};

export const consentDeleteRequestSchema: Schema<ConsentDeleteRequest> = s.object<ConsentDeleteRequest>({
  accountName: s.optional(s.string()),
  deviceList: s.optional(s.array(s.string())),
});
