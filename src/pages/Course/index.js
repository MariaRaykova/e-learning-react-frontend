import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import { API_URL } from "../../utils";
import { queryCourse } from "../../utils/query";
import { CoursesContext } from "../../contexts/CoursesContext";
import { formatNumber, fromImageToUrl } from "../../utils";
import { CartContext } from "../../contexts/CartContext";

const Course = () => {
  const params = useParams();
  const course_id = params.id;
  const { courses } = useContext(CoursesContext);
  const course = courses[course_id].attributes;
  // console.log("course" + JSON.stringify(course));
  const { addCourse, cartItems, increase } = useContext(CartContext);

  const isInCart = (course) => {
    return !!cartItems.find((item) => item.id === course.id);
  };
  const imageUrl = fromImageToUrl(course.course_image?.data?.attributes.url);
  return (
    <PageWrapper>
      <section>
        <div class="product-img">
          <img
            style={{
              display: "block",
              margin: "0 auto 10px",
              maxHeight: "200px"
            }}
            className="img-fluid"
            src={`${imageUrl}`}
            alt=""
          />
          {/* <img
          style={{
            display: "block",
            margin: "0 auto 10px",
            maxHeight: "200px"
          }}
          className="img-fluid"
          src={`${imageUrl}`}
          alt=""
        /> */}
          {/* <img class="hover-img" src="assets/img/bg-img/bg-6.jpg" alt="" /> */}
          <div class="product-favourite">
            <a href="#" class="favme fa fa-heart"></a>
          </div>
        </div>
        <div class="product-description">
          <h2>{course.course_name}</h2>
          <div className="text-right">{course.course_short_description}</div>
          <h3 className="text-left">{formatNumber(course.course_price)}</h3>
          {/* <div className="text-right">
            <Link to="/" className="btn btn-link btn-sm mr-2">
              Details
            </Link> 
          </div> */}
          {/* {isInCart(course) && (
            <button
              onClick={() => increase(course)}
              className="btn btn-outline-primary btn-sm"
            >
              Add more
            </button>
          )} */}

          {!isInCart(course) && (
            <button
              type="button"
              onClick={() => addCourse(course)}
              className="snipcart-add-item btn btn-outline-danger btn-sm"
              data-item-name={course.course_name}
              data-item-price={course.course_price}
              data-item-description={course.course_short_description}
              data-item-min-quantity="0"
              // data-item-max-quantity={course.attributes.quantity}
              data-item-id={course.id}
              data-item-url="https://e-learning-strapi-backend.herokuapp.com"
            >
              Add to cart
            </button>
          )}
          <Link
            className="snipcart-add-item btn btn-outline-danger btn-sm"
            to={`/course/${course_id}`}
            key={course_id}
          >
            Test
          </Link>
        </div>
      </section>
      {/* <div className="quiz-body">
        <div className="quiz">
          {showLoading()}
          <div>
            {showScore ? (
              <div className="score-section">
                You scored {score} out of {questions.length}
              </div>
            ) : (
              <>
                {questions?.length > 1 ? (
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
                ) : null}
              </>
            )}
          </div>
        </div>
      </div> */}
    </PageWrapper>
  );
};
export default Course;
