import React from 'react'
import Button from 'components/board/Button'
import {getRandomSeq} from 'utils'

class BoardModule extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            actualSeq : []
        }
    }

    componentDidMount(){
        this.setState({
            actualSeq : getRandomSeq()
        })
    }


    render(){
        let items = []
       
        return(
            <>
                <div className="tablero">
                    {
                         this.state.actualSeq.map((item, i) => {
                            return(
                                <Button
                                    data = {item}
                                    key={`button-${i}`}
                                >
                                </Button>
                            )
                        })
                    }
                </div>
            </>
        )
    }

}

export default BoardModule;