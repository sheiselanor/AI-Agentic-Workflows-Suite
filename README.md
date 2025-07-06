This project includes three AI automation workflows built using n8n, integrating with tools like Twilio, Deepgram, DeepSeek, HeyGen, Airtable, and Google Calendar.

Task 1 handles inbound voice calls, transcribes speech via Deepgram, understands booking intent using DeepSeek, creates calendar events, and stores data in Airtable.
Task 2 is a humanlike WhatsApp chatbot with history tracking, product suggestions, and follow-up logic, powered by DeepSeek and Airtable.
Task 3 generates avatar videos from AI replies using HeyGen, with fallback logic and a React + MUI frontend UI to display the result.

To test the flows, import the .json files into n8n — this will preserve all workflow notes and logic. JSON files do not show comments unless imported into n8n. Add your own API keys where prompted in the flows.

Each workflow is modular, multilingual-aware (English + Malay), and includes Airtable logging. Make sure to run with stable internet, especially for avatar generation. HeyGen trial accounts are limited to 5 video generations/day.
