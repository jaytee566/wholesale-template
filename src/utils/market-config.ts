export interface MarketAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  full: string;
}

export interface MarketCompany {
  name: string;
  phone: string;
  phone_raw: string;
  email: string;
  address: MarketAddress;
}

export interface MarketSEO {
  primary_keyword: string;
  secondary_keywords: string[];
  title_tag: string;
  meta_description: string;
}

export interface MarketData {
  avg_days_on_market: number;
  avg_commission_pct: number;
  avg_closing_cost_pct: number;
  homes_purchased: string;
  google_rating: string;
  avg_close_days: number;
  years_in_business: number;
}

export interface MarketCompliance {
  state_requires_disclosure: boolean;
  cancellation_period_days: number;
  sms_consent_required: boolean;
}

export interface Neighborhood {
  name: string;
  slug: string;
  zip: string;
  description: string;
}

export interface Situation {
  title: string;
  slug: string;
  keyword: string;
  short_desc: string;
  hero_headline: string;
}

export interface Testimonial {
  name: string;
  location: string;
  problem: string;
  outcome: string;
  timeframe: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface MarketConfig {
  market_id: string;
  city: string;
  state: string;
  state_full: string;
  metro: string;
  domain: string;
  company: MarketCompany;
  seo: MarketSEO;
  market_data: MarketData;
  compliance: MarketCompliance;
  neighborhoods: Neighborhood[];
  situations: Situation[];
  testimonials: Testimonial[];
  faq: FAQItem[];
}

const marketModules = import.meta.glob<MarketConfig>(
  '../config/markets/*.json',
  { eager: true, import: 'default' }
);

export function getMarketConfig(): MarketConfig {
  const marketId = import.meta.env.MARKET_ID || 'jacksonville-fl';
  const key = Object.keys(marketModules).find((k) => k.includes(marketId));
  if (!key) {
    throw new Error(`Market config not found for: ${marketId}`);
  }
  return marketModules[key];
}
