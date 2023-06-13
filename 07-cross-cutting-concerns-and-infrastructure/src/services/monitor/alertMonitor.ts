import type { CaptureError } from "~/shared/kernel";

// Can be a Sentry configuration or alike.

export const captureError: CaptureError = async (error: unknown) => {
  const message = `[ERROR]: ${error}`;
  console.error(message);
};
