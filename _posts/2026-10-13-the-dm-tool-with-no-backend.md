---
layout: post
title: "The DM tool with no backend"
date: 2026-10-13
excerpt: "Turnkeeper is two browser windows, one fight, and zero servers. The constraint turned out to be the product."
---

Every initiative tracker I've tried opens the same way: make an account.
Then a campaign. Then invite your players, who each need an account too.
By the time someone finally rolls initiative, half the table is staring at
a login screen.

When I built [Turnkeeper](https://github.com/stephenbreen/turnkeeper) I had
a simpler setup in mind: one laptop for the DM, a browser window on the TV
for the players, and no particular desire to run a server for the
privilege. The browser already ships with the piece that makes that work.

## Two windows, one channel

`BroadcastChannel` lets two windows of the same browser talk to each
other, no server involved:

```js
const channel = new BroadcastChannel('turnkeeper-sync')
channel.postMessage({ type: 'snapshot', state: encounter })
```

The DM window owns the state and broadcasts every change; the player
window just applies whatever arrives and re-renders. The player view is
read-only by construction — there is no code path for a player to change
anything, which is the most reliable permission system I've ever shipped.

## One clock

The subtle bug waiting here was the turn timer. If both windows run their
own `setInterval`, they drift, and eventually one screen disagrees with
the other about whose turn it is. So there's a rule baked into the design:
**only the DM window owns time.** The player screen never ticks anything
down; it displays what it's told, when it's told.

## Late joiners

Opening the player window mid-combat is normal — someone refreshes the TV,
or you only set it up after the goblins have already appeared. On load, a
new window posts a `{ type: 'request' }` message and any existing window
answers with a full snapshot. Between that and rehydrating from
`localStorage`, the second screen always catches up, even in the middle of
a boss fight.

## What the constraint bought

I went in thinking "no backend" was a compromise. It turned out to be the
product:

- **No accounts.** Open the link, type your combatants, roll.
- **No server to fall over.** Club wifi dies mid-session? Both windows are
  local; the fight continues.
- **No SRD content.** You type or import the statblocks you care about —
  which keeps the tool focused on the boring-but-vital part: tracking the
  fight, correctly.
- **State in `localStorage`.** Refresh-proof, battery-swap-proof, and
  still there next week when you resume the session.

Constraints do that, when you take them seriously — they make decisions
for you, and most of mine were the right ones.

If you run a table, [try it](https://stephenbreen.github.io/turnkeeper/).
No account required, obviously.