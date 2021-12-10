import React from "react"

const SearchStatus = ({length}) => {
    /*console.log(length)*/
    const renderPhrase = (number) => {
        let text = ''
        let lastnumber = number
        if (number.length >= 10){
            lastnumber = String(number).slice(-1)
        }

        if (lastnumber === 1 || lastnumber > 4){
            text = ' человек тусанет с тобой сегодня'
        }else if (lastnumber === 2 || lastnumber === 3 || lastnumber === 4){
            text = ' человека тусанут с тобой сегодня'
        }
        return number + text
    }

    if (length !== 0){
        return(
            <h3><span className="badge bg-primary m-2">{renderPhrase(length)}</span></h3>
        )
    }
    return (
        <h3><span className="badge bg-danger m-2">Никто с тобой не тусанет</span></h3>
    )
}

export default SearchStatus