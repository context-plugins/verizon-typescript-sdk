import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { coordinatesSchema, type Coordinates } from "./coordinates.js";

export type Locationscoord = {
  coordinatesList?: Coordinates[];
};

export const locationscoordSchema: Schema<Locationscoord> = s.object<Locationscoord>({
  coordinatesList: s.optional(s.array(s.lazy(() => coordinatesSchema))),
});
