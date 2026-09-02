import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeLlSchema, type NodeLl } from "./node-ll.js";

export type NodeListLl = {
  nodes: NodeLl[];
};

export const nodeListLlSchema: Schema<NodeListLl> = s.object<NodeListLl>({
  nodes: s.array(s.lazy(() => nodeLlSchema)),
});
