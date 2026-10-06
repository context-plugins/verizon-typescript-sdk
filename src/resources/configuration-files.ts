import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { fotaV2ResultSchema, type FotaV2Result } from "../models/fota-v2-result.js";
import {
  retrievesAvailableFilesResponseListSchema,
  type RetrievesAvailableFilesResponseList,
} from "../models/retrieves-available-files-response-list.js";
import {
  uploadConfigurationFilesResponseSchema,
  type UploadConfigurationFilesResponse,
} from "../models/upload-configuration-files-response.js";
import type { Servers } from "../servers.js";

export class ConfigurationFiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieves a list of available files.
   *
   * @remarks
   * You can retrieve a list of configuration or supplementary of files for an account.
   *
   * @returns Successful responses.
   *
   * @throws {@link ConfigurationFiles.GetListOfFilesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getListOfFiles(
    request: ConfigurationFiles.GetListOfFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrievesAvailableFilesResponseList, ConfigurationFiles.GetListOfFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.softwareManagementV2("/files/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [{ name: "distributionType", value: request.distributionType, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrievesAvailableFilesResponseListSchema },
        errorFactory: ConfigurationFiles.GetListOfFilesError,
      },
      options,
    );
  }

  /**
   * Uploads a configuration supplementary file for an account.
   *
   * @remarks
   * Uploads a configuration/supplementary file for an account. ThingSpace generates a fileName
   * after the upload and is returned in the response.
   *
   * @returns Successful responses.
   *
   * @throws {@link ConfigurationFiles.UploadConfigFileError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link VerizonError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  uploadConfigFile(
    request: ConfigurationFiles.UploadConfigFileRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadConfigurationFilesResponse, ConfigurationFiles.UploadConfigFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.softwareManagementV2("/files/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "multipart",
          value: [
            { kind: "file", name: "fileupload", value: request.fileupload },
            { kind: "text", name: "fileVersion", value: request.fileVersion, schema: s.optional(s.string()) },
            { kind: "text", name: "make", value: request.make, schema: s.optional(s.string()) },
            { kind: "text", name: "model", value: request.model, schema: s.optional(s.string()) },
            {
              kind: "text",
              name: "localTargetPath",
              value: request.localTargetPath,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: uploadConfigurationFilesResponseSchema },
        errorFactory: ConfigurationFiles.UploadConfigFileError,
      },
      options,
    );
  }
}

export namespace ConfigurationFiles {
  export type GetListOfFilesRequest = {
    /** Account identifier. */
    acc: string;
    /** Filter the distributionType to only retrieve files for a specific distribution type. */
    distributionType: string;
  };

  export class GetListOfFilesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<GetListOfFilesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type UploadConfigFileRequest = {
    /** Account identifier. */
    acc: string;
    /** The file to upload. */
    fileupload?: FileInput;
    /** Version of the file. */
    fileVersion?: string;
    /** The software-applicable device make. */
    make?: string;
    /** The software-applicable device model. */
    model?: string;
    /** Local target path on the device. */
    localTargetPath?: string;
  };

  export class UploadConfigFileError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"fotaV2Result", FotaV2Result>>;

    static readonly errors: ErrorDecoders<UploadConfigFileError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
