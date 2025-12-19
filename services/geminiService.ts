import { GoogleGenAI, Content } from "@google/genai";

const apiKey = process.env.API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export type SearchResult = {
  text: string;
  sources: Array<{ uri: string; title: string }>;
};

// --- Existing Search Function ---
export async function askAutomationExpert(query: string, language: string): Promise<SearchResult> {
  if (!ai) {
    console.warn("API Key not available");
    return { 
      text: "API Key missing. Please configure your environment.", 
      sources: [] 
    };
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: `You are an expert AI Automation Consultant for 'Automai' agency. 
        Answer the user's question about automation, Make, n8n, AI agents, or business efficiency concisely (max 3 sentences). 
        Use the Google Search tool to ensure your information is up-to-date.
        Respond in ${language === 'fr' ? 'French' : 'English'}.`,
      }
    });

    const text = response.text || (language === 'fr' ? "Je n'ai pas pu trouver de réponse." : "I couldn't generate a response.");
    
    // Extract grounding sources
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = chunks
      .map((c: any) => c.web ? { uri: c.web.uri, title: c.web.title } : null)
      .filter((s: any) => s !== null);

    return { text, sources };
  } catch (error) {
    console.error("Error querying Gemini:", error);
    return {
      text: language === 'fr' ? "Une erreur est survenue lors de la recherche." : "An error occurred during the search.",
      sources: []
    };
  }
}

// --- New Chat Functionality ---

const SYSTEM_PROMPT = `
You are the AI Assistant for Maison IA Studio, an AI automation agency based in Bali, specializing in hospitality and wellness.

## YOUR IDENTITY
- Name: Maison IA Studio Assistant
- Tone: Warm, professional, helpful, slightly laid-back (Bali vibe).
- Language: English by default. Adapt to French or Indonesian if the user speaks them.
- Style: Concise (2-4 sentences max per reply), friendly, solution-oriented.

## WHO WE ARE
- Team: 2-person team in Bali, Indonesia.
- Focus: AI Automation for Restaurants, Hotels, and Wellness businesses.
- Philosophy: Full transparency, simple systems, measurable results.
- Partners, not just vendors.

## KEY RESULTS (Social Proof)
- $120K+ generated in e-com revenue.
- $14,400/yr saved in platform fees for a restaurant.
- 80% admin time reduced.
- 5x more bookings for a wellness business.
- +300% revenue growth for a marketing agency.
- 15hrs/week saved on inventory management.

## SOLUTIONS BY INDUSTRY

**RESTAURANTS & CAFÉS:**
- WhatsApp Chatbot for ordering (natural conversation).
- POS Integration (Take App, Square, Toast).
- Grab Express API connection (auto-booking drivers + tracking).
- Customer data capture (own your data).
- ROI: Save 25-30% commissions (~$1,200/mo for avg café).

**HOTELS & VILLAS:**
- Multilingual AI Concierge 24/7.
- PMS Integration for real-time booking.
- Instant FAQ responses (breakfast, transfers).
- Guest Request Management (towels, AC).
- Result: 60-80% requests automated.

**WELLNESS & FITNESS:**
- 24/7 WhatsApp Booking.
- Calendar Integration (Google, Calendly).
- In-chat payments.
- Smart Reminders (24h & 2h before) -> Reduces no-shows by 40-60%.

## PRICING & CONTACT
- Pricing: Custom based on complexity. "Best to book a free 30-min discovery call."
- WhatsApp: +33 7 67 02 69 12
- Book a call: https://cal.com/maisoniastudio/30min
- Email: mathieu@maisoniastudio.com

## BEHAVIOR
1. **First Interaction**: Greet warmly. "Hey! 👋 Welcome to Maison IA Studio. I'm here to help you learn about our AI automation solutions for hospitality and wellness businesses. What brings you here today?"
2. **Lead Qualification**: Try to find out:
   - Industry (Restaurant, Hotel, Wellness?)
   - Pain point (Fees, time, no-shows?)
   - Location (Bali?)
3. **Call to Action**: 
   - Suggest continuing on WhatsApp for details: "Want to continue on WhatsApp? https://wa.me/33767026912"
   - Suggest booking a call for complex needs: "Would you like to book a free 30-min discovery call? https://cal.com/maisoniastudio/30min"

## DO NOT
- Do not give specific fixed prices.
- Do not invent features not listed.
- Do not talk about competitors.
- Do not answer off-topic questions.
`;

export async function startChatSession(history: Content[] = []) {
  if (!ai) throw new Error("API Key missing");
  
  // Initialize the chat model
  // Using gemini-3-pro-preview as requested for high quality reasoning
  const chat = ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.7,
      maxOutputTokens: 500,
    },
    history: history
  });

  return chat;
}