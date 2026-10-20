import { DISCOVER_LISTS, DISCOVER_TABS, LISTINGS } from '@/content/showcase';
import { AppTitle, cx, IconButton, ListingItem, SegmentTabs } from './AppParts';
import type { ScreenProps } from './state';
import s from './Phone.module.css';

export function DiscoverScreen({ demo, set }: ScreenProps) {
  return (
    <div className={cx('kw-screen', s.view)}>
      <AppTitle title="Discover">
        <IconButton icon="search" label="Search Discover" />
        <IconButton icon="bookmark" label="Saved" size={21} stroke={1.8} onClick={() => set({ feature: 'profile', pTab: 'saved' })} />
      </AppTitle>
      <SegmentTabs items={DISCOVER_TABS} value={demo.dTab} onChange={(dTab) => set({ dTab })} tight />
      <div className={cx('kw-scroll', s.scroll)}>
        <span className={cx(s.label, s.sample)}>SAMPLE LISTINGS FOR ILLUSTRATION</span>
        {DISCOVER_LISTS[demo.dTab].map((id) =>
          id.startsWith('#') ? (
            <span key={id} className={s.sectionHead}>{id.slice(1)}</span>
          ) : (
            <ListingItem key={id} item={LISTINGS[id]} saved={demo.saved} set={set} />
          ),
        )}
        <div className={s.spacer14} />
      </div>
    </div>
  );
}
