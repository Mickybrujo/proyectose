
function Button({number, pos, handleOnClick, width}) {
    if(!number){
        return(
            <div className=" numero">
            </div>
        )
    }
    return(
        <>
                <div className=" numero" onClick={() => handleOnClick(pos)} style={{ width : width, height: width}}  >
                    {
                        number
                    }
                </div>
            </>
    )
}

export default Button;