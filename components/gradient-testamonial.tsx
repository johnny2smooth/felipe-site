import styles from './styles.module.css';

export default function GradientTestamonial({ quote }: { quote: string }) {
  return (
    <div className={`stack mx-auto ${styles.readmeBody}`}>
      <aside>
        <p className={styles.textGradient}>{quote}</p>
      </aside>
    </div>
  );
}
