
import * as React from "react";

export class UseState extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            value: props.getInitValue ? props.getInitValue() : props.initValue,
        };
    }
    render() {
        const {next} = this.props;
        const {value} = this.state;

        return next({
            value,
            onChange: (value, cb) => this.setState({value}, cb),
        });
    }
}