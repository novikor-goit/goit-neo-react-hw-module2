import css from './Feedback.module.css';

const Feedback = ({ reviews }) => {
  const { good, neutral, bad } = reviews;
  const totalReviews = good + neutral + bad;
  const items = {
    ...reviews,
    ...{
      total: totalReviews,
      positive: `${Math.round((good / totalReviews) * 100)}%`
    }
  };

  return (
    <section>
      {totalReviews > 0 ? (
        <ul>
          {Object.keys(items).map((key) => (
            <li key={key}>
              <span className={css.itemName}>{key}:</span> {items[key]}
            </li>
          ))}
        </ul>
      ) : (
        <span>No feedback yet</span>
      )}
    </section>
  );
};

export default Feedback;
