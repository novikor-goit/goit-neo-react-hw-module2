import FeedbackButton from '../FeedbackButton/FeedbackButton.jsx';

const Options = ({ handler, resetHandler, reviews }) => {
  const hasReviews = Object.values(reviews).find((value) => value > 0);
  return (
    <section>
      {Object.keys(reviews).map((key) => (
        <FeedbackButton title={key} handler={() => handler(key)} key={key} />
      ))}
      {hasReviews && <FeedbackButton title="Reset" handler={resetHandler} />}
    </section>
  );
};

export default Options;
