import { useState } from 'react';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';

const App = () => {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });
  const incrementFeedbackType = (type) => {
    setReviews((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const resetFeedback = () =>
    setReviews({
      good: 0,
      neutral: 0,
      bad: 0
    });

  return (
    <main>
      <Description />
      <Options handler={incrementFeedbackType} resetHandler={resetFeedback} reviews={reviews} />
      <Feedback reviews={reviews} />
    </main>
  );
};

export default App;
