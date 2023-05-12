import React, { useContext, useEffect } from "react";

import Welcome from "../../components/Welcome";
import Question from "../../components/Question";
import GameOver from "../../components/GameOver/GameOver";
import { QuizContext } from "../../contexts/quizContext";

import { HomeContainer } from "./styles";

const Home = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <HomeContainer>
      <h1>Quizz App</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </HomeContainer>
  );
};

export default Home;
