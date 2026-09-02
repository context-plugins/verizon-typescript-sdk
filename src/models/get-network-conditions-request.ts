import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { coordinatesSchema, type Coordinates } from "./coordinates.js";

export type GetNetworkConditionsRequest = {
  accountName: string;
  locationType: string;
  coordinates: Coordinates;
};

export const getNetworkConditionsRequestSchema: Schema<GetNetworkConditionsRequest> =
  s.object<GetNetworkConditionsRequest>({
    accountName: s.string(),
    locationType: s.string(),
    coordinates: coordinatesSchema,
  });
