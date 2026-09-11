---
title: "Scenario Planning: Sell the Company, Buy the Building, or Sit Tight?"
slug: scenario-planning-sell-the-company-buy-the-building-or-sit-tight
date: 2026-10-23
status: scheduled
source: iomi
target_keyword: "financial scenario planning"
description: "A founder's method for financial scenario planning: model selling the company, buying the building, or holding — deterministically, from your real numbers."
hero_image: 
word_count: 2320
tags: [ai-simulation]
---

# Scenario Planning: Sell the Company, Buy the Building, or Sit Tight?

Every founder carries two or three unmade decisions around for years. Should I take the acquisition conversation seriously? Should I buy the building instead of renting it? Should I do nothing and let the current setup compound? These questions get debated in the shower, on walks, and over dinner — everywhere except on paper, with real numbers. That is what **financial scenario planning** is for: taking the decisions you keep rehearsing in your head and running them against your actual balance sheet, so you can compare outcomes instead of vibes.

This article works through a concrete method using three archetypal founder scenarios — sell the company, buy the building, sit tight — and shows how to model each one deterministically from your real holdings. The same method applies to any fork in the road: the sabbatical, the second fund, the move abroad. The scenarios change; the discipline doesn't.

## Key Takeaways

* Scenario planning means modeling big decisions against your real balance sheet before you make them — not averaging guesses in your head.
* Deterministic modeling (same inputs, same output, every assumption visible) beats probabilistic simulation for decisions you'll make exactly once.
* Every scenario is just three things: a starting position, a set of cash-flow events, and a reallocation. Model all three explicitly.
* "Sit tight" is a scenario too — the status-quo trajectory is the baseline every alternative must beat.
* Compare scenarios on the same axes: net worth path, liquidity through the transition, and what happens to concentration.

## Why Founders Avoid Modeling Their Biggest Decisions

The irony of founder decision-making: you would never let your company make a seven-figure move without a model, but you will contemplate selling the entire company on gut feel.

The avoidance has understandable causes. The numbers feel too uncertain to model — "who knows what we'd sell for?" The tools feel wrong — a retirement calculator has no field for "acquisition with an earnout". And the stakes feel too personal — putting the decision in a spreadsheet makes it real.

But the uncertainty argument gets the logic backwards. You don't model because you know the numbers; you model because you don't. A model with three explicit sale prices tells you which price makes the deal attractive — which converts "should I sell?" into "would I sell at 4x? At 6x?", a question you can actually answer. Vague inputs produce a useful range. No inputs produce anxiety.

What founders need is not more precision. It is a place where their real financial position — every account, every asset, every liability — already lives, so a scenario can be laid on top of reality rather than on a from-scratch guess of what reality is. That starting-point problem is half of why scenario planning never happens: rebuilding your balance sheet in a spreadsheet every time you want to think is enough friction to prevent thinking.

## Deterministic Beats Probabilistic for One-Shot Decisions

A quick but important detour on method. Most financial planning software runs Monte Carlo simulations: thousands of randomized market paths, results expressed as probabilities. That approach has real uses, but it is the wrong instrument for a decision you will make exactly once.

When you are deciding whether to sell the company, "your plan succeeds in 74% of simulated universes" is not an answer you can interrogate. Which universes? What made the bad ones bad? You cannot argue with a distribution.

Deterministic modeling takes the opposite stance: you state every assumption — growth rates, sale price, timing, spending — and the model computes the one path those assumptions produce. Same inputs, same output, every time. The power is in the arguing: change one assumption, see exactly what moves. Disagree with the growth rate? Change it and look. The model becomes a conversation you can have with your own future, rather than an oracle you must trust.

IOMI's Simulator works this way — reallocations and planned cash-flow events, computed deterministically from your actual connected holdings. We made the fuller case for this philosophy in [Wealth simulation software: the founder's guide to deterministic financial modeling](/blog/wealth-simulation-software-the-founders-guide-to-deterministic-financial-modeling).

## The Anatomy of a Scenario

Every scenario, however dramatic, decomposes into three parts:

