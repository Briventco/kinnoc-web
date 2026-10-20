import Image from 'next/image';
import type { ReactNode } from 'react';
import { Icon, type IconName } from '@ds/components/Icon';
import { Monogram, type Tone } from '@/components/ui/Monogram';
import type { Asset } from '@/content/assets';
import type { Listing } from '@/content/showcase';
import type { Patch } from './state';
import s from './Phone.module.css';

export function cx(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(' ');
}

export function IconButton({ icon, label, size = 22, stroke = 1.9, onClick, className, children }: {
  icon: IconName; label: string; size?: number; stroke?: number; onClick?: () => void; className?: string; children?: ReactNode;
}) {
  return (
    <button type="button" className={cx('kw-app-icon', s.iconBtn, className)} aria-label={label} onClick={onClick}>
      <Icon name={icon} size={size} strokeWidth={stroke} />
      {children}
    </button>
  );
}

export function AppTitle({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className={s.appHeader}>
      <b className={s.appTitle}>{title}</b>
      {children}
    </div>
  );
}

/** Underline tabs used in every screen. */
export function SegmentTabs<T extends string>({ items, value, onChange, tall, tight, className }: {
  items: { id: T; label: string; count?: string }[]; value: T; onChange: (v: T) => void; tall?: boolean; tight?: boolean; className?: string;
}) {
  return (
    <div className={cx(s.tabs, tight && s.tabsTight, className)}>
      {items.map((t) => (
        <button
          key={t.id}
          type="button"
          className={cx('kw-app-tab', s.tab, tall && s.tabTall, value === t.id && s.tabOn)}
          aria-pressed={value === t.id}
          onClick={() => onChange(t.id)}
        >
          {t.label}
          {t.count && <b className={s.tabCount}>{t.count}</b>}
        </button>
      ))}
    </div>
  );
}

/** Community or person identity: photo or monogram, radius from className. */
export function Identity({ identity, className, label }: {
  identity: { photo: Asset } | { mono: string; tone: Tone }; className: string; label?: string;
}) {
  if ('photo' in identity) {
    const p = identity.photo;
    return <Image src={p.src} width={p.width} height={p.height} alt={label ?? ''} sizes="50px" className={className} />;
  }
  return <Monogram text={identity.mono} tone={identity.tone} className={className} label={label} />;
}

export function SaveButton({ on, title, onToggle, className }: { on: boolean; title: string; onToggle: () => void; className?: string }) {
  return (
    <button type="button" className={cx(s.iconBtn, s.save, on && s.saveOn, className)} aria-pressed={on} aria-label={`Save ${title}`} onClick={onToggle}>
      <Icon name="bookmark" size={20} filled={on} />
    </button>
  );
}

function Lead({ item }: { item: Listing }) {
  const l = item.lead;
  switch (l.type) {
    case 'feature':
    case 'date':
      return (
        <span className={cx(s.col, s.colCenter)}>
          <span className={s.leadMon}>{l.type === 'feature' ? 'OCT' : l.mon}</span>
          <b className={s.leadDay}>{l.day}</b>
        </span>
      );
    case 'org':
      return <Monogram text={l.mono} tone={l.tone} className={s.leadTile} />;
    case 'range':
      return <span className={cx(s.leadTile, s.leadRange)}><b>{l.range}</b><span className={s.leadTiny}>{l.mon}</span></span>;
    case 'deadline':
      return <span className={cx(s.leadTile, s.leadDeadline)}><b>{l.day}</b><span className={s.leadTiny}>{l.mon}</span></span>;
    case 'cover':
      return <Image src={l.image.src} width={l.image.width} height={l.image.height} alt="" sizes="42px" className={s.leadTall} />;
    case 'video':
      return <span className={cx(s.leadTall, s.leadVideo)}><Icon name="play" size={16} /></span>;
    case 'doc':
      return <span className={cx(s.leadTall, s.leadDoc)}><Icon name="file-text" size={20} /></span>;
  }
}

/** One Discover listing: featured navy card, or a row that leads with its type's visual. */
export function ListingItem({ item, saved, set, asRow }: { item: Listing; saved: Record<string, boolean>; set: Patch; asRow?: boolean }) {
  const on = !!saved[item.id];
  const toggle = () => set((d) => ({ saved: { ...d.saved, [item.id]: !d.saved[item.id] } }));
  if (item.lead.type === 'feature' && !asRow) {
    return (
      <div className={s.featureWrap}>
        <div className={s.feature}>
          <span className={s.col}>
            <span className={s.label}>{item.lead.mon}</span>
            <b className={s.featureDay}>{item.lead.day}</b>
          </span>
          <span className={s.col3}>
            <span className={s.label}>{item.kind}</span>
            <b className={s.featureTitle}>{item.title}</b>
            <span className={s.featureMeta}>{item.meta}</span>
          </span>
          <button type="button" className={cx(s.iconBtn, s.featureSave)} aria-pressed={on} aria-label={`Save ${item.title}`} onClick={toggle}>
            <Icon name="bookmark" size={20} filled={on} />
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className={s.listing}>
      <span className={s.leadBox}><Lead item={item} /></span>
      <span className={s.listingText}>
        <span className={cx(s.label, s.ellipsis)}>{item.kind}{item.warn && <span className={s.warn}>{item.warn}</span>}</span>
        <b className={cx(s.listingTitle, s.ellipsis)}>{item.title}</b>
        <span className={cx(s.listingMeta, s.ellipsis)}>{item.meta}</span>
      </span>
      <SaveButton on={on} title={item.title} onToggle={toggle} />
    </div>
  );
}
