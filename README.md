<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7f07c707-a0bf-4caa-acff-af05e19ad31e

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Google Sheets Registration Backend (Apps Script)

1. Create one Google Spreadsheet with 2 sheets:
   - `RoboRace`
   - `BotFC`
2. Open Extensions → Apps Script.
3. Paste code from [google-apps-script/Code.gs](google-apps-script/Code.gs).
4. Deploy as Web App:
   - Execute as: **Me**
   - Access: **Anyone**
5. Copy the Web App URL and set it in your env:
   - `VITE_GOOGLE_SCRIPT_URL=YOUR_WEB_APP_URL`

Routing logic:
- `eventType === "Robo Race"` → `RoboRace`
- `eventType === "Bot FC"` → `BotFC`
