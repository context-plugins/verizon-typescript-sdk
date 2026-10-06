import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { configurationSchema, type Configuration } from "./configuration.js";

/** List of fields affected by the event. */
export type Fields = {
  /** List of the field names and values to set. */
  configuration?: Configuration;
};

export const fieldsSchema: Schema<Fields> = s.object<Fields>({
  configuration: s.optional(s.lazy(() => configurationSchema)),
});
