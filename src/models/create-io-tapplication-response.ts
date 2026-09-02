import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateIoTApplicationResponse = {
  appName?: string;
  sharedSecret?: string;
  url?: string;
};

export const createIoTApplicationResponseSchema: Schema<CreateIoTApplicationResponse> =
  s.object<CreateIoTApplicationResponse>({
    appName: s.optional(s.string()),
    sharedSecret: s.optional(s.string()),
    url: s.optional(s.string()),
  });
