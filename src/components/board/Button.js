import React from 'react'

class Button extends React.Component{

    render(){
        let data = this.props.data
        return(
            <>
                <div className="numero">
                    {
                        data
                    }
                </div>
            </>
        )
    }

}

export default Button;