/**
 * Homepage sponsor spots. Edit this file when a company is approved: add it to
 * `HOMEPAGE_SPONSORS` with its logo under `public/sponsors/`. Remove it when
 * the subscription ends.
 */
export interface HomepageSponsor {
  name: string;
  href: string;
  /** Path under `public/`, e.g. `/sponsors/acme.svg`. Keep logos monochrome white. */
  logo: string;
}

export const HOMEPAGE_SPONSORS: ReadonlyArray<HomepageSponsor> = [];

export const HOMEPAGE_SPOT_COUNT = 4;
export const HOMEPAGE_SPOT_PRICE = "$500";

/** Stripe Payment Link for the monthly spot subscription. */
export const SPONSOR_SPOT_CHECKOUT_URL = "https://buy.stripe.com/REPLACE_ME";

export const SPONSOR_CONTACT_EMAIL = "hello@paseo.sh";

export const GITHUB_SPONSORS_URL = "https://github.com/sponsors/boudra";
export const OPEN_COLLECTIVE_URL =
  "https://opencollective.com/paseo-ai/donate?interval=month&amount=10&contributeAs=me";
export const BUY_ME_A_COFFEE_URL = "https://buymeacoffee.com/paseo";

export function openSpotCount(): number {
  return Math.max(0, HOMEPAGE_SPOT_COUNT - HOMEPAGE_SPONSORS.length);
}
