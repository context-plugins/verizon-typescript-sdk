import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { gbiattribute15Schema, type Gbiattribute15 } from "../gbiattribute15.js";
import { gbiattribute25Schema, type Gbiattribute25 } from "../gbiattribute25.js";

export type ExtendedAttribute1 = Gbiattribute15 | Gbiattribute25;

export const extendedAttribute1Schema: Schema<ExtendedAttribute1> = s.of<ExtendedAttribute1>(
  s.union([s.lazy(() => gbiattribute15Schema), s.lazy(() => gbiattribute25Schema)]),
);
