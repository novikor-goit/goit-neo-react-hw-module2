import { useEffect, useState } from 'react';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';
import Reviews from './ResourceModel/Reviews.js';

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

  return (
    <main>
      <Description />
      <Options handler={incrementByType} resetHandler={reset} reviews={reviews} />
      <Feedback reviews={reviews} />
    </main>
  );
};

export default App;
