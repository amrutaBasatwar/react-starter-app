var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

var Greeter = React.createClass({
    getDefaultProps: function () {
        return {
            name: 'React',
            message: 'this is default msg!!'
        };
    },
    getInitialState: function () {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    onNewUpdate: function (update) {
        this.setState({
            name: update.name,
            message: update.message
        });
    },
    render: function () {

        var name = this.state.name;
        var message = this.state.message;
        return (
            <div>
                <GreeterMessage name={name} message={message} />
                <GreeterForm onNewUpdate={this.onNewUpdate} />
            </div>

        );
    }
});
module.exports = Greeter;