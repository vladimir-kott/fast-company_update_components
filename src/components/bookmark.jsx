import React from "react"

const BookMark = ({onClick, bookmark}) => {
    
    /*<i class="bi bi-bookmark-fill"></i>*/
    console.log('true dfgdfg ', bookmark)

    if (bookmark){
        /*console.log('true', bookmark)*/
        return <button onClick={onClick}><i className="bi bi-bookmark-fill"></i></button>
    }
    /*console.log('false', bookmark)*/
    return <button onClick={onClick}><i className="bi bi-bookmark"></i></button>
}

export default BookMark