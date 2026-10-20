import { Icon } from '@ds/components/Icon';
import { ClosingCTA, ctaAccent } from '@/components/home/ClosingCTA';
import { ConversationStage } from '@/components/home/Communities';
import { AudienceRows } from '@/components/home/Audience';
import { ProductShowcase } from '@/components/showcase/ProductShowcase';
import { Button } from '@/components/ui/Button';
import { CompanyLink } from '@/components/ui/CompanyLink';
import { ContactLine } from '@/components/ui/ContactLine';
import { SectionIntro } from '@/components/ui/SectionIntro';
import { SmartLink } from '@/components/ui/SmartLink';
import { BIGGER_PICTURE, IN_ONE_PLACE, PEOPLE_FOR, VALUES } from '@/content/about';
import { ROUTES, SITE } from '@/content/site';
import s from './About.module.css';

/** 1. Introduce Kinnoc */
export function AboutHero() {
  return (
    <section aria-labelledby="about-title" className={`kn-container ${s.twoCol} ${s.hero}`}>
      <div className={s.heroCopy}>
        <span className="kn-eyebrow kw-rise">About Kinnoc</span>
        <h1 id="about-title" className={`kw-rise kw-d1 ${s.title}`}>
          Your next community <span className={s.accent}>starts here.</span>
        </h1>
        <p className={`kn-lead kw-rise kw-d2 ${s.lead}`}>
          Kinnoc is a home for students, creators, and professionals to connect with people who share their interests, exchange ideas, and discover what&apos;s next.
        </p>
        <div className={`kw-rise kw-d3 ${s.ctas}`}>
          <Button href={ROUTES.join} arrow fullOnMobile>Join Kinnoc</Button>
          <Button href="#experience" variant="quiet" fullOnMobile>See how it works</Button>
        </div>
      </div>
      <ConversationStage className="kw-rise kw-d3" />
    </section>
  );
}

/** 2. Why Kinnoc exists */
export function WhyKinnoc() {
  return (
    <section aria-labelledby="why" className={s.ruled}>
      <div className={`kn-container ${s.section} ${s.twoCol}`}>
        <SectionIntro eyebrow="Why Kinnoc exists" titleId="why" title="Finding your people should feel easier." />
        <div className={s.prose}>
          <p className="kn-body">
            The people you want to learn from, the communities you would fit into, the conversations worth joining and the opportunities that could move you forward are often out there. They are just scattered: across group chats, feeds, notice boards, inboxes and word of mouth, and easy to miss.
          </p>
          <p className="kn-body">
            Kinnoc brings them into one place, so you can spend less time searching and more time taking part.
          </p>
          <ul className={s.list}>
            {IN_ONE_PLACE.map((t) => (
              <li key={t} className={s.listItem}>
                <Icon name="check" size={20} strokeWidth={2.2} className={s.listIcon} />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** 3. What Kinnoc stands for */
export function WhatKinnocStandsFor() {
  return (
    <section aria-labelledby="stands-for" className={s.ruled}>
      <div className={`kn-container ${s.section}`}>
        <div className={s.intro}>
          <span className="kn-eyebrow">What Kinnoc stands for</span>
          <h2 id="stands-for" className="kn-h2">Four ideas we build around.</h2>
        </div>
        <ul className={s.values}>
          {VALUES.map((v) => (
            <li key={v.title} className={s.value}>
              <span className={s.valueIcon}><Icon name={v.icon} size={22} /></span>
              <h3 className={s.valueTitle}>{v.title}</h3>
              <p className={s.valueText}>{v.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** 4. Who Kinnoc is for */
export function WhoKinnocIsFor() {
  return (
    <section aria-labelledby="who-for" className={s.ruled}>
      <div className={`kn-container ${s.section} ${s.twoCol}`}>
        <SectionIntro
          eyebrow="Who Kinnoc is for"
          titleId="who-for"
          title="Built for people who are going somewhere."
          body="Kinnoc is for anyone looking for their people. These are some of the people we have in mind as we build it."
          bodyMax={440}
        />
        <AudienceRows items={PEOPLE_FOR} showCommunity={false} footnote="Wherever you are starting from, there is a place for you on Kinnoc." />
      </div>
    </section>
  );
}

/** 5. The Kinnoc experience: the same interactive preview as the homepage */
export function KinnocExperience() {
  return (
    <ProductShowcase
      id="experience"
      standalone
      eyebrow="The Kinnoc experience"
      title="One place to connect, participate, and discover."
      body="Four places, each doing one job well: a Feed for posts and conversations, Communities to find your people, Discover for what's next, and a Profile that shows who you are."
    />
  );
}

/** 6. The bigger picture */
export function BiggerPicture() {
  return (
    <section aria-labelledby="bigger-picture" className={`kw-dark ${s.dark}`}>
      <div className={`kn-container ${s.section}`}>
        <SectionIntro
          tone="ink"
          loose
          className={s.darkIntro}
          eyebrow="The bigger picture"
          titleId="bigger-picture"
          title={<>More than finding people. <span className={s.darkAccent}>Finding what&apos;s possible.</span></>}
          body="Kinnoc starts with a simple idea: when people can find each other, good things become more likely. That is what we are building towards."
          bodyMax={600}
        />
        <ul className={s.ideas}>
          {BIGGER_PICTURE.map((i) => (
            <li key={i.title} className={s.idea}>
              <h3 className={s.ideaTitle}>{i.title}</h3>
              <p className={s.ideaText}>{i.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** 7. The company behind Kinnoc (kept short: Kinnoc stays the subject) */
export function BuiltByBrivent() {
  return (
    <section aria-labelledby="built-by">
      <div className={`kn-container ${s.section} ${s.twoCol}`}>
        <SectionIntro eyebrow="The company behind Kinnoc" titleId="built-by" title="Built by Brivent. Designed around people." />
        <div className={s.prose}>
          <p className="kn-body">
            Kinnoc is a product of <CompanyLink />, a technology company building digital products and solutions. Brivent is responsible for developing Kinnoc and bringing its vision to life.
          </p>
          <p className="kn-body">
            Our focus is on building useful technology around real needs, with thoughtful product development and a commitment to improving the experiences we create for the people who use them.
          </p>
          <div id="contact" className={s.contact}>
            <span className="kn-eyebrow">Contact</span>
            <ContactLine kind="general" />
            <span className={s.contactLinks}>
              <SmartLink href={ROUTES.privacy} className="kw-link kw-under">Privacy Policy</SmartLink>
              <SmartLink href={ROUTES.terms} className="kw-link kw-under">Terms of Service</SmartLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 8. Closing call to action (signup is not built yet, so Join goes to the homepage join section) */
export function AboutClosing() {
  return (
    <ClosingCTA
      id="about-join"
      title={<>Your people are <span className={ctaAccent}>out there.</span></>}
      body="Discover communities, share ideas, and explore what's next with Kinnoc."
      href={ROUTES.join}
    />
  );
}
