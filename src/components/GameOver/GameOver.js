import React, {useContext} from "react";

import { QuizContext } from "../../contexts/quizContext";

import WellDone from "../../assets/welldone.svg";
import { GameoverContainer, Subtitle, Text, Img } from "./styles";

const GameOver = () => {
const [quizState, dispatch] = useContext(QuizContext);

  return (
    <GameoverContainer>
      <Subtitle>Fim do jogo</Subtitle>
      <Text>Pontuação: {quizState.score}</Text>
      <Text>Você acertou {quizState.score} de {quizState.questions.length}</Text>
      <Img src={WellDone} alt="Inicio do Quiz" />
      <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </GameoverContainer>
  );
};

export default GameOver;
