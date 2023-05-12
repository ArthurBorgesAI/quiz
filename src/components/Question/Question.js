import React, { useContext } from "react";

import Options from "../Options";
import { QuizContext } from "../../contexts/quizContext";

import { QuestionContainer, Subtitle, Text, OptionsContainer } from "./styles";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const question = quizState.questions[quizState.currentQuestion];

  const onOptionSelection = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: {answer: question.answer, option},
    })
  };

  return (
    <QuestionContainer>
      <Text>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </Text>
      <Subtitle>{question.question}</Subtitle>
      <OptionsContainer>
        {question.options.map((opt, idx) => {
          return (
            <Options
              option={opt}
              answer={question.answer}
              selectOption={() => onOptionSelection(opt)}
              key={idx}
            />
          );
        })}
      </OptionsContainer>
      {quizState.selectedAnswer && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </QuestionContainer>
  );
};

export default Question;
