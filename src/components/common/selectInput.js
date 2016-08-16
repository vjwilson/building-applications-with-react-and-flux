"use strict";

var React = require('react');

var SelectInput = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    authors: React.PropTypes.array,
    value: React.PropTypes.object
  },

  render: function() {
    var createOption = function(author) {
      author.name = author.firstName + ' ' + author.lastName;
      return (
        <option key={author.id}
                value={author.id}>
          {author.name}
        </option>
      );
    };

    var wrapperClass = 'form-group';
    if (this.props.error && this.props.error.length) {
      wrapperClass += ' ' + 'has-error';
    }

    return (
      <div className={wrapperClass}>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <div className="field">
        <select className="form-control"
                id={this.props.name}
                name={this.props.name}
                ref={this.props.name}
                value={this.props.value}
                onChange={this.props.onChange}
                >
          {this.props.authors.map(createOption, this)}
        </select>
         <div className="input">{this.props.error}</div>
        </div>
      </div>
    );
  }
});

module.exports = SelectInput;
