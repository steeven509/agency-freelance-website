import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Survey = () => {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber);
    
    const prevQuestion = questionNumberInt === 1 ? 1 : questionNumberInt -1
    const nextQuestion = questionNumberInt + 1



    return (
        <div className="survey">
            <h1>Questionnaire</h1>
            <h2>question number : {questionNumberInt}</h2>

            <Link to={`/survey/${prevQuestion}`}>précédent</Link>
            {
              questionNumberInt === 10 ? (
                  <Link to='/results'>Results</Link>
              ) : (
               <Link to={`/survey/${nextQuestion}`}>suivant</Link>    
              ) 
            }
        </div>
    )
}

export default Survey
