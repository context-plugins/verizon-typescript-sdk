import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeLlSchema, type NodeLl } from "./node-ll.js";

/**
 * The NodeListLL data structure provides the sequence of signed offset node point values for
 * determining the latitude and longitude. Each LL point is referred to as a node point.
 */
export type NodeListLl = {
  /** The NodeSetLL data frame consists of a list of NodeLL entries using LL offsets. */
  nodes: NodeLl[];
};

export const nodeListLlSchema: Schema<NodeListLl> = s.object<NodeListLl>({
  nodes: s.array(s.lazy(() => nodeLlSchema)),
});
