import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeOffsetPointLlSchema, type NodeOffsetPointLl } from "./node-offset-point-ll.js";

export type NodeLl = {
  delta: NodeOffsetPointLl;
};

export const nodeLlSchema: Schema<NodeLl> = s.object<NodeLl>({
  delta: nodeOffsetPointLlSchema,
});
