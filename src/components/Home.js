import React from 'react'
import Board from 'components/board/Module'
import redux from 'reducers/utils/redux'

class Home extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            name: '',
            button: 3,
            games: [],
            reverse: false,
            isPlaying: false
        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.onButtonClick = this.onButtonClick.bind(this)
        this.onButtonReverse = this.onButtonReverse.bind(this)
    }

    componentDidMount() {
        let callback = (res) => {
            console.log(res)
            this.setState({
                games: res,
            })
        }

        this.props.getResult({}, callback)
    }

    handleNameChange(e) {
        let name = e.target.value
        this.setState({
            name: name
        })
    }

    onButtonClick(button) {
        this.setState({
            button: button
        })
    }

    onButtonReverse(button) {
        this.setState({
            reverse: button,
            isPlaying: true
        })
    }

    render() {
        if (this.state.isPlaying) {
            return (
                <Board
                    option={this.state.button}
                    reverse={this.state.reverse}
                    name={this.state.name}
                    saveResult={this.props.saveResult}
                >
                </Board>
            )
        }
        return (
            <>

                <div>

                    <div className="columns is-multiline">
                        <div className="column is-full">
                            Ganadores anteriores
                        </div>
                        {
                            this.state.games.map((item, i) => {
                                console.log(item)
                                return (
                                    <div className="column is-full" key={`${i}`}>
                                        {i} - {item.name} - {item.time} - {item.movements}
                                    </div>
                                )
                            })
                        }
                        <div className="column is-full">
                            Nombre
                        </div>
                        <div className="column is-full">
                            <div className="field">
                                <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                            </div>
                        </div>
                        <div className="column is-full">
                            Opciones del juego
                        </div>
                        <div className="column is-full">
                            <div type="buttons">
                                <button className="button" onClick={() => this.onButtonClick(3)}>3x3</button>
                                <button className="button" onClick={() => this.onButtonClick(4)}>4x4</button>
                            </div>
                        </div>
                        <div className="column is-full">
                            Forma de juego
                        </div>
                        <div className="column is-full">
                            <div type="buttons">
                                <button className="button" onClick={() => this.onButtonReverse(false)}>Normal</button>
                                <button className="button" onClick={() => this.onButtonReverse(true)}>Reversa</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default redux(Home)