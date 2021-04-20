import React from 'react'
import Button from 'components/board/Button'
import Timer from 'components/board/Timer'

import { getRandomSeq, twoArrEqual } from 'utils'

class BoardModule extends React.Component {

    option = 3
    maxNumber = 0
    width = 300
    buttonWidth = 80
    result = []

    constructor(props) {
        super(props)
        this.state = {
            actualSeq: [],
            taps: 0
        }
        this.option = this.props.option ? this.props.option : 4
        this.maxNumber = Math.pow(this.option, 2)
        this.handleOnTab = this.handleOnTab.bind(this)
        this.buttonWidth = this.width / this.option
    }

    componentDidMount() {
        for (var i = 1; i < this.maxNumber; ++i) {
            this.result.push(i)
        }
        let seq = getRandomSeq(this.result)
        seq.push(0)
        this.result.push(0)
        this.setState({
            actualSeq: seq,
            posZero: this.maxNumber - 1
        })
    }

    handleOnTab(position) {
        let result = -1
        let posiblePositions = [position - this.option, position + this.option, position + 1, position - 1]
        for (let i = 0; i < 4; ++i) {
            let nextPos = posiblePositions[i]
            if (nextPos < this.maxNumber && nextPos >= 0) {
                let number = this.state.actualSeq[nextPos]
                if (number === 0) {
                    if ((nextPos) % this.option !== (this.option - 1) || (position) % this.option !== 0) {
                        result = nextPos
                        break;
                    }
                }
            }
        }
        if (result > -1) {
            let actualSeq = this.state.actualSeq
            actualSeq[result] = actualSeq[position]
            actualSeq[position] = 0
            this.setState({
                actualSeq: actualSeq,
                taps: this.state.taps + 1
            })
        }
    }

    render() {       
        return (
            <>
                <div className="container">
                    <div className="columns is-multiline">
                        <Timer
                            taps={this.state.taps}
                        ></Timer>
                        <div className="column is-full">
                            <div className="tablero" style={{ width: this.width, height: this.width, gridTemplateColumns: `repeat(${this.option}, auto)` }}>
                                {
                                     this.state.actualSeq.map((item, i) => {
                                        return(
                                            <Button
                                                pos={i}
                                                number={item}
                                                handleOnClick={this.handleOnTab}
                                                key={`button-${i}`}
                                                width={this.buttonWidth}
                                            >
                                            </Button>
                                        )
                                       
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

}

export default BoardModule;