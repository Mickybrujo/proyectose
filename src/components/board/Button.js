import {useSwipeable} from 'react-swipeable'

function Button({number, pos, x,y, handleChange}) {
    const handlers = useSwipeable({
        onSwiped: (eventData) => console.log("User Swiped!", eventData),
        onTap: (event) => console.log(event),
        onSwipedLeft : (event) => {
            handleChange(pos, pos - 1)
        },
        onSwipedRight: (event) => {
            handleChange(pos, pos + 1)
        },
        onSwipedUp: (event) => {
            handleChange(pos, pos - 3)
        },
        onSwipedDown: (event) => {
            handleChange(pos, pos + 3)
        },
    });
    if(!number){
        return(
            <>
            </>
        )
    }
    return(
        <>
                <div className="numero" {...handlers} style={{left: x, top: y}}>
                    {
                        number
                    }
                </div>
            </>
    )
}

export default Button;