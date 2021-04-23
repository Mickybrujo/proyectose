function StatsModule({ name, taps, restart }) {
    return (
        <>
            <div className="container">
                <div className="columns is-multiline">
                    <div className="tablero">
                        <div className="columns is-multiline">
                            <div className="column is-full">
                                <b>Felicidades {name}!</b>
                            </div>
                            <div className="column is-full">
                                Total de taps: <b>{taps}</b>
                            </div>
                            <div className="column is-full">
                                <button type="button" onClick={restart}>Volver a jugar </button>
                            </div>
                            <div className="column is-full">
                                <a type="button" href="/">Reiniciar el juego </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default StatsModule