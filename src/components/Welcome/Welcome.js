import React, { useContext } from "react";

import { QuizContext } from "../../contexts/quizContext";

import Quiz from "../../assets/quiz.svg";

import { WelcomeContainer, Subtitle, Text, Img } from "./styles";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <WelcomeContainer>
      <Subtitle>Seja bem vindo</Subtitle>
      <Text>Clique no botão abaixo para começar</Text>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <Img src={Quiz} alt="Inicio do Quiz" />
    </WelcomeContainer>
  );
};

export default Welcome;
