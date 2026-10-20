/* Kinnoc icons. Generated from assets/icons/*.svg; keep both in sync (npm run verify checks). */
import type { SVGProps } from 'react';

export type IconName =
  | 'menu'
  | 'close'
  | 'arrow-right'
  | 'arrow-up'
  | 'chevron-left'
  | 'feed'
  | 'communities'
  | 'discover'
  | 'profile'
  | 'heart'
  | 'comment'
  | 'share'
  | 'bookmark'
  | 'search'
  | 'bell'
  | 'image'
  | 'more-horizontal'
  | 'compose'
  | 'plus'
  | 'camera'
  | 'settings'
  | 'check'
  | 'check-check'
  | 'play'
  | 'file-text';

const PATHS: Record<IconName, { mode: "stroke" | "fill"; body: string }> = {
  'menu': { mode: 'stroke', body: "<path d=\"M4 8h16M4 16h16\"/>" },
  'close': { mode: 'stroke', body: "<path d=\"M6 6l12 12M18 6 6 18\"/>" },
  'arrow-right': { mode: 'stroke', body: "<path d=\"M5 12h14M13 6l6 6-6 6\"/>" },
  'arrow-up': { mode: 'stroke', body: "<path d=\"M12 19V5M5 12l7-7 7 7\"/>" },
  'chevron-left': { mode: 'stroke', body: "<path d=\"m15 18-6-6 6-6\"/>" },
  'feed': { mode: 'stroke', body: "<path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .71-1.53l7-6a2 2 0 0 1 2.58 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/>" },
  'communities': { mode: 'stroke', body: "<path d=\"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\"/><path d=\"M8 8.5h8M8 12.5h5\"/>" },
  'discover': { mode: 'stroke', body: "<circle cx=\"12\" cy=\"12\" r=\"9.5\"/><path d=\"m15.8 8.2-1.9 5.7-5.7 1.9 1.9-5.7z\"/>" },
  'profile': { mode: 'stroke', body: "<path d=\"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2\"/><circle cx=\"12\" cy=\"7\" r=\"4\"/>" },
  'heart': { mode: 'stroke', body: "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"/>" },
  'comment': { mode: 'stroke', body: "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"/>" },
  'share': { mode: 'stroke', body: "<path d=\"M14.5 21.7a.5.5 0 0 0 .9 0l6.5-19a.5.5 0 0 0-.6-.6l-19 6.5a.5.5 0 0 0 0 .9l7.9 3.2a2 2 0 0 1 1.1 1.1z\"/><path d=\"m21.9 2.1-11 11\"/>" },
  'bookmark': { mode: 'stroke', body: "<path d=\"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z\"/>" },
  'search': { mode: 'stroke', body: "<circle cx=\"11\" cy=\"11\" r=\"7.5\"/><path d=\"m20.5 20.5-4.2-4.2\"/>" },
  'bell': { mode: 'stroke', body: "<path d=\"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9\"/><path d=\"M10.3 21a1.94 1.94 0 0 0 3.4 0\"/>" },
  'image': { mode: 'stroke', body: "<rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"3\"/><circle cx=\"9\" cy=\"9\" r=\"2\"/><path d=\"m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21\"/>" },
  'more-horizontal': { mode: 'fill', body: "<circle cx=\"5\" cy=\"12\" r=\"1.8\"/><circle cx=\"12\" cy=\"12\" r=\"1.8\"/><circle cx=\"19\" cy=\"12\" r=\"1.8\"/>" },
  'compose': { mode: 'stroke', body: "<path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.4 2.6a2.1 2.1 0 1 1 3 3L12 15l-4 1 1-4Z\"/>" },
  'plus': { mode: 'stroke', body: "<path d=\"M12 5v14M5 12h14\"/>" },
  'camera': { mode: 'stroke', body: "<path d=\"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3z\"/><circle cx=\"12\" cy=\"13\" r=\"3\"/>" },
  'settings': { mode: 'stroke', body: "<path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>" },
  'check': { mode: 'stroke', body: "<path d=\"M20 6 9 17l-5-5\"/>" },
  'check-check': { mode: 'stroke', body: "<path d=\"M18 6 7 17l-5-5\"/><path d=\"m22 10-7.5 7.5L13 16\"/>" },
  'play': { mode: 'fill', body: "<path d=\"M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5Z\"/>" },
  'file-text': { mode: 'stroke', body: "<path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z\"/><path d=\"M14 2v5h5M9 13h6M9 17h4\"/>" },
};

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  /** Rendered width and height in px. Default 24. */
  size?: number;
  /** Stroke width in the 24px grid. Default 1.8 (see icon-map.json for per-use values). */
  strokeWidth?: number;
  /** Fill the outline with currentColor: liked heart, saved bookmark. */
  filled?: boolean;
  /** Accessible name. Omit for decorative icons (aria-hidden). */
  label?: string;
}

export function Icon({ name, size = 24, strokeWidth = 1.8, filled = false, label, ...rest }: IconProps) {
  const def = PATHS[name];
  const stroke = def.mode === "stroke";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={stroke ? (filled ? "currentColor" : "none") : "currentColor"}
      stroke={stroke ? "currentColor" : undefined}
      strokeWidth={stroke ? strokeWidth : undefined}
      strokeLinecap={stroke ? "round" : undefined}
      strokeLinejoin={stroke ? "round" : undefined}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      focusable="false"
      dangerouslySetInnerHTML={{ __html: def.body }}
      {...rest}
    />
  );
}
