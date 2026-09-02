import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nodeListLlSchema, type NodeListLl } from "./node-list-ll.js";

export type Offset = {
  ll: NodeListLl;
};

export const offsetSchema: Schema<Offset> = s.object<Offset>({
  ll: nodeListLlSchema,
});
