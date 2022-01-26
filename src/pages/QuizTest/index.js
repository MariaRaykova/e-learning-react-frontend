import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { getAll, getById } from "../../../api/quiz";
import { API_URL } from "../../utils";
import qs from "qs";

const Quiz = () => {
  const history = useNavigate();
  const params = useParams();
  const course_id = params.id;
  const [test, setTest] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState(null);
  const [errors, setErrors] = useState(null);
  const [score, setScore] = useState(0);
  const queryCourse = qs.stringify(
    {
      populate: {
        test: {
          populate: {
            questions: {
              populate: {
                answers: {
                  populate: "*"
                }
              }
            }
          }
        },
        course_image: {
          fields: ["name", "url"]
        },
        course_video: {
          fields: ["name", "url"]
        }
      }
    },
    {
      encodeValuesOnly: true
    }
  );
  //await request(`/api/articles?${query}`);
  // GET /api/articles?populate[0]=seoData&populate[1]=seoData.sharedImage&populate[2]=seoData.sharedImage.media
  // const query = "?populate[0]=categories"
  const getTest = async (id) => {
    const res = await fetch(`${API_URL}/api/courses/${id}?${queryCourse}`);
    res
      .json()
      .then((res) => {
        setTest(res.data.attributes.test.data);
      })
      .catch((err) => setErrors("error :", err));
  };

  useEffect(() => {
    getTest(course_id);
  }, []);
  //const quiz = [];
  // console.log("testove");
  const getQuestion = (questions, index) => {
    console.log(index);
    return questions ? questions[index] : null;
  };

  const [index, setIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(new Set());

  // const question = [];
  const question = getQuestion(test?.attributes?.questions?.data, index);
  console.log("questions" + JSON.stringify(question));
  const hasNext = () => {
    return index < test?.attributes?.questions?.data?.length - 1;
  };

  const isCorrectlyAnswered = () => {
    return correctAnswers.has(index);
  };

  const nextQuestion = () => {
    if (!hasNext()) {
      finishQuiz();
    } else {
      setIndex(index + 1);
    }
  };

  const hasPrev = () => {
    return index > 0;
  };

  const prevQuestion = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
  };

  const finishQuiz = () => {
    alert(`Your score is ${correctAnswers.size}`);
    // router.push("/home");
    history("/");
  };

  const checkOption = (option) => {
    // if (option.isCorrect && !isCorrectlyAnswered()) {
    //   correctAnswers.add(index);
    //   setCorrectAnswers(correctAnswers);
    // } else if (!option.isCorrect && isCorrectlyAnswered()) {
    //   correctAnswers.delete(index);
    //   setCorrectAnswers(correctAnswers);
    // }

    nextQuestion();
  };

  return (
    <div>
      test
      {question?.attributes.answers.data.map((option) => (
        <div className="container font-sans px-4">
          <div className="text-3xl font-bold my-8">{test.test_name}</div>
          <div className="flex flex-col rounded-md shadow-md w-full py-4 px-4 mb-4">
            <div className="font-bold">Question {index + 1}</div>
            <div>{question.questionText}</div>
          </div>
          <div className="flex flex-initial flex-wrap justify-between text-center gap-4">
            {question.answerOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => checkOption(option)}
                className="block md:w-5/12 w-full option rounded-md shadow-md p-2"
              >
                {option.answerText}
              </button>
            ))}
          </div>

          <div className="flex gap-x-4 mt-10 justify-center">
            {hasPrev() ? (
              <p className="px-2 button rounded border border-green-500">
                <button onClick={prevQuestion}>Previous</button>
              </p>
            ) : null}

            {hasNext() ? (
              <p className="px-2 button rounded border border-green-500">
                <button onClick={nextQuestion}>Next</button>
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;

// import React, { useState } from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Intro from '../components/Intro';
// import Question from '../components/Question';
// import Score from '../components/Score';

// const Quiz = () => {
//   const data = useStaticQuery(graphql`query {
//     allStrapiQuizzes {
//       nodes {
//         questions {
//           answer
//           options
//           question
//         }
//       }
//     }
//   }
//   `);

//   const quiz = data.allStrapiQuizzes.nodes[0];

//   const [state, setState] = useState({
//     score: 0,
//     screen: 'intro',
//     questions: quiz.questions,
//     index: 0,
//   }, []);

//   const { score, screen, questions, index } = state;

//   const onStart = () => setState({...state, screen: 'question'});

//   const onNextQuestion = e => {
//     const val = e.target.value;
//     const { answer } = questions[index];

//     setState({
//       ...state,
//       index: index + 1,
//       score: score + (val === answer ? 1 : 0),
//     });
//   };

//   const onReset = () => setState({
//     ...state,
//     screen: 'intro',
//     score: 0,
//   });

//   if (index >= questions.length && screen !== 'score') setState({
//     ...state,
//     screen: 'score',
//     index: 0,
//   });

//   const renderStep = () => {
//     switch (screen) {
//       case 'intro':
//         return <Intro onStart={onStart} />;
//       case 'question':
//         return <Question onNextQuestion={onNextQuestion} question={questions[index]} />;
//       case 'score':
//         return <Score onReset={onReset} score={(score / questions.length).toFixed(2) * 100} />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="container mx-auto p-4 flex items-center justify-center h-screen pb-24">
//       {renderStep()}
//     </div>
//   );
// };

// export default Quiz;
