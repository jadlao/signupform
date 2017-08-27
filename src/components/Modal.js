import React from 'react';
import Input from './Input';

var Modal = React.createClass({
    render: function(){
        return (
            <div className="Modal">
                <form 
                    onSubmit={this.props.onSubmit}
                    className="ModalForm">
                    <Input 
                        id="name"
                        type="text"
                        placeholder="Enter your name" />
                    <Input  
                        id="username"
                        type="email"
                        placeholder="Enter your email" />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password" />
                    <button>
                        Log in <i className="fa fa-fw fa-chevron-right"></i>
                    </button>
                </form>
            </div>
        );
    }
});

export default Modal;