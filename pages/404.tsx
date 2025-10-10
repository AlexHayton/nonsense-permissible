'use client';

import { useState, useEffect, useCallback } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { ArrowLeft, RotateCcw } from 'lucide-react';

export default function NotFound() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [playerPos, setPlayerPos] = useState(50);
  const [obstacles, setObstacles] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const [gameStarted, setGameStarted] = useState(false);

  // Handle player movement
  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (!gameStarted || gameOver) return;

      if (e.key === 'ArrowLeft' && playerPos > 10) {
        setPlayerPos(prev => Math.max(10, prev - 10));
      } else if (e.key === 'ArrowRight' && playerPos < 90) {
        setPlayerPos(prev => Math.min(90, prev + 10));
      }
    },
    [playerPos, gameStarted, gameOver]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const gameInterval = setInterval(() => {
      setObstacles(prev => {
        // Move obstacles down
        const moved = prev.map(obs => ({
          ...obs,
          y: obs.y + 2,
        }));

        // Remove obstacles that are off screen
        const filtered = moved.filter(obs => obs.y < 100);

        // Add new obstacle randomly
        if (Math.random() < 0.02) {
          const newObstacle = {
            id: Date.now(),
            x: Math.floor(Math.random() * 9) * 10 + 10,
            y: 0,
          };
          filtered.push(newObstacle);
        }

        // Check collision
        filtered.forEach(obs => {
          if (obs.y > 85 && obs.y < 95 && Math.abs(obs.x - playerPos) < 8) {
            setGameOver(true);
          }
        });

        return filtered;
      });

      setScore(prev => prev + 1);
    }, 50);

    return () => clearInterval(gameInterval);
  }, [gameStarted, gameOver, playerPos]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setScore(0);
    setPlayerPos(50);
    setObstacles([]);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setScore(0);
    setPlayerPos(50);
    setObstacles([]);
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <Navigation />

      <main className="flex-grow flex items-center justify-center px-6 py-24">
        <div className="max-w-4xl w-full space-y-8 text-center">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-3xl font-semibold">Oops! Page Not Found</h2>
            <p className="text-xl text-black/70 max-w-2xl mx-auto">
              Looks like you've ventured into uncharted territory. While you're
              here, why not play a quick game?
            </p>
          </div>

          {/* Game Container */}
          <div className="bg-black/5 border-2 border-black rounded-lg p-8 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-semibold">404 Dodger</h3>
              <div className="text-xl font-mono">Score: {score}</div>
            </div>

            {/* Game Canvas */}
            <div className="relative w-full h-72 bg-white border-2 border-black rounded overflow-hidden">
              {!gameStarted && !gameOver && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="space-y-4 text-center">
                    <p className="text-lg">
                      Use ← → arrow keys to dodge the obstacles!
                    </p>
                    <Button
                      onClick={startGame}
                      className="bg-black text-white hover:bg-black/80"
                    >
                      Start Game
                    </Button>
                  </div>
                </div>
              )}

              {gameOver && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                  <div className="space-y-4 text-center">
                    <h3 className="text-3xl font-bold">Game Over!</h3>
                    <p className="text-xl">Final Score: {score}</p>
                    <Button
                      onClick={startGame}
                      className="bg-black text-white hover:bg-black/80 gap-2"
                    >
                      <RotateCcw size={18} />
                      Play Again
                    </Button>
                  </div>
                </div>
              )}

              {/* Player */}
              {gameStarted && (
                <div
                  className="absolute bottom-4 w-8 h-8 bg-black rounded transition-all duration-100"
                  style={{
                    left: `${playerPos}%`,
                    transform: 'translateX(-50%)',
                  }}
                />
              )}

              {/* Obstacles */}
              {obstacles.map(obs => (
                <div
                  key={obs.id}
                  className="absolute w-8 h-8 bg-red-500 rounded"
                  style={{
                    left: `${obs.x}%`,
                    top: `${obs.y}%`,
                    transform: 'translateX(-50%)',
                  }}
                />
              ))}
            </div>

            {gameStarted && !gameOver && (
              <p className="text-sm text-black/60">
                Use your arrow keys (← →) to move and avoid the red obstacles!
              </p>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => (window.location.href = '/')}
              className="bg-black text-white hover:bg-black/80 gap-2"
            >
              <ArrowLeft size={18} />
              Go Home
            </Button>
            {gameStarted && (
              <Button
                onClick={resetGame}
                variant="outline"
                className="border-black text-black hover:bg-black/5 gap-2"
              >
                <RotateCcw size={18} />
                Reset Game
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
