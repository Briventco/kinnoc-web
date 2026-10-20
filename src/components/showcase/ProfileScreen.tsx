import Image from 'next/image';
import { Icon } from '@ds/components/Icon';
import { PersonPhoto } from '@/components/ui/PersonPhoto';
import { LISTINGS, POSTS, PROFILE } from '@/content/showcase';
import { AppTitle, cx, Identity, IconButton, ListingItem, SegmentTabs } from './AppParts';
import type { ScreenProps } from './state';
import s from './Phone.module.css';

export function ProfileScreen({ demo, set }: ScreenProps) {
  const post = POSTS.p1;
  const liked = !!demo.liked[post.id];
  const saved = Object.keys(LISTINGS).filter((k) => demo.saved[k]);
  return (
    <div className={cx('kw-screen', s.view)}>
      <AppTitle title="Profile">
        <IconButton icon="settings" label="Settings" stroke={1.7} />
      </AppTitle>
      <div className={cx('kw-scroll', s.scroll)}>
        <div className={s.profileTop}>
          <PersonPhoto photo={PROFILE.photo} size={80} alt={PROFILE.name} />
          <span className={s.profileText}>
            <b className={s.profileName}>{PROFILE.name}</b>
            <span className={s.handle}>{PROFILE.handle}</span>
            <span className={s.headline}>{PROFILE.headline}</span>
          </span>
        </div>
        <p className={s.bio}>{PROFILE.bio}</p>
        <div className={s.editWrap}><button type="button" className={cx('kw-quiet', s.edit)}>Edit profile</button></div>
        <div className={s.block}>
          <span className={s.label}>INTERESTS</span>
          <span className={s.interests}>{PROFILE.interests.map((i) => <span key={i} className={s.interest}>{i}</span>)}</span>
        </div>
        <div className={cx(s.block, s.blockLoose)}>
          <span className={s.blockHead}>
            <span className={s.label}>COMMUNITIES</span>
            <button type="button" className={s.seeAll} onClick={() => set({ feature: 'communities', chatOpen: false })}>See all</button>
          </span>
          <span className={s.strip}>
            {PROFILE.communities.map((c) => <Identity key={c.name} identity={c.identity} className={s.stripId} label={c.name} />)}
          </span>
        </div>
        <SegmentTabs items={[{ id: 'posts', label: 'Posts' }, { id: 'saved', label: 'Saved' }]} value={demo.pTab} onChange={(pTab) => set({ pTab })} className={s.profileTabs} />
        {demo.pTab === 'posts' ? (
          <div className={cx('kw-swap', s.profilePost)}>
            <span className={cx(s.small, s.metaBlock)}>{post.ctx} · {post.time}</span>
            <p className={cx(s.postText, s.postTextTight)}>{post.text}</p>
            {post.media && (
              <Image src={post.media.image.src} width={post.media.image.width} height={post.media.image.height} alt={post.media.alt} sizes="324px" className={cx(s.media, s.profileMedia)} />
            )}
            <span className={s.stats}>
              <span className={cx(s.stat, liked && s.statOn)}><Icon name="heart" size={18} filled={liked} />{post.likes + (liked ? 1 : 0)}</span>
              <span className={s.stat}><Icon name="comment" size={18} />{post.comments}</span>
            </span>
          </div>
        ) : (
          <div className="kw-swap">
            {saved.length ? (
              saved.map((id) => <ListingItem key={id} item={LISTINGS[id]} saved={demo.saved} set={set} asRow />)
            ) : (
              <div className={s.empty}>
                <span className={s.emptyIcon}><Icon name="bookmark" size={21} /></span>
                <b className={s.emptyTitle}>Nothing saved yet</b>
                <span className={s.emptyText}>Save events, opportunities and resources from Discover to find them here.</span>
              </div>
            )}
          </div>
        )}
        <div className={s.spacer14} />
      </div>
    </div>
  );
}
