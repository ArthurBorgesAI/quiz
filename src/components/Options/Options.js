import React, { useContext } from "react";

import { QuizContext } from "../../contexts/quizContext";

import { CorrectOption, OptionsContainer, WrongOption } from "./styles";

const Options = ({ option, answer, selectOption }) => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <>
      {quizState.selectedAnswer && option === answer ? (
        <CorrectOption> {option} </CorrectOption>
      ) : quizState.selectedAnswer && option !== answer ? (
        <WrongOption> {option} </WrongOption>
      ) : (
        <OptionsContainer onClick={() => selectOption()}>       
          {option}
        </OptionsContainer>
      )}
    </>
  );
};

export default Options;
