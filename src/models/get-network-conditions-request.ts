import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { coordinatesSchema, type Coordinates } from "./coordinates.js";

/** Get network conditions. */
export type GetNetworkConditionsRequest = {
  /** Account name. */
  accountName: string;
  /** Type of location detail. */
  locationType: string;
  /** Coordinates information. */
  coordinates: Coordinates;
};

export const getNetworkConditionsRequestSchema: Schema<GetNetworkConditionsRequest> =
  s.object<GetNetworkConditionsRequest>({
    accountName: s.string(),
    locationType: s.string(),
    coordinates: coordinatesSchema,
  });
