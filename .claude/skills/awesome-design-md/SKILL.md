---
name: awesome-design-md
description: Brand-accurate UI generation using 73 DESIGN.md design-system analyses of well-known products (Linear, Stripe, Vercel, Apple, Notion, Spotify, and more). Use when the user asks for a page/UI "in the style of <brand>", names a brand as a visual reference, or wants a consistent, non-generic design language applied to frontend work.
metadata:
  source: https://github.com/VoltAgent/awesome-design-md
  license: MIT (see LICENSE in source repo)
---

# Awesome DESIGN.md

This skill contains 73 DESIGN.md files, each a detailed analysis of a real brand's design system: color tokens, typography scale, spacing, radii, shadows, component styling, and overall design philosophy.

## How to use

1. Identify the brand reference. Either the user names one directly ("make it look like Linear") or you infer the closest match from vibe words ("calm dev-tool minimalism" → linear.app or vercel; "premium consumer" → apple or nike; "playful SaaS" → notion or slack).
2. Read the matching file at `design-md/<brand>/DESIGN.md`. Read ONLY the one or two relevant files — do not load multiple brands speculatively.
3. Apply the design language faithfully to the requested UI: use its actual tokens (colors, type, spacing, radii) and its philosophy, not a generic approximation. Do not copy logos, trademarks, or proprietary assets — this is about design language, not brand impersonation.
4. If the user's brand isn't in the list, pick the closest analogue, tell the user which one you used, and adapt.

## Available brands

airbnb, airtable, apple, binance, bmw, bmw-m, bugatti, cal, claude, clay, clickhouse, cohere, coinbase, composio, cursor, dell-1996, elevenlabs, expo, ferrari, figma, framer, hashicorp, hp, ibm, intercom, kraken, lamborghini, linear.app, lovable, mastercard, meta, minimax, mintlify, miro, mistral.ai, mongodb, nike, nintendo-2001, notion, nvidia, ollama, opencode.ai, pinterest, playstation, posthog, raycast, renault, replicate, resend, revolut, runwayml, sanity, sentry, shopify, slack, spacex, spotify, starbucks, stripe, supabase, superhuman, tesla, theverge, together.ai, uber, vercel, vodafone, voltagent, warp, webflow, wired, wise, x.ai, zapier

Each brand folder is at `design-md/<brand>/DESIGN.md`.
