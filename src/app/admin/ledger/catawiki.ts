/**
 * What Catawiki pays out for a hammer price, to prefill a sale's net payout:
 * the hammer less a 12.5% commission and 23% VAT on it (each rounded to the
 * cent), less the fixed fee since mid-2024 and its VAT (€3 under €500, €5 under
 * €1,000, €10 above), plus the shipping the buyer paid. The same arithmetic the
 * workbook pipeline matches payouts with (scripts/sales/_shared.ts catawikiFit);
 * kept here because src/ never imports from scripts/. Only a default: the
 * payout as it arrived is what gets saved.
 */

const round2 = (x: number): number => Math.round((x + Number.EPSILON) * 100) / 100;

export function catawikiPayout(hammer: number, shipping = 0): number {
  if (!(hammer > 0)) return 0;
  const commission = round2(0.125 * hammer);
  const vat = round2(0.23 * commission);
  const fee = hammer < 500 ? 3 : hammer < 1000 ? 5 : 10;
  return round2(hammer - commission - vat - round2(fee * 1.23) + shipping);
}