1. **A starting position.** Your actual current balance sheet — not an approximation. This is where connected accounts matter: if your real holdings are already synced and current, every scenario starts from truth.
2. **Cash-flow events.** The dated, sized flows the decision creates: sale proceeds arriving, a down payment leaving, an earnout in year two, a salary disappearing, rent stopping.
3. **A reallocation.** How the resulting money is arranged afterward: proceeds into a diversified portfolio, equity converted to real estate, nothing changed at all.

Model all three explicitly and any decision becomes comparable with any other. Skip one — usually the reallocation, because "I'll figure that out later" — and the scenario quietly flatters itself. Now, the three archetypes.

## Scenario One: Sell the Company

The largest single financial event most founders will ever experience, and the one most worth modeling badly-early rather than perfectly-late.

**The events to model.** Not one number — a structure. Gross price, then your share after the preference stack. The cash/stock split. Escrow held back for 12–18 months. An earnout with conditions you may or may not hit. Taxes are a major event in this structure too — model them with your CPA's numbers; the point here is that the model has a slot for them, not that any software estimates them for you.

**The versions to run.** At minimum three: conservative (the offer shrinks in diligence, earnout misses), expected, and optimistic. The spread between conservative and optimistic is usually eye-opening — and it is the honest description of what "selling" means.

**The reallocation.** The most-skipped part. Proceeds do not become "wealth" — they become specific holdings you choose. Model at least two arrangements: a diversified deployment, and the realistic alternative where cash sits idle for a year (it happens more than anyone admits). The difference between those two paths, compounded over a decade, is itself a finding.

**What to read off the output.** The year-by-year net worth path, yes — but also what happens to concentration (does one stock just replace another?) and to liquidity during the escrow period, when you are rich on paper and cash-poor at closing.

## Scenario Two: Buy the Building

The classic mid-scale founder decision: your company rents its space, the building is for sale, and some voice says an owner should own.

**The events to model.** The down payment leaving your liquid assets — this is the scenario's defining event, because it converts your most flexible capital into your least. Then the loan: principal, rate, term, monthly service. Rent payments stop (or redirect from landlord to your own entity, depending on structure). Maintenance, insurance, and vacancy risk if you'd lease part of it.

**The structural question.** Who buys — you personally, the operating company, or a separate entity? Each version produces different flows between compartments. This is where entity-separated tracking pays off: a platform that keeps personal and business as distinct compartments, consolidated on top, can represent the actual structure instead of a blur. (The structure itself is a conversation for your attorney; the model's job is to show each version's cash consequences.)

**What to read off the output.** Three things. Liquidity: what does your buffer look like the month after the down payment, and can you still absorb a bad quarter? Concentration: you already hold a large position in your company — the building adds a correlated asset in the same town, often serving the same business. And the comparison line: the same down payment deployed into a diversified portfolio instead. The building must beat that line, not zero.

Buying the building is sometimes right. But it is a scenario where the emotional pull ("stop paying rent!") runs far ahead of the arithmetic, which is exactly the situation scenario planning exists for.

## Scenario Three: Sit Tight

The scenario everyone forgets to model — and the one that makes the other two meaningful.

