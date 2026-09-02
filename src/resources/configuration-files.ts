import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  getListOfFiles(
    request: ConfigurationFiles.GetListOfFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<RetrievesAvailableFilesResponseList, ConfigurationFiles.GetListOfFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.softwareManagementV2("/files/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        query: [{ name: "distributionType", value: request.distributionType, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: retrievesAvailableFilesResponseListSchema },
        errorFactory: ConfigurationFiles.GetListOfFilesError,
      },
      options,
    );
  }

  uploadConfigFile(
    request: ConfigurationFiles.UploadConfigFileRequest,
    options?: RequestOptions,
  ): ApiPromise<UploadConfigurationFilesResponse, ConfigurationFiles.UploadConfigFileError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.softwareManagementV2("/files/{acc}"),
        auth: allAuth(this.#auth.thingspaceOauth, this.#auth.vzM2MToken),
        pathParams: [{ name: "acc", value: request.acc, schema: s.string() }],
        body: { kind: "empty" },
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
    acc: string;
    distributionType: string;
  };

  export class GetListOfFilesError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<GetListOfFilesError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }

  export type UploadConfigFileRequest = {
    acc: string;
  };

  export class UploadConfigFileError extends ResponseError<Declared<"fotaV2Result", FotaV2Result>> {
    static readonly errors: ErrorDecoders<UploadConfigFileError> = [
      { on: 400, kind: "fotaV2Result", decode: { kind: "json", schema: fotaV2ResultSchema } },
    ];
  }
}
