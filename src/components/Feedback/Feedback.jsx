import css from './Feedback.module.css';

const Feedback = ({ lines }) => {
  return (
    <section>
      <ul>
        {Object.keys(lines).map((key) => (
          <li key={key}>
            <span className={css.itemName}>{key}:</span> {lines[key]}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Feedback;
