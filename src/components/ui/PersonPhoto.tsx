import Image from 'next/image';
import type { CSSProperties } from 'react';
import type { Asset } from '@/content/assets';

type PersonPhotoProps = {
  photo: Asset;
  /** Displayed size in px, used for `sizes`. Omit when the photo fills a sized parent. */
  size?: number;
  alt?: string;
  className?: string;
  style?: CSSProperties;
  priority?: boolean;
};

/** A person is always a circle, object-fit cover, natural colour (DESIGN_SYSTEM.md §7). */
export function PersonPhoto({ photo, size, alt = '', className, style, priority }: PersonPhotoProps) {
  return (
    <Image
      src={photo.src}
      width={photo.width}
      height={photo.height}
      alt={alt}
      sizes={size ? `${size}px` : '120px'}
      priority={priority}
      className={className}
      style={{
        width: size ?? '100%',
        height: size ?? '100%',
        borderRadius: 'var(--kn-radius-full)',
        objectFit: 'cover',
        flex: 'none',
        ...style,
      }}
    />
  );
}
