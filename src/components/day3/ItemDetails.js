import React from 'react'

const ItemDetails = ({pno, pname, price, ammount}) =>{

    return(
        <li key={pno}>
            <div>
                <h4>상품명: {pname}</h4>
                <h4>가격: {price}</h4>
                <h4><input value={ammount} type='number'></input></h4>
                <hr></hr>
                
            </div>
        </li>
    )
}

export default ItemDetails