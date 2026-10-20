'use client';

import { useCallback, useRef, useState, type KeyboardEvent } from 'react';
import { Icon, type IconName } from '@ds/components/Icon';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { DESTINATIONS, type Feature } from '@/content/showcase';
import { cx } from './AppParts';
import { CommunitiesScreen } from './CommunitiesScreen';
import { DiscoverScreen } from './DiscoverScreen';
import { FeedScreen } from './FeedScreen';
import { PhoneFrame } from './PhoneFrame';
import { ProfileScreen } from './ProfileScreen';
import { INITIAL_DEMO, type Demo, type Patch } from './state';
import s from './Showcase.module.css';
import p from './Phone.module.css';

const NAV_ICONS: Record<Feature, IconName> = { feed: 'feed', communities: 'communities', discover: 'discover', profile: 'profile' };
const SCREENS = { feed: FeedScreen, communities: CommunitiesScreen, discover: DiscoverScreen, profile: ProfileScreen };

function Feats({ items }: { items: string[] }) {
  return <ul className={s.feats}>{items.map((f) => <li key={f} className={s.feat}>{f}</li>)}</ul>;
}

type ProductShowcaseProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  body?: string;
  /** Adds top padding and a hairline when the section does not follow the audience rows. */
  standalone?: boolean;
};

export function ProductShowcase({
  id = 'product',
  eyebrow = 'One app, four places',
  title = 'Everything you need, in one place.',
  body = 'From meaningful conversations to opportunities that move you forward, Kinnoc brings your community together.',
  standalone,
}: ProductShowcaseProps) {
  const [demo, setDemo] = useState<Demo>(INITIAL_DEMO);
  const set: Patch = useCallback((patch) => setDemo((d) => ({ ...d, ...(typeof patch === 'function' ? patch(d) : patch) })), []);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const cur = DESTINATIONS.find((d) => d.id === demo.feature) ?? DESTINATIONS[0];
  const curIndex = DESTINATIONS.indexOf(cur);
  const pick = (id: Feature) => set({ feature: id });

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = DESTINATIONS.length - 1;
    const next = { ArrowRight: curIndex + 1, ArrowDown: curIndex + 1, ArrowLeft: curIndex - 1, ArrowUp: curIndex - 1, Home: 0, End: last }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    const i = next < 0 ? last : next > last ? 0 : next;
    pick(DESTINATIONS[i].id);
    tabRefs.current[i]?.focus();
  };

  const Screen = SCREENS[demo.feature];

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={standalone ? s.standalone : undefined}>
      <div className={`kn-container ${s.layout}`}>
        <div className={s.left}>
          <SectionIntro
            className={s.intro}
            eyebrow={eyebrow}
            titleId={`${id}-title`}
            title={title}
            body={body}
            bodyMax={460}
          />

          <div role="tablist" aria-label="Kinnoc destinations" className={s.tabs} onKeyDown={onKeyDown}>
            {DESTINATIONS.map((d, i) => {
              const on = d.id === demo.feature;
              return (
                <button
                  key={d.id}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  id={`kn-tab-${d.id}`}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="kn-showcase"
                  aria-label={`${d.name}: ${d.sub}`}
                  tabIndex={on ? 0 : -1}
                  className={cx(s.tab, on && s.on)}
                  onClick={() => pick(d.id)}
                >
                  <span className={s.num} aria-hidden="true">{d.num}</span>
                  <span className={s.text}>
                    <span className={s.name}>{d.name}</span>
                    <span className={s.sub}>{d.sub}</span>
                    {on && (
                      <span className={cx('kw-swap', s.open)} aria-hidden="true">
                        <span className={s.openDesc}>{d.desc}</span>
                        <Feats items={d.feats} />
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div key={cur.id} id="kn-showcase-desc" className={cx('kw-swap', s.detail)}>
            <span className={s.detailTitle}>{cur.sub}</span>
            <p className={s.detailDesc}>{cur.desc}</p>
            <Feats items={cur.feats} />
          </div>
        </div>

        <div id="kn-showcase" role="tabpanel" aria-labelledby={`kn-tab-${cur.id}`} aria-describedby="kn-showcase-desc" className={s.stage}>
          <span className={s.numeral} aria-hidden="true">{cur.num}</span>
          <PhoneFrame>
            <Screen key={demo.feature} demo={demo} set={set} />
            {!(demo.feature === 'communities' && demo.chatOpen) && (
              <nav aria-label="App navigation, preview" className={p.nav}>
                {DESTINATIONS.map((d) => {
                  const on = d.id === demo.feature;
                  return (
                    <button key={d.id} type="button" aria-current={on ? 'page' : undefined} className={cx(p.navItem, on && p.navOn)} onClick={() => pick(d.id)}>
                      <span className={p.navIcon}>
                        <Icon name={NAV_ICONS[d.id]} size={24} />
                        {d.id === 'communities' && !demo.tcRead && <span className={cx(p.dot, p.navDot)} />}
                      </span>
                      {d.name}
                    </button>
                  );
                })}
              </nav>
            )}
          </PhoneFrame>
          <span className={s.hint}>
            <b>{cur.hint}</b>
            <span>Sample content, shown for illustration.</span>
          </span>
        </div>
      </div>
    </section>
  );
}
