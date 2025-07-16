import './App.css'
import PlayingCard from './components/PlayingCard'
import React from 'react';

function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <PlayingCard rank="K" suit="♠" />
    </main>
  )
}

export default App
