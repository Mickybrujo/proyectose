import React from 'react'
import Board from 'components/board/Module'

class Home extends React.Component {

    render() {
        return (
            <>
                <div>
                    <div className="columns is-multiline">
                        <div className="column ">
                            Nombre 
                        </div>
                        <div className="column ">
                            <div className="field">

                            </div>
                        </div>
                        <div className="column is-full">
                            Opciones del juego
                        </div>
                        <div className="column is-full">
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Home