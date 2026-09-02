import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeLLmD64BSchema, type NodeLLmD64B } from "./node-llm-d64-b.js";

export type NodeOffsetPointLl = {
  nodeLatLon: NodeLLmD64B;
};

export const nodeOffsetPointLlSchema: Schema<NodeOffsetPointLl> = s.object<NodeOffsetPointLl>({
  nodeLatLon: nodeLLmD64BSchema,
  _keysMap: {
    nodeLatLon: "node-LatLon",
  },
});
