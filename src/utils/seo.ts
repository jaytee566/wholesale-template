import type { MarketConfig } from './market-config';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(
  domain: string,
  items: BreadcrumbItem[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url.startsWith('http')
        ? item.url
        : `https://${domain}${item.url}`,
    })),
  };
}

export function replaceTokens(text: string, config: MarketConfig): string {
  return text
    .replace(/\{company\}/g, config.company.name)
    .replace(/\{city\}/g, config.city)
    .replace(/\{state\}/g, config.state)
    .replace(/\{state_full\}/g, config.state_full)
    .replace(/\{phone\}/g, config.company.phone)
    .replace(/\{email\}/g, config.company.email)
    .replace(/\{address\}/g, config.company.address.full)
    .replace(/\{domain\}/g, config.domain)
    .replace(/\{homes_purchased\}/g, config.market_data.homes_purchased)
    .replace(/\{google_rating\}/g, config.market_data.google_rating)
    .replace(/\{years_in_business\}/g, String(config.market_data.years_in_business))
    .replace(/\{avg_close_days\}/g, String(config.market_data.avg_close_days));
}
