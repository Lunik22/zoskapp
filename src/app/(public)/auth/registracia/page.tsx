// src/app/auth/registracia/page.tsx

import { Metadata } from 'next';
import SignUp from '../../../../sections/SignUpView';

export const metadata: Metadata = {
  title: `Registrácia | Zoškapp`,
};

export default function Registracia() {
  return <SignUp/>;
}
