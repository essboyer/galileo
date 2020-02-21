import React, { Component } from 'react';

class SquareButton extends Component {
    state = { 
        handleClick() {
            
        }

    };

    render() { 
        return ( 
            <>
                <label></label>
                <Button onClick={this.state.handleClick()} className="" />
            </>
         );
    }
}
