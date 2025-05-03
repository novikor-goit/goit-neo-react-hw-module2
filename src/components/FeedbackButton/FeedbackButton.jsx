import css from './FeedbackButton.module.css';

const Options = ({ title, handler }) => {
  return (
    <button className={css.button} onClick={handler}>
      {title}
    </button>
  );
};

export default Options;
