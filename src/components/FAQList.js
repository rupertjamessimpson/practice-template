import React, { useState } from 'react';
import Question from './Question';
import QuestionForm from './QuestionForm';

const FAQList = (props) => {
  const [questions, setQuestions] = useState([])
  const [selectedQuestion, setSelectedQuestion] = useState([])

  const toggleQuestionSelect = (id) => {
    if(id === selectedQuestion) {
      setSelectedQuestion(null)
    }
    else {
      setSelectedQuestion(id)
    }
  }

  const fetchData = async () => {
    try {
      const response = await fetch("/api/v1/questions")
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw(error)
      }
      const questionListItems = await response.json()
      setQuestions(questionListItems)
    } catch(err) {
      console.error(`Error in fetch: ${err.message}`)
    }
  }

  fetchData()

  const addNewQuestion = async (formPayload) => {
    const response = await fetch("/api/v1/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formPayload)
    })
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
    const newQuestion = await response.json()
    setQuestions([
      ...questions, newQuestion
    ])
  }

  const questionListItems = questions.map(question => {
    let selected;
    if (selectedQuestion === question.id) {
      selected = true
    }

    let handleClick = () => { toggleQuestionSelect(question.id) }

    return(
      <Question
        key={question.id}
        question={question.question}
        answer={question.answer}
        selected={selected}
        handleClick={handleClick}
      />
    )
  })

  return(
    <div className='page'>
      <h1>We Are Here To Help</h1>
      <QuestionForm addNewQuestion={addNewQuestion}/>
      <div className='question-list'>
        {questionListItems}
      </div>
    </div>
  )

}

export default FAQList;