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

  situation_pages: {
    foreclosure: {
      title_tag_template: 'Facing Foreclosure in {city}? Sell Your House Fast for Cash | {company}',
      meta_description_template:
        'Facing foreclosure in {city}? {company} buys houses fast for cash. Stop the foreclosure process, protect your credit, and close in as few as 7 days.',
      content: `
        <h2>What Happens When You Face Foreclosure in {city}</h2>
        <p>Getting that notice from your lender is terrifying. The clock is ticking, the stress is unbearable, and it feels like there is no way out. <strong>But you have more options than your bank wants you to think.</strong></p>
        <p>Every day you wait, you lose equity. Once the foreclosure goes through, it stays on your credit report for seven years. That means higher interest rates on everything — cars, credit cards, even renting an apartment becomes harder. The financial damage compounds fast.</p>

        <h2>How {company} Helps</h2>
        <p>We specialize in buying {city} homes quickly — <strong>as fast as 7 days from your first call</strong>. That is often fast enough to stop the foreclosure process entirely. You sell on your terms, keep your equity, and walk away with cash in hand.</p>
        <p>We work directly with your lender if needed. Our team has handled dozens of pre-foreclosure sales in {city}, and we know exactly how to navigate the timeline so you do not lose your home to the bank.</p>

        <h2>What You Can Expect</h2>
        <p>You fill out our form or call us. Within hours, we review your situation and make you a <strong>fair, no-obligation cash offer</strong>. No agents, no commissions, no repair bills. The number we give you is what you walk away with.</p>
        <p>If you accept, we close at a local {city} title company — a neutral third party that protects your funds. You pick the date. Most sellers in foreclosure close within two weeks and move on with their lives debt-free.</p>
      `,
    },
    'inherited-property': {
      title_tag_template: 'Sell an Inherited House in {city} Fast for Cash | {company}',
      meta_description_template:
        'Inherited a {city} property you do not want? {company} buys inherited houses as-is for cash. We handle probate complications and close on your schedule.',
      content: `
        <h2>What Happens When You Inherit a Property in {city}</h2>
        <p>Losing a loved one is hard enough without inheriting a house you did not ask for. Maybe it is across town, maybe it needs $40,000 in repairs, or maybe you just do not want to deal with it. <strong>You should not have to carry that burden on top of your grief.</strong></p>
        <p>Inherited properties come with headaches — probate court, property taxes piling up, insurance costs, and maintenance on a house nobody is living in. The longer it sits, the more it costs you out of pocket.</p>

        <h2>How {company} Helps</h2>
        <p>We buy inherited {city} homes in any condition — <strong>as-is, no repairs, no cleaning</strong>. Leave the furniture, leave the personal items, leave whatever you do not want. We handle everything after closing.</p>
        <p>If the property is still in probate, our team knows how to work with {city} probate attorneys to keep the process moving. We have bought dozens of inherited homes in the area and can guide you through every step.</p>

        <h2>What You Can Expect</h2>
        <p>Tell us about the property and we will make you a cash offer — usually within 24 hours. <strong>No showings, no open houses, no strangers walking through your family's home.</strong> Just a straightforward number based on real comparable sales.</p>
        <p>When you are ready, we close at a reputable {city} title company. You split the proceeds with other heirs however you need to. Most inherited property sales close within two to three weeks.</p>
      `,
    },
    divorce: {
      title_tag_template: 'Sell Your House Fast During Divorce in {city} | {company}',
      meta_description_template:
        'Going through a divorce in {city}? Sell your house fast for cash with {company}. Split the asset cleanly, close quickly, and move on without the drama.',
      content: `
        <h2>What Happens When You Sell a House During Divorce in {city}</h2>
        <p>Divorce is already emotionally exhausting. The last thing you need is a six-month listing process with showings, repairs, and two people who cannot agree on a price. <strong>The house becomes the thing that keeps you stuck.</strong></p>
        <p>Every month the house sits on the market, you are both paying the mortgage, the insurance, and the utilities. Arguments about the property drag out the settlement. Your attorney bills keep climbing. It does not have to be this way.</p>

        <h2>How {company} Helps</h2>
        <p>We make one cash offer that both parties can evaluate. <strong>No agents taking 6%, no repair negotiations, no buyer financing falling through.</strong> One number, one closing, done. It is the fastest way to split the asset and move on.</p>
        <p>Our process is discreet. No yard sign, no open houses, no neighbors asking questions. We close at a {city} title company where the proceeds are split however your attorneys direct.</p>

        <h2>What You Can Expect</h2>
        <p>Reach out and we will have a cash offer for you within 24 hours. <strong>You and your spouse review it together or separately — whatever works.</strong> There is no obligation and no pressure from us.</p>
        <p>If you both agree, we can close in as few as 7 days or wait up to 60 days if the settlement timeline requires it. The title company handles the paperwork and distributes the funds according to your agreement.</p>
      `,
    },
    'behind-on-payments': {
      title_tag_template: 'Behind on Mortgage Payments in {city}? Sell Fast for Cash | {company}',
      meta_description_template:
        'Behind on mortgage payments in {city}? {company} can buy your house fast for cash before the situation gets worse. No fees, no agents, close in days.',
      content: `
        <h2>What Happens When You Fall Behind on Payments in {city}</h2>
        <p>Missing one mortgage payment is stressful. Missing two or three feels like a hole you cannot climb out of. <strong>Late fees stack up, your credit score drops, and your lender starts sending letters that get more aggressive every week.</strong></p>
        <p>The longer you wait, the fewer options you have. Once your lender files a notice of default, the foreclosure clock starts and everything accelerates. But right now, you still have options — and selling for cash may be the smartest one.</p>

        <h2>How {company} Helps</h2>
        <p>We buy {city} homes fast enough to <strong>stop the debt from spiraling</strong>. Our cash offer covers what you owe — and in most cases, you walk away with equity in your pocket. No commissions, no closing costs, no repair bills eating into your proceeds.</p>
        <p>If your situation is complicated — maybe you owe more than you think the house is worth — we can still help. We work with lenders on short sales and have experience finding solutions that protect your credit.</p>

        <h2>What You Can Expect</h2>
        <p>Call us or fill out the form. We will review your situation and give you an honest assessment — <strong>not a sales pitch</strong>. If selling to us makes sense, you will have a written cash offer within 24 hours.</p>
        <p>We close at a local {city} title company on whatever date works for you. The title company pays off your mortgage directly, and any remaining equity comes to you. Most sellers in this situation close within two weeks.</p>
      `,
    },
    relocating: {
      title_tag_template: 'Relocating from {city}? Sell Your House Fast for Cash | {company}',
      meta_description_template:
        'Relocating from {city} and need to sell fast? {company} buys houses for cash with no repairs, no agents, and flexible closing dates. Move on your schedule.',
      content: `
        <h2>What Happens When You Need to Relocate from {city}</h2>
        <p>Whether it is a job transfer, a family situation, or just a fresh start — when you need to move, you need to move. <strong>Waiting six months for your house to sell through an agent is not an option when your life is already in the next city.</strong></p>
        <p>Carrying two mortgages is brutal. Flying back for showings is expensive and exhausting. And every month your {city} house sits empty, you are paying a mortgage, insurance, lawn care, and utilities on a home nobody lives in.</p>

        <h2>How {company} Helps</h2>
        <p>We buy your {city} home on your relocation timeline — <strong>whether that is 7 days or 60 days</strong>. You do not need to make repairs, clean the house, or even be in town for the closing. We handle everything.</p>
        <p>No staging, no photography, no open houses. Just a fair cash offer based on real comparable sales data, and a closing at a local title company. You can sign remotely if you have already moved.</p>

        <h2>What You Can Expect</h2>
        <p>Tell us your address and your timeline. We will make you a <strong>no-obligation cash offer within 24 hours</strong>. Compare it to listing with an agent — factor in the 6% commission, the months of carrying costs, and the repair bills — and see which number is actually better.</p>
        <p>If you accept, we coordinate everything remotely. You pick the closing date, sign the documents electronically or via mobile notary, and the funds land in your account. No trips back to {city} required.</p>
      `,
    },
    'needs-repairs': {
      title_tag_template: 'Sell a House That Needs Repairs in {city} As-Is for Cash | {company}',
      meta_description_template:
        'House needs repairs in {city}? {company} buys homes as-is for cash. No inspections, no contractor hassles, no repair costs. Get your offer today.',
      content: `
        <h2>What Happens When Your {city} Home Needs Repairs</h2>
        <p>You know the house needs work. Maybe the roof is shot, the HVAC is on its last legs, or there is water damage you have been trying to ignore. <strong>Getting three contractor quotes and spending $20,000 to $50,000 before you can even list the property feels insane.</strong></p>
        <p>And here is the thing agents will not tell you: even after you spend all that money on repairs, buyers will still negotiate the price down after their inspection finds more issues. You end up spending money you do not have to sell for less than you expected.</p>

        <h2>How {company} Helps</h2>
        <p>We buy {city} homes <strong>in any condition — as-is, no repairs, no inspections, no contingencies</strong>. Foundation problems, mold, fire damage, 30-year-old kitchens — we have seen it all and we do not flinch.</p>
        <p>Our offer accounts for the repair costs so you do not have to deal with contractors, permits, or timelines. You keep your money in your pocket and skip straight to the closing table.</p>

        <h2>What You Can Expect</h2>
        <p>Tell us about the property — the good and the bad. We will pull comparable sales data and give you a <strong>fair cash offer within 24 hours</strong>. No one needs to walk through the house first. No surprise deductions after the fact.</p>
        <p>If you accept, we close at a {city} title company on your schedule. Leave the broken appliances, the old carpet, the junk in the garage — we deal with all of it. You walk away with your check and zero headaches.</p>
      `,
    },
    'code-violations': {
      title_tag_template: 'Sell a House with Code Violations in {city} for Cash | {company}',
      meta_description_template:
        'Code violations on your {city} property? {company} buys houses with code violations as-is for cash. Stop the fines and sell fast — no repairs required.',
      content: `
        <h2>What Happens When Your {city} Property Has Code Violations</h2>
        <p>Code violations do not just go away. The fines keep accruing, the city keeps sending letters, and the longer you wait the more expensive it gets. <strong>Some {city} homeowners end up owing more in fines than the violations cost to fix.</strong></p>
        <p>Fixing code violations yourself means dealing with permits, inspectors, contractors, and timelines that drag on for months. And most agents will not even list a property with open violations because it scares off traditional buyers who need financing.</p>

        <h2>How {company} Helps</h2>
        <p>We buy {city} properties with code violations — <strong>no questions asked, no repairs required</strong>. We have the crews, the permits, and the experience to handle violations after closing. That is our problem, not yours.</p>
        <p>Our offer factors in the cost of resolving the violations so you get a fair price without spending a dime on fixes. We work directly with {city} code enforcement to clear the violations after we purchase the property.</p>

        <h2>What You Can Expect</h2>
        <p>Tell us about the violations and the property. We will pull the code enforcement records, assess the situation, and give you a <strong>written cash offer — usually within 24 hours</strong>. No obligation, no pressure.</p>
        <p>Once you accept, we close at a local {city} title company. The fines stop accruing, the letters stop coming, and you walk away clean. Most code violation properties close within two to three weeks.</p>
      `,
    },
    'tired-landlord': {
      title_tag_template: 'Tired of Being a Landlord in {city}? Sell Your Rental for Cash | {company}',
      meta_description_template:
        'Tired of being a landlord in {city}? {company} buys rental properties for cash — even with tenants in place. No repairs, no agents, no more headaches.',
      content: `
        <h2>What Happens When You Are Done Being a Landlord in {city}</h2>
        <p>Maybe the tenants stopped paying rent. Maybe the maintenance calls never stop. Maybe you have just done the math and realized the rental is not making you money anymore — it is costing you. <strong>Being a landlord sounded like a good investment until it became a second job you hate.</strong></p>
        <p>Selling a rental through an agent means evicting tenants first, making repairs, staging an empty house, and waiting months for a buyer. That is more money out of your pocket and more months of stress before you see a dime.</p>

        <h2>How {company} Helps</h2>
        <p>We buy {city} rental properties <strong>with tenants in place</strong>. You do not need to evict anyone, make repairs, or deal with showings while someone is living there. We handle the tenant situation after closing.</p>
        <p>Whether it is a single-family rental, a duplex, or a small multi-family — we have bought them all in {city}. Our offer is based on real numbers, not lowball tactics. We want a fair deal that makes sense for both of us.</p>

        <h2>What You Can Expect</h2>
        <p>Tell us about the property and the tenant situation. We will run the numbers and give you a <strong>fair cash offer within 24 hours</strong>. No need to warn the tenants, no need to schedule showings around their schedule.</p>
        <p>If you accept, we close at a local {city} title company and the tenants become our responsibility. You walk away with cash and <strong>zero landlord headaches from day one</strong>. Most rental property sales close within two to three weeks.</p>
      `,
    },
  } as Record<string, { title_tag_template: string; meta_description_template: string; content: string }>,
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
