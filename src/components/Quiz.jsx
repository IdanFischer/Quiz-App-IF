import { useState } from "react"
import QuizCard from "./QuizCard"
import QuizResult from "./QuizResult"
import { data } from "../data/data"

export default function Quiz() {
  const [questionId, setQuestionId] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const length = data.length

  const handleReset = () => {
    setShowScore(false)
    setScore(0)
    setQuestionId(0)
  }

  const handleQuestion = (isCorrect) => {

    if (isCorrect === true) setScore(score + 1)

    const newQuestonId = questionId + 1
    newQuestonId < length
      ? (setQuestionId(newQuestonId))
      : (setShowScore(true))
  }

  return (
    <>
      <h1>Quiz</h1>
      {showScore
        ? (<QuizResult
          score={score}
          length={length}
          handleReset={handleReset}
        />)
        : (<QuizCard
          data={data}
          length={length}
          questionId={questionId}
          handleQuestion={handleQuestion} />)
      }
    </>
  )
}
