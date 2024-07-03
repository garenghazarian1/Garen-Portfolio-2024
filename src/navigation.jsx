// src/navigation.jsx
import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './config';  // Ensure this imports the correct locale configuration

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({
    locales,
  });
