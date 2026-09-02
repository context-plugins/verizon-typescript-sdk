import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type NodeLLmD64B = {
  lon: number;
  lat: number;
};

export const nodeLLmD64BSchema: Schema<NodeLLmD64B> = s.object<NodeLLmD64B>({
  lon: s.number(),
  lat: s.number(),
});
