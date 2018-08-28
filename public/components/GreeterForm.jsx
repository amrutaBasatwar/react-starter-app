var React = require('react');

var GreeterForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();
        var name = this.refs.name.value;
        var message = this.refs.message.value;
        var update = {};
        if (name.length > 0) {
            this.refs.name.value = '';
            update.name = name;
        }
        if (message.length > 0) {
            this.refs.message.value = '';
            update.message = message;
        }
        this.props.onNewUpdate(update);
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="name" />
                    <br />
                    <textarea type="text" ref="message" placeholder="Enter Message"></textarea>
                    <br />
                    <button>Set Update</button>
                </form>
            </div>
        )
    }
});

module.exports = GreeterForm;