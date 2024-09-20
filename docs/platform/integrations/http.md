---
draft: true
---

# HTTP forwarding

:::info
Navigate to: Integrations -> HTTP
:::

Forward data from the Lobaro Platform to any HTTP(s) endpoint.

- **HTTP Method:** The HTTP method to use for the request.
- **Target URL:** Any reachable HTTP server endpoint. (Can use Variable Substitution, for details see below.)
- **Authentication:** One of the following authentication schemes can be used:
  - **Basic Auth:** Adds Username & password to request headers.
  - **Bearer Token:** Adds a Bearer Token to request headers. Just put the Token (without Bearer prefix).
  - **OAuth:** Fetch a OAuth token with the given scope from a Token URL using a ClientId and Secret as BasicAuth credentials. The fetched token is used for all API calls and automatically refreshed when invalid.
  - **Headers:** List of headers to be set on HTTP request in the format: `<FieldName>: <Value>` (e.g. `Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==`)


:::info[Request logging]
At the lower end of the page you can see the last request and potential errors. 
Please note, that we do not update on every request for performance reasons.
:::