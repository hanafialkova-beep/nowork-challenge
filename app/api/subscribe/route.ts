import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/subscribe
 *
 * Přidá odběratele do Ecomail listu a spustí autoresponder sekvenci.
 *
 * Konfigurace (nastav v Vercel Dashboard → Settings → Environment Variables):
 *   ECOMAIL_API_KEY   — API klíč z Ecomail (Nastavení → API)
 *   ECOMAIL_LIST_ID   — ID listu v Ecomail (URL listu: /lists/{id}/...)
 *
 * Ecomail API docs: https://ecomail.cz/cs/dokumentace/api
 */

const ECOMAIL_API_KEY = process.env.ECOMAIL_API_KEY ?? "";
const ECOMAIL_LIST_ID = process.env.ECOMAIL_LIST_ID ?? "";

export async function POST(req: NextRequest) {
  try {
    const { email, variant } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Chybí email." }, { status: 400 });
    }

    // Pokud Ecomail není nakonfigurovaný, vrátíme success (pro local dev / MVP)
    if (!ECOMAIL_API_KEY || !ECOMAIL_LIST_ID) {
      console.warn("[subscribe] Ecomail API není nakonfigurovaný — přeskakuji.");
      return NextResponse.json({ ok: true, skipped: true });
    }

    // Přidat kontakt do listu + spustit autoresponder
    const ecomailRes = await fetch(
      `https://api2.ecomail.cz/lists/${ECOMAIL_LIST_ID}/subscribe`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "key": ECOMAIL_API_KEY,
        },
        body: JSON.stringify({
          subscriber_data: {
            email: email.trim().toLowerCase(),
            tags: [variant === "email" ? "challenge-email" : "challenge-app"],
          },
          // Spustí první email z autoresponder sekvence
          trigger_autoresponders: true,
          // Resubscribe pokud byl dřív odhlášen
          resubscribe: false,
          // Neposlat opt-in potvrzení (přichází přes platební systém)
          suppress_email: false,
        }),
      }
    );

    if (!ecomailRes.ok) {
      const text = await ecomailRes.text();
      console.error("[subscribe] Ecomail error:", ecomailRes.status, text);
      return NextResponse.json(
        { error: "Chyba při přidávání do Ecomail. Zkus to znovu." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] Unexpected error:", err);
    return NextResponse.json(
      { error: "Neočekávaná chyba. Zkus to znovu." },
      { status: 500 }
    );
  }
}
