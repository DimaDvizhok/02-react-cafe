import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from './components/cafeInfo/CafeInfo';
import { type Votes, type VoteType } from './types/votes';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VoteType) {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
      </div>
    </>
  );
}
