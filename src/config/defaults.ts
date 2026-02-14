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
} as const;
