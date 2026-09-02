import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { devicepropertyfilterSchema, type Devicepropertyfilter } from "./devicepropertyfilter.js";

export type ResourceResourceQuery = {
  filter?: Devicepropertyfilter;
};

export const resourceResourceQuerySchema: Schema<ResourceResourceQuery> = s.object<ResourceResourceQuery>({
  filter: s.optional(s.lazy(() => devicepropertyfilterSchema)),
});
