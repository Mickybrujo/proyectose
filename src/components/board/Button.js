
function Button({number, pos, x,y, handleOnClick}) {
    if(!number){
        return(
            <>
            </>
        )
    }
    return(
        <>
                <div className="numero" onClick={() => handleOnClick(pos)} style={{left: x, top: y}}>
                    {
                        number
                    }
                </div>
            </>
    )
}

export default Button;