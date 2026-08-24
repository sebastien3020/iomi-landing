# About IOMI

> Markdown mirror of https://www.iomifinance.com/about. Last updated: 2026-08-24.

Who builds IOMI, what the company legally is, what we can and can never do with your money and your data — and how to verify every claim on this page yourself.

**Read this first:** You should be sceptical of any product that touches your financial life — including this one. Nothing on this page is a claim you have to take on faith: every fact below is either externally verifiable or precise enough to hold us to.

## Why IOMI exists

If you've built anything — a company, a portfolio, a collection — your wealth doesn't live in one place. It's scattered across bank accounts, brokerages, crypto wallets, real estate, business equity, and the things banks can't see. The tools available were built for one slice of that picture, never the whole. So the picture lived in your head, or in a spreadsheet you updated on Sundays.

IOMI exists to end that: one connected picture of everything you own — personal and business, never mixed — and an AI that explains it in plain English.

## What we believe

- **Your whole picture, or no picture.** Net worth that ignores your company equity, your real estate, or your collectibles isn't your net worth.
- **Plain English beats jargon.** You shouldn't need a finance degree to understand your own money.
- **Numbers first, noise never.** No gamification, no hot takes, no pushing products. Clarity is the product.
- **Read-only by design.** IOMI connects to 12,000+ institutions through Plaid, never sees your credentials, and can never move your money.

## What IOMI is — and what it never is

Our biggest trust asset is what we cannot do. There is no custody, no trading, no license to manage anything — so there is nothing we can lose for you.

**What IOMI is:** a private, live dashboard of your entire net worth (personal and business, separated, never mixed); an intelligence layer — the Capital Efficiency Score, suggestions ranked by impact, goals that track themselves; an AI assistant grounded in your real balance sheet — educational, in plain English; and read-only, always.

**What IOMI is never:** not a bank, a broker, or a financial advisor — no personalized investment, tax, or legal advice. No custody — IOMI never holds your assets and structurally cannot move a dollar. No selling your data — period. No storing your bank credentials — Plaid handles authentication; IOMI never sees a password.

## Security & your data, precisely

No "bank-level security" marketing. These are the specifics, stated exactly as far as we have verified them (against our production stack, August 2026):

| The question | Answer | The precise reality |
|---|---|---|
| Can IOMI see my bank password? | Never | You authenticate directly with your bank inside Plaid. Credentials never touch IOMI's servers — we receive only a revocable access token, encrypted at rest with AES-256. |
| Can IOMI move my money? | Never | Access is read-only. No payments, no trading, no transfer capability anywhere in the product. |
| Does IOMI store my account numbers? | No | Full account numbers are never stored — only the last 4 digits, for display. |
| Does the AI see my credentials? | Never | The AI works from an aggregated financial snapshot only — never credentials, account numbers, or connection tokens. |
| Does IOMI sell my data? | Never | We don't sell your data — period. There is no data revenue model. |
| Is my data encrypted? | Yes | TLS 1.2+ for everything in transit. Sensitive credentials — bank connection tokens — encrypted at rest with AES-256. |
| Can I disconnect an institution? | Yes | Any time, from Settings. The access token Plaid issues is revocable. |
| What happens if I delete my account? | Purged | Permanently purged within 30 days. The grace period is deliberate; after that, there is no undo. |

Plaid, our account-aggregation layer, is SOC 2 Type II certified (see plaid.com/security). Where a stronger claim is still being verified with our engineering partners, we state the narrower one — not the flattering one.

## Who builds IOMI

- **Sebastien Gabucci — Founder.** Entrepreneur running personal and business wealth across several entities — IOMI started as the dashboard he couldn't find. LinkedIn: https://www.linkedin.com/in/sebastien-gabucci-aa3696392/
- **Mitesh Vashee — Founding team.** LinkedIn: https://www.linkedin.com/in/miteshvashee/

**Why I built this, in my own words:** I run personal and business wealth across several entities. Every month I rebuilt the picture by hand — bank, company books, brokerage, crypto, the things banks can't see — and at the end of it I still couldn't tell what to do next. IOMI is the dashboard I couldn't find: business and personal side by side, never mixed, with a score that tells me which dollar to move first. — Sebastien

## The company

- **Legal entity:** IOMI Technologies Inc — a Delaware corporation
- **Address:** 1 Sansome Street, San Francisco, CA 94104, United States
- **EIN:** 38-4378123
- **Registry:** Delaware Division of Corporations entity search — https://icis.corp.delaware.gov/eCorp/EntitySearch/NameSearch.aspx
- **Contact:** contact@iomifinance.com — the founder reads it

## Verify us

Five claims, each one checkable without trusting us.

1. **The company is real.** IOMI Technologies Inc is a Delaware corporation (EIN 38-4378123), operating from San Francisco. Check the Delaware state registry. The founder is a real, findable person on LinkedIn.
2. **We never touch your money.** IOMI connects through Plaid — the SOC 2 Type II-certified aggregation platform used by Venmo, Coinbase, and American Express — with read-only access. Your bank credentials never touch IOMI's servers; Plaid issues a revocable access token you can remove from Settings. No custody, no trading, no transfers.
3. **We can't give you advice — by design.** IOMI is an educational platform, not a financial advisor, bank, or broker. That's not a gap we're hiding; it's the deal: we show you your own numbers with total clarity, and the decisions stay yours.
4. **Your data is yours.** TLS 1.2+ in transit; bank connection tokens encrypted at rest with AES-256; full account numbers never stored; the AI never sees credentials — only an aggregated snapshot. We don't sell your data — period. Delete your account and it's permanently purged within 30 days, no undo.
5. **We are early, and we say so.** IOMI is in early access, built by a founding team that runs it on their own numbers every day. You'll find no invented user counts and no fabricated reviews anywhere on this site — when we publish numbers, they will be real ones.

Something you can't verify, or a question this page doesn't answer? Email contact@iomifinance.com — the founder reads everything.
