import React from 'react'
import Button from 'components/board/Button'
import {getRandomSeq} from 'utils'

class BoardModule extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            actualSeq : []
        }
        this.handlePositionChange =  this.handlePositionChange.bind(this)
    }

    componentDidMount(){
        let seq = getRandomSeq()
        let items = []
        
        seq.map((number)=> {
            items.push(number)
            
        })
        items.push(0)
        this.setState({
            actualSeq : items
        })
    }

    handlePositionChange(actualPos, nextPos){
        if(nextPos < 9 && nextPos >= 0){
            let actualItem = this.state.actualSeq[actualPos]            
            let actualSeq = this.state.actualSeq
            actualSeq[actualPos] = this.state.actualSeq[nextPos]
            actualSeq[nextPos] = actualItem
            this.setState({
                actualSeq: actualSeq
            })
        }
    }


    render(){
        let items = []
        let x = 0
        let y = 0
        this.state.actualSeq.map((item, i) => {            
            items.push(
                <Button
                    pos={i}
                    number={item}
                    handleChange={this.handlePositionChange}
                    key={`button-${i}`}
                    x={x}
                    y={ y}
                >
                </Button>
            )
            x += 100
            if((i+ 1) % 3 === 0){
                x = 0
                y += 100
            }
        })
        return(
            <>
                <div className="tablero">
                    {
                        items
                    }
                </div>
            </>
        )
    }

}

export default BoardModule;