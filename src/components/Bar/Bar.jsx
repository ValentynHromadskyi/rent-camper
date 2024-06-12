import css from './Bar.module.css';

export function Bar() {
  return (
    <div className={css.container}>
      <label className={css.label} htmlFor="1">
        Location
      </label>
      <input
        className={css.input}
        type="text"
        id="1"
        placeholder="Country, City"
      />
    </div>
  );
}
