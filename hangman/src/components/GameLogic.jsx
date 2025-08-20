import React, { use, useEffect, useState } from "react";
import styles from "./game.module.css";
import Keyboard from "./Keyboard";

const preCol = "grey";
const postCol = "black";

function GameLogic() {
  const [keyPressed, setKeyPressed] = useState("");
  const wordToGuess = "testing";
  const [displayWord, setDisplayWord] = useState(
    Array(wordToGuess.length).fill("_")
  );
  const [guessedLetters, setGuessedLetters] = useState(new Set());
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [dead, setDead] = useState(false);

  const [letters, setLetters] = useState({
    a: preCol,
    b: preCol,
    c: preCol,
    d: preCol,
    e: preCol,
    f: preCol,
    g: preCol,
    h: preCol,
    i: preCol,
    j: preCol,
    k: preCol,
    l: preCol,
    m: preCol,
    n: preCol,
    o: preCol,
    p: preCol,
    q: preCol,
    r: preCol,
    s: preCol,
    t: preCol,
    u: preCol,
    v: preCol,
    w: preCol,
    x: preCol,
    y: preCol,
    z: preCol,
  });

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === `Key${e.key.toUpperCase()}`) {
        setKeyPressed(e.key);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  // When key pressed
  useEffect(() => {
    setGuessedLetters((prev) => new Set(prev).add(keyPressed));
    const unguessedCharacters = displayWord.reduce(
      (a, v) => (v === "_" ? a + 1 : a),
      0
    );
    const temp = wordToGuess
      .split("")
      .map((v, i) => (v == keyPressed || displayWord[i] != "_" ? v : "_"));
    setDisplayWord(
      wordToGuess
        .split("")
        .map((v, i) => (v == keyPressed || displayWord[i] != "_" ? v : "_"))
    );

    const unguessedCharacters2 = temp.reduce(
      (a, v) => (v === "_" ? a + 1 : a),
      0
    );

    console.log(unguessedCharacters2);
    if (
      unguessedCharacters == unguessedCharacters2 &&
      letters[keyPressed] == preCol
    ) {
      //wrong letter pressed
      setWrongGuesses((prev) => prev + 1);

      if (wrongGuesses >= 11) {
        setDead(true);
      }
    }

    setLetters({
      ...letters,
      [keyPressed]: postCol,
    });
  }, [keyPressed]);

  if (dead) {
    return <h1>GAMEOVER</h1>;
  }
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.hangmen}
          style={{
            "--frame-x": wrongGuesses % 3,
            "--frame-y": Math.floor(wrongGuesses / 3),
          }}
        ></div>
        <Keyboard letters={letters} />
      </div>
      <p><br/></p>
      <p className={styles.displayWord}>{displayWord}</p>
    </>
  );
}

export default GameLogic;
