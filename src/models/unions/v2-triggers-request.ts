import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  accountGroupShareCreateTriggerRequestSchema,
  type AccountGroupShareCreateTriggerRequest,
} from "../account-group-share-create-trigger-request.js";
import {
  accountLevelCreateTriggerRequestSchema,
  type AccountLevelCreateTriggerRequest,
} from "../account-level-create-trigger-request.js";
import { accountLevelObjectSchema, type AccountLevelObject } from "../account-level-object.js";
import {
  accountShareCreateTriggerRequestSchema,
  type AccountShareCreateTriggerRequest,
} from "../account-share-create-trigger-request.js";
import { createtriggerchunkSchema, type Createtriggerchunk } from "../createtriggerchunk.js";
import {
  deviceLevelCreateTriggerRequestSchema,
  type DeviceLevelCreateTriggerRequest,
} from "../device-level-create-trigger-request.js";
import {
  payAsYouGoCreateTriggerRequestSchema,
  type PayAsYouGoCreateTriggerRequest,
} from "../pay-as-you-go-create-trigger-request.js";

export type V2TriggersRequest =
  | AccountLevelCreateTriggerRequest
  | AccountLevelObject
  | DeviceLevelCreateTriggerRequest
  | AccountGroupShareCreateTriggerRequest
  | AccountShareCreateTriggerRequest
  | PayAsYouGoCreateTriggerRequest
  | Createtriggerchunk;

export const v2TriggersRequestSchema: Schema<V2TriggersRequest> = s.of<V2TriggersRequest>(
  s.union([
    s.lazy(() => accountLevelCreateTriggerRequestSchema),
    s.lazy(() => accountLevelObjectSchema),
    s.lazy(() => deviceLevelCreateTriggerRequestSchema),
    s.lazy(() => accountGroupShareCreateTriggerRequestSchema),
    s.lazy(() => accountShareCreateTriggerRequestSchema),
    s.lazy(() => payAsYouGoCreateTriggerRequestSchema),
    s.lazy(() => createtriggerchunkSchema),
  ]),
);
