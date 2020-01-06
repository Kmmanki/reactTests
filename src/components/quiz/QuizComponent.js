import React, {useState} from 'react'
import QuizBoard from './QuizBoard'
import QuizInput from './QuizInput'

const QuizComponent = ({arr}) => {



    const [idx,SetIdx] = useState(0);
    const [end,setEnd] = useState(false)
    const [correct,setCorrect] = useState(true)


  

    const checkAnswer =(userInput) =>{
        // console.log("this check answer");
        // console.log(userInput);
        if(arr[idx].answer === userInput){
            if (idx === arr.length-1) {
                setEnd(true);
                return;
            }
            console.log("정답");
            SetIdx(idx+1)
        }else{
            setCorrect(false)
        }
        
    }

    return (
        <div>

            {correct ? end ? <h1>너는 퀴즈왕</h1>: <><QuizBoard title={arr[idx].title}></QuizBoard>   
              <QuizInput fn={checkAnswer}></QuizInput></> : <h1>나가</h1> }
            
        </div>
    )
}
export default QuizComponent