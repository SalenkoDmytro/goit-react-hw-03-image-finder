import s from './Btn.module.css';

export default function Btn({ onClick }) {
  return (
    <button
      className={s.Button}
      type="button"
      onClick={onClick}
      disabled={false}
    >
      Show more
    </button>
  );
}
