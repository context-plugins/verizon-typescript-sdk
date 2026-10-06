import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountIdentifierSchema, type AccountIdentifier } from "./account-identifier.js";
import {
  createTargetRequestFieldsSchema,
  type CreateTargetRequestFields,
} from "./create-target-request-fields.js";
import { targetAuthenticationSchema, type TargetAuthentication } from "./target-authentication.js";

/** Details of the target that you want to create. */
export type CreateTargetRequest = {
  /**
   * The ID of the authenticating billing account, in the format
   * `{"billingaccountid":"1234567890-12345"}`.
   */
  accountidentifier?: AccountIdentifier;
  /** The ID of the authenticating billing account. */
  billingaccountid?: string;
  /** Identifies the resource kind. Targets are ts.target. */
  kind?: string;
  /**
   * The endpoint for notifications or data streams. The format depends on the selected
   * `addressscheme`.<br />`streamrest` requires a `host:port` value <br />`streamawsiot` requres a
   * valid ARN.
   */
  address?: string;
  /**
   * The transport format. Valid values are: <br />streamawsiot - streamed data to an AWS account
   * <br />streamrest - streamed REST data to a defined endpoint.
   */
  addressscheme?: string;
  fields?: CreateTargetRequestFields;
  /** Descriptive information about the target. */
  description?: string;
  /** Security identification string created by a POST /targets/actions/newextid request. */
  externalid?: string;
  /** Name of the target. */
  name?: string;
  /** AWS region value. */
  region?: string;
  /** OAuth 2.0 bearer token. */
  key1?: string;
  /** OAuth 2 token and refresh token for TS to stream events to Target. */
  oauth?: TargetAuthentication;
};

export const createTargetRequestSchema: Schema<CreateTargetRequest> = s.object<CreateTargetRequest>({
  accountidentifier: s.optional(s.lazy(() => accountIdentifierSchema)),
  billingaccountid: s.optional(s.string()),
  kind: s.optional(s.string()),
  address: s.optional(s.string()),
  addressscheme: s.optional(s.string()),
  fields: s.optional(s.lazy(() => createTargetRequestFieldsSchema)),
  description: s.optional(s.string()),
  externalid: s.optional(s.string()),
  name: s.optional(s.string()),
  region: s.optional(s.string()),
  key1: s.optional(s.string()),
  oauth: s.optional(s.lazy(() => targetAuthenticationSchema)),
});
