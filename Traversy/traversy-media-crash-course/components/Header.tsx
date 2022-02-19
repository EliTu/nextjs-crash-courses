import headerStyles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>Keep up with the latest web dev news</p>
    </header>
  );
}
