import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeLLmD64BSchema, type NodeLLmD64B } from "./node-llm-d64-b.js";

/**
 * The NodeOffsetPointLL data frame presents a structure to hold 64 bits sized data frames for a
 * single node geometry path. Nodes are described in terms of latitude and longitude.
 */
export type NodeOffsetPointLl = {
  /** A 64-bit node type with lat-long values expressed in standard SAE 1/10th of a microdegree. */
  nodeLatLon: NodeLLmD64B;
};

export const nodeOffsetPointLlSchema: Schema<NodeOffsetPointLl> = s.object<NodeOffsetPointLl>({
  nodeLatLon: nodeLLmD64BSchema,
  _keysMap: {
    nodeLatLon: "node-LatLon",
  },
});
