import { useEffect, useState } from 'react';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Reviews from './ResourceModel/Reviews.js';
import Notification from './components/Notification/Notification.jsx';

const App = () => {
  const defaultReviews = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  const [reviews, setReviews] = useState(() => Reviews.load() || defaultReviews);
  useEffect(() => Reviews.save(reviews), [reviews]);

  const incrementByType = (type) => {
    setReviews((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const reset = () => setReviews(defaultReviews);

  const { good, neutral, bad } = reviews;
  const totalReviews = good + neutral + bad;
  const positive = `${Math.round((good / totalReviews) * 100)}%`;
  const feedbackLines = {
    ...reviews,
    ...{
      total: totalReviews,
      positive: positive
    }
  };

  return (
    <main>
      <Description />
      <Options handler={incrementByType} resetHandler={reset} reviews={reviews} />
      {totalReviews > 0 ? <Feedback lines={feedbackLines} /> : <Notification />}
    </main>
  );
};

export default App;
