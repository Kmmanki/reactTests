import React from 'react'
import ItemDetails from './ItemDetails'

const ItemList = ({arr}) =>{

    const lis = arr.map(item => <ItemDetails {...item} ></ItemDetails>)
    return(
        <ul>
            {lis}
        </ul>
    )
}
export default ItemList