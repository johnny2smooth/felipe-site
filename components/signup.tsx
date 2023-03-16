import { getDictionary } from '@/get-dictionary';
import { Locale } from '@/i18n-config';

export default async function Signup({
  lang,
  userType,
}: {
  lang: Locale;
  userType: 'patient' | 'student';
}) {
  const dictionary = await getDictionary(lang);
  const signup = dictionary.signup[userType];
  return (
    <div className="stack">
      <h3>{signup.status}</h3>
      <p>{signup.body}</p>
      <form className="stack">
        <label htmlFor={signup.userType}>{dictionary.emailPlaceholder}</label>
        <input
          type="email"
          name={signup.userType}
          id={signup.userType}
          required
        />
        <button type="submit">{dictionary.subscribe}</button>
      </form>
    </div>
  );
}
