# NOWORK 28 Day Challenge — Nastavení v Ecomail
# Verze: 1.0 | Web: nowork.ai

---

## PŘEHLED SEKVENCE

Celkem: **31 emailů** v autoresponder sekvenci

| # | Typ | Kdy | Subject (CZ) |
|---|-----|-----|--------------|
| 0 | Confirmation | Ihned po registraci | Potvrzení registrace — NOWORK 28 Day Challenge |
| 1 | Welcome | Den 0 (den registrace, večer nebo +1 den ráno) | Jsi in. Tady je, co tě čeká. |
| 2 | Day 0 | Den 1 | Začínáme. Takhle bude challenge fungovat. |
| 3 | Day 1 | Den 2 | Nejsi placená za práci. Jsi placená za výsledek. |
| 4 | Day 2 | Den 3 | Co děláš podruhé, přestaň psát od nuly. |
| 5 | Day 3 | Den 4 | Přestaň AI používat jako vyhledávač. |
| 6 | Day 4 | Den 5 | Tvůj prompt je příliš vágní. Tady je jak ho opravit. |
| 7 | Day 5 | Den 6 | Zapomeň na rychlost. Řeš tohle místo toho. |
| 8 | Day 6 | Den 7 | Dokonalost tě brzdí. Dnes to změníme. |
| 9 | Day 7 | Den 8 | Dnes si postavíš svůj první mini AI systém. |
| 10 | Day 8 | Den 9 | Prázdná stránka? Nikdy víc. |
| 11 | Day 9 | Den 10 | Jak se přestat topit v researchi. |
| 12 | Day 10 | Den 11 | Máš chaos v hlavě? Tohle zkus. |
| 13 | Day 11 | Den 12 | Jak se líp rozhodovat s pomocí AI. |
| 14 | Day 12 | Den 13 | Co by se stalo, kdyby každý meeting měl automatické shrnutí? |
| 15 | Day 13 | Den 14 | Moc úkolů, málo jasna. AI ti pomůže nastavit priority. |
| 16 | Day 14 | Den 15 | Tvůj osobní AI copilot — první verze. |
| 17 | Day 15 | Den 16 | Neautomatizuj všechno. Automatizuj tyhle věci. |
| 18 | Day 16 | Den 17 | Zapomeň na appky. Nejdřív pochop workflow. |
| 19 | Day 17 | Den 18 | Přestaň psát podobné zprávy pokaždé od začátku. |
| 20 | Day 18 | Den 19 | Jedna myšlenka, tři výstupy. Takhle funguje leverage obsahu. |
| 21 | Day 19 | Den 20 | Kde vzniká chaos, který tě brzdí — a jak ho zmenšit. |
| 22 | Day 20 | Den 21 | Jak z dat dostat to, co opravdu potřebuješ vědět. |
| 23 | Day 21 | Den 22 | Propojené kroky mění všechno. Tady je jak na to. |
| 24 | Day 22 | Den 23 | AI ve firmě nezačíná u nástroje. |
| 25 | Day 23 | Den 24 | Každý tým potřebuje jiné AI use cases. Tady je jak na to. |
| 26 | Day 24 | Den 25 | Jak přesvědčit lidi, kteří AI zatím nepotřebují. |
| 27 | Day 25 | Den 26 | AI governance: pár pravidel, která ti ušetří problémy. |
| 28 | Day 26 | Den 27 | Jak rozšířit AI adopci přes celou firmu. |
| 29 | Day 27 | Den 28 | Teď už neskládáš tipy. Skládáš systém. |
| 30 | Day 28 | Den 29 | 28 dní za tebou. Skutečná změna začíná teď. |

---

## NASTAVENÍ V ECOMAIL

### 1. Vytvoření autoresponder sekvence
- **Typ:** Autoresponder (spouštěný registrací do listu)
- **Název sekvence:** NOWORK 28 Day Challenge CZ
- **List:** vytvořit nový seznam "NOWORK Challenge CZ"
- **Odesílatel:** NOWORK | hello@nowork.ai
- **Reply-to:** hello@nowork.ai

### 2. Časy odesílání
- Email #0 (Confirmation): **ihned po registraci** (trigger: signup)
- Email #1 (Welcome): **+1 den, 8:00** (nebo 8:30 podle rozložení)
- Email #2 (Day 0): **+2 dny, 8:00**
- Email #3–30 (Day 1–28): **každý den +1, 8:00**

> **Doporučení:** Rozložit časy mírně (8:03, 8:07...) aby nedošlo k výpadku při hromadném odesílání.

### 3. Nastavení šablony
- Použít soubor: `nowork_email_template.html`
- Pro každý den editovat v HTML:
  - `header-day-badge` → číslo dne (DAY 1, DAY 2, ...)
  - `h1.headline` → titulek dne
  - `div.body-text` → text lekce
  - `div.task-text` → text mini úkolu
  - `div.teaser p.teaser-text` → teaser na další den

### 4. Tracking
- Zapnout: **Open tracking** (sledování otevření)
- Zapnout: **Click tracking** (sledování kliknutí na CTA)
- UTM parametry pro CTA:
  ```
  https://nowork.ai/challenge?utm_source=email&utm_medium=challenge&utm_campaign=28day&utm_content=day{X}
  ```

### 5. Unsubscribe
- V šabloně je placeholder `{{unsubscribe}}` — Ecomail ho automaticky nahradí odhlašovacím odkazem
- Nastavit v patičce emailu: **Odhlásit se z challenge**

---

## REGISTRAČNÍ FORMULÁŘ

### Pole formuláře (minimum)
- **Email** (povinné)
- **Jméno** (volitelné, pro personalizaci — `{{firstName}}`)
- **Jazyk** (CZ/EN) — pro rozdělení do správné sekvence

### Embed
Formulář Ecomail embednout na:
- `/challenge` stránce na nowork.ai
- Pop-up nebo inline forma

---

## PERSONALIZACE

V emailech lze použít Ecomail merge tagy:
- `{{firstName}}` → jméno
- `{{email}}` → email příjemce
- Případně vlastní proměnné: `{{dayNumber}}`

Doporučené místo použití: záhlaví emailu nebo uvítací věta.

---

## METRIKY K SLEDOVÁNÍ

| Metrika | Cílová hodnota |
|---------|---------------|
| Open rate | > 40% (challenge emaily mají přirozeně vyšší OR) |
| Click rate | > 8% |
| Unsubscribe rate | < 1% na email |
| Dokončení challenge (Day 28 open) | > 20% z Day 0 |

---

## SOUBORY V TOMTO SLOŽCE

| Soubor | Popis |
|--------|-------|
| `nowork_28_days_challenge_CZ_PRODUCTION.md` | Všechny dny v CZ s subject lines, teasery a CTA |
| `nowork_28_days_challenge_EN_PRODUCTION.md` | Všechny dny v EN s subject lines, teasery a CTA |
| `nowork_welcome_emails.md` | Welcome email, Confirmation email (CZ + EN) |
| `nowork_email_template.html` | HTML šablona pro Ecomail (branded, mobile-friendly) |
| `nowork_ecomail_setup.md` | Tento soubor — návod na nastavení |
