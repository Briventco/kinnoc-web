import Image from 'next/image';
import { Icon } from '@ds/components/Icon';
import { PersonPhoto } from '@/components/ui/PersonPhoto';
import { LOGO } from '@/content/assets';
import { FEED_LISTS, FEED_TABS, POSTS, PROFILE, UPDATES, type PostDef, type UpdateDef } from '@/content/showcase';
import { cx, Identity, IconButton, SegmentTabs } from './AppParts';
import type { Patch, ScreenProps } from './state';
import s from './Phone.module.css';

export function Post({ post, liked, kept, set }: { post: PostDef; liked: boolean; kept: boolean; set: Patch }) {
  return (
    <article className={s.post}>
      <div className={s.postHead}>
        {'photo' in post.avatar ? <PersonPhoto photo={post.avatar.photo} size={40} /> : <Identity identity={post.avatar} className={s.avatarMono} />}
        <span className={s.postWho}>
          <b className={s.postName}>{post.name}</b>
          <span className={s.small}>{post.ctx} · {post.time}</span>
        </span>
        <IconButton icon="more-horizontal" label="More options" size={20} className={s.more} />
      </div>
      <p className={s.postText}>{post.text}</p>
      {post.media && (
        <Image src={post.media.image.src} width={post.media.image.width} height={post.media.image.height} alt={post.media.alt} sizes="324px" className={s.media} />
      )}
      <div className={s.actions}>
        <button type="button" className={cx(s.action, liked && s.actionOn)} aria-pressed={liked} aria-label="Like" onClick={() => set((d) => ({ liked: { ...d.liked, [post.id]: !d.liked[post.id] } }))}>
          <Icon name="heart" size={20} filled={liked} />{post.likes + (liked ? 1 : 0)}
        </button>
        <button type="button" className={s.action} aria-label="Comments">
          <Icon name="comment" size={20} />{post.comments}
        </button>
        <button type="button" className={s.action} aria-label="Share">
          <Icon name="share" size={20} />
        </button>
        <span className={s.grow} />
        <button type="button" className={cx(s.action, kept && s.actionOn)} aria-pressed={kept} aria-label="Save" onClick={() => set((d) => ({ kept: { ...d.kept, [post.id]: !d.kept[post.id] } }))}>
          <Icon name="bookmark" size={20} filled={kept} />
        </button>
      </div>
    </article>
  );
}

function Update({ u }: { u: UpdateDef }) {
  return (
    <div className={s.update}>
      <span className={cx(s.small, s.updateHead)}>
        <Identity identity={u.identity} className={s.updateId} />
        <span><b>{u.name}</b> · {u.kind} · {u.time}</span>
      </span>
      <span className={s.updateTitle}>{u.title}</span>
      <span className={s.updateMeta}>{u.meta}</span>
    </div>
  );
}

export function FeedScreen({ demo, set }: ScreenProps) {
  return (
    <div className={cx('kw-screen', s.view)}>
      <div className={cx(s.appHeader, s.appHeaderLogo)}>
        <Image src={LOGO.lockupBlue.src} width={LOGO.lockupBlue.width} height={LOGO.lockupBlue.height} alt="Kinnoc" sizes="124px" className={s.appLogo} />
        <span className={s.grow} />
        <IconButton icon="search" label="Search" />
        <IconButton icon="bell" label="Notifications, 1 new"><span className={cx(s.dot, s.bellDot)} /></IconButton>
      </div>
      <SegmentTabs items={FEED_TABS} value={demo.fTab} onChange={(fTab) => set({ fTab })} tall />
      <div className={cx('kw-scroll', s.scroll)}>
        <div className={s.composer}>
          <PersonPhoto photo={PROFILE.photo} size={36} />
          <span className={cx(s.composerText, s.ellipsis)}>Share something with your communities</span>
          <IconButton icon="image" label="Add a photo" stroke={1.8} />
        </div>
        {FEED_LISTS[demo.fTab].map((id) =>
          id in POSTS ? (
            <Post key={id} post={POSTS[id as keyof typeof POSTS]} liked={!!demo.liked[id]} kept={!!demo.kept[id]} set={set} />
          ) : (
            <Update key={id} u={UPDATES[id as keyof typeof UPDATES]} />
          ),
        )}
        <div className={s.spacer12} />
      </div>
    </div>
  );
}
