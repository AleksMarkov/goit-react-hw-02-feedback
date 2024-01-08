import styles from './vote.module.css';

const FeedbackOptions = ({ options, onleaveFeedback }) => {
  const buttonElements = options.map(name => (
    <button
      className={styles.voteBtn}
      onClick={() => onleaveFeedback(name)}
      key={name}
    >
      {name}
    </button>
  ));

  return buttonElements;
};

export default FeedbackOptions;
