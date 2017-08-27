import React from 'react';

var Input = React.createClass({
    render: function(){
        return (
            <div className="Input">
                <input  
                    id={this.props.id}
                    autoComplete="false"
                    required
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                />
                <label htmlFor={this.props.id}></label>
            </div>
        );
    }
});

export default Input;