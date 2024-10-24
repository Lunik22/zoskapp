// src/app/auth/odhlasenie/page.tsx

import { Metadata } from 'next';
import SignOut from '../../../sections/SignOutView';

export const metadata: Metadata = {
  title: `Odhlásenie | Zoškapp`,
};

export default function Odhlasenie() {
  return <SignOut/>;
}