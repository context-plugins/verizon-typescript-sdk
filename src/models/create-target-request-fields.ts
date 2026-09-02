import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldsHttpHeadersSchema, type FieldsHttpHeaders } from "./fields-http-headers.js";

export type CreateTargetRequestFields = {
  httpheaders?: FieldsHttpHeaders;
  devicetypes?: string[];
};

export const createTargetRequestFieldsSchema: Schema<CreateTargetRequestFields> =
  s.object<CreateTargetRequestFields>({
    httpheaders: s.optional(s.lazy(() => fieldsHttpHeadersSchema)),
    devicetypes: s.optional(s.array(s.string())),
  });
