import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { geoFenceSchema, type GeoFence } from "./geo-fence.js";
import { MessageStandard, messageStandardSchema } from "./message-standard.js";
import { message4Schema, type Message4 } from "./unions/message4.js";

/**
 * Request for /api/v1/application/configurations/geofence POST endpoint. It requires the vendorId,
 * geofence, messageStandard, messages and isActive fields to be populated.
 */
export type GeoFenceConfigurationRequest = {
  /** Name of the configuration. */
  name?: string;
  /** Description of the configuration. */
  description?: string;
  /**
   * The GeoJSON representation of geofence. Geofence supports the following geometry types:
   * LineString, Polygon, MultiLineString, and MultiPolygon. The system only supports a single
   * Feature in the FeatureCollection, so only one Line, Polygon, MultiLine or MultiPolygon can be
   * defined within one Geofencing configuration.
   */
  geoFence: GeoFence;
  /**
   * Select which V2X messaging standard will be used for the message generation. The following
   * options are supported:
   *   - "etsi": The message will be generated using the ETSI (European) standard (e.g. DENM).
   *   - "sae": The message will be generated using the SAE J2735 (North American) standard (e.g.
   *     RSA, TIM).
   *   - if not sent while POST, defaults to "sae"
   *   - mandatory to send "etsi" standard here, if ETSI messages are being sent in config
   *
   * @default MessageStandard.Sae
   */
  messageStandard?: MessageStandard;
  /**
   * List of predefined messages that belongs to the geofence. These are the messages that are sent
   * out by the system when the Trigger Condition for the message is met.
   */
  messages: Message4[];
  isActive: boolean;
};

export const geoFenceConfigurationRequestSchema: Schema<GeoFenceConfigurationRequest> =
  s.object<GeoFenceConfigurationRequest>({
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    geoFence: geoFenceSchema,
    messageStandard: s.defaulted(messageStandardSchema, MessageStandard.Sae),
    messages: s.array(s.lazy(() => message4Schema)),
    isActive: s.boolean(),
  });
