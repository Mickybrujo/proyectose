
function Button({number, pos, x,y, handleOnClick, width}) {
    if(!number){
        return(
            <>
            </>
        )
    }
    return(
        <>
                <div className="column is-full numero" onClick={() => handleOnClick(pos)} style={{left: x, top: y, width : width, height: width}}>
                    {
                        number
                    }
                </div>
            </>
    )
}

export default Button;