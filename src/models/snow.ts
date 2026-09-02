import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type13Schema, type Type13 } from "./type13.js";

export type Snow = {
  type?: Type13;
};

export const snowSchema: Schema<Snow> = s.object<Snow>({
  type: s.optional(s.lazy(() => type13Schema)),
});
