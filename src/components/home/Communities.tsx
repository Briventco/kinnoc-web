import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Monogram } from '@/components/ui/Monogram';
import { PersonPhoto } from '@/components/ui/PersonPhoto';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { IMAGES, PEOPLE } from '@/content/assets';
import { COMMUNITY_KINDS } from '@/content/home';
import { ROUTES, WHO } from '@/content/site';
import styles from './Communities.module.css';

/** The example Tech Creators conversation on its mist stage. Reused on the About page. */
export function ConversationStage({ className }: { className?: string }) {
  return (
    <div className={`${styles.stage} ${className ?? ''}`}>
      <Conversation />
    </div>
  );
}

function Conversation() {
  return (
    <div className={styles.card} role="img" aria-label="Example community conversation">
      <div className={styles.cardHead}>
        <Image src={IMAGES.techCreators.src} width={IMAGES.techCreators.width} height={IMAGES.techCreators.height} alt="" sizes="38px" className={styles.commPhoto} />
        <span className={styles.headText}>
          <b className={styles.headName}>Tech Creators</b>
          <span className={styles.small}>Group conversation</span>
        </span>
      </div>
      <div className={styles.messages}>
        <div className={styles.msg}>
          <PersonPhoto photo={PEOPLE.p3} size={30} className={styles.msgAvatar} />
          <span className={styles.msgBody}>
            <span className={styles.small}><b>{WHO.p3}</b>&nbsp; 10:12 AM</span>
            <span className={`${styles.bubble} ${styles.in}`}>Who&apos;s going to the hackathon this weekend?</span>
          </span>
        </div>
        <div className={styles.msg}>
          <PersonPhoto photo={PEOPLE.p1} size={30} className={styles.msgAvatar} />
          <span className={styles.msgBody}>
            <span className={styles.small}><b>{WHO.p1}</b>&nbsp; 10:14 AM</span>
            <span className={`${styles.bubble} ${styles.in}`}>Count me in. Let&apos;s form a team!</span>
            <span className={styles.reaction}>🙌 3</span>
          </span>
        </div>
        <div className={styles.mine}>
          <span className={`${styles.bubble} ${styles.out}`}>I&apos;m in too. I&apos;ll handle the UI.</span>
          <span className={styles.receipt}>10:15 AM · Read</span>
        </div>
        <span className={styles.typing}>
          <PersonPhoto photo={PEOPLE.p2} size={20} />
          {WHO.p2} is typing
          <span className="kw-dots" aria-hidden="true"><i /><i /><i /></span>
        </span>
      </div>
    </div>
  );
}

export function Communities() {
  return (
    <section id="communities" aria-labelledby="comm">
      <div className={`kn-container ${styles.layout}`}>
        <ConversationStage />
        <SectionIntro
          loose
          className={styles.copy}
          eyebrow="Communities"
          titleId="comm"
          title="Meaningful communities. Real conversations."
          body="Every community has one group conversation. No channels to manage, nothing hidden in a sidebar: just the people and the chat."
          bodyMax={480}
        >
          <ul className={styles.kinds}>
            {COMMUNITY_KINDS.map((k) => (
              <li key={k.kind} className={styles.kind}>
                <span className={styles.kindLabel}>{k.kind}</span>
                <Monogram text={k.mono} tone={k.tone} className={styles.kindMono} />
                <span className={styles.kindName}>{k.name}</span>
              </li>
            ))}
          </ul>
          <Button href={ROUTES.communitiesApp} variant="quiet" size={52} arrow className={styles.cta}>Explore communities</Button>
        </SectionIntro>
      </div>
    </section>
  );
}
