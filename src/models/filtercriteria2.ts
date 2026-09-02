import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Filtercriteria2 = {
  filterCriteria?: Record<string, unknown>[];
};

export const filtercriteria2Schema: Schema<Filtercriteria2> = s.object<Filtercriteria2>({
  filterCriteria: s.optional(s.array(s.record(s.string(), s.unknown()))),
});
