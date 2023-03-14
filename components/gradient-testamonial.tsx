import styles from './styles.module.css';
import { Locale } from '@/i18n-config';

export default function GradientTestamonial({ quote }: { quote: string }) {
  return (
    <div className={styles.readmeBody}>
      <aside>
        <p className={styles.textGradient}>{quote}</p>
      </aside>
    </div>
  );
}
