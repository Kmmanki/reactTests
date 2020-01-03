import React, {useState} from 'react'
import CountBoard from './CountBoard'
import CountButton from './CountButton'

const CountHookComponent = () => {
    //카운트의 초기값은 0
    const [count, StetCount] = useState(0)

    const changeCount = (amount) => {
        StetCount(count + amount)
    }

    return(
        <>
        <CountBoard  num={count}></CountBoard>
        <CountButton label={"-1"} fn={changeCount} amount={-1}></CountButton>
        <CountButton label={"-10"} fn={changeCount} amount={-10}></CountButton>
        <CountButton label={"+1"} fn={changeCount} amount ={1} ></CountButton>
        <CountButton label={"+10"} fn={changeCount} amount ={10} ></CountButton>
     </>
    )
}
export default CountHookComponent