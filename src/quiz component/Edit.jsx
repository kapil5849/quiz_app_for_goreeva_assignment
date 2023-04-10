import React, { useState } from 'react';

function Edit() {
  const [quizName, setQuizName] = useState('');
  const [quizDescription, setQuizDescription] = useState('');
  const [points, setPoints] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0);
  const [questions, setQuestions] = useState([{ questionText: '', answerOptions: [''] }]);

  const handleQuizNameChange = (event) => {
    setQuizName(event.target.value);
  };

  const handleQuizDescriptionChange = (event) => {
    setQuizDescription(event.target.value);
  };

  const handlePointsChange = (event) => {
    setPoints(event.target.value);
  };

  const handleTimeLimitChange = (event) => {
    setTimeLimit(event.target.value);
  };

  const handleQuestionTextChange = (event, index) => {
    const newQuestions = [...questions];
    newQuestions[index] = { ...newQuestions[index], questionText: event.target.value };
    setQuestions(newQuestions);
  };

  const handleAnswerOptionChange = (event, questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answerOptions[optionIndex] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { questionText: '', answerOptions: [''] }]);
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleAddAnswerOption = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].answerOptions.push('');
    setQuestions(newQuestions);
  };

  const handleDeleteAnswerOption = (questionIndex, optionIndex) => {
    const newQuestions = [...questions];
    newQuestions[questionIndex].answerOptions.splice(optionIndex, 1);
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      quizName,
      quizDescription,
      points,
      timeLimit,
      questions,
    });
  };

  return (
    <div>
      <h1>Create Quiz</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Quiz Name:
          <input type="text" value={quizName} onChange={handleQuizNameChange} />
        </label>
        <br />
        <label>
          Quiz Description:
          <input type="text" value={quizDescription} onChange={handleQuizDescriptionChange} />
        </label>
        <br />
        <label>
          Points:
          <input type="number" value={points} onChange={handlePointsChange} />
        </label>
        <br />
        <label>
          Time Limit:
          <input type="number" value={timeLimit} onChange={handleTimeLimitChange} />
        </label>
        <br />
        <h2>Questions:</h2>
        {questions.map((question, index) => (
          <div key={index}>
            <label>
              Question {index + 1}:
              <input type="text" value={question.questionText} onChange={(event) => handleQuestionTextChange(event, index)} />
            </label>
            <button type="button" onClick={() => handleDeleteQuestion(index)}>Delete Question</button>
            <br />
                        {question.answerOptions.map((option, optionIndex) => (
              <div key={optionIndex}>
                <label>
                  Answer Option {optionIndex + 1}:
                  <input type="text" value={option} onChange={(event) => handleAnswerOptionChange(event, index, optionIndex)} />
                </label>
                <button type="button" onClick={() => handleDeleteAnswerOption(index, optionIndex)}>Delete Option</button>
                <br />
              </div>
            ))}
            <button type="button" onClick={() => handleAddAnswerOption(index)}>Add Answer Option</button>
            <br />
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion}>Add Question</button>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Edit;
