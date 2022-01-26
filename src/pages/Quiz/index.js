import React, { useState, useEffect } from "react";
// import getTest from "../../utils/query";
import { useNavigate, useParams } from "react-router-dom";
// import "./quiz-styles.css";

import { API_URL } from "../../utils";
import { queryCourse } from "../../utils/query";

const Quiz = () => {
  const params = useParams();
  const course_id = params.id;
  const [errors, setErrors] = useState(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  const getQuestions = async (id) => {
    const res = await fetch(`${API_URL}/api/courses/${id}?${queryCourse}`);
    res
      .json()
      .then((res) => {
        setQuestions(res.data.attributes.test.data.attributes?.questions?.data);
      })
      .catch((err) => setErrors("error :", err));
  };

  useEffect(() => {
    getQuestions(course_id);
    if (questions?.length > 0) {
      setLoading(false);
    }
  }, [questions.length]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="quiz-body">
      <div className="quiz">
        {loading ? (
          <div>loading....</div>
        ) : (
          <div>
            {showScore ? (
              <div className="score-section">
                You scored {score} out of {questions.length}
              </div>
            ) : (
              <>
                <div className="question-section">
                  <div className="question-count">
                    <span>Question {currentQuestion + 1}</span>/
                    {questions?.length}
                  </div>
                  <div className="question-text">
                    {questions[currentQuestion].attributes.question}
                  </div>
                </div>
                <div className="answer-section">
                  {questions[currentQuestion].attributes.answers.data.map(
                    (data) => (
                      <button
                        className="quiz-button"
                        onClick={() =>
                          handleAnswerOptionClick(data.attributes.isCorrect)
                        }
                      >
                        {data.attributes.answer}
                      </button>
                    )
                  )}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Quiz;
