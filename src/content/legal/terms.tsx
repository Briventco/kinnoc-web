/**
 * Kinnoc Terms of Service: DRAFT, not legally reviewed.
 * Written for the product shown on the website (communities with one group conversation each,
 * a Feed, Discover listings shared by communities and organisers, profiles). No paid features
 * are assumed. Substantive legal choices are flagged with `review` notes.
 */
import { ContactLine } from '@/components/ui/ContactLine';
import { SmartLink } from '@/components/ui/SmartLink';
import { ROUTES, SITE } from '@/content/site';
import type { LegalDocument } from './types';

const C = SITE.company;

export const TERMS: LegalDocument = {
  title: 'Terms of Service',
  description: `The terms that apply when you use Kinnoc, a product of ${C}.`,
  related: { label: 'Privacy Policy', href: ROUTES.privacy },
  intro: (
    <p>
      These terms set out the rules for using Kinnoc, what you can expect from us, and what we expect from you. Kinnoc works because people treat each other well, so please read them.
    </p>
  ),
  sections: [
    {
      id: 'acceptance',
      title: 'Introduction and acceptance',
      content: (
        <>
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) apply to your use of the Kinnoc website, the Kinnoc app and related services (together, &ldquo;Kinnoc&rdquo;).
          </p>
          <p>
            By creating an account or using Kinnoc, you agree to these Terms and confirm that you have read our <SmartLink href={ROUTES.privacy}>Privacy Policy</SmartLink>. If you do not agree, please do not use Kinnoc.
          </p>
        </>
      ),
    },
    {
      id: 'about-us',
      title: 'Kinnoc and Brivent',
      content: (
        <>
          <p>
            Kinnoc is provided by <strong>{C}</strong> (&ldquo;Brivent&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). When these Terms refer to an agreement between you and Kinnoc, that agreement is with Brivent.
          </p>
        </>
      ),
      review: "Add Brivent's company registration number and registered address once confirmed.",
    },
    {
      id: 'eligibility',
      title: 'Eligibility and accounts',
      content: (
        <>
          <p>To use Kinnoc, you must:</p>
          <ul>
            <li>be at least 18 years old, or be at least 16 and have the permission of a parent or guardian who agrees to these Terms for you;</li>
            <li>be able to enter into a binding agreement under the law that applies to you; and</li>
            <li>not have been previously removed from Kinnoc for breaking these Terms, unless we have agreed otherwise.</li>
          </ul>
          <p>You may only have one personal account, and it is for your own use. You may not sell, transfer or share it.</p>
        </>
      ),
      review:
        'Substantive choice: the minimum age (18, or 16 to 17 with parental consent, is proposed here). Check it against the Nigeria Data Protection Act 2023 rules on children and parental consent, against app store requirements, and against how age is verified at sign-up.',
    },
    {
      id: 'account-security',
      title: 'Account accuracy and security',
      content: (
        <>
          <p>
            Give accurate information when you create your account and keep it up to date. You are responsible for keeping your sign-in details secure and for activity on your account. If you think someone else has accessed your account, change your password and tell us straight away.
          </p>
        </>
      ),
    },
    {
      id: 'profiles',
      title: 'Profiles and representations',
      content: (
        <>
          <p>Your profile should represent you honestly. You must not:</p>
          <ul>
            <li>impersonate another person, community, school or organisation;</li>
            <li>misrepresent your identity, qualifications or affiliation with a school, employer or community; or</li>
            <li>create a community that suggests an official connection with an organisation when no such connection exists.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'your-content',
      title: 'Your content and your responsibility for it',
      content: (
        <>
          <p>
            &ldquo;Your content&rdquo; means anything you post, send or share on Kinnoc, including posts, messages, photos, videos, comments, reactions, profile details and listings.
          </p>
          <p>You are responsible for your content. By sharing it, you confirm that:</p>
          <ul>
            <li>you own it, or have the rights and permissions needed to share it on Kinnoc;</li>
            <li>it does not break the law or anyone else&apos;s rights, including privacy and intellectual property rights; and</li>
            <li>if it includes other people, such as in a photo, you have any permission the law requires to share it.</li>
          </ul>
          <p>
            We do not review content before it is posted and are not responsible for content shared by users, but we may act on content that breaks these Terms, as described in section 11.
          </p>
        </>
      ),
    },
    {
      id: 'community-conduct',
      title: 'Community participation and conduct',
      content: (
        <>
          <p>Every community on Kinnoc has a group conversation shared by its members. To keep those conversations useful and welcoming:</p>
          <ul>
            <li>treat other people with respect, including when you disagree;</li>
            <li>keep content relevant to the community you are posting in;</li>
            <li>follow any additional rules a community sets, as long as they are consistent with these Terms; and</li>
            <li>respect people&apos;s privacy: do not share messages, personal details or photos from a community elsewhere without permission.</li>
          </ul>
        </>
      ),
      review: 'Confirm whether communities have admins or moderators who can set rules or remove members. If so, describe their role and responsibilities here.',
    },
    {
      id: 'prohibited',
      title: 'Prohibited uses',
      content: (
        <>
          <p>You must not use Kinnoc to:</p>
          <ul>
            <li>harass, bully, threaten, intimidate or abuse anyone;</li>
            <li>post hate speech, or content that promotes violence or discrimination;</li>
            <li>share sexual content involving minors, or any content that exploits children (we will report it to the authorities);</li>
            <li>share sexually explicit or graphically violent content;</li>
            <li>post fake, misleading or fraudulent events, jobs, internships, scholarships or other opportunities, or ask people for payment or personal information under false pretences;</li>
            <li>send spam, chain messages or unsolicited advertising;</li>
            <li>share someone else&apos;s personal information without their permission;</li>
            <li>infringe anyone&apos;s intellectual property or other rights;</li>
            <li>spread malware, or try to access accounts, data or systems without permission;</li>
            <li>scrape, copy or collect data from Kinnoc by automated means without our written permission;</li>
            <li>interfere with or disrupt Kinnoc, or get around any security or access controls; or</li>
            <li>break any applicable law.</li>
          </ul>
        </>
      ),
    },
    {
      id: 'our-ip',
      title: 'Intellectual property in Kinnoc',
      content: (
        <>
          <p>
            Kinnoc, including its software, design, logos and the Kinnoc name, belongs to Brivent or its licensors and is protected by law. We give you a personal, non-exclusive, non-transferable, revocable permission to use Kinnoc for its intended purpose, in line with these Terms. You may not copy, modify, distribute or reverse-engineer Kinnoc, or use our name and logos, except as the law allows or with our written permission.
          </p>
        </>
      ),
    },
    {
      id: 'content-licence',
      title: 'Ownership of your content and the permission we need',
      content: (
        <>
          <p>You keep ownership of your content.</p>
          <p>
            So that we can run Kinnoc, you give Brivent a non-exclusive, worldwide, royalty-free licence to host, store, copy, display, format and transmit your content, only as needed to operate, provide and improve Kinnoc. This includes showing your content to the people and communities you share it with.
          </p>
          <p>
            This licence ends when your content is deleted from Kinnoc, except where others have already re-shared it, where it is kept in backups for a limited time, or where we must keep it for legal reasons.
          </p>
        </>
      ),
      review: 'Substantive choice: confirm the scope of the licence. In particular, decide whether Brivent wants any right to use user content in marketing. It is deliberately excluded here; adding it would need clear wording and possibly consent.',
    },
    {
      id: 'reporting',
      title: 'Reporting, moderation and enforcement',
      content: (
        <>
          <p>
            If you see content or behaviour that breaks these Terms, please report it. We review reports and may, at our discretion and in proportion to the problem:
          </p>
          <ul>
            <li>remove or limit the visibility of content;</li>
            <li>give a warning;</li>
            <li>restrict features on an account or remove someone from a community; or</li>
            <li>suspend or close an account, as described in section 12.</li>
          </ul>
          <p>
            We may also act on content or accounts that we discover ourselves, or where the law requires it. We are not obliged to monitor everything on Kinnoc.
          </p>
        </>
      ),
      review: 'Confirm how users report content (in the app, and by email). Describe any appeal process. Confirm compliance with any applicable Nigerian requirements for online platforms, such as the NITDA Code of Practice for Interactive Computer Service Platforms.',
    },
    {
      id: 'termination',
      title: 'Suspension, restriction and termination',
      content: (
        <>
          <p>
            You can stop using Kinnoc at any time and ask us to close your account. Our{' '}
            <SmartLink href={`${ROUTES.privacy}#account-closure`}>Privacy Policy</SmartLink> explains what happens to your information.
          </p>
          <p>
            We may suspend, restrict or close your account if you seriously or repeatedly break these Terms, if we must do so by law, or if your account creates a risk to other users or to Kinnoc. Where it is reasonable and lawful, we will tell you why and give you a chance to respond.
          </p>
          <p>Sections 9, 10, 15, 16 and 19 continue to apply after your account is closed.</p>
        </>
      ),
      review: 'Confirm how account closure works in practice (in the app, or by request); no in-app deletion was verified. Confirm the notice and appeal approach.',
    },
    {
      id: 'third-parties',
      title: 'Third-party links, listings and services',
      content: (
        <>
          <p>
            Discover shows events, internships, jobs, scholarships, hackathons and learning resources shared by communities and organisers. Unless we say otherwise, these listings are provided by third parties, not by Brivent.
          </p>
          <p>
            We do not verify every listing, and we are not a party to any arrangement between you and an organiser or employer. Check an opportunity carefully before you apply or share personal information. Legitimate opportunities do not ask you to pay to apply. Please report anything suspicious.
          </p>
          <p>
            Kinnoc may also link to other websites and services. We are not responsible for their content or practices.
          </p>
        </>
      ),
      review: 'Confirm who can post Discover listings, and whether any listings are checked or verified before they appear.',
    },
    {
      id: 'availability',
      title: 'Service availability and changes',
      content: (
        <>
          <p>
            Kinnoc is growing, and we may add, change or remove features. We work to keep Kinnoc available and reliable, but we cannot promise that it will always be available or free of errors. Maintenance, updates or events outside our control may cause interruptions.
          </p>
          <p>
            These Terms do not cover paid features. If we introduce any, we will tell you which terms apply before you pay.
          </p>
        </>
      ),
    },
    {
      id: 'liability',
      title: 'Disclaimers and limitation of liability',
      content: (
        <>
          <p>
            Kinnoc is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the extent permitted by law, we do not give any warranties beyond those set out in these Terms, and we are not responsible for content shared by users or third parties, including listings and opportunities.
          </p>
          <p>
            To the extent permitted by law, Brivent will not be liable for indirect or consequential loss, or for loss of profits, data or opportunities arising from your use of Kinnoc.
          </p>
          <p>
            Nothing in these Terms limits or excludes liability that cannot be limited or excluded by law, including liability for death or personal injury caused by negligence, or for fraud, and nothing affects your rights as a consumer under applicable law.
          </p>
        </>
      ),
      review: 'Substantive choice requiring legal review: whether to include a financial cap on liability, and how these clauses apply under Nigerian law, including the Federal Competition and Consumer Protection Act 2018.',
    },
    {
      id: 'indemnity',
      title: 'Responsibility for claims',
      content: (
        <>
          <p>
            If you use Kinnoc for business or professional purposes, for example as an organiser posting opportunities, you agree to cover reasonable losses and costs that Brivent incurs because of a third-party claim arising from your content or your breach of these Terms, to the extent permitted by law.
          </p>
        </>
      ),
      review: 'Substantive choice requiring legal review: whether an indemnity is appropriate at all. It is deliberately limited here to business and professional use, and does not apply to individual students or members.',
    },
    {
      id: 'privacy',
      title: 'Privacy',
      content: (
        <>
          <p>
            Our <SmartLink href={ROUTES.privacy}>Privacy Policy</SmartLink> explains how we collect and use personal information when you use Kinnoc, and the rights you have. It forms part of how we provide Kinnoc to you.
          </p>
        </>
      ),
    },
    {
      id: 'changes',
      title: 'Changes to these terms',
      content: (
        <>
          <p>
            We may update these Terms as Kinnoc changes or as the law requires. We will change the &ldquo;Last updated&rdquo; date at the top of this page. If a change is significant, we will tell you in advance, for example in the app or by email. If you continue to use Kinnoc after a change takes effect, the updated Terms will apply. If you do not agree, you can stop using Kinnoc and close your account.
          </p>
        </>
      ),
    },
    {
      id: 'governing-law',
      title: 'Governing law and disputes',
      content: (
        <>
          <p>
            These Terms are governed by the laws of the Federal Republic of Nigeria. If you have a concern, please contact us first so we can try to resolve it informally. If we cannot, disputes will be decided by the courts of Nigeria, unless the law where you live gives you the right to bring proceedings there.
          </p>
        </>
      ),
      review: 'Substantive choice requiring legal review: confirm that Brivent is incorporated in Nigeria and that Nigerian law should govern; whether to name a specific court or state; and whether to use mediation or arbitration (for example under the Arbitration and Mediation Act 2023) before going to court.',
    },
    {
      id: 'contact',
      title: 'Contact us',
      content: (
        <>
          <p>For questions about these Terms, contact {C}:</p>
          <p><ContactLine kind="legal" /></p>
        </>
      ),
      review: 'No legal or general contact has been supplied. Add a monitored email address in CONTACT in src/content/site.ts.',
    },
  ],
};
