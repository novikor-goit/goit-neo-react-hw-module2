import FeedbackButton from '../FeedbackButton/FeedbackButton.jsx';

const Options = ({ handler, resetHandler, reviews }) => {
  return (
    <section>
      {Object.keys(reviews).map((key) => (
        <FeedbackButton title={key} handler={() => handler(key)} key={key} />
      ))}
      <FeedbackButton title="Reset" handler={resetHandler} />
    </section>
  );
};

export default Options;
