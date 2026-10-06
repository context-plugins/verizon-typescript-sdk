import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeOffsetPointLlSchema, type NodeOffsetPointLl } from "./node-offset-point-ll.js";

/**
 * The NodeLL data frame presents a structure to hold data for a signal node point in a lane. Each
 * selected node has a complete lat-long representation.
 */
export type NodeLl = {
  /**
   * The NodeOffsetPointLL data frame presents a structure to hold 64 bits sized data frames for a
   * single node geometry path. Nodes are described in terms of latitude and longitude.
   */
  delta: NodeOffsetPointLl;
};

export const nodeLlSchema: Schema<NodeLl> = s.object<NodeLl>({
  delta: nodeOffsetPointLlSchema,
});
