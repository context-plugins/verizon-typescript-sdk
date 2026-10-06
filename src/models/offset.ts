import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeListLlSchema, type NodeListLl } from "./node-list-ll.js";

/** The sequence of node offsets then describes a path or polygon in the Lat-Long system. */
export type Offset = {
  /**
   * The NodeListLL data structure provides the sequence of signed offset node point values for
   * determining the latitude and longitude. Each LL point is referred to as a node point.
   */
  ll: NodeListLl;
};

export const offsetSchema: Schema<Offset> = s.object<Offset>({
  ll: nodeListLlSchema,
});
