import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { devicepropertyselectionSchema, type Devicepropertyselection } from "./devicepropertyselection.js";

export type Devicepropertyfilter = {
  selection?: Devicepropertyselection;
  querytotalcount?: boolean;
};

export const devicepropertyfilterSchema: Schema<Devicepropertyfilter> = s.object<Devicepropertyfilter>({
  selection: s.optional(s.lazy(() => devicepropertyselectionSchema)),
  querytotalcount: s.optional(s.boolean()),
  _keysMap: {
    selection: "$selection",
    querytotalcount: "$querytotalcount",
  },
});
