import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DtoQueryMetricsResponse = {
  critical?: number;
  major?: number;
  minor?: number;
  noalert?: number;
  total?: number;
  deltacritical?: number;
  deltamajor?: number;
  deltaminor?: number;
  deltanoalert?: number;
};

export const dtoQueryMetricsResponseSchema: Schema<DtoQueryMetricsResponse> =
  s.object<DtoQueryMetricsResponse>({
    critical: s.optional(s.number()),
    major: s.optional(s.number()),
    minor: s.optional(s.number()),
    noalert: s.optional(s.number()),
    total: s.optional(s.number()),
    deltacritical: s.optional(s.number()),
    deltamajor: s.optional(s.number()),
    deltaminor: s.optional(s.number()),
    deltanoalert: s.optional(s.number()),
  });
