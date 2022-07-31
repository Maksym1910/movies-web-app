import React from 'react';

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean,
  error: Error | null,
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.hasError) {
      console.log(this.state.error);
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
