import Link from 'next/link';
import type { ComponentProps } from 'react';

/** Internal paths ("/...") use next/link for client-side navigation; anything else is a plain anchor. */
export function SmartLink({ href, ...rest }: Omit<ComponentProps<'a'>, 'href'> & { href: string }) {
  if (href.startsWith('/')) return <Link href={href} {...rest} />;
  return <a href={href} {...rest} />;
}
