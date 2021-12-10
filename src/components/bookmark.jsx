import React from "react"

const BookMark = ({onClick, status}) => {
    console.log('here', onClick)


    /*<i class="bi bi-bookmark-fill"></i>*/
    return <button><i className="bi bi-bookmark"></i></button>
}

export default BookMark