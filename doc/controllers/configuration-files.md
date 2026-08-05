# Configuration Files

```ts
const configurationFilesController = new ConfigurationFilesController(client);
```

## Class Name

`ConfigurationFilesController`

## Methods

* [Get List of Files](../../doc/controllers/configuration-files.md#get-list-of-files)
* [Upload Config File](../../doc/controllers/configuration-files.md#upload-config-file)


# Get List of Files

You can retrieve a list of configuration or supplementary of files for an account.

```ts
async getListOfFiles(
  acc: string,
  distributionType: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<RetrievesAvailableFilesResponseList>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `distributionType` | `string` | Query, Required | Filter the distributionType to only retrieve files for a specific distribution type. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful responses.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`RetrievesAvailableFilesResponseList`](../../doc/models/retrieves-available-files-response-list.md).

## Example Usage

```ts
const acc = '0402196254-00001';

const distributionType = 'HTTP';

try {
  const response = await configurationFilesController.getListOfFiles(
    acc,
    distributionType
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof FotaV2ResultError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |


# Upload Config File

Uploads a configuration/supplementary file for an account. ThingSpace generates a fileName after the upload and is returned in the response.

```ts
async uploadConfigFile(
  acc: string,
  fileupload?: FileWrapper,
  fileVersion?: string,
  make?: string,
  model?: string,
  localTargetPath?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<UploadConfigurationFilesResponse>>
```

## Authentication

This endpoint requires [thingspace_oauth](../../doc/auth/oauth-2-client-credentials-grant.md) **AND** [VZ-M2M-Token](../../doc/auth/custom-header-signature.md)

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `acc` | `string` | Template, Required | Account identifier. |
| `fileupload` | `FileWrapper \| undefined` | Form, Optional | The file to upload. |
| `fileVersion` | `string \| undefined` | Form, Optional | Version of the file. |
| `make` | `string \| undefined` | Form, Optional | The software-applicable device make. |
| `model` | `string \| undefined` | Form, Optional | The software-applicable device model. |
| `localTargetPath` | `string \| undefined` | Form, Optional | Local target path on the device. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

**200**: Successful responses.

This method returns an [`ApiResponse`](../../doc/api-response.md) instance. The `result` property of this instance returns the response data which is of type [`UploadConfigurationFilesResponse`](../../doc/models/upload-configuration-files-response.md).

## Example Usage

```ts
const acc = '0402196254-00001';

const fileVersion = '1.0';

const make = 'Verizon';

const model = 'VZW1';

const localTargetPath = '/VZWFOTA/hello-world.txt';

try {
  const response = await configurationFilesController.uploadConfigFile(
    acc,
    undefined,
    fileVersion,
    make,
    model,
    localTargetPath
  );

  // Extracting fully parsed response body.
  console.log(response.result);

  // Extracting response status code.
  console.log(response.statusCode);
  // Extracting response headers.
  console.log(response.headers);
  // Extracting response body of type `string | Stream`
  console.log(response.body);
} catch (error) {
  if (error instanceof ApiError) {
    // Extracting response error status code.
    console.log(error.statusCode);
    // Extracting response error headers.
    console.log(error.headers);
    // Extracting response error body of type `string | Stream`.
    console.log(error.body);
    if (error instanceof FotaV2ResultError) {
      console.log(error.result);
    }
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Unexpected error. | [`FotaV2ResultError`](../../doc/models/fota-v2-result-error.md) |

