import React from "react"

const Quality = ({color, name, _id}) => {
    /*console.log('color', color)
    console.log(name)
    console.log(_id)*/
    return <span key={_id} className={'badge bg-' + color + ' m-1'}>{name}</span>
}

export default Quality