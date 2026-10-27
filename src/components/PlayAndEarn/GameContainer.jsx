import React, { useState } from 'react';
import { GameStart } from './GameStart';
import { GamePlay } from './GamePlay';
import { GameResult } from './GameResult';
import { useDashboard } from '../../context/DashboardContext';

export const GameContainer = () => {
  const { completeGame, setActiveScreen, activeScreen } = useDashboard();
  const [stage, setStage] = useState('start'); // 'start' | 'playing' | 'result'

  const handleStartGame = () => {
    setStage('playing');
  };

  const handleGameOver = (score, xpEarned, vesEarned) => {
    completeGame(score, xpEarned, vesEarned);
    setStage('result');
  };

  const handlePlayAgain = () => {
    setStage('playing');
  };

  const handleBackToDashboard = () => {
    setStage('start');
    setActiveScreen('dashboard');
  };

  const handleQuit = () => {
    setStage('start');
  };

  return (
    <div>
      {stage === 'start' && <GameStart onStartGame={handleStartGame} />}
      {stage === 'playing' && <GamePlay onGameOver={handleGameOver} onQuit={handleQuit} />}
      {stage === 'result' && <GameResult onPlayAgain={handlePlayAgain} onBackToDashboard={handleBackToDashboard} />}
    </div>
  );
};
