import { useEffect, useRef } from 'react';
import { Icon } from '@ds/components/Icon';
import { Monogram } from '@/components/ui/Monogram';
import { IMAGES } from '@/content/assets';
import { INBOX } from '@/content/showcase';
import { AppTitle, cx, Identity, IconButton, SegmentTabs } from './AppParts';
import type { ScreenProps } from './state';
import s from './Phone.module.css';

function Inbox({ demo, set }: ScreenProps) {
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);

  const lastSent = demo.sent[demo.sent.length - 1];
  const rows = INBOX.map((r) =>
    r.id === 'tc'
      ? { ...r, unread: !demo.tcRead, who: lastSent ? 'You: ' : r.who, msg: lastSent ?? r.msg, time: lastSent ? 'Now' : r.time }
      : r,
  );
  const unreadN = rows.filter((r) => r.unread).length;
  const shown = demo.cTab === 'unread' ? rows.filter((r) => r.unread) : rows;

  const nudge = () => {
    set({ note: true });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => set({ note: false }), 2200);
  };

  return (
    <div className={cx('kw-screen', s.view)}>
      <AppTitle title="Communities">
        <IconButton icon="search" label="Search communities" />
        <IconButton icon="compose" label="New" size={21} stroke={1.8} />
      </AppTitle>
      <SegmentTabs
        items={[{ id: 'all', label: 'All' }, { id: 'unread', label: 'Unread', count: unreadN ? String(unreadN) : undefined }]}
        value={demo.cTab}
        onChange={(cTab) => set({ cTab })}
      />
      <div className={cx('kw-scroll', s.scroll)}>
        {shown.map((r) => (
          <button
            key={r.id}
            type="button"
            className={cx('kw-app-row', s.row, r.unread && s.unread)}
            aria-label={r.name + (r.unread ? ', unread' : '')}
            onClick={r.id === 'tc' ? () => set({ chatOpen: true, tcRead: true }) : nudge}
          >
            <Identity identity={r.identity} className={s.rowId} />
            <span className={s.rowMain}>
              <span className={s.rowTop}>
                <span className={cx(s.rowName, s.ellipsis)}>{r.name}</span>
                <span className={s.rowTime}>{r.time}</span>
              </span>
              <span className={s.rowBottom}>
                {r.typer ? (
                  <span className={s.typingLine}>{r.typer} is typing<span className="kw-dots" aria-hidden="true"><i /><i /><i /></span></span>
                ) : (
                  <span className={cx(s.rowMsg, s.ellipsis)}><b>{r.who}</b>{r.msg}</span>
                )}
                {r.unread && r.badge && <span className={s.badge}>{r.badge}</span>}
                {r.unread && r.mention && <span className={s.mention}>@</span>}
              </span>
            </span>
          </button>
        ))}
      </div>
      {demo.note && <span className={cx('kw-swap', s.toast)} role="status">In this preview, only Tech Creators opens.</span>}
    </div>
  );
}

function Chat({ demo, set }: ScreenProps) {
  const send = () => {
    const t = demo.draft.trim();
    if (t) set((d) => ({ sent: [...d.sent, t], draft: '' }));
  };
  const hasDraft = demo.draft.trim().length > 0;
  return (
    <div className={cx('kw-push', s.view)}>
      <div className={s.chatHead}>
        <IconButton icon="chevron-left" label="Back to communities" size={24} stroke={2} onClick={() => set({ chatOpen: false })} />
        <Identity identity={{ photo: IMAGES.techCreators }} className={s.chatId} />
        <span className={s.chatWho}>
          <b>Tech Creators</b>
          <span className={s.ellipsis}>Deborah, Tunde, Esther and you</span>
        </span>
        <IconButton icon="more-horizontal" label="Community info" size={20} />
      </div>
      <div className={cx('kw-scroll', s.scroll, s.chatScroll)}>
        <div className={s.thread}>
          <span className={s.dayChip}>Today</span>
          <div className={s.msgIn}>
            <Monogram text="D" tone="mist" className={s.msgAv} />
            <span className={cx(s.bubble, s.bubbleIn)}><b className={s.sender}>Deborah</b>The recording from Saturday&apos;s session is now available.<span className={s.stamp}>10:02</span></span>
          </div>
          <div className={s.msgOut}>
            <span className={cx(s.bubble, s.bubbleOut)}>
              Who&apos;s going to the hackathon this weekend?
              <span className={s.stampOut}>10:12<Icon name="check-check" size={15} strokeWidth={2} label="Read" /></span>
            </span>
          </div>
          <div className={s.msgIn}>
            <Monogram text="T" tone="navy" className={cx(s.msgAv, s.msgAvLift)} />
            <span className={s.msgCol}>
              <span className={cx(s.bubble, s.bubbleIn)}><b className={s.sender}>Tunde</b>Count me in. Let&apos;s form a team!<span className={s.stamp}>10:14</span></span>
              <button type="button" className={cx(s.react, demo.reacted && s.reactOn)} aria-pressed={demo.reacted} aria-label="React" onClick={() => set((d) => ({ reacted: !d.reacted }))}>
                🙌 {demo.reacted ? 4 : 3}
              </button>
            </span>
          </div>
          <div className={s.msgIn}>
            <Monogram text="E" tone="sky" className={s.msgAv} />
            <span className={cx(s.bubble, s.bubbleIn)}><b className={s.sender}>Esther</b>I&apos;m in too. I&apos;ll handle the UI.<span className={s.stamp}>10:15</span></span>
          </div>
          {demo.sent.map((m, i) => (
            <div key={i} className={cx('kw-swap', s.msgOut)}>
              <span className={cx(s.bubble, s.bubbleOut)}>{m}<span className={s.stampOut}>Now<Icon name="check" size={13} strokeWidth={2} label="Sent" /></span></span>
            </div>
          ))}
          <span className={s.typingChat}>Deborah is typing<span className="kw-dots" aria-hidden="true"><i /><i /><i /></span></span>
        </div>
      </div>
      <div className={s.msgBar}>
        <IconButton icon="plus" label="Attach" size={24} />
        <label className={s.field}>
          <input
            className={s.input}
            value={demo.draft}
            placeholder="Message Tech Creators"
            aria-label="Message Tech Creators"
            onChange={(e) => set({ draft: e.target.value })}
            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); send(); } }}
          />
        </label>
        {hasDraft ? (
          <button type="button" className={s.send} aria-label="Send" onClick={send}><Icon name="arrow-up" size={19} strokeWidth={2.2} /></button>
        ) : (
          <IconButton icon="camera" label="Send a photo" stroke={1.8} />
        )}
      </div>
    </div>
  );
}

export function CommunitiesScreen(props: ScreenProps) {
  return props.demo.chatOpen ? <Chat {...props} /> : <Inbox {...props} />;
}
