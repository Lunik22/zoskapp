// src/app/auth/prihlasenie/page.tsx

import { Metadata } from 'next';
import SignIn from '../../../../sections/SignInView';

export const metadata: Metadata = {
  title: `Prihlásenie | Zoškapp`,
};

export default function Prihlasenie() {
  return <SignIn/>;
}