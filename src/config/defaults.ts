/**
 * Shared defaults inherited by all markets.
 * Market-specific JSON overrides everything here.
 */

export const defaults = {
  hero: {
    badge_text: 'Actively Buying',
    headline_template: 'Your {city} Home.\nCash in Hand.\nYour Timeline.',
    subtitle: 'No agents taking 6%. No repairs. No strangers walking through your house. Just a fair cash offer from a local buyer — and you pick the closing date.',
    proof_points: [
      'Cash offer within 24 hrs',
      'Close in as fast as 7 days',
      'Sell as-is — leave what you don\'t want',
      '$0 fees, $0 commissions',
    ],
  },
  form: {
    title: 'Get Your Cash Offer',
    subtitle: 'No obligation. No pressure. Just your offer.',
    timer_text: '~60 sec',
    address_placeholder: 'Start typing your address…',
    address_helper: 'Exact address helps us pull accurate comps — not a lowball guess.',
    situation_question: 'What\'s going on?',
    situation_helper: 'No judgment. Understanding your situation helps us build the right offer.',
    situation_options: [
      'Foreclosure risk',
      'Inherited property',
      'Divorce',
      'Behind on payments',
      'Relocating',
      'Needs major repairs',
      'Tired landlord',
      'Other',
    ],
    timeline_question: 'How quickly do you need to sell?',
    timeline_helper: 'We close on YOUR schedule — fast or flexible.',
    timeline_options: [
      { label: 'ASAP — as fast as possible', hot: true },
      { label: 'Within 30 days', hot: false },
      { label: '1–3 months', hot: false },
      { label: 'Not sure yet', hot: false },
    ],
    contact_question: 'Where can we discreetly reach you?',
    contact_helper: 'Your info stays between us. We only use it to send your offer.',
    submit_text: 'See My Cash Offer',
    sms_consent_text: 'I agree to receive SMS/text messages about my property. Msg frequency varies. Msg & data rates may apply. Reply STOP to opt out.',
  },
  objection_crusher: [
    'No lowball games',
    'No repairs needed',
    'No agent contracts',
    'No strangers in your home',
  ],
  benefits: [
    {
      icon: '🏠',
      title: 'Sell As-Is',
      description: 'No repairs, no staging, no cleaning. Your home is purchased in its current condition — leave whatever you don\'t want.',
    },
    {
      icon: '📅',
      title: 'You Pick the Date',
      description: 'Close in 7 days or 60 days. You set the timeline that works for your move, not the bank\'s.',
    },
    {
      icon: '🔒',
      title: 'Certainty of Close',
      description: 'No lender approvals, no appraisal contingencies, no last-minute financing fall-through. Cash means done.',
    },
  ],
  how_it_works: {
    tag: 'Process',
    title: 'Four Steps. No Runaround.',
    steps: [
      { title: 'Tell Us the Address', description: '60 seconds. We pull comps and assess your property remotely.' },
      { title: 'We Call You', description: 'Within 2 hours. We walk through the numbers — no pressure, just facts.' },
      { title: 'Review Your Offer', description: 'Clear number. Clear terms. Take your time — the offer stands.' },
      { title: 'Close & Get Paid', description: 'At a local title company. Sign, close, funds in your account.' },
    ],
  },
  mid_cta: {
    headline: 'Ready to See Your Number?',
    button_text: 'Get My Cash Offer',
    sub_text: 'No obligation. Takes 60 seconds.',
  },
  math_comparison: {
    tag: 'The Real Math',
    title: 'What You Actually Walk Away With',
    example_price: 250000,
    repair_cost: 18000,
    carrying_cost: 4200,
    our_offer: 225000,
  },
  about: {
    tag: 'About Us',
    title: 'Local Buyers. Real People. Not a Call Center.',
    trust_line: 'We\'d rather lose a deal than lose your trust.',
  },
  testimonials: {
    tag: 'Real Stories',
    title_template: '{city} Sellers Who Got Their Fresh Start',
  },
  situations: {
    tag: 'Situations We Handle',
    title: 'Whatever You\'re Facing, We\'ve Helped Someone in Your Shoes',
  },
  faq: {
    tag: 'Common Questions',
    title: 'Straight Answers. No Runaround.',
  },
  final_cta: {
    headline: 'You\'ve Waited Long Enough',
    subtitle_template: 'Get a fair cash offer on your {city} home. No fees. No showings. Your timeline.',
    button_text: 'Get My Cash Offer',
  },
  footer: {
    tagline: 'Fair offers, fast closings, zero hassle.',
  },

  /* ── Inner‑page content ─────────────────────────────────── */

  how_it_works_page: {
    title_tag_template: 'How We Buy Houses in {city} | 4‑Step Cash Offer Process',
    meta_description_template:
      'See exactly how {company} buys houses in {city}. Four simple steps: submit your address, get a call, review your offer, close and get paid. No fees, no agents.',
    h1_template: 'How We Buy {city} Houses for Cash',
    intro:
      'Selling a house the traditional way means agents, repairs, showings, and months of uncertainty. Our process eliminates all of that. Here is exactly what happens when you reach out.',
    steps_expanded: [
      {
        title: 'Tell Us the Address',
        summary: '60 seconds. We pull comps and assess your property remotely.',
        detail:
          'Start by entering your property address into the form on this page. Within minutes, we pull comparable sales data, tax records, and neighborhood trends to begin building your offer. No appointment needed, no one shows up at your door. This step takes less than 60 seconds.',
      },
      {
        title: 'We Call You Within 2 Hours',
        summary: 'We walk through the numbers — no pressure, just facts.',
        detail:
          'A real person from our team — not a call center — will call you to ask a few simple questions about the property condition, your timeline, and your goals. We are not trying to sell you anything. We are gathering the information we need to build an honest offer. If we are not the right fit, we will tell you.',
      },
      {
        title: 'Review Your Cash Offer',
        summary: 'Clear number. Clear terms. Take your time — the offer stands.',
        detail:
          'We present a written cash offer with no hidden fees, no agent commissions, and no closing costs to you. The number you see is what you walk away with. Take your time reviewing it. There is no expiration pressure and no obligation. Compare it to your other options and decide what is best for your situation.',
      },
      {
        title: 'Close and Get Paid',
        summary: 'At a local title company. Sign, close, funds in your account.',
        detail_template:
          'Once you accept, we handle all the paperwork and close at a reputable local title company in {city}. You pick the closing date — as fast as 7 days or as far out as 60 days. At closing, funds are wired directly to your bank account or you receive a cashier\'s check. The title company protects both parties throughout the process.',
      },
    ],
    cta_headline: 'Ready to See What Your Home Is Worth?',
    cta_text: 'Get My Cash Offer',
    cta_subtext: 'Free. No obligation. Takes 60 seconds.',
  },

  about_page: {
    title_tag_template: 'About {company} | Local {city} Home Buyers',
    meta_description_template:
      '{company} is a local {city} home buying company. Meet the team, learn our story, and see why {homes_purchased}+ homeowners have trusted us with their biggest asset.',
    h1_template: 'About {company} — Local {city} Home Buyers',
    owner_name: 'Joel',
    owner_role: 'Founder',
    story_paragraphs: [
      '{company} was founded on a simple idea: homeowners in tough situations deserve a fair option that doesn\'t involve agent commissions, months of showings, or tens of thousands in repairs.',
      'We started buying homes in {city} because we saw too many sellers getting squeezed — by agents who needed a listing, by investors who threw out lowball offers, or by a system that assumes everyone has three months and $20,000 to get their house "market ready."',
      'Today, we\'ve helped {homes_purchased}+ families in {city} sell their homes for cash with zero fees and zero hassle. Every offer is based on real comparable sales data. Every closing happens at a reputable local title company where your funds are protected by a neutral third party.',
      'We are not a national franchise. We are not a call center. When you call our number, you talk to a real person who lives and works in {city}. Our office is at {address}, and you are welcome to visit any time.',
    ],
    why_title: 'Why We Do This',
    why_text:
      'Because everyone deserves to sell their home with dignity, on their timeline, without being taken advantage of. If a cash sale is not your best option, we will tell you. We\'d rather lose a deal than lose your trust.',
    trust_signals: [
      { label: 'Homes Purchased', value_key: 'homes_purchased' },
      { label: 'Google Rating', value_key: 'google_rating' },
      { label: 'Years in Business', value_key: 'years_in_business' },
      { label: 'Avg. Days to Close', value_key: 'avg_close_days' },
    ],
  },

  thank_you_page: {
    title_tag_template: 'Thank You | {company}',
    meta_description_template:
      'Your cash offer request has been received. The {company} team will contact you within 2 hours.',
    h1: 'Your Request Has Been Received',
    headline: 'We\'re Preparing Your Cash Offer',
    subtitle:
      'Our team is reviewing your property details and pulling comparable sales in your area right now.',
    expect_call: 'Expect a call within 2 hours',
    expect_detail:
      'A real person from our team — not a robo‑call — will reach out to walk through your options. No pressure, no sales pitch. Just your numbers.',
    cant_wait: 'Can\'t wait? Call us directly:',
    next_steps_title: 'What Happens Next',
    next_steps: [
      'We pull comparable sales and assess your property remotely.',
      'We call you to ask a few quick questions about the property condition.',
      'You receive a written, no‑obligation cash offer — typically within 24 hours.',
    ],
  },

  privacy_policy: {
    title_tag_template: 'Privacy Policy | {company}',
    meta_description_template:
      'Privacy policy for {company}. Learn how we collect, use, and protect your personal information when you use our website or request a cash offer.',
    h1_template: '{city} Privacy Policy — {company}',
    effective_date: '2026‑01‑01',
    sections: [
      {
        heading: 'Information We Collect',
        content:
          'When you use our website or submit a form, we may collect the following information: your name, phone number, email address, property address, property condition details, and selling timeline. We also collect your IP address, browser type, referring URL, and pages visited through standard web analytics.',
      },
      {
        heading: 'How We Use Your Information',
        content:
          'We use your personal information to: (a) prepare and deliver a cash offer for your property, (b) contact you by phone, text message, or email regarding your property inquiry, (c) improve our services and website experience, and (d) comply with legal obligations. We do not sell your personal information to third parties.',
      },
      {
        heading: 'SMS / Text Message Consent',
        content:
          'By checking the SMS consent checkbox on our form, you expressly consent to receive text messages from {company} at the phone number you provided. Message frequency varies. Message and data rates may apply. You may opt out at any time by replying STOP to any message. Consent to receive text messages is not a condition of purchasing any services. For help, reply HELP or contact us at {phone}.',
      },
      {
        heading: 'TCPA Compliance',
        content:
          '{company} complies with the Telephone Consumer Protection Act (TCPA) and the FCC One‑to‑One Consent Rule effective January 2026. We will never send automated text messages or make automated calls without your prior express written consent. Your consent applies only to {company} and is not shared with or used by any third party for their own marketing purposes.',
      },
      {
        heading: 'Cookies and Tracking',
        content:
          'Our website uses cookies and similar technologies to analyze traffic, remember your preferences, and improve your experience. We may use Google Analytics and similar services that set their own cookies. You can control cookies through your browser settings. Disabling cookies may limit certain features of the website.',
      },
      {
        heading: 'Data Security',
        content:
          'We implement reasonable administrative, technical, and physical security measures to protect your personal information. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee absolute security.',
      },
      {
        heading: 'Data Retention',
        content:
          'We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by law. You may request deletion of your data by contacting us at {email}.',
      },
      {
        heading: 'Your Rights',
        content:
          'Depending on your state of residence, you may have the right to: access the personal information we hold about you, request correction of inaccurate information, request deletion of your information, and opt out of certain data processing activities. To exercise these rights, contact us at {email}.',
      },
      {
        heading: 'Changes to This Policy',
        content:
          'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of the website after changes constitutes acceptance of the updated policy.',
      },
      {
        heading: 'Contact Us',
        content:
          'If you have questions about this Privacy Policy, contact {company} at {address}, by phone at {phone}, or by email at {email}.',
      },
    ],
  },

  terms_of_service: {
    title_tag_template: 'Terms of Service | {company}',
    meta_description_template:
      'Terms of service for {company}. Read the terms and conditions governing your use of our website and cash offer services.',
    h1_template: '{city} Terms of Service — {company}',
    effective_date: '2026‑01‑01',
    sections: [
      {
        heading: 'Acceptance of Terms',
        content:
          'By accessing or using the website operated by {company} ("{domain}"), you agree to be bound by these Terms of Service. If you do not agree, do not use the website.',
      },
      {
        heading: 'Services',
        content:
          '{company} provides a website through which homeowners can request a cash offer for their property. Submitting a request does not constitute a binding agreement to sell. Any purchase agreement will be a separate written contract executed by both parties.',
      },
      {
        heading: 'No Guarantee of Offer',
        content:
          'Submitting a form on this website does not guarantee that you will receive an offer or that any offer will be made at a specific price. All offers are subject to property evaluation and are made at the sole discretion of {company}.',
      },
      {
        heading: 'Not Real Estate Advice',
        content:
          '{company} is not a licensed real estate brokerage and does not provide real estate advice. We are a real estate investment company that buys properties directly. We recommend consulting with a licensed real estate attorney or agent before making any decisions regarding the sale of your property.',
      },
      {
        heading: 'User Responsibilities',
        content:
          'You agree to provide accurate and truthful information when using our services. You represent that you have the legal authority to sell or inquire about the property you submit.',
      },
      {
        heading: 'Intellectual Property',
        content:
          'All content on this website, including text, graphics, logos, and design, is the property of {company} and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or create derivative works from this content without written permission.',
      },
      {
        heading: 'Limitation of Liability',
        content:
          '{company} is not liable for any indirect, incidental, special, or consequential damages arising from your use of this website or our services. Our total liability for any claim related to the website shall not exceed the amount you paid to use the service, which is zero.',
      },
      {
        heading: 'Indemnification',
        content:
          'You agree to indemnify and hold harmless {company}, its owners, employees, and agents from any claims, damages, or expenses arising from your use of the website or your breach of these terms.',
      },
      {
        heading: 'Governing Law',
        content:
          'These Terms are governed by the laws of the State of {state_full}. Any disputes shall be resolved in the courts located in {city}, {state}.',
      },
      {
        heading: 'Changes to Terms',
        content:
          '{company} may update these Terms of Service at any time. Continued use of the website after changes constitutes acceptance of the updated terms.',
      },
      {
        heading: 'Contact',
        content:
          'For questions about these Terms, contact {company} at {address}, by phone at {phone}, or by email at {email}.',
      },
    ],
  },
} as const;
