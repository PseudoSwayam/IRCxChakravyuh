# IRCxChakravyuh

Official website for IRCxChakravyuh event registrations.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion (`motion`)
- Google Apps Script + Google Sheets (registration backend)

## Local Setup

Prerequisite: Node.js 18+

1. Install dependencies
   - `npm install`
2. Create [.env.local](.env.local)
3. Add your Apps Script Web App URL:
   - `VITE_GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"`
4. Run dev server
   - `npm run dev`

## Pages

- `/` → Home
- `/roborace` → Robo Race event page
- `/robosoccer` → Bot FC event page
- `/register/:eventType` → Registration form

`eventType` values used in routes:
- `roborace`
- `robosoccer`

## Registration Flow

Frontend submits form data to Google Apps Script using `fetch` POST.

Payload includes:
- `teamName`
- `teamSize`
- `eventType` (`Robo Race` or `Bot FC`)
- `extraField` (`robotType` for Robo Race, `Duo` for Bot FC)
- `participants[]` (name, email, phone, registration number)

For compatibility with Apps Script across domains, submission uses a simple cross-origin request pattern.

## Google Sheets + Apps Script Setup

1. Create one spreadsheet with two sheets:
   - `RoboRace`
   - `BotFC`
2. Open **Extensions → Apps Script**.
3. Paste script from [google-apps-script/Code.gs](google-apps-script/Code.gs).
4. Deploy as Web App:
   - Execute as: **Me**
   - Access: **Anyone**
5. Copy `/exec` URL into [.env.local](.env.local) as `VITE_GOOGLE_SCRIPT_URL`.
6. If script changes, deploy a **new version**.

Routing logic in script:
- `eventType === "Robo Race"` → sheet `RoboRace`
- `eventType === "Bot FC"` → sheet `BotFC`

## Required Sheet Headers

Use these headers in both sheets (row 1):

1. `Timestamp`
2. `Team Name`
3. `Team Size`
4. `Event`
5. `Extra Field`
6. `Participant 1 Name`
7. `Participant 1 Email`
8. `Participant 1 Phone`
9. `Participant 1 Reg No`
10. `Participant 2 Name`
11. `Participant 2 Email`
12. `Participant 2 Phone`
13. `Participant 2 Reg No`
14. `Participant 3 Name`
15. `Participant 3 Email`
16. `Participant 3 Phone`
17. `Participant 3 Reg No`
18. `Participant 4 Name`
19. `Participant 4 Email`
20. `Participant 4 Phone`
21. `Participant 4 Reg No`

Note: `College` is intentionally removed.

## Test Reset

For fresh testing, keep headers and delete only data rows (row 2 onward).
