import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  geographicalPathDescriptionSchema,
  type GeographicalPathDescription,
} from "./geographical-path-description.js";

export type GeographicalPath = {
  description?: GeographicalPathDescription;
  direction?: string;
};

export const geographicalPathSchema: Schema<GeographicalPath> = s.object<GeographicalPath>({
  description: s.optional(s.lazy(() => geographicalPathDescriptionSchema)),
  direction: s.optional(s.string()),
});
