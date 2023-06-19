import { PropsWithChildren } from "react";
import { ErrorBoundary as Boundary } from "./ErrorBoundary";
import { captureError } from "~/services/monitor";

export const ErrorBoundary = ({ children }: PropsWithChildren) => (
  <Boundary captureError={captureError}>{children}</Boundary>
);
