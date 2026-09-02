import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  accountGroupShareUpdateTriggerRequestSchema,
  type AccountGroupShareUpdateTriggerRequest,
} from "../account-group-share-update-trigger-request.js";
import {
  accountLevelUpdateTriggerRequestSchema,
  type AccountLevelUpdateTriggerRequest,
} from "../account-level-update-trigger-request.js";
import {
  accountShareUpdateTriggerRequestSchema,
  type AccountShareUpdateTriggerRequest,
} from "../account-share-update-trigger-request.js";
import {
  deviceLevelUpdateTriggerRequestSchema,
  type DeviceLevelUpdateTriggerRequest,
} from "../device-level-update-trigger-request.js";
import {
  payAsYouGoUpdateTriggerRequestSchema,
  type PayAsYouGoUpdateTriggerRequest,
} from "../pay-as-you-go-update-trigger-request.js";
import { updatetriggerchunkSchema, type Updatetriggerchunk } from "../updatetriggerchunk.js";

export type V2TriggersRequest1 =
  | AccountLevelUpdateTriggerRequest
  | DeviceLevelUpdateTriggerRequest
  | AccountGroupShareUpdateTriggerRequest
  | AccountShareUpdateTriggerRequest
  | PayAsYouGoUpdateTriggerRequest
  | Updatetriggerchunk;

export const v2TriggersRequest1Schema: Schema<V2TriggersRequest1> = s.of<V2TriggersRequest1>(
  s.union([
    s.lazy(() => accountLevelUpdateTriggerRequestSchema),
    s.lazy(() => deviceLevelUpdateTriggerRequestSchema),
    s.lazy(() => accountGroupShareUpdateTriggerRequestSchema),
    s.lazy(() => accountShareUpdateTriggerRequestSchema),
    s.lazy(() => payAsYouGoUpdateTriggerRequestSchema),
    s.lazy(() => updatetriggerchunkSchema),
  ]),
);
