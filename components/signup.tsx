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
    <>
      <h3>{signup.status}</h3>
      <p>{signup.body}</p>
      <form>
        <label htmlFor={signup.userType}>{dictionary.emailPlaceholder}</label>
        <input
          type="text"
          name={signup.userType}
          id={signup.userType}
          required
        />
      </form>
    </>
  );
}
