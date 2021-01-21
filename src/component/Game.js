    import React, { useState } from 'react';
    import SlidingTilePuzzle from 'react-sliding-tile-puzzle';
    import Popupimage from './Popupimage'
    import './Game.css'

  const Game = () => {
      const [newPuzzle,setNewPuzzle]= useState(false)
      const [solvePuzzle,setSolvePuzzle]= useState(false)

      const handleClickSolvePuzzle = () => {
        setSolvePuzzle(!solvePuzzle)
    };
    
    const handleClickNewPuzzle = () => {
        setNewPuzzle(!newPuzzle)
    };
 
        return (
            <div className="game-wrapper">
            
            <div className='btn-wrapper'>
                <button
                       className='btn'
                        onClick={handleClickNewPuzzle}
                    >
                        New Puzzle
                </button>
                          
               <Popupimage/>
            
            </div>
            
            <SlidingTilePuzzle
                solvePuzzle={solvePuzzle}
                newPuzzle={newPuzzle}
                maxIterations={300}
                image="https://i.pinimg.com/736x/1f/b3/8e/1fb38ea391f7d125723ba0180abfed00--james-lee-cat-doll.jpg"
                size={350}
            />
                <button
                     className='btn'
                    onClick={handleClickSolvePuzzle}
                >
                    Solve Puzzle
                </button>
            </div>
        );
    }
 
export default Game;