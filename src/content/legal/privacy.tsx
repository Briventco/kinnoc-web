/**
 * Kinnoc Privacy Policy: DRAFT, not legally reviewed.
 *
 * Verified facts (from this repository, the public website only): the website has no accounts,
 * forms, cookies, analytics, advertising trackers or browser storage; fonts and images are
 * served from the website itself; the homepage product preview runs entirely in the browser.
 * Nothing about the Kinnoc app's back end could be verified here, so app practices are written
 * as what Kinnoc's features require and flagged with `review` notes.
 */
import { ContactLine } from '@/components/ui/ContactLine';
import { SmartLink } from '@/components/ui/SmartLink';
import { ROUTES, SITE } from '@/content/site';
import type { LegalDocument } from './types';

const C = SITE.company;

export const PRIVACY: LegalDocument = {
  title: 'Privacy Policy',
  description: `How ${C} collects, uses and protects personal information when you use Kinnoc.`,
  related: { label: 'Terms of Service', href: ROUTES.terms },
  intro: (
    <p>
      This policy explains what personal information Kinnoc collects, why, how it is used and shared, and the choices and rights you have. We have tried to write it plainly.
    </p>
  ),
  sections: [
    {
      id: 'introduction',
      title: 'Introduction and who we are',
      content: (
        <>
          <p>
            Kinnoc is a community and opportunity platform where students, creators and professionals can join communities, take part in group conversations, share updates and discover events, opportunities and learning resources.
          </p>
          <p>
            Kinnoc is a product of <strong>{C}</strong> (&ldquo;Brivent&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). Brivent is responsible for the personal information processed through Kinnoc and acts as its data controller.
          </p>
        </>
      ),
      review:
        "Confirm Brivent's registered legal details (registration number and registered address) for this section, and confirm whether Brivent is a data controller of major importance that must register with the Nigeria Data Protection Commission and appoint a Data Protection Officer.",
    },
    {
      id: 'scope',
      title: 'Scope of this policy',
      content: (
        <>
          <p>This policy applies to:</p>
          <ul>
            <li>the Kinnoc website, including this page; and</li>
            <li>the Kinnoc app and any related services that link to this policy (together, &ldquo;Kinnoc&rdquo;).</li>
          </ul>
          <p>
            It does not apply to websites, services or organisations that Kinnoc links to, including organisers whose events or opportunities are listed on Kinnoc. Their own privacy policies apply when you deal with them.
          </p>
        </>
      ),
    },
    {
      id: 'information-we-collect',
      title: 'Personal information we may collect',
      content: (
        <>
          <p>The information we collect depends on how you use Kinnoc.</p>
          <h3>When you visit the website</h3>
          <p>
            The Kinnoc website does not ask you to create an account, does not include forms that collect your details, and does not use analytics, advertising trackers or cookies. The interactive product preview on the homepage runs entirely in your browser: anything you type into it stays on your device and is discarded when you leave the page.
          </p>
          <p>
            Like any website, the servers that deliver it receive technical information needed to send pages to your browser, such as your IP address, browser type and the pages requested.
          </p>
          <h3>When you use the Kinnoc app</h3>
          <p>
            To provide Kinnoc&apos;s features, we collect the categories of information described in the sections that follow: information you give us, account and profile information, content you share, and technical information about your use of the service.
          </p>
        </>
      ),
      review:
        'The website facts here were verified in the code. Confirm the hosting provider and whether, and for how long, it keeps server or access logs. Confirm the app collects only the categories listed in sections 4 to 7, and add anything else it collects (for example contacts, location, or push notification tokens).',
    },
    {
      id: 'information-you-provide',
      title: 'Information you provide directly',
      content: (
        <>
          <p>This includes information you choose to give us, for example when you:</p>
          <ul>
            <li>create an account, such as your name and the email address or phone number you sign up with;</li>
            <li>contact us with a question, request or report; and</li>
            <li>report content, a community or another user.</li>
          </ul>
        </>
      ),
      review: 'Confirm the sign-up method (email, phone number, or a third-party sign-in provider such as Google or Apple) and the exact fields required at sign-up.',
    },
    {
      id: 'account-profile-community',
      title: 'Account, profile and community information',
      content: (
        <>
          <p>Kinnoc profiles help people recognise each other and find the right communities. Your profile may include:</p>
          <ul>
            <li>your display name, username and profile photo;</li>
            <li>a headline, short bio and location, if you add them;</li>
            <li>the interests you choose; and</li>
            <li>the communities you join.</li>
          </ul>
          <p>
            We also keep information about how you take part in communities, such as the communities you belong to, and the events, opportunities and resources you save from Discover.
          </p>
        </>
      ),
      review: 'Confirm which profile fields exist and which are optional, and whether school, course or department details are collected for campus communities.',
    },
    {
      id: 'content-you-share',
      title: 'Content you post or share',
      content: (
        <>
          <p>When you use Kinnoc, we store and display the content you create, including:</p>
          <ul>
            <li>posts, comments, photos and videos you share in the Feed;</li>
            <li>messages, photos and reactions you send in community group conversations; and</li>
            <li>listings you share, such as events or opportunities, if you are able to post them.</li>
          </ul>
          <p>
            Please think before sharing personal information about yourself or others in posts and conversations, especially sensitive information such as health, religious or political details.
          </p>
        </>
      ),
      review: 'Confirm whether community conversations are end-to-end encrypted or readable by Brivent (for moderation, for example), and who can post Discover listings.',
    },
    {
      id: 'technical-information',
      title: 'Technical, device and usage information',
      content: (
        <>
          <p>When you use the app, we may collect technical information needed to run, secure and improve Kinnoc, such as:</p>
          <ul>
            <li>device type, operating system and app version;</li>
            <li>IP address and approximate region derived from it;</li>
            <li>log information, such as access times, errors and crashes; and</li>
            <li>how features are used, for example which screens are opened, in a form that helps us understand and improve the service.</li>
          </ul>
        </>
      ),
      review:
        'Not verified: no app code was available. Confirm which of these are actually collected, and name any analytics, crash-reporting or performance tools the app uses. Remove anything that is not collected.',
    },
    {
      id: 'how-we-use',
      title: 'How we use information',
      content: (
        <>
          <p>We use personal information to:</p>
          <ul>
            <li>create and manage your account and show your profile;</li>
            <li>deliver your posts and messages to the people and communities you share them with;</li>
            <li>suggest communities and show listings that may be relevant to your interests;</li>
            <li>keep Kinnoc safe, including detecting spam, abuse and fraud and acting on reports;</li>
            <li>respond to your questions and requests;</li>
            <li>send you service messages, such as security alerts or changes to these policies;</li>
            <li>understand how Kinnoc is used so we can fix problems and improve it; and</li>
            <li>meet our legal obligations.</li>
          </ul>
          <h3>Our legal bases</h3>
          <p>
            Under the Nigeria Data Protection Act 2023 and other applicable laws, we rely on one or more of the following: performing our agreement with you (the{' '}
            <SmartLink href={ROUTES.terms}>Terms of Service</SmartLink>); your consent, which you can withdraw at any time; our legitimate interests in operating a safe and useful service, where those interests are not overridden by yours; and compliance with legal obligations.
          </p>
          <p>We do not sell your personal information.</p>
        </>
      ),
      review:
        'Confirm the legal basis for each purpose, whether any marketing emails or push notifications are sent (and how consent is collected), and whether recommendations involve automated decision-making that needs further disclosure.',
    },
    {
      id: 'visible-to-others',
      title: 'Community interactions and what others can see',
      content: (
        <>
          <p>Kinnoc is built for people to find and talk to each other, so some information is visible to other users by design:</p>
          <ul>
            <li>your profile, including your name, photo, headline, interests and communities, can be seen by other Kinnoc users;</li>
            <li>messages you send in a community conversation can be seen by the members of that community; and</li>
            <li>posts you share can be seen by the audience the Feed shows them to.</li>
          </ul>
          <p>
            Other users can copy, screenshot or share what they see, and we cannot control what they do with it. Share only what you are comfortable with that audience seeing.
          </p>
        </>
      ),
      review: 'Confirm the visibility rules: whether profiles and posts are visible to all users or only to shared communities, whether anything is visible publicly without an account, and whether users can make their profile private.',
    },
    {
      id: 'cookies',
      title: 'Cookies and similar technologies',
      content: (
        <>
          <p>
            The Kinnoc website does not currently use cookies, analytics or advertising trackers, and does not store information in your browser.
          </p>
          <p>
            The Kinnoc app may use similar technologies, such as secure storage on your device, to keep you signed in and remember your settings. If we introduce cookies or tracking that are not strictly necessary, we will update this policy and, where required, ask for your consent first.
          </p>
        </>
      ),
      review: 'The website statement was verified in the code; re-check it whenever analytics or sign-in are added to the website. Confirm what the app stores on the device.',
    },
    {
      id: 'service-providers',
      title: 'Data storage, service providers and third-party integrations',
      content: (
        <>
          <p>
            We use trusted service providers to help run Kinnoc, for example to host the website and app, store data and files, and deliver emails or notifications. They may process personal information on our behalf, only on our instructions, and under contracts that require them to protect it.
          </p>
        </>
      ),
      review:
        'Not verified: list the actual providers and their roles (hosting, database, file and image storage, authentication, email or SMS, push notifications, analytics), and where each stores data. Do not publish until this list is complete.',
    },
    {
      id: 'sharing',
      title: 'When we share information',
      content: (
        <>
          <p>We share personal information only:</p>
          <ul>
            <li><strong>with other users</strong>, as described in section 9, because you chose to share it;</li>
            <li><strong>with service providers</strong> who process it on our behalf, as described in section 11;</li>
            <li><strong>for legal reasons</strong>, when we believe in good faith that disclosure is required by law, a court order or a lawful request from authorities, or is needed to protect the safety, rights or property of users, the public or Brivent;</li>
            <li><strong>in a business change</strong>, such as a merger, acquisition or sale of assets, in which case the recipient must continue to protect your information as this policy describes; and</li>
            <li><strong>with your consent</strong>, in any other case.</li>
          </ul>
          <p>
            When you apply for an opportunity or register for an event through a link on Kinnoc, you deal with the organiser directly, and the information you give them is covered by their privacy policy.
          </p>
        </>
      ),
    },
    {
      id: 'retention',
      title: 'Data retention and deletion',
      content: (
        <>
          <p>
            We keep personal information only for as long as we need it for the purposes described in this policy, including to provide Kinnoc while your account is open, to resolve disputes, to enforce our terms and to meet legal obligations.
          </p>
          <p>
            When information is no longer needed, we delete it or make it anonymous. Some information may remain in backups for a limited time before it is overwritten.
          </p>
        </>
      ),
      review:
        'Set specific retention periods (for example for deleted accounts, messages, logs and backups). Confirm what happens to messages a user sent in community conversations after their account is deleted.',
    },
    {
      id: 'security',
      title: 'Security',
      content: (
        <>
          <p>
            We take reasonable technical and organisational measures, appropriate to the risk, to protect personal information against loss, misuse and unauthorised access.
          </p>
          <p>
            No service can be completely secure. Help us protect your account by using a strong password that you do not use elsewhere, and tell us straight away if you think your account has been compromised. If a personal data breach affects you, we will notify you and the relevant authorities where the law requires us to.
          </p>
        </>
      ),
      review:
        'Describe only measures that are actually in place (for example encryption in transit and at rest, access controls). Confirm the breach response process, including notification of the Nigeria Data Protection Commission within the time the law requires.',
    },
    {
      id: 'your-rights',
      title: 'Your privacy rights',
      content: (
        <>
          <p>Depending on where you live, and in particular under the Nigeria Data Protection Act 2023, you may have the right to:</p>
          <ul>
            <li>be informed about how your personal information is used;</li>
            <li>access the personal information we hold about you;</li>
            <li>ask us to correct information that is inaccurate or incomplete;</li>
            <li>ask us to delete your information;</li>
            <li>ask us to restrict how we use it, or object to our use of it;</li>
            <li>receive your information in a portable format;</li>
            <li>withdraw consent at any time, where we rely on consent; and</li>
            <li>not be subject to decisions based solely on automated processing that significantly affect you.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the details in section 20. We may need to confirm your identity first. We will respond within the time the law allows.
          </p>
          <p>
            If you are not satisfied with our response, you can complain to the Nigeria Data Protection Commission, or to the data protection authority where you live.
          </p>
        </>
      ),
      review: 'Confirm the response time Brivent will commit to, and whether some rights (such as editing a profile or downloading data) can be exercised in the app itself.',
    },
    {
      id: 'account-closure',
      title: 'Account closure and personal data requests',
      content: (
        <>
          <p>
            You can stop using Kinnoc at any time. To close your account or request a copy or deletion of your personal information, contact us using the details in section 20.
          </p>
          <p>
            When an account is closed, we delete or anonymise the personal information associated with it, except where we need to keep some of it for the reasons described in section 13.
          </p>
        </>
      ),
      review: 'No in-app account deletion or data export was verified. If the app offers these, describe where to find them here. App stores may require in-app account deletion.',
    },
    {
      id: 'children',
      title: "Children's privacy",
      content: (
        <>
          <p>
            Kinnoc is not intended for children. You must meet the minimum age set out in the{' '}
            <SmartLink href={`${ROUTES.terms}#eligibility`}>Terms of Service</SmartLink> to use it. Where the law requires it, we will only process the personal information of a person under 18 with the consent of a parent or guardian.
          </p>
          <p>
            If you believe a child has given us personal information without the consent the law requires, please contact us and we will take appropriate steps, including deleting it.
          </p>
        </>
      ),
      review:
        'Decide the minimum age (the Terms draft proposes 18, or 16 to 17 with parental consent). The Nigeria Data Protection Act 2023 requires consent from a parent or guardian for children, and requires appropriate age verification. Confirm how age is checked at sign-up.',
    },
    {
      id: 'international-transfers',
      title: 'International data transfers',
      content: (
        <>
          <p>
            Some of our service providers may store or process information outside Nigeria. When personal information is transferred to another country, we will make sure the transfer is permitted under applicable law and that the information receives an adequate level of protection, for example through appropriate contractual safeguards.
          </p>
        </>
      ),
      review: 'Confirm where data is stored and which providers are outside Nigeria, and the transfer mechanism relied on under Part VIII of the Nigeria Data Protection Act 2023.',
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      content: (
        <>
          <p>
            We may update this policy as Kinnoc changes or as the law requires. When we do, we will change the &ldquo;Last updated&rdquo; date at the top of this page. If a change is significant, we will tell you in advance, for example in the app or by email.
          </p>
        </>
      ),
    },
    {
      id: 'contact',
      title: 'Contact us',
      content: (
        <>
          <p>For privacy questions, requests or concerns, contact {C}:</p>
          <p><ContactLine kind="privacy" /></p>
        </>
      ),
      review: 'No privacy contact has been supplied. Add a monitored privacy email (and the Data Protection Officer details, if one is appointed) in CONTACT in src/content/site.ts.',
    },
  ],
};
