import { Icon } from '@ds/components/Icon';
import { Monogram } from '@/components/ui/Monogram';
import { PersonPhoto } from '@/components/ui/PersonPhoto';
import { PEOPLE } from '@/content/assets';
import { WHO } from '@/content/site';
import styles from './HowItWorks.module.css';

const STEPS = [
  { title: 'Create your profile', text: 'Tell people who you are and pick your interests. Kinnoc suggests communities to start with.' },
  { title: 'Join the conversation', text: "Jump into community chats, ask questions, share what you're working on and help others." },
  { title: "Discover what's next", text: "Save events, internships, scholarships and guides that fit where you're heading." },
];

function StepIllustration({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className={styles.panel} aria-hidden="true">
        <span className={styles.person}>
          <PersonPhoto photo={PEOPLE.p4} size={40} />
          <span className={styles.personText}>
            <b className={styles.personName}>{WHO.p4}</b>
            <span className={styles.meta}>Choosing interests</span>
          </span>
        </span>
        <span className={styles.chips}>
          <span className={styles.chip}>Product design</span>
          <span className={`${styles.chip} ${styles.chipOn}`}>Startups</span>
          <span className={styles.chip}>Web development</span>
        </span>
      </div>
    );
  }
  if (step === 1) {
    return (
      <div className={`${styles.panel} ${styles.chat}`} aria-hidden="true">
        <span className={`${styles.bubble} ${styles.in}`}>Anyone up for the hackathon?</span>
        <span className={`${styles.bubble} ${styles.out}`}>Count me in. I&apos;ll do the UI.</span>
        <span className={styles.read}>Read</span>
      </div>
    );
  }
  return (
    <div className={`${styles.panel} ${styles.saved}`} aria-hidden="true">
      <span className={styles.listing}>
        <span className={styles.date}>
          <span className={styles.month}>NOV</span>
          <b className={styles.day}>9</b>
        </span>
        <b className={styles.listingTitle}>Campus Tech Week</b>
        <Icon name="bookmark" size={18} strokeWidth={1.75} filled className={styles.bookmark} />
      </span>
      <span className={styles.listing}>
        <Monogram text="B" tone="sky" className={styles.org} />
        <span className={styles.listingTitle}>
          <span className={styles.kind}>INTERNSHIP</span>
          <b>Frontend Developer</b>
        </span>
        <Icon name="bookmark" size={18} strokeWidth={1.75} filled className={styles.bookmark} />
      </span>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section aria-labelledby="how" className={styles.section}>
      <div className={`kn-container ${styles.inner}`}>
        <div className={styles.intro}>
          <span className="kn-eyebrow">How Kinnoc works</span>
          <h2 id="how" className="kn-h2">Three steps to your people.</h2>
        </div>
        <ol className={styles.steps}>
          {STEPS.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.num}>Step {i + 1}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
              <StepIllustration step={i} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
