import React, { useState } from 'react';

const QuestionForm = (props) => {
  const [formData, setFormData] = useState({
    question: "",
    answer: ""
  })

  const handleChange = (event) => {
    event.preventDefault
    const newValue = event.currentTarget.value
    setFormData({
      ...formData,
      [event.currentTarget.name]: newValue
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.addNewQuestion(formData)
    setFormData({
      question: "",
      answer: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">Add Question</label>
      <input type="text" name="question" id="answer" onChange={handleChange}/>
      
      <label htmlFor="answer">Add Answer</label>
      <input type="text" name="answer" id="answer" onChange={handleChange}/>

      <input type="submit" className="button" value="Submit" />
    </form>
  )

}

export default QuestionForm