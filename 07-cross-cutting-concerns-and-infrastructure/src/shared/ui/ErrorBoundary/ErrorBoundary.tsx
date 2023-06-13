import type { PropsWithChildren } from "react";
import type { CaptureError } from "~/shared/kernel";
import { Component } from "react";

type ErrorBoundaryProps = PropsWithChildren<{
  captureError: CaptureError;
}>;

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: unknown) {
    this.props.captureError(error);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return !hasError ? (
      children
    ) : (
      <strong>Oh, snap! We're working on this error...</strong>
    );
  }
}
