import React, {Component} from 'react'
import CountBoard from './CountBoard'
import CountButton from './CountButton'

class CountComponent extends Component{
    constructor(){
        super()
        this.state= {count: 1}
        //this 는 주어를 가르킨다. 그래서 일반 메소드의 this를 한다면 주어가 업기에 언디파인이 나온다.
        //이런식으로 this를 재바인딩한다.
        // this.chageCount = this.chageCount.bind(this)
    }

    // chageCount() {
    // }
    //그렇기 때문에 간단한 람다를 쓴다? 람다의 this의 의미는 ?
    chageCount = (amount) => {
        //하나의 스테이트만 바꾸는 것이 아아니라 참고하고 있던 모든 하위를 변경해주기 위해 setstae사용
        this.setState({count: this.state.count + amount})
    }


    //모든 컴포넌트는 랜더필요
    render(){
        return(
             //반드시 래펴가 필요하다.
             <>
                <CountBoard num={this.state.count}></CountBoard>
                <CountButton label={"-1"} fn={this.chageCount} amount={-1}></CountButton>
                <CountButton label={"-10"} fn={this.chageCount} amount={-10}></CountButton>
                <CountButton label={"+1"} fn={this.chageCount} amount ={1} ></CountButton>
                <CountButton label={"+10"} fn={this.chageCount} amount ={10} ></CountButton>
             </>
        )
           
        
    }
    
}
//외부에서 사용하기 위해서 바드시 익스포트가 필요하다 
export default CountComponent