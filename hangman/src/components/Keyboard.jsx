import React, {useState } from "react";
import styles from "./game.module.css";


function Keyboard(props){

    const letters = props.letters;
    return(

        <p className={styles.guessedLetters}>
            <span style={{color:letters.a}}>A</span>
            <span style={{color:letters.b}}>B</span>
            <span style={{color:letters.c}}>C</span>
            <span style={{color:letters.d}}>D</span>
            
            <span style={{color:letters.e}}>E</span>
            <span style={{color:letters.f}}>F</span>
            <span style={{color:letters.g}}>G</span>
            <span style={{color:letters.h}}>H</span>
            
            <span style={{color:letters.i}}>I</span>
            <span style={{color:letters.j}}>J</span>
            <span style={{color:letters.k}}>K</span>
            <span style={{color:letters.l}}>L</span>
            
            <span style={{color:letters.m}}>M</span>
            <span style={{color:letters.n}}>N</span>
            <span style={{color:letters.o}}>O</span>
            <span style={{color:letters.p}}>P</span>
            
            <span style={{color:letters.q}}>Q</span>
            <span style={{color:letters.r}}>R</span>
            <span style={{color:letters.s}}>S</span>
            <span style={{color:letters.t}}>T</span>
            
            <span style={{color:letters.u}}>U</span>
            <span style={{color:letters.v}}>V</span>
            <span style={{color:letters.w}}>W</span>
            <span style={{color:letters.x}}>X</span>
            <br/>
            <span style={{color:letters.y}}>Y</span>
            <span style={{color:letters.z}}>Z</span>
        
        
        </p>
    );
}


export default Keyboard;