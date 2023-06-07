import type { PropsWithChildren } from "react";
import { Component } from "react";

type ErrorBoundaryProps = PropsWithChildren;
type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: PropsWithChildren) {
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

  componentDidCatch(error: unknown, errorInfo: unknown) {
    console.log(error, errorInfo);
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
