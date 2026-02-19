import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from './components/cafeInfo/CafeInfo';
import Notification from './components/notification/Notification';
import VoteOptions from './components/voteOptions/VoteOptions';
import VoteStats from './components/voteStats/VoteStats';
import { type Votes, type VoteType } from './types/votes';

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function handleVote(type: VoteType) {
    setVotes(votes => ({
      ...votes,
      [type]: votes[type] + 1,
    }));
  }

  function resetVotes() {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={handleVote} onReset={resetVotes} canReset={totalVotes > 0 && true} />
        {totalVotes > 0 ? (
          <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} />
        ) : (
          <Notification />
        )}
      </div>
    </>
  );
}
