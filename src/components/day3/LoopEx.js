import React from 'react'

const LoopEx = () =>{
    const arr =[
        {pno: 1, name: "user1"},
        {pno: 2, name: "user2"},
        {pno: 3, name: "user3"},
        {pno: 4, name: "user4"},
        {pno: 5, name: "user5"}
    ];
    const lis = arr.map(obj => <li key = {obj.pno}>{obj.name}</li>)
    return(
        <ul>
            {lis}
        </ul>
    )
}
export default LoopEx