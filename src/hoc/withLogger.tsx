import { Component, type ComponentType } from 'react';

// Logs mount/unmount of the wrapped component
const withLogger = <P extends object>(Wrapped: ComponentType<P>, label?: string) => {
  const wrappedName = Wrapped.displayName || Wrapped.name || 'Component';
  const logName = label ?? wrappedName;

  class WithLogger extends Component<P> {
    static displayName = `withLogger(${wrappedName})`; // hoisted for DevTools

    componentDidMount() {
      console.log(`[${logName}] mounted`);
    }

    componentWillUnmount() {
      console.log(`[${logName}] unmounted`);
    }

    render() {
      // Cast: TS can't prove Readonly<P> is assignable to P for a generic
      return <Wrapped {...(this.props as P)} />;
    }
  }

  return WithLogger;
};

export default withLogger;