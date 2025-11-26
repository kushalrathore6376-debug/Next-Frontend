// Reusable API client for GET/POST/PUT/DELETE with loading and error handling
// Usage:
//   const { data, error, status } = await apiRequest({ url: "/api/posts", method: "GET", onLoading: setLoading });
//   const { data, error } = await post("/api/posts", { title: "Hello" }, { onLoading: setLoading });
//
// Notes:
// - Returns a consistent envelope: { data, error, status }
// - JSON is auto-serialized for request bodies and auto-parsed for responses
// - Pass { timeoutMs } to cancel long requests, or your own AbortSignal via { signal }
// - Provide onLoading(boolean) to toggle UI loading states

function buildHeaders(baseHeaders = {}, hasJsonBody = false) {
  const headers = { ...baseHeaders };
  if (hasJsonBody && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }
  return headers;
}

function parseContentType(contentType) {
  if (!contentType) return "text";
  if (contentType.includes("application/json")) return "json";
  if (contentType.startsWith("text/")) return "text";
  return "blob";
}

export async function apiRequest({
  url,
  method = "GET",
  data,
  headers,
  onLoading,
  timeoutMs = 15000,
  signal,
  credentials, // e.g., "include" if needed for auth cookies
}) {
  const controller = !signal ? new AbortController() : null;
  const timeoutId =
    !signal && timeoutMs > 0
      ? setTimeout(() => controller.abort(), timeoutMs)
      : null;

  const hasBody = data !== undefined && data !== null && method !== "GET";
  const requestInit = {
    method,
    headers: buildHeaders(headers, hasBody),
    signal: signal || controller?.signal,
    credentials,
  };
  if (hasBody) {
    requestInit.body =
      typeof data === "string" || data instanceof FormData
        ? data
        : JSON.stringify(data);
  }

  try {
    onLoading?.(true);
    const res = await fetch(url, requestInit);
    const contentType = parseContentType(res.headers.get("content-type"));
    let payload;
    try {
      if (contentType === "json") payload = await res.json();
      else if (contentType === "text") payload = await res.text();
      else payload = await res.blob();
    } catch (_) {
      payload = null;
    }

    if (!res.ok) {
      const error =
        payload && typeof payload === "object"
          ? payload
          : { message: res.statusText || "Request failed" };
      return { data: null, error, status: res.status };
    }
    return { data: payload, error: null, status: res.status };
  } catch (err) {
    const isAbort = err?.name === "AbortError";
    return {
      data: null,
      error: { message: isAbort ? "Request aborted" : err?.message || "Network error" },
      status: 0,
    };
  } finally {
    if (timeoutId) clearTimeout(timeoutId);
    onLoading?.(false);
  }
}

export function get(url, { headers, onLoading, timeoutMs, signal, credentials } = {}) {
  return apiRequest({ url, method: "GET", headers, onLoading, timeoutMs, signal, credentials });
}

export function post(url, data, { headers, onLoading, timeoutMs, signal, credentials } = {}) {
  return apiRequest({ url, method: "POST", data, headers, onLoading, timeoutMs, signal, credentials });
}

export function put(url, data, { headers, onLoading, timeoutMs, signal, credentials } = {}) {
  return apiRequest({ url, method: "PUT", data, headers, onLoading, timeoutMs, signal, credentials });
}

export function del(url, { headers, onLoading, timeoutMs, signal, credentials } = {}) {
  return apiRequest({ url, method: "DELETE", headers, onLoading, timeoutMs, signal, credentials });
}