Doing nothing is not the absence of a decision; it is a specific path with its own trajectory. Your company equity keeps compounding (or doesn't) at some assumed rate. Your salary and distributions continue. Your current allocation drifts as its parts grow at different speeds. Concentration deepens by default, because your largest position is usually your fastest-growing.

Model it with the same rigor: current holdings, current flows, projected forward year by year. In IOMI this is what the Projection does — a year-by-year path from today's actual holdings — and Goals track against exactly this status-quo trajectory, so you can see whether doing nothing already gets you where you want to go.

That last sentence is the point. If the status quo reaches your goals, the bar for selling or buying rises enormously — the alternatives must beat a path that already works, while adding risk and upheaval. If the status quo falls short, you now know something real: sitting tight has a cost, and the question is which alternative closes the gap. Either way, the sit-tight line converts the other scenarios from "interesting" to "better or worse than this, specifically".

## Comparing the Three: One Table, Three Axes

With all three scenarios modeled from the same starting position, comparison becomes almost mechanical. Put them side by side on three axes:

* **Net worth path** — not just the endpoint in year ten, but the shape: sell-the-company usually steps up then compounds smoothly; buy-the-building dips first; sit-tight compounds along whatever slope your equity actually delivers.
* **Liquidity through the transition** — the 6–24 month window where scenarios differ most violently. The sale has an escrow trough; the building has a post-down-payment trough; sit-tight has none.
* **Concentration after the dust settles** — which scenario leaves the most of your net worth riding on a single asset? (Frequently the surprising answer: the building scenario, not the sit-tight one.)

Then stress the winner. Rerun it with growth a third lower, with the earnout at zero, with a vacancy year. A scenario that only wins under its own optimistic assumptions has told you something too. If you want a hand interrogating the results, this is what an assistant grounded in your real data is for — IOMI AI answers from your actual connected holdings and never estimates when data is missing, a design choice we explain in [IOMI AI for financial forecasting: a founder's guide](/blog/iomi-ai-for-financial-forecasting-a-founders-guide). And because the scenarios run on live accounts rather than a copy, revisiting the decision in six months takes minutes, not a rebuild — the case for platform-based planning we make throughout [Why IOMI](https://iomifinance.com/why-iomi) and in our [guide to personal finance simulation software](/blog/personal-finance-simulation-software-the-2026-founders-guide-to-wealth-os).

Financial scenario planning does not make the decision for you. It does something better: it turns a fog of competing anxieties into two or three explicit paths whose differences you can point at. The decision stays yours. It just stops being blind.

## Frequently Asked Questions

### What is financial scenario planning?

It is the practice of modeling major financial decisions — a company sale, a large purchase, a career change — as explicit scenarios laid over your real balance sheet, so their outcomes can be compared before you commit. Each scenario is defined by a starting position, a set of dated cash-flow events, and a reallocation of the resulting assets.

### What's the difference between deterministic and Monte Carlo scenario planning?

Monte Carlo runs thousands of randomized market paths and reports probabilities; deterministic modeling states every assumption explicitly and computes the single path those assumptions produce. For one-shot personal decisions, deterministic is usually more useful because you can interrogate it — change one assumption and see exactly what moves — rather than trusting a distribution you cannot argue with.

### How many versions of a scenario should I run?

At least three: conservative, expected, and optimistic. The spread between conservative and optimistic is the honest description of the decision. Then stress-test whichever scenario wins — rerun it with weaker growth or a failed earnout. A plan that only works under its own best-case assumptions is a finding in itself.

### Why should I model the "do nothing" scenario?

Because sitting tight is a real path with a real trajectory, and it is the baseline every alternative must beat. If your status-quo projection already reaches your goals, selling or buying must clear a much higher bar. If it falls short, you have quantified the cost of inaction. Without the baseline, the other scenarios have nothing to be better than.

### Do I need exact numbers to start scenario planning?

No — you need explicit numbers, which is different. A modeled sale at three stated prices tells you at which price the deal becomes attractive, even though all three prices are guesses. The discipline comes from writing assumptions down where they can be changed and challenged, not from predicting the future correctly.

### How does IOMI support scenario planning?

Your accounts connect read-only via Plaid across 12,000+ institutions, so every scenario starts from your actual current holdings rather than a hand-built copy. The Simulator models reallocations and planned cash-flow events deterministically; the Projection provides the year-by-year status-quo path; Goals track against that trajectory. Same inputs, same outputs, every assumption yours.

### Can scenario planning tell me whether to sell my company?

No tool can, and you should distrust any that claims to. What modeling does is convert the question into comparable paths — sale at various prices versus the status quo — and expose which assumptions the answer hinges on. The judgment remains yours; the planning just ensures it is exercised on explicit numbers instead of anxiety.

IOMI is not a bank, broker or financial advisor. It does not custody assets, execute trades or provide personalized investment advice. All outputs are educational.
