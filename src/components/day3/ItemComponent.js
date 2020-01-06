import React, {useState} from 'react'
import ItemList from './ItemList'
import ItemTotal from './ItemTotal'





const ItemComponent = () => {

    const items = [
        {pno: 1, pname: "01", price: 3000, ammount:0},
        {pno: 2, pname: "02", price: 4000, ammount:0},
        {pno: 3, pname: "03", price: 7000, ammount:0},
        {pno: 4, pname: "04", price: 13000, ammount:0},
        {pno: 5, pname: "05", price: 23000, ammount:0},
        {pno: 6, pname: "06", price: 43000, ammount:0}
    ]
    

    return(
        <div>
            <h1>Item Component</h1>
            <hr></hr>
            <ItemList arr={items}></ItemList>
            <hr></hr>
            <ItemTotal></ItemTotal>
        </div>
    )
}

export default ItemComponent