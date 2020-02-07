// Take in a component as argument WrappedComponent
function simpleHOC(WrappedComponent) {
    // And return a new anonymous component
    return class extends React.Component {
        render() {
            return <WrappedComponent {...this.props} />;
        }
    };
}
