import React from "react";
import { Interface } from "readline";

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, msg: "" };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.log(error, errorInfo);
  }

  static getDerivedStateFromError(error: any){
    return {hasError: true, msg: error}
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.errorUI) {
        return this.props.errorUI;
      } else {
        return <h3>{this.state.msg}</h3>;
      }
    }

    // return this.props.children
  }
}

interface ErrorBoundaryState {
  hasError: boolean;
  msg: string;
}

interface ErrorBoundaryProps {
  errorUI: boolean;
}
