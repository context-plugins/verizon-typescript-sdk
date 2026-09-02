import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HyperPreciseLocationCallback = {
  name: string;
  url: string;
};

export const hyperPreciseLocationCallbackSchema: Schema<HyperPreciseLocationCallback> =
  s.object<HyperPreciseLocationCallback>({
    name: s.string(),
    url: s.string(),
  });
