import React from "react"

const BookMark = ({onClick, bookmark}) => {
    return (
    <button onClick={onClick}><i 
        className={`${bookmark ? `bi bi-bookmark-fill`:`bi bi-bookmark`}`}></i>
    </button>)
}

export default BookMark