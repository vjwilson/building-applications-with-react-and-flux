"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var AuthorForm = React.createClass({
  propTypes: {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object
  },

  render: function() {
    return (
      <form onSubmit={this.props.onSave}>
        <legend>Author Information</legend>
        <TextInput name="firstName"
                   label="First Name"
                   onChange={this.props.onChange}
                   value={this.props.author.firstName}
                   error={this.props.errors.firstName} />
        <TextInput name="lastName"
                   label="Last Name"
                   onChange={this.props.onChange}
                   value={this.props.author.lastName}
                   error={this.props.errors.lastName} />
        <div>
          <input type="submit" value="Save" className="btn btn-primary" />
        </div>
      </form>
    );
  }
});

module.exports = AuthorForm;
