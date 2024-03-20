import { useState } from 'react'
import MagicCardView from './MagicCardView'
import styles from './App.module.css'
import cards from './assets/cards.json';
import './App.css'


function App() {

  let creatures = cards;

  return (
    <>
      <div className={styles.MagicCardViewContainer}>
        {creatures.map((creature, index) => {
          return <MagicCardView key={index} card={creature}/>
        })}
      </div>
    </>
  )
}

export default App
