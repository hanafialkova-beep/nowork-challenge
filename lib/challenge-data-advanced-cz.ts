// ADVANCED CZ — D0–D14
import type { ChallengeDay } from "./types";

export const challengeDataAdvancedCZ: ChallengeDay[] = [
  {
    day: 0,
    title: "Vítej v Advanced verzi. Tohle je jiná úroveň.",
    subject: "Advanced start: systémy, frameworky, leverage.",
    preheader: "Pro ty, kdo mají základy. Teď jde o to posunout se výš.",
    concept: [
      "Jsi tady, protože základy prompting už máš. Víš, jak zadat AI úkol. Možná používáš AI každý den. A přesto cítíš, že tam je víc – že z AI dostáváš zlomek toho, co by mohla nabídnout.",
      "Přesně proto existuje tato verze challenge.",
      "Nezačínáme od toho, co je AI a jak ji použít. Začínáme od otázky: jak postavit systém, který funguje – i když nejsi u toho?",
      "Tahle challenge má tři vrstvy:",
      [
        "3C framework – Capture, Clean, Connect: jak z chaosu znalostí vznikne něco, co lze skutečně použít",
        "PACT framework – Projects, Agents, Context, Tools: jak přemýšlet o AI jako o systému, ne sadě triků",
        "Superpowers – pět schopností, které AI spoluprací skutečně získáváš: rychlost, paměť, paralela, jazyk, rozhodování",
      ],
      "Každý den trvá 5–10 minut. Teorie jsou kratší, praxe je konkrétnější. Jde o to stavět – ne jen číst.",
      "Tady je první věc, kterou uděláme: zamysli se nad tím, kde tě AI zatím nestačí.",
      "Ne kde si myslíš, že by AI mohla teoreticky pomoct. Ale kde konkrétně v tvé práci naráží – kde musíš výstup přepsat, kde výsledek nestojí za nic, kde ztratíš více času s AI než bez ní.",
      "Tohle je výchozí bod. Nejde o sebekritiku – jde o mapování terénu. Příštích 28 dní bude konkrétnější, pokud víš, kde začínáš.",
    ],
    taskIntro:
      "Napiš 3 věci, kde tě AI zatím nestačí nebo kde chceš jít výrazně hlouběji. Buď konkrétní – ne 'chci lépe promptovat', ale 'výstupy pro klienty vyžadují vždy přepis' nebo 'nevím, jak AI zapojit do přípravy strategických dokumentů'.",
    taskItems: [],
    taskType: "text",
    taskFallback: `Pokud nevíš, kde začít, zkus si odpovědět na tyto otázky:
– Kde musím výstup z AI vždy výrazně přepracovat?
– Co dělám opakovaně a AI mi s tím nepomáhá tak, jak bych chtěl/a?
– Kde mám pocit, že ostatní z AI dostávají víc než já?

Příklady z praxe:
→ Výstupy pro klienty jsou vždy obecné – musím vše přepsat do kontextu projektu.
→ Neví, jak AI zapojit do strategického plánování bez toho, aby výsledky byly povrchní.
→ Používám AI pro tvorbu obsahu, ale chybí mi systém pro uchování toho, co funguje.`,
    taskExample: `Vstup: "Kde mě AI zatím nestačí?"

Jak to vypadá v praxi — tři konkrétní záznamy:
1. Příprava nabídek pro klienty: AI navrhne strukturu, ale nezná kontext projektu ani klienta – výsledek vždy přepisuji ze 60 %.
2. Projektové retrospektivy: Nevím, jak systematicky zachycovat poznatky z projektů a dávat je AI jako kontext pro další.
3. Delegování AI úkolů týmu: Sám/sama AI používám, ale nevím, jak zavést systém pro celý tým.

Tohle jsou přesně oblasti, které budeme v challenge adresovat.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra si ukážeme 3C framework – a proč chaos ve znalostech brzdí i dobré prompty.",
  },
  {
    day: 1,
    title: "3C framework: Capture, Clean, Connect jako jeden systém.",
    subject: "Proč chaos ve znalostech brzdí i dobré prompty.",
    preheader: "Znalosti bez systému nejsou znalosti. Jsou to jen data.",
    concept: [
      "Jeden z nejčastějších důvodů, proč AI výstupy jsou průměrné, nemá nic společného s promptem samotným.",
      "Má co do činění se vstupem. S tím, co AI dáš k dispozici.",
      "Pokud pracuješ s chaosem – poznámky všude, nápady nenapsané, poučení z projektů ztracená v emailech – pak i ten nejlepší prompt produkuje průměrné výsledky. Garbage in, garbage out platí s AI dvojnásobně.",
      "3C framework je systém pro práci se znalostmi v kontextu AI:",
      [
        "Capture – zachyceníhodné věci: co stojí za uchování a co ne. Filtrování je schopnost, ne zvyk.",
        "Clean – zpracování surového materiálu do použitelné znalosti. Tohle je krok, který většina lidí přeskakuje.",
        "Connect – propojení starých znalostí s aktuální prací. Starý poznatek může odemknout nové řešení.",
      ],
      "Tři kroky, jeden systém. Funkční pouze jako celek.",
      "Capture bez Clean = hromada poznámek, které nikdy nepoužiješ.",
      "Clean bez Connect = izolované znalosti bez kontextu.",
      "Connect bez Capture = propojuješ věci, které jsi nikdy nezachytil/a.",
      "V následujících dnech si každý krok rozložíme do teorie i praxe. Dnes je cíl: pochopit, proč je systém důležitější než jakýkoliv jednotlivý prompt.",
      "Nejkvalitnější výstupy z AI nevznikají z nejchytřejších promptů. Vznikají z nejlepšího kontextu. A kontext pochází ze systému.",
    ],
    taskIntro:
      "Zamysli se, jak v současnosti pracuješ se znalostmi ze své práce. Odpověz si na tři otázky:",
    taskItems: [
      "Kam zachycuješ poznatky, nápady a důležité informace z práce? (jedno místo, nebo chaos?)",
      "Jak zpracováváš surový materiál – poznámky, transkripty, hrubé drafty – do něčeho použitelného?",
      "Jak se k starým znalostem a poznatkům vracíš, když řešíš nový problém?",
    ],
    taskType: "ol",
    taskFallback: `Pokud nevíš, jak odpovědět, zkus tento prompt:

"Pomoz mi zmapovat, jak v současnosti pracuji se znalostmi z práce. Zeptej se mě na 5 konkrétních otázek, které mi pomohou pochopit, kde jsou mezery v mém systému práce se znalostmi."

AI ti položí otázky – odpověz na ně a nech si zpracovat přehled stavu.`,
    taskExample: `Vstup: "Jak pracuji se znalostmi z práce – aktuální stav"

AI výstup (po vyplnění):
Capture: Používám inbox v Notion, ale plním ho nesystematicky – poznatky z projektů někdy zachytím, někdy ne.
Clean: Surový materiál (zápisy ze schůzek) obvykle nechávám nezpracovaný. Příležitostně shrnu klíčové body, ale bez jednotného formátu.
Connect: K starým poznatkům se vracím zřídka – nemám systém. Spoléhám na paměť.

Závěr: Systém Capture funguje částečně. Clean prakticky neexistuje. Connect je náhodný.
Priorita: Zavést Clean jako pravidelný krok po každé schůzce a projektu.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra se podíváme na první krok – Capture: co stojí za zachycení a co naopak ne.",
  },
  {
    day: 2,
    title: "Capture: ne vše stojí za zachycení.",
    subject: "Capture – filtrování je schopnost, ne jen zvyk.",
    preheader: "Zachytit vše je stejně špatné jako nezachytit nic.",
    concept: [
      "Prvním krokem 3C systému je Capture – zachycení hodnotných informací z práce.",
      "Jenže tady je problém, do kterého padne většina lidí: snaží se zachytit vše. A výsledek je hromada poznámek, ze které nikdy nic nevytáhnou.",
      "Capture není o maximálním zachycení. Je o filtrování.",
      "Principy filtru – co stojí za zachycení:",
      [
        "Poznatky z praxe: co fungovalo, co nefungovalo, co by ses příště rozhodl/a jinak",
        "Opakující se vzorce: co se děje pravidelně – v projektech, v komunikaci, v rozhodnutích",
        "Kontext pro AI: informace, které budeš chtít AI dát jako kontext – o klientovi, projektu, sobě",
        "Rozhodnutí a jejich důvody: ne jen co bylo rozhodnuto, ale proč",
      ],
      "Co naopak zachycovat nemusíš:",
      [
        "Obecné informace, které jsou snadno dohledatelné",
        "Fakta bez kontextu nebo bez vazby na tvou práci",
        "Věci, které se pravděpodobně nevrátí a nejsou přenositelné",
      ],
      "Kvalitní Capture je selektivní. Lepší méně, ale smysluplně – než vše a nic z toho nepoužít.",
      "Cíl dnešního dne: pochopit svůj filtr a nastavit jedno místo, kam hodnotné věci zachycuješ.",
    ],
    taskIntro:
      "Zachyť 5 věcí z tohoto pracovního týdne, které stojí za uchování. Nemusí to být hotové myšlenky – stačí surový zachycený materiál. Ke každé věci napiš jednu větu: proč si ji zachytil/a.",
    taskItems: [],
    taskType: "text",
    taskFallback: `Pokud nevíš, co zachytit, použij tento prompt:

"Pomoč mi zachytit klíčové věci z tohoto pracovního týdne. Zeptej se mě na 5 otázek zaměřených na: co fungovalo, co nefungovalo, jaké rozhodnutí jsem udělal/a a proč, co mě překvapilo a co se budu chtít příště udělat jinak."

Odpověz na otázky – máš základ pro 5 zachycených věcí.`,
    taskExample: `Vstup (surový materiál z týdne, zadaný do AI):
"Tento týden: schůzka s klientem ohledně prodloužení smlouvy, draft reportu, interní retrospektiva projektu, nový dodavatel – první call, zamítnutý rozpočet pro Q2."

AI výstup — 5 věcí hodných zachycení:
1. Klient – schůzka: jaké konkrétní námitky zazněly a jak jsem na ně reagoval/a (Proč: příště mít připravené odpovědi).
2. Retrospektiva: tři věci, které by tým udělal jinak (Proč: vzorce, které se opakují).
3. Nový dodavatel: první dojem, klíčové parametry spolupráce (Proč: kontext pro budoucí jednání).
4. Zamítnutý rozpočet: jaký byl skutečný důvod zamítnutí (Proč: vzorec pro budoucí žádosti).
5. Draft reportu: co fungovalo v struktuře, co bylo nejasné (Proč: základ pro šablonu).`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra si ukážeme, co s tím surový materiálem udělat – krok Clean: zpracování ≠ uložení.",
  },
  {
    day: 3,
    title: "Clean: zpracování není totéž co uložení.",
    subject: "Clean – surový materiál nestačí. Potřebuješ použitelnou znalost.",
    preheader: "Uložit poznámku a zpracovat ji jsou dvě velmi různé věci.",
    concept: [
      "Máš zaznamenané věci. Poznámky ze schůzky. Transkript hovoru. Hrubý draft nápadu. Email s klíčovými informacemi.",
      "A tam to pro většinu lidí končí. Materiál leží, nikdo ho dál nezpracuje.",
      "Clean je krok, který většina lidí přeskakuje – a právě proto jejich 'systém znalostí' nefunguje.",
      "Zpracování ≠ uložení. Uložit surový zápis ze schůzky není Clean. Clean je transformace surového materiálu na použitelnou znalost.",
      "Co to v praxi znamená:",
      [
        "Surový zápis → strukturovaný souhrn s klíčovými rozhodnutími a kroky",
        "Hrubý draft → čistý text s jasnou strukturou a odstraněnými redundancemi",
        "Transkript → výtah s nejdůležitějšími body a kontextem",
        "Hromada poznámek → sada přehledných záznamy s kategoriemi",
      ],
      "Proč je tento krok klíčový pro AI práci: AI pracuje nejlépe s čistým, strukturovaným vstupem. Když jí dáš surový transkript, dostaneš průměrný výstup. Když jí dáš strukturovaný souhrn s kontextem, výstup je o řád lepší.",
      "Clean nemusí trvat hodiny. S AI to může být 5–10 minut. Klíčem je systematičnost – ne dokonalost.",
    ],
    taskIntro:
      "Vezmi si jeden kus surového materiálu z práce (poznámky ze schůzky, transkript, hrubý draft nebo hromadu myšlenek) a zpracuj ho s AI do strukturovaného výstupu. Postup:",
    taskItems: [
      "Zkopíruj surový materiál do AI",
      "Zadej: 'Zpracuj tento materiál do strukturovaného souhrnu. Vypiš: klíčové body, rozhodnutí, otevřené otázky a navrhované kroky. Formát: přehledné odrážky.'",
      "Výsledek ulož jako čistý dokument – ne jako kopii surového materiálu",
    ],
    taskType: "ol",
    taskFallback: `Pokud nemáš vhodný materiál po ruce, použij tento cvičný příklad:

Surový vstup (zkopíruj do AI):
"Schůzka s Tomášem a Kateřinou ohledně Q3 plánování. Tomáš říkal něco o změně priorit, Kateřina chce víc focusu na produkt, já jsem přidal věc s marketingem, pak jsme se dostali k rozpočtu, tam byl trochu spor, nakonec jsme se dohodli že to Tomáš do pátku shrne, ale není jasné v jakém formátu, ještě jsme mluvili o náboru."

Prompt: "Zpracuj tenhle surový záznam ze schůzky do strukturovaného souhrnu: klíčové body, přijatá rozhodnutí, otevřené otázky, next steps s odpovědností."`,
    taskExample: `Vstup (surový zápis ze schůzky):
"Dnes schůzka k onboardingu nového klienta. Jana zmínila že mají interní systém který bychom měli respektovat. Ondřej říkal že timeline je napnutý. Dohodli jsme se na pilotní fázi. Někdo zmínil reporting ale nevím kdo to má dělat. Příští schůzka asi za 2 týdny."

AI výstup (po Clean):
Klíčové body:
– Klient má interní systém, který je třeba integrovat do procesu spolupráce
– Časový harmonogram je napnutý – nutné ošetřit rizika od začátku

Rozhodnutí:
– Spolupráce začne pilotní fází (rozsah upřesnit)

Otevřené otázky:
– Kdo zodpovídá za reporting? (nebylo rozhodnuto)
– Jak přesně vypadá interní systém klienta?

Next steps:
– Upřesnit rozsah pilotu do [termín]
– Dořešit zodpovědnost za reporting
– Naplánovat schůzku za 2 týdny`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra přidáme třetí krok 3C systému: Connect – jak starý poznatek odemkne nové řešení.",
  },
  {
    day: 4,
    title: "Connect: starý poznatek, nové řešení.",
    subject: "Connect – propoj, co víš, s tím, co řešíš.",
    preheader: "Největší leverage není v nových informacích. Je ve starých, správně použitých.",
    concept: [
      "Třetí krok 3C systému je nejméně intuitivní – a přitom nejcennější.",
      "Connect znamená propojování starých znalostí s aktuální prací. Hledání vazeb mezi tím, co už víš, a tím, co teď řešíš.",
      "Proč je to tak cenné: většina problémů, které řešíš, je variací na problém, který jsi řešil/a dříve. Jen vypadají jinak, mají jiné jméno, jiný kontext.",
      "Bez systému Connect znalosti sedí v šuplíku – zachycené, zpracované, ale nepoužité.",
      "Jak Connect funguje v praxi s AI:",
      [
        "Dáš AI kontext starého projektu nebo poznání a aktuální problém",
        "Požádáš ji o vazby, analogie nebo přenositelné poučení",
        "AI pomůže odhalit paralely, které bys sám/sama přehlédl/a",
      ],
      "Connect je nejsilnější, když máš dobrou Capture a Clean bázi. Čím kvalitnější jsou tvé zpracované znalosti, tím přesnější a hodnotnější propojení AI navrhne.",
      "Příklad, jak to zní v praxi: 'Tohle je situace, kterou řeším. Tady jsou poznatky z podobného projektu z loňska. Jaké vazby vidíš? Co bych mohl/a aplikovat nebo naopak čeho se vyvarovat?'",
      "Takhle přestáváš řešit každý problém od nuly. Začínáš stavět na tom, co víš.",
    ],
    taskIntro:
      "Vezmi si aktuální problém nebo výzvu, kterou teď řešíš, a jeden starý poznatek, projekt nebo situaci, která by mohla být relevantní. Pak zadej AI tuto dvojici a požádej o propojení.",
    taskItems: [
      "Popiš aktuální situaci nebo problém (3–5 vět)",
      "Přidej kontext ze starého projektu, rozhodnutí nebo zkušenosti, která přišla na mysl",
      "Zadej: 'Jaké vazby vidíš mezi těmito dvěma situacemi? Co by se dalo přenést, co naopak nedělat, a jaký je klíčový rozdíl kontextu?'",
    ],
    taskType: "ol",
    taskFallback: `Pokud tě nenapadá konkrétní příklad, zkus tento prompt:

"Pomoz mi najít Connect mezi starými a novými znalostmi. Zeptej se mě na aktuální výzvu, kterou řeším, a na tři projekty nebo situace z minulosti, které by mohly být relevantní. Pak mi pomoz identifikovat přenositelné poučení."

AI ti pomůže extrahovat materiál i propojení.`,
    taskExample: `Vstup:
Aktuální situace: "Zavádíme nový proces schvalování obsahu v týmu. Trvá to déle, než jsme čekali, a lidé ho obcházejí."
Starý poznatek: "Před dvěma lety jsme zaváděli nový reporting systém – narazili jsme na podobný odpor, nakonec jsme zjednodušili formulář na 3 pole a adoption vzrostla."

AI výstup (Connect):
Klíčová vazba: V obou případech jde o friction – nový proces přidává kroky bez okamžitého benefit pro toho, kdo ho musí dodržovat.

Co přenést:
– Zjednodušit první verzi procesu na minimum nutných kroků (analogie: 3 pole vs. plný formulář)
– Ukázat rychlou win pro uživatele, ne jen pro manažment

Co nedělat:
– Netlačit na compliance před tím, než je benefit viditelný

Klíčový rozdíl kontextu:
Obsah má kreativní složku – příliš rigidní proces může bránit kvalitě. Reporting byl čistě administrativní. Proces schvalování obsahu by měl být lehčí.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra si projdeme celý 3C systém v praxi – a uvidíme, kde jsou mezery ve tvém přístupu.",
  },
  {
    day: 5,
    title: "3C v praxi: Capture, Clean, Connect jako jeden pohyb.",
    subject: "Propoj celý 3C systém na jednom reálném příkladu.",
    preheader: "Teorie je hotová. Teď si celý systém projdi od začátku do konce.",
    concept: [
      "Pochopil/a jsi Capture, Clean i Connect jako samostatné kroky. Dnes je čas je spojit do jednoho pohybu.",
      "3C systém funguje jako smyčka, ne jako jednorázový postup. Capture → Clean → Connect → zpět do práce → nové věci k Capture.",
      "Kdy smyčku spustit: po každé schůzce, po uzavření projektu, po rozhodnutí, po přečtení důležitého obsahu, po zpětné vazbě od klienta nebo kolegy.",
      "Jak rychle to jde s AI: celá smyčka může trvat 10–15 minut, pokud víš, co děláš.",
      "Postup celé 3C smyčky s AI:",
      [
        "Capture: Co stojí za zachycení? (filtrování za 2 minuty)",
        "Clean: Zadej surový materiál AI a nech si ho strukturovat (5 minut)",
        "Connect: Přidej kontext a požádej o propojení se starými znalostmi nebo analogiemi (3–5 minut)",
      ],
      "Na konci máš čistý, použitelný výstup propojený s tím, co už víš. Tento výstup pak slouží jako kontext pro budoucí práci.",
      "Smyslem dnešního dne je projít si celou smyčku jednou od začátku do konce – na reálném materiálu z tvé práce.",
    ],
    taskIntro:
      "Vyber si jeden kus materiálu z tohoto týdne (schůzka, projekt, rozhodnutí, feedback) a projdi s ním celou 3C smyčku. Tři kroky za sebou:",
    taskItems: [
      "Capture: Napiš, proč tento materiál stojí za zachycení a co konkrétně zachyceníhodného obsahuje",
      "Clean: Zadej surový materiál AI a nech si ho strukturovat do přehledného souhrnu",
      "Connect: Přidej jeden starý kontext a požádej AI o propojení – co přenést, čeho se vyvarovat",
    ],
    taskType: "ol",
    taskFallback: `Pokud nemáš materiál po ruce, cvičně si projdi 3C smyčku na tomto zadání:

"Tento týden jsem se účastnil/a workshopu o agilním plánování. Bylo tam hodně informací, část znám, část byla nová. Nevím, co z toho je pro mě relevantní."

Capture: Co z workshopu stojí za zachycení?
Clean: Zadej klíčové body AI k strukturování
Connect: Jak to souvisí s tím, jak v práci plánuješ teď?`,
    taskExample: `Vstup (surový materiál – retrospektiva projektu):
"Projekt byl celkově ok, ale komunikace s klientem vázla v poslední třetině. Termíny se táhly. Jana říkala, že klient nebyl dostupný, já myslím že jsme mohli eskalovat dřív. Výstup byl dobrý, klient spokojen. Příště bychom měli mít jasnější milníky."

3C výstup:

Capture — proč stojí za zachycení:
Opakující se vzorec: komunikační výpadky v poslední fázi projektu. Relevantní pro příští projekt s podobným profilem klienta.

Clean (AI výstup):
Klíčové body: Projekt byl úspěšně dokončen, klient spokojen. Komunikace vázla v poslední třetině – chybějící eskalační protokol.
Rozhodnutí: Příště nastavit jasné milníky a eskalační cestu.
Next step: Vytvořit šablonu pro řízení komunikace v závěrečné fázi projektu.

Connect (propojení se starým projektem):
Starý kontext: Podobná situace nastala v projektu pro klienta X – tam pomohlo zavedení týdenního check-in emailu v posledním měsíci.
Vazba: Aplikovat stejný check-in systém u klientů s nízkou dostupností.
Riziko: Ne všichni klienti reagují na strukturovanou komunikaci stejně – přizpůsobit frekvenci.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra přichází reflexe: kde tvůj 3C systém funguje, kde jsou mezery a jeden konkrétní krok ke zlepšení.",
  },
  {
    day: 6,
    title: "3C reflexe: kde systém funguje a kde jsou díry.",
    subject: "Týden 1 za námi – čas se podívat, kde stojíš.",
    preheader: "Reflexe není hodnocení. Je to nastavení kompasu na příštích 7 dní.",
    concept: [
      "Prošel/a sis celý první týden: 3C framework od teorie po praxi.",
      "Reflexe není o sebekritice. Je o tom podívat se na to, co funguje, a identifikovat jeden konkrétní krok ke zlepšení.",
      "Tři otázky pro reflexi 3C systému:",
      [
        "Capture: Zachycuješ věci systematicky, nebo jen když si vzpomeneš? Máš jedno místo, nebo chaos na více místech?",
        "Clean: Zpracováváš materiál pravidelně, nebo se hromadí nezpracovaný? Máš formát, který se ti osvědčil?",
        "Connect: Vracíš se ke starým znalostem vědomě, nebo spoléháš na paměť a náhodu?",
      ],
      "Cíl reflexe není odpovědět 'vše funguje perfektně'. Cíl je identifikovat jeden konkrétní krok – ne systém jako celek, ale jeden krok – který uděláš příští týden.",
      "Příklady konkrétního kroku:",
      [
        "Nastavím si v kalendáři 10 minut každý pátek odpoledne na Clean",
        "Vytvořím si jedno místo v Notion jen pro zachycené poznatky z projektů",
        "Příště, než začnu řešit nový problém, podívám se do starých zápisů z podobných projektů",
      ],
      "Malý krok aplikovaný pravidelně vytvoří větší posun než perfektní systém aplikovaný jednou.",
    ],
    taskIntro:
      "Projdi si reflexi 3C systému. Napiš si k Capture, Clean a Connect stav – co funguje a co ne. Pak vyber jeden konkrétní krok ke zlepšení a napiš, kdy a jak ho udělá.",
    taskItems: [
      "Capture – stav: co funguje, co ne",
      "Clean – stav: co funguje, co ne",
      "Connect – stav: co funguje, co ne",
      "Jeden konkrétní krok ke zlepšení: co, kdy, jak",
    ],
    taskType: "ol",
    taskFallback: `Pokud nevíš, jak na reflexi, zkus tento prompt:

"Pomoz mi udělat reflexi mého 3C systému práce se znalostmi. Zeptej se mě na otázky ke každému ze tří kroků – Capture, Clean, Connect – a pak mi pomoz identifikovat jeden konkrétní krok ke zlepšení."

AI ti položí otázky a pomůže ti zpracovat reflexi strukturovaně.`,
    taskExample: `Vstup (reflexe zadaná AI):
"Capture: Zachycuji nesystematicky, většinou jen důležité věci, ale bez pravidelnosti. Clean: Téměř nikdy – poznámky leží nezpracované. Connect: Spoléhám na paměť."

AI výstup (reflexe + doporučení):
Stav:
– Capture: Částečně funkční. Filtrování je dobré, ale chybí pravidelnost a jedno místo.
– Clean: Kritická mezera. Surový materiál se nehromadí kvůli Capture, ale kvůli absenci Clean kroku.
– Connect: Nejslabší článek. Bez čistých znalostí není co propojovat.

Priorita ke zlepšení:
Clean je bottleneck celého systému. Bez zpracování jsou i zachycené věci nepoužitelné.

Konkrétní krok:
Každý pátek 10 minut: otevřít zápisky z týdne a zpracovat ty nejdůležitější do strukturovaného souhrnu pomocí AI. Jeden souhrn týdně je lepší než nula.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Příští týden přejdeme na PACT framework – a začneme přemýšlet o AI jako o systému, ne sadě triků.",
  },
  {
    day: 7,
    title: "PACT framework: Projects, Agents, Context, Tools.",
    subject: "Proč framework místo náhodného výběru nástrojů.",
    preheader: "Bez struktury se AI stane dalším nástrojem, který přidává zmatek.",
    concept: [
      "Druhý týden challenge je o PACT frameworku – způsobu, jak přemýšlet o AI v pracovním kontextu systematicky.",
      "PACT stojí na čtyřech prvcích:",
      [
        "Projects – jak AI zapojit do reálných projektů s jasnou strukturou a výstupy",
        "Agents – kdy dávají smysl AI agenti a multi-step workflow, kdy jsou zbytečně složití",
        "Context – proč kontext rozhoduje o kvalitě výstupu víc než samotný prompt",
        "Tools – jak vybírat nástroje funkčně, ne na základě hype",
      ],
      "Proč framework místo náhodného výběru: bez struktury se AI stane dalším nástrojem, ke kterému se chodí ad hoc. S frameworkem se stane součástí způsobu práce.",
      "Rozdíl v praxi: bez PACT se ptáš 'Jaký AI nástroj mám vyzkoušet?'. S PACT se ptáš 'Jaký výsledek chci dosáhnout a jak mi AI může systematicky pomoct?'",
      "PACT není rigidní metodologie. Je to způsob myšlení. Čtyři otázky, které si kladeš, když přemýšlíš o zapojení AI:",
      [
        "Je to projekt s jasnou strukturou, nebo jednorázový úkol?",
        "Jde o opakující se složitý úkol, kde by pomohl agent nebo workflow?",
        "Mám dost kontextu, aby výstup byl kvalitní?",
        "Jaký nástroj je pro tuto situaci skutečně vhodný?",
      ],
      "Tento týden si každý prvek PACT rozložíme do teorie a praxe. Cíl: na konci týdne mít jasno v tom, jak AI zapojit systematicky do svého pracovního kontextu.",
    ],
    taskIntro:
      "Zamysli se nad svou aktuální prací a odpověz si na čtyři PACT otázky. Cíl není mít dokonalé odpovědi – cíl je zmapovat, kde jsi teď.",
    taskItems: [
      "Projects: Který aktuální projekt by mohl mít jasnou AI-asistovanou strukturu? (jeden příklad)",
      "Agents: Máš nějaký složitý opakující se úkol, kde by mohl fungovat multi-step workflow? (jeden příklad nebo 'zatím nevím')",
      "Context: Jaký kontext o sobě, své roli nebo práci AI nemá, a přitom by výstupy výrazně zlepšil?",
      "Tools: Které AI nástroje používáš a proč – nebo používáš je náhodně bez jasného důvodu?",
    ],
    taskType: "ol",
    taskFallback: `Pokud nevíš, jak odpovědět na PACT otázky, zkus tento prompt:

"Pomoz mi zmapovat, jak využívám AI v práci přes PACT framework. Zeptej se mě na otázky k Projects, Agents, Context a Tools – a pak mi pomoz identifikovat, kde je největší příležitost ke zlepšení."`,
    taskExample: `Vstup: "Jak využívám AI v práci – PACT analýza"

AI výstup (po odpovědích na otázky):
Projects: Příprava klientských nabídek má jasnou strukturu – vhodné pro AI-asistovaný workflow (šablona + kontextový prompt).
Agents: Týdenní přehled z více zdrojů (email, Slack, Notion) – opakující se, složitý, vhodný pro multi-step workflow.
Context: AI nezná specifika odvětví klienta, interní terminologii ani obvyklé námitky při obchodním jednání.
Tools: Claude pro psaní, ChatGPT pro rychlé odpovědi, Notion AI pro poznámky – ale výběr není systematický, závisí na zvyku.

Největší příležitost: Context. Investice do system promptu s kontextem role a klientů přinese okamžité zlepšení kvality výstupů.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra si rozebereme Projects – jak naplánovat reálný projekt s AI pomocí WBS.",
  },
  {
    day: 8,
    title: "Projects: naplánuj reálný projekt s AI pomocí WBS.",
    subject: "Projects – AI jako spolupracovník na struktuře projektu.",
    preheader: "AI nezná tvůj projekt. Ale pokud jí ho popíšeš, pomůže ti ho rozložit.",
    concept: [
      "První prvek PACT frameworku jsou Projects – způsob, jak AI zapojit do reálné projektové práce.",
      "Nejčastější chyba: AI se používá na jednotlivé části projektu (napsat email, shrnout dokument), ale ne na projekt jako celek. Výsledek je fragmentovaná pomoc bez přidané hodnoty na úrovni celku.",
      "Work Breakdown Structure (WBS) je technika, která projekt rozloží na přehledné vrstvy výstupů a kroků. S AI ji lze vytvořit rychle – a výsledek slouží jako základ pro celý projekt.",
      "Jak WBS s AI funguje: popíšeš projekt – cíl, scope, klíčová omezení – a AI ti pomůže:",
      [
        "Identifikovat hlavní fáze a výstupy",
        "Rozložit fáze na konkrétní kroky",
        "Upozornit na závislosti a rizika",
        "Navrhnout rámcový časový odhad",
      ],
      "WBS s AI není finální plán. Je to výchozí bod – rychlý přehled, který pak upravuješ dle reality.",
      "Kdy AI v Projects opravdu pomáhá: když máš projekt, který je komplexní nebo nový, kde nemáš jasno v rozsahu, nebo kde potřebuješ rychle strukturu pro komunikaci se stakeholdery.",
      "Dnešní cíl: vzít jeden reálný projekt a nechat si vytvořit WBS s AI.",
    ],
    taskIntro:
      "Vyber si jeden aktuální projekt – ideálně takový, kde nemáš úplně jasno v rozsahu nebo struktuře. Zadej AI popis projektu a požádej o WBS.",
    taskItems: [
      "Napiš popis projektu: co je cíl, co je v scope, kdo je zapojen, jaký je rámcový termín",
      "Zadej: 'Vytvoř WBS pro tento projekt. Rozlož ho na hlavní fáze, klíčové výstupy v každé fázi a konkrétní kroky. Upozorni na závislosti a potenciální rizika.'",
      "Projdi výsledek a uprav dle reality – přidej, co AI vynechala, odeber, co nedává smysl",
    ],
    taskType: "ol",
    taskFallback: `Pokud nemáš vhodný projekt po ruce, cvičně použij tento zadání:

Projekt: "Zavedení nového onboarding procesu pro nové zaměstnance. Cíl: zkrátit dobu potřebnou k plné produktivitě z 3 měsíců na 6 týdnů. Zapojeni: HR, přímý nadřízený, IT. Termín: Q3."

Zadej tento popis AI s požadavkem na WBS a projdi výsledek.`,
    taskExample: `Vstup:
"Projekt: Redesign zákaznického portálu. Cíl: zlepšit UX a snížit počet support ticketů o 30 %. Scope: pouze frontend a navigace, bez backendových změn. Zapojen: produktový tým, UX designer, development, zákaznická podpora. Termín: 4 měsíce."

AI výstup (WBS):
Fáze 1 – Discovery (4 týdny)
– Analýza aktuálních support ticketů: kategorizace problémů
– User research: 5–8 rozhovorů s klíčovými uživateli
– Heuristická analýza aktuálního portálu
– Výstup: Discovery report s prioritizovanými problémy

Fáze 2 – Design (6 týdnů)
– Wireframy klíčových flow
– Uživatelské testování wireframů
– Hi-fi prototyp
– Výstup: Schválený design pro development

Fáze 3 – Development (8 týdnů)
– Frontend implementace po komponentách
– QA testování
– Výstup: Funkční portál připravený k nasazení

Fáze 4 – Launch & Monitoring (2 týdny)
– Staged rollout
– Sledování support ticketů a UX metrik
– Výstup: Vyhodnocení a next steps

Závislosti: Design musí být schválen před zahájením developmentu.
Riziko: User research může odkrýt problémy mimo scope – nutné jasné hranice.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra si povíme o Agents – co jsou AI agenti, kdy dávají smysl a kdy jsou zbytečně složití.",
  },
  {
    day: 9,
    title: "Agents: kdy dávají smysl a kdy jsou zbytečně složití.",
    subject: "Agents – co jsou AI agenti a jak o nich přemýšlet.",
    preheader: "Agent není magic. Je to workflow. A workflow musí mít smysl.",
    concept: [
      "Druhý prvek PACT frameworku jsou Agents – AI agenti a automatizované workflow.",
      "Co je AI agent: zjednodušeně jde o AI, která neprovádí jen jeden úkol, ale sérii kroků – reaguje na výsledek předchozího kroku, rozhoduje se, co udělat dál, a může volat nástroje nebo jiné AI modely.",
      "Kdy agenti dávají smysl:",
      [
        "Opakující se složitý úkol, kde je jasná sekvence kroků",
        "Úkol, kde každý krok závisí na výsledku předchozího",
        "Úkol, kde lidský zásah je zbytečný nebo příliš pomalý",
      ],
      "Kdy agenti nedávají smysl:",
      [
        "Jednoduchý úkol, který zvládne jeden prompt",
        "Situace, kde kontext nebo rozhodování vyžaduje lidský úsudek",
        "Prototypování nebo explorativní práce – přidávají komplexitu bez hodnoty",
      ],
      "Nejčastější chyba: použít agenta jen proto, že to zní pokročile. Agent přidává komplexitu – a ta má smysl pouze tehdy, pokud přidává proporcionální hodnotu.",
      "Praktické pravidlo: začni s jednoduchým prompting workflow. Přidej automatizaci nebo agenty, teprve když cítíš, že manuální kroky jsou bottleneck.",
      "Dnešní den je teoretický – cílem je pochopit, kdy a proč, ne hned stavět. Zítra si multi-step workflow vyzkoušíme v praxi.",
    ],
    taskIntro:
      "Zamysli se nad svou prací a identifikuj 2–3 opakující se složité úkoly, kde by mohl dávat smysl multi-step workflow nebo agent. Pro každý úkol zhodnoť:",
    taskItems: [
      "Co je to za úkol a jak často se opakuje",
      "Jaké kroky úkol obsahuje – jsou na sobě závislé?",
      "Kde je bottleneck: je to čas, konzistentnost, nebo kvalita?",
      "Dává smysl agent/workflow, nebo stačí lepší prompt?",
    ],
    taskType: "ol",
    taskFallback: `Pokud nevíš, jak na analýzu, zkus tento prompt:

"Pomoz mi identifikovat opakující se složité úkoly v mé práci, kde by mohl dávat smysl AI agent nebo multi-step workflow. Zeptej se mě na nejčastější opakující se úkoly a pak mi pomoz zhodnotit, kde automatizace přidává hodnotu a kde je zbytečná."`,
    taskExample: `Vstup: "Opakující se úkoly vhodné pro agent/workflow analýzu"

Úkol 1: Týdenní přehled pro management
Kroky: Sbírej data z Notion + email + Slack → strukturuj → napiš souhrn → pošli.
Závislosti: Ano (souhrn závisí na datech).
Bottleneck: Čas (45 min/týden), konzistentnost formátu.
Verdict: Vhodné pro workflow – ale začni manuálním promptem s šablonou, automatizaci přidej až po 4 týdnech.

Úkol 2: Follow-up po každé schůzce
Kroky: Otevři zápis → strukuturuj → napiš follow-up email → pošli.
Závislosti: Mírné.
Bottleneck: Kvalita a čas.
Verdict: Stačí dobrý prompt + šablona. Agent je zbytečný.

Úkol 3: Onboarding nového klienta
Kroky: Uvítací email → přístup do systémů → briefing dokumentace → první schůzka agenda.
Závislosti: Ano (sekvenční).
Bottleneck: Konzistentnost a čas.
Verdict: Vhodné pro multi-step workflow. Stojí za nastavení.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra si jeden složitý opakující se úkol skutečně rozložíme do multi-step workflow.",
  },
  {
    day: 10,
    title: "Agents v praxi: multi-step workflow pro složitý úkol.",
    subject: "Vytvoř si workflow, které funguje i bez tebe.",
    preheader: "Nejlepší workflow je takové, které zítra spustíš za 2 minuty.",
    concept: [
      "Znáš teorii o agentech a víš, kdy dávají smysl. Dnes si jeden multi-step workflow skutečně postavíme.",
      "Multi-step workflow s AI funguje takto: série propojených promptů, kde výstup jednoho kroku je vstupem dalšího. Nemusíš mít speciální software – stačí jasná sekvence a disciplína ji dodržovat.",
      "Základní stavební kameny workflow:",
      [
        "Trigger: co spustí workflow? (schůzka, nový projekt, konec týdne, příchozí email)",
        "Kroky: co se děje v každém kroku? (vstup, prompt, očekávaný výstup)",
        "Výstup: co je finální výsledek celého workflow?",
        "Uložení: kam výsledek jde a v jakém formátu?",
      ],
      "Příklad jednoduchého workflow: Post-meeting processing",
      [
        "Trigger: schůzka skončila",
        "Krok 1: Zkopíruj zápis nebo klíčové body do AI → Clean (strukturovaný souhrn)",
        "Krok 2: Výstup Kroku 1 → Connect (jaké vazby se starými projekty nebo rozhodnutími?)",
        "Krok 3: Výstup Kroku 2 → Follow-up email draft",
        "Výstup: Čistý souhrn + follow-up email → uloženo v Notion + odesláno",
      ],
      "Klíčový princip: workflow musí být dostatečně jednoduchý, aby ses k němu vracel/a. Složité workflow, které nikdy nepoužiješ, je horší než jednoduchý prompt, který používáš každý den.",
    ],
    taskIntro:
      "Vezmi jeden ze složitých opakujících se úkolů, které jsi včera identifikoval/a, a postav k němu multi-step workflow. Zapiš ho ve struktuře:",
    taskItems: [
      "Název workflow a trigger (co ho spouští)",
      "Krok 1: vstup → prompt → výstup",
      "Krok 2: vstup (= výstup kroku 1) → prompt → výstup",
      "Krok 3 (pokud potřebuješ): vstup → prompt → výstup",
      "Finální výstup a kam se ukládá",
    ],
    taskType: "ol",
    taskFallback: `Pokud nevíš, kde začít, postav workflow pro tento scénář:

Workflow: Zpracování výstupu z webináře nebo online kurzu
Trigger: Dokončil/a jsem webinář nebo online kurz
Krok 1: Poznámky z webináře → AI Clean → strukturovaný souhrn klíčových bodů
Krok 2: Souhrn → AI Connect → co je relevantní pro mou aktuální práci nebo projekty?
Krok 3: Relevantní body → AI Action → konkrétní kroky, které udělám tento týden
Finální výstup: Actionable dokument uložený do Notion`,
    taskExample: `Workflow: Příprava na strategickou schůzku
Trigger: Strategická schůzka je v kalendáři za 48 hodin

Krok 1 — Kontext:
Vstup: Popis schůzky + agendaAI prompt: "Shrň, co je cílem této schůzky a co potřebuji vědět nebo rozhodnout. Jaké otázky by měly být zodpovězeny?"
Výstup: Přehled cíle a klíčových otázek

Krok 2 — Příprava:
Vstup: Výstup Kroku 1 + relevantní materiály (starý projekt, data, zpětná vazba)
Prompt: "Na základě těchto podkladů navrhni agendu schůzky, klíčové argumenty a potenciální námitky."
Výstup: Agenda + argumenty + rizika

Krok 3 — Brief:
Vstup: Výstup Kroku 2
Prompt: "Shrň celou přípravu do jednostránkového briefu, který si přečtu 30 minut před schůzkou."
Výstup: Jednostránkový brief

Finální výstup: Brief uložený v Notion + sdílený s relevantními kolegy`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra se podíváme na Context – proč kontext rozhoduje o kvalitě výstupu víc než samotný prompt.",
  },
  {
    day: 11,
    title: "Context: proč kontext rozhoduje víc než prompt.",
    subject: "Context – nejpodceněnější prvek celého PACT frameworku.",
    preheader: "Dva identické prompty. Dva úplně různé výsledky. Jediný rozdíl: kontext.",
    concept: [
      "Třetí prvek PACT frameworku je Context – a je to pravděpodobně nejpodceněnější ze všech čtyř.",
      "Tady je klíčový postřeh: dva lidé zadají AI identický prompt. Jeden dostane průměrný výsledek, druhý výborný. Co je jinak? Kontext.",
      "Kontext není jen role, kterou AI zadáš ('Jsi zkušený...').  Kontext je vše, co AI potřebuje vědět, aby výstup byl relevantní pro tebe, tvou situaci, tvého zákazníka, tvůj trh.",
      "Vrstvy kontextu:",
      [
        "Osobní kontext: kdo jsi, co děláš, v jaké firmě, pro jaký trh",
        "Projektový kontext: co je za projekt, v jaké fázi, kdo jsou stakeholdeři",
        "Komunikační kontext: komu je výstup určen, jaký je jejich background, co potřebují vědět",
        "Preferenční kontext: jak má výstup vypadat – tón, délka, formát, čemu se vyhnout",
      ],
      "Proč to většina lidí přeskakuje: zdá se to zdlouhavé. Přitom investice do dobrého systémového kontextu (system prompt) trvá jednou 20–30 minut – a pak ho používáš měsíce.",
      "Praktický dopad: s dobrým kontextem se průměrný prompt stane dobrým výstupem. Bez kontextu ani skvělý prompt neprodukuje výsledky, které jde přímo použít.",
      "Zítra si postavíš svůj pracovní system prompt. Dnes je cíl: pochopit, proč kontext rozhoduje.",
    ],
    taskIntro:
      "Proveď experiment se dvěma prompty. Zadej AI stejný úkol dvakrát – jednou bez kontextu, jednou s bohatým kontextem. Porovnej výsledky.",
    taskItems: [
      "Vyber si jeden konkrétní pracovní úkol (email, shrnutí, analýza, doporučení)",
      "Zadej ho AI bez kontextu – přesně tak, jak by to zadal někdo, kdo AI nezná",
      "Zadej ho znovu s plným kontextem: kdo jsi, pro koho, v jakém kontextu, co výstup musí splnit",
      "Porovnej oba výsledky: v čem se liší? Co by sis vybral/a pro skutečné použití?",
    ],
    taskType: "ol",
    taskFallback: `Pokud nevíš, co vybrat za úkol, vyzkoušej tuto dvojici:

Bez kontextu:
"Napiš doporučení pro zákazníka."

S kontextem:
"Jsi senior konzultant v B2B SaaS firmě zaměřené na HR technologie. Napiš doporučení pro zákazníka (HR ředitel ve výrobní firmě, 500 zaměstnanců), který zvažuje implementaci nového onboarding systému. Zákazník je skeptický k technologickým změnám a potřebuje vidět ROI do 12 měsíců. Tón: profesionální a konkrétní. Délka: max 200 slov."`,
    taskExample: `Experiment: email s doporučením

Bez kontextu — prompt:
"Napiš email s doporučením pro klienta."
AI výstup: Obecný formální email, 8 vět, nic přizpůsobené situaci – nutné celé přepsat.

S kontextem — prompt:
"Jsi projektový manažer v technologické poradenské firmě. Klient je CFO v e-commerce firmě, která zvažuje přechod na nový ERP systém. Klient je data-driven, preferuje stručné a věcné komunikace. Projekt stojí 2,5M Kč, implementace 8 měsíců. Napiš email s doporučením přejít na fázi pilotu. Tón: věcný a sebejistý. Max 150 slov."
AI výstup: Email přesně cílený na CFO, zmínil konkrétní ROI očekávání, navrhl pilotní fázi s jasným dalším krokem – šel přímo ven.

Závěr: Kontextový prompt produkoval použitelný výsledek. Nekontextový prompt produkoval odpadkový výsledek.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra si napíšeš system prompt pro svůj pracovní kontext – a od té chvíle bude každý výstup o řád lepší.",
  },
  {
    day: 12,
    title: "Context v praxi: napiš svůj pracovní system prompt.",
    subject: "System prompt – investice jednou, výsledky každý den.",
    preheader: "Jeden dokument, který promění každý výstup z AI na výsledky připravené k použití.",
    concept: [
      "Pochopil/a sis proč kontext rozhoduje. Dnes ho napíšeš.",
      "System prompt je dokument, který AI dáš jako kontext na začátku každého sezení nebo projektu. Obsahuje to nejdůležitější, co AI potřebuje vědět, aby výstupy byly relevantní pro tebe.",
      "Co dobrý pracovní system prompt obsahuje:",
      [
        "Kdo jsi: role, firma, odvětví, zkušenost",
        "Pro koho pracuješ: typ klientů nebo stakeholderů, jejich background, co je pro ně důležité",
        "Jak komunikuješ: tón, délka, formáty, čemu se vyhýbáš",
        "Co AI nesmí dělat: co by kazilo výstupy nebo neodpovídalo tvé situaci",
        "Specifické kontext: terminologie, interní pravidla, omezení",
      ],
      "System prompt nemusí být perfektní hned. Začni s prvním draftem a upřesňuj ho, jak zjišťuješ, co funguje.",
      "Jak ho používat: zkopíruj ho do každého nového projektu nebo sezení jako první zprávu. Nebo ho nastav jako instrukce v Claude, ChatGPT Projects nebo Gemini.",
      "Dlouhodobý efekt: s dobrým system promptem přestaneš trávit čas vysvětlováním kontextu znovu a znovu. AI začne fungovat jako kolega, který zná tvou situaci.",
    ],
    taskIntro:
      "Napiš první draft svého pracovního system promptu. Použij tento postup:",
    taskItems: [
      "Zadej AI: 'Pomoz mi napsat pracovní system prompt. Zeptej se mě na 8–10 otázek o mé roli, klientech, komunikačním stylu a preferencích pro AI výstupy.'",
      "Odpověz na otázky AI – být konkrétní, ne obecný",
      "Požádej AI: 'Na základě mých odpovědí napiš system prompt v první osobě, který budu používat jako kontext pro práci.'",
      "Projdi výsledek, uprav co neodpovídá realitě a ulož jako 'Můj pracovní system prompt'",
    ],
    taskType: "ol",
    taskFallback: `Pokud chceš začít bez AI, použij tuto šablonu a doplň:

Jsem [role] v [typ firmy/odvětví]. Pracuji primárně s [typ klientů/kolegů/stakeholderů].
Komunikuji [tón: formálně/neformálně], preferuji [délka: stručné/podrobné] výstupy.
Výstupy by měly být [formát: bullet points/odstavce/tabulky].
Vyhýbám se [co nechceš: žargon, obecnosti, přílišná formálnost...].
Klíčová terminologie z mého oboru: [3–5 pojmů].
Co AI musí vědět o mém kontextu: [specifika firmy, klientů, projektů].`,
    taskExample: `Výstup (ukázkový pracovní system prompt):

Jsem produktový manažer v B2B SaaS firmě zaměřené na HR technologie. Pracuji s interním vývojovým týmem (8 lidí), s C-level vedením (CEO, CTO) a s klíčovými zákazníky (HR ředitelé ve firmách 200–2000 zaměstnanců).

Komunikuji věcně a stručně – preferuji bullet points před odstavci, výstupy max 200 slov pokud nespecifikuji jinak. Vyhýbám se buzzwordům, vágním doporučením a formulacím jako 'záleží na situaci' bez konkrétního vodítka.

Výstupy pro zákazníky: přátelský a sebejistý tón, zaměřený na výsledky a ROI.
Výstupy pro interní tým: přímý, technický tón kde potřeba, orientovaný na rozhodnutí a next steps.
Výstupy pro vedení: stručné, zaměřené na strategický dopad, vždy s doporučením.

Specifika: naše firma je ve fázi Series A, primární trh je ČR a SR. Zákazníci jsou konzervativní, technologické změny přijímají pomalu.

Nikdy: nenavrhuj řešení, která předpokládají velké interní IT zdroje zákazníka.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra zakončíme Týden 2 PACT checkpointem – co z frameworku skutečně používáš a kde jsou mezery.",
  },
  {
    day: 13,
    title: "PACT checkpoint: co z frameworku skutečně používáš.",
    subject: "Týden 2 za námi – PACT reflexe a mezery v přístupu.",
    preheader: "Framework je nástroj. Pokud ho nepoužíváš, je to jen teorie.",
    concept: [
      "Prošel/a sis celý PACT framework: Projects, Agents, Context, Tools.",
      "Checkpoint není o hodnocení. Je o tom podívat se na to, co z frameworku skutečně funguje v tvé práci – a co zůstalo jen teorií.",
      "Čtyři otázky pro PACT checkpoint:",
      [
        "Projects: Zapojuješ AI systematicky do projektů s jasnou strukturou, nebo jen ad hoc na dílčí úkoly?",
        "Agents: Máš alespoň jedno workflow, které funguje a které pravidelně používáš?",
        "Context: Máš system prompt nebo jiný způsob, jak AI předáváš kontext systematicky?",
        "Tools: Vybíráš nástroje vědomě dle potřeby, nebo z důvodu zvyku nebo hype?",
      ],
      "Nejčastější mezery, které lidé nacházejí:",
      [
        "Context: investice do system promptu se odkládá – přitom je to největší leverage",
        "Agents: workflow existuje na papíře, ale v reálné práci se nepoužívá",
        "Projects: AI se zapojuje do execution, ne do plánování – přichází se o strategickou hodnotu",
      ],
      "Na co se zaměřit: nevyber tři věci k zlepšení. Vyber jednu – tu s největším dopadem na tvou každodenní práci – a udělej ji opravdu dobře.",
      "Třetí týden přinese Superpowers – pět schopností, které AI spoluprací skutečně získáváš. Na to se připrav.",
    ],
    taskIntro:
      "Projdi si PACT checkpoint. Pro každý ze čtyř prvků napiš: stav (co funguje a co ne) a jednu konkrétní příležitost ke zlepšení. Pak vyber jeden nejdůležitější krok.",
    taskItems: [
      "Projects – stav a příležitost",
      "Agents – stav a příležitost",
      "Context – stav a příležitost",
      "Tools – stav a příležitost",
      "Jeden nejdůležitější krok: co, proč, do kdy",
    ],
    taskType: "ol",
    taskFallback: `Pokud nevíš, jak na reflexi, zkus tento prompt:

"Pomoz mi udělat PACT checkpoint. Zeptej se mě na otázky k Projects, Agents, Context a Tools – jak je aktuálně používám v práci. Pak mi pomoz identifikovat největší mezeru a jeden konkrétní krok ke zlepšení."`,
    taskExample: `Vstup: "PACT checkpoint – stav po dvou týdnech"

AI výstup (po odpovědích):

Projects: AI zapojuji na dílčí úkoly, ne na strukturu projektů. WBS jsem zkusil/a jednou – fungovalo. Příležitost: zavést WBS jako standardní krok při zahájení každého projektu.

Agents: Workflow existuje na papíře, ale v praxi jsem ho použil/a 2× za týden. Příležitost: zjednodušit workflow na 2 kroky, aby byl reálně použitelný.

Context: System prompt jsem napsal/a, ale nepoužívám ho konzistentně. Příležitost: Uložit ho jako výchozí instrukce v Claude Projects.

Tools: Používám Claude a ChatGPT bez jasného důvodu pro výběr. Příležitost: Definovat, kdy použiji co a proč.

Nejdůležitější krok: Context – nastavit system prompt jako výchozí instrukce a používat ho v každém sezení po dobu 2 týdnů. Dopad: okamžité zlepšení kvality výstupů bez dalšího úsilí.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Příští týden přejdeme na Superpowers – pět skutečných schopností, které AI spoluprací získáváš.",
  },
  {
    day: 14,
    title: "PACT Tools: vyber správný nástroj pro správný úkol.",
    subject: "Chatbot nestačí. Tady je jak vybírat AI nástroje chytře.",
    preheader: "Tools z PACT: ne co je nejnovější, ale co sedí tvé práci.",
    concept: [
      "Čtvrtý prvek PACT je Tools — a je to možná ten nejpodceňovanější. Většina lidí sahá po nástroji ze zvyku, ne ze strategie.",
      "Klíčová otázka není: Jaký nástroj je nejlepší? Ale: Jaký nástroj je nejlepší pro tento konkrétní úkol, tento kontext a tento výstup?",
      "Existují čtyři základní kritéria pro výběr AI nástroje:",
      [
        "Typ úkolu — konverzace a psaní (chatbot), automatizace toku (workflow nástroj), analýza dat (specializovaný nástroj), tvorba obsahu (generátor)",
        "Kontext a integrace — kde pracuješ? Potřebuješ nástroj integrovaný do stávajícího prostředí nebo standalone?",
        "Kvalita a spolehlivost — pro jaké výstupy je tento nástroj skutečně dobrý? Ne co umí obecně, ale kde exceluje.",
        "Udržitelnost — zvládneš to platit, naučit se a používat konzistentně? Nejlepší nástroj je ten, který skutečně použiješ.",
      ],
      "Praktický přístup: místo testování každého nového nástroje si vytvoř vlastní sadu tří až čtyř nástrojů s jasně definovanými rolemi. Každý nástroj má svoji zónu — a ty přesně víš, kdy sáhnout po kterém.",
      "Příklad jednoduché sady: Claude pro psaní, analýzu a komplexní prompty. ChatGPT pro rychlé odpovědi a brainstorming. Perplexity pro research s aktuálními daty. Notion AI pro práci přímo v dokumentech.",
      "Nemusíš mít dokonalou sadu hned. Stačí mít vědomou sadu — a průběžně ji upravovat podle toho, co skutečně používáš.",
    ],
    taskIntro: "Zmapuj svoji aktuální AI sadu nástrojů a přiřaď každému jasnou roli:",
    taskItems: [
      "Jaké AI nástroje aktuálně používáš (i nepravidelně)?",
      "Pro jaký typ úkolů každý z nich skutečně používáš?",
      "Kde se překrývají — a kde máš mezeru (úkol, který děláš ručně, ale AI by pomohla)?",
      "Jak by vypadala tvoje ideální sada tří až čtyř nástrojů s jasnou rolí každého?",
    ],
    taskType: "ol",
    taskPrompt: `Pomoz mi zmapovat moji AI sadu nástrojů.

Nástroje, které používám: [vypiš]
Úkoly, pro které je používám: [vypiš]

Na základě toho:
1. Kde se nástroje překrývají a kde mám mezery?
2. Jaká by byla efektivní sada 3–4 nástrojů s jasnou rolí každého?
3. Co bych měl/a přestat dělat ručně a předat AI?`,
    taskFallback: `Pokud si nejsi jistý/á, začni tímto promptem:

"Používám Claude a ChatGPT, ale nemám jasno, kdy použít který. Pomoz mi definovat jasnou roli pro každý nástroj na základě toho, co dělám v práci: [popiš svoji práci v 3 větách]."

AI ti navrhne konkrétní rozdělení rolí přizpůsobené tvému kontextu.`,
    taskExample: `Vstup: "Používám Claude, ChatGPT a Notion AI. Pracuji v marketingu — píšu texty, analyzuji výsledky kampaní a komunikuji s klienty."

AI výstup:

Navrhovaná sada s rolemi:
→ Claude: dlouhé texty, strategické dokumenty, analýza feedbacku od klientů. Exceluje v nuanci a délce.
→ ChatGPT: rychlé nápady, brainstorming variant, subject lines. Rychlý a přímočarý.
→ Notion AI: práce přímo v dokumentech — shrnutí meeting notes, přepisování briefů. Nemusíš přepínat nástroje.

Mezera: nemáš nástroj pro research s aktuálními daty (výsledky kampaní, trendy). Zvažte Perplexity nebo Claude s web přístupem.`,
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra přejdeme na Superpowers — pět oblastí, kde AI spoluprací skutečně rozšiřuješ svoje schopnosti.",
  },
  {
    day: 15,
    title: "Pět superschopností, které AI spoluprací získáváš.",
    subject: "Perception, Intelligence, Memory, Creation, Connection.",
    preheader: "Nejde o nástroje. Jde o schopnosti, které přesahují nástroje.",
    concept: [
      "Za posledních čtrnáct dní jsi pracoval/a na mindsetu, systémech a nástrojích. Teď přichází vrstva, která to všechno propojuje: superschopnosti.",
      "Superschopnosti nejsou metafora. Jsou to konkrétní způsoby práce, které se ti otevírají tehdy, když AI přestane být nástroj na konkrétní úkoly a stane se trvalou součástí tvého myšlení.",
      "Existuje pět oblastí, kde AI zásadně mění způsob, jakým pracuješ:",
      [
        "Perception — vidíš víc. Dokážeš rychle pochopit velké množství informací, najít vzory a závěry, které by ti jinak unikly.",
        "Intelligence — lépe se rozhoduješ. Dokážeš analyzovat složité situace z více úhlů, testovat scénáře a odhalit slepé skvrny ve svém uvažování.",
        "Memory — nic nezapomínáš. Systémy s AI fungují jako rozšíření tvé paměti — zachytí, co jsi udělal/a, co řekl/a, co funguje.",
        "Creation — tvoříš na jiné úrovni. Rychlost a kvalita tvorby se posouvá tak, že výstupy, které dřív trvaly dny, zvládneš za hodiny.",
        "Connection — lépe komunikuješ a spolupracuješ. S AI připravuješ prompty pro lidi, šablony pro tým, a přizpůsobuješ komunikaci přesně pro konkrétní situaci.",
      ],
      "Každá z těchto superschopností má svůj Týden 3 den — teorii i praxi. Dnes si uděláš přehled a vybereš, která z nich tě v tuhle chvíli oslovuje nejvíc.",
      "Důležitá věc: superschopnosti nejsou dány tím, jaký nástroj používáš. Závisí na tom, jak AI zapojuješ do způsobu svého myšlení. Právě o tom je zbytek tohoto týdne.",
    ],
    taskIntro: "Projdi si pět superschopností a u každé si zapiš:",
    taskItems: [
      "Kde ji teď nejméně využíváš?",
      "Kde bys ji nejvíc chtěl/a posílit?",
      "Jaký konkrétní úkol z tvé práce by se s touto superschopností změnil nejvíc?",
    ],
    taskType: "ol",
    taskFallback: `Nejsi si jistý/á, která superschopnost se tě týká nejvíc? Zkus si odpovědět na tyhle otázky:

– Cítíš, že ti při rozhodování chybí přehled? → Intelligence
– Ztrácíš informace nebo si nepamatuješ co jsi rozhodl/a? → Memory
– Trvá ti moc dlouho vytvářet výstupy? → Creation
– Nevíš jak přizpůsobit komunikaci různým lidem? → Connection
– Přehlédneš důležité věci v datech nebo dokumentech? → Perception

Vstup: "Trvá mi dlouho připravovat podklady pro prezentace a vždy se bojím, že na něco zapomenu."
AI výstup: Tohle jsou dvě superschopnosti najednou — Creation (tvorba podkladů) a Memory (systém co chytí důležité věci). Začni s Creation.`,
    taskExample: `Jak to vypadá v praxi — přehled pěti superschopností s reálnými příklady:

Perception:
Vstup: PDF výroční zpráva, 80 stran.
AI výstup: Klíčové trendy za 3 roky, 5 rizikových oblastí, srovnání s oborovým průměrem. Čas: 4 minuty.

Intelligence:
Vstup: "Zvažuji rozšíření na slovenský trh. Jaká jsou rizika?"
AI výstup: 7 konkrétních rizik s pravděpodobností a dopadem, 3 scénáře, 2 slepé skvrny na které jsem nemyslel.

Memory:
Vstup: Zápis ze schůzky (raw poznámky).
AI výstup: Strukturovaný zápis, akční body s odpovědnými osobami, shrnutí do 5 vět pro tým.

Creation:
Vstup: "Potřebuji pitch pro investora, mám jen hrubé body."
AI výstup: Kompletní pitch deck struktura, 3 varianty opening slidu, key messages pro každou sekci.

Connection:
Vstup: "Píšu zpětnou vazbu kolegovi, který opakovaně nesplňuje deadliny."
AI výstup: 4 varianty zpětné vazby — přímá, diplomatická, coachingová, písemná — s vysvětlením kdy použít kterou.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra přichází první superschopnost v praxi: Perception — jak s AI vidět víc než bez ní.",
  },
  {
    day: 16,
    title: "Perception: vidíš vzory, které by ti jinak unikly.",
    subject: "Analyzuj dokument nebo dataset — uvidíš, co jsi přehlížel/a.",
    preheader: "AI nenahrazuje tvůj úsudek. Rozšiřuje to, co vůbec vidíš.",
    concept: [
      "Perception — schopnost vnímat a rozumět věcem — je první z pěti superschopností. A je to ta, která nejvíc mění práci s informacemi.",
      "Každý den pracuješ s dokumenty, daty, feedbackem, reporty. Většinu z nich čteš lineárně: od začátku do konce, zápisky, závěry. Ale lineární čtení má limity — vidíš to, co přijde na řadu. Nevidíš vzory, odchylky ani to, co tam chybí.",
      "S AI se Perception mění na tři způsoby:",
      [
        "Rychlost — 80stránkový dokument pochopíš za 5 minut, ne za hodinu.",
        "Šíře — AI zachytí věci, které bys při lineárním čtení přeskočil/a nebo podcenil/a.",
        "Hloubka — dokážeš se ptát na konkrétní věci: 'co jsou tři největší rizika?', 'jaké jsou vzory v tomhle datasetu?', 'kde jsou mezery v argumentaci?'",
      ],
      "Nejsilnější způsob práce s Perception není jen 'shrni mi to'. Je to kombinace: nejdřív shrnutí, pak cílené otázky, pak vlastní interpretace.",
      "Dnešní praxe: vezmi si reálný dokument nebo dataset z tvé práce — report, tabulku, zpětnou vazbu od zákazníků, zápis ze schůzky — a projdi ho s AI. Neuvidíš jen obsah. Uvidíš vzory.",
    ],
    taskIntro: "Vyber si dokument nebo dataset z tvé práce a projdi ho s AI ve třech krocích:",
    taskItems: [
      "Vlož dokument (nebo jeho klíčovou část) a požádej o strukturované shrnutí — klíčové body, nejdůležitější čísla, hlavní závěry.",
      "Polož 2–3 cílené otázky: 'Jaké jsou vzory?', 'Kde jsou odchylky nebo výjimky?', 'Co v dokumentu chybí?'",
      "Napiš si vlastní interpretaci — co tě překvapilo, co potvrdilo tvůj předpoklad, co chceš prověřit dál.",
    ],
    taskType: "ol",
    taskFallback: `Nemáš po ruce vhodný dokument? Zkus tento přístup s jakýmkoliv textem, který máš:

Vstup: Zpětná vazba od 5 zákazníků za poslední měsíc (zkopíruj do AI).
AI výstup: Tři opakující se témata: rychlost doručení, kvalita balení, přehlednost webu. Jedna odchylka: jeden zákazník zmínil problém s platební bránou — ostatní ne. Doporučení: prověřit platební bránu jako potenciální skrytý problém.

Nebo pro tabulku:
Vstup: Tabulka prodejů za Q1 (hodnoty 12 produktů, 3 měsíce).
AI výstup: Produkt X má konzistentní pokles napříč všemi třemi měsíci, zatímco produkt Y má největší výkyvy. Trend naznačuje sezónní vzor u kategorií A a B.`,
    taskExample: `Jak to vypadá v praxi — práce s reálným dokumentem:

Vstup: "Mám zápis ze čtyřhodinového strategického workshopu (2 200 slov). Shrň klíčové závěry, identifikuj 3 hlavní témata a řekni mi, co v zápisu chybí nebo je nejednoznačné."

AI výstup:
Klíčové závěry: tým se shodl na třech prioritách pro Q3, ale neshodl se na pořadí. Dvě iniciativy nemají přiřazeného vlastníka.

Tři hlavní témata: 1) expanze na nové trhy, 2) interní procesy a efektivita, 3) retence zákazníků.

Co chybí: zápis neobsahuje akční kroky s termíny a odpovědnými osobami. Bod o rozpočtu byl otevřen, ale nebyl uzavřen — není jasné, jestli bylo dosaženo dohody.

Výsledek: Díky tomuto výstupu bylo na follow-up schůzce jasné, co je potřeba dořídit — místo dalšího hodinového čtení zápisu.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra: Intelligence — jak AI pomáhá dělat lepší rozhodnutí a odhalovat slepé skvrny.",
  },
  {
    day: 17,
    title: "Intelligence: lepší rozhodnutí s AI jako myšlenkovým partnerem.",
    subject: "Pros/cons, scénáře, slepé skvrny — AI jako protiváha tvého myšlení.",
    preheader: "AI nerozhoduje za tebe. Pomáhá ti vidět, co přehlížíš.",
    concept: [
      "Intelligence — druhá superschopnost — není o tom, že AI je chytřejší než ty. Je o tom, že AI je strukturovaná jinak než ty.",
      "Každý člověk myslí s určitými vzory, preferencemi a slepými skvrnami. Těžko se sám vidíš z perspektivy, kterou nemáš. AI nemá tvé zkušenosti ani tvé předsudky — a právě to je její hodnota jako myšlenkového partnera.",
      "Kde Intelligence nejvíc pomáhá:",
      [
        "Rozhodnutí s více proměnnými — kde je těžké udržet v hlavě všechna kritéria najednou.",
        "Rizikové scénáře — 'co se může pokazit?' Lidé mají tendenci podceňovat rizika věcí, do kterých jsou emocionálně zapojeni.",
        "Protiargumenty — 'hraj si na advokáta ďábla' nebo 'přesvědč mě, proč to nemám dělat'.",
        "Slepé skvrny — 'co v mém uvažování chybí?', 'jaký pohled jsem nepromyslel?'",
      ],
      "Klíčový princip: AI je nejlepší myšlenkový partner tehdy, když ji nežádáš o správnou odpověď — ale o strukturovanou analýzu a alternativní pohledy. Rozhodnutí je vždy tvoje.",
      "Nejsilnější prompt pro Intelligence: 'Tady je moje rozhodnutí a důvody. Sehraj roli kritického poradce — co přehlížím, jaká jsou rizika, co bych měl/a zvážit, než se rozhodnu?'",
      "Dnešní den je teorie. Zítra si Intelligence vyzkoušíš na reálném rozhodnutí ze své práce.",
    ],
    taskIntro: "Vyzkoušej Intelligence na malém rozhodnutí, které řešíš — nebo na hypotetické situaci. Postupuj ve třech krocích:",
    taskItems: [
      "Popiš situaci a své aktuální rozhodnutí nebo uvažování.",
      "Požádej AI o pros/cons analýzu a tři alternativní scénáře.",
      "Přidej: 'Co v mém uvažování přehlížím? Jaké jsou slepé skvrny?'",
    ],
    taskType: "ol",
    taskFallback: `Vstup (hypotetický příklad — přizpůsob si ho):
"Zvažuji, jestli přijmout nabídku na novou roli ve firmě. Plat je o 20 % vyšší, ale role je nejistá — firma prochází restrukturalizací. Aktuální práce je stabilní, ale bez kariérního posunu. Jaká jsou pro a proti? Jaké jsou tři možné scénáře za 12 měsíců? Co v mém uvažování přehlížím?"

AI výstup (ukázka):
Pros nové role: vyšší příjem, nové zkušenosti, možnost vedoucí pozice.
Cons: nejistota, nutnost znovu budovat vztahy, risk restrukturalizace.
Scénář 1: Firma stabilizuje → jsi v lepší roli s vyšším platem.
Scénář 2: Firma dál restrukturalizuje → za 8 měsíců hledáš znovu.
Scénář 3: Roli přijmeš ale nenaplní očekávání → jsi frustrovaný/á a bez jistoty.
Slepá skvrna: Nezmiňuješ, jak moc tě baví aktuální práce — a to je klíčová proměnná, která chybí v analýze.`,
    taskExample: `Jak to vypadá v praxi — Intelligence jako kontrola rozhodnutí:

Vstup: "Rozhodujeme se, jestli spustit nový produkt Q2 nebo počkat na Q4. Q2 má výhodu rychlosti na trh, Q4 by měl lepší přípravu. Sehraj roli kritického poradce — co přehlížím?"

AI výstup:
Kritické otázky, které v analýze chybí:
1. Jaká je kapacita týmu v Q2 — máte na spuštění lidi nebo to půjde na úkor jiného projektu?
2. Je Q2 skutečně výhoda, nebo jen pocit urgence bez dat o trhu?
3. Co přesně by Q4 'lepší příprava' zlepšila — a je to měřitelné?

Slepá skvrna: Analýza předpokládá, že Q4 termín bude splněn. Bez jasného milestonu pro Q4 je ale reálné riziko, že sklouznete do Q1 — čímž ztratíte výhodu obou variant.

Výsledek: Tým si uvědomil, že nemá definované jasné kritérium pro 'lepší přípravu' — a tohle bylo to, co rozhodnutí blokovalo.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra si Intelligence vyzkoušíš na reálném rozhodnutí ze své práce — ne hypotetickém.",
  },
  {
    day: 18,
    title: "Intelligence v praxi: analyzuj rozhodnutí, které teď řešíš.",
    subject: "Jedno reálné rozhodnutí. Plná analýza s AI.",
    preheader: "Teorie je v pořádku. Ale výsledek pochopíš, až to uděláš na svém.",
    concept: [
      "Včera jsi viděl/a, jak Intelligence funguje v teorii. Dnes to uděláš na reálném rozhodnutí ze své práce.",
      "Praxe se od teorie liší v jedné věci: tvé reálné rozhodnutí má kontext, který hypotetický příklad nemá. A právě s reálným kontextem AI pracuje nejlépe.",
      "Tři typy rozhodnutí, která se hodí nejlépe pro práci s Intelligence:",
      [
        "Rozhodnutí s více alternativami — kde máš 2–4 možnosti a nejsi si jistý/á, která je správná.",
        "Rozhodnutí s nejistotou — kde chybí informace nebo závisí na budoucnosti.",
        "Rozhodnutí pod tlakem — kde cítíš, že ho řešíš příliš rychle nebo emocionálně.",
      ],
      "Jak na to: napiš AI stručný kontext (5–8 vět), svůj aktuální záměr, a pak požádej o analýzu. Neboj se dát AI víc informací než méně — čím víc kontextu, tím relevantnější výstup.",
      "Po analýze si udělej jeden krok navíc: napište si, jaké rozhodnutí uděláš a proč — a jak analýza tvůj úsudek ovlivnila nebo potvrdila. Tohle je moment, kde se Intelligence skutečně stává tvou superschopností.",
    ],
    taskIntro: "Vyber si jedno reálné rozhodnutí, které aktuálně řešíš nebo odkládáš. Pak postupuj:",
    taskItems: [
      "Popiš situaci: kontext, tvé aktuální uvažování, co tě brzdí.",
      "Dej AI tuhle instrukci: 'Sehraj roli kritického poradce. Analyzuj pros/cons, navrhni 3 scénáře, pojmenuj slepé skvrny a řekni, co mi v analýze chybí.'",
      "Po výstupu napiš jednu větu: 'Díky téhle analýze...' — co jsi se dozvěděl/a, co změnilo nebo potvrdilo tvé rozhodnutí.",
    ],
    taskType: "ol",
    taskFallback: `Pokud teď žádné velké rozhodnutí nemáš, vezmi si toto:

Vstup: "Rozhoduji se, jestli přesunout náš týmový standup ze čtvrtka na pondělí. Výhodou je, že pondělí lépe nastavuje týden. Nevýhoda je, že v pondělí ráno mají lidé hodně e-mailů a mohou být méně soustředění. Jak analyzovat toto rozhodnutí?"

Tento typ rozhodnutí je záměrně malý — Intelligence funguje na všech úrovních, nejen na strategických rozhodnutích.`,
    taskExample: `Jak to vypadá v praxi — reálné rozhodnutí z práce:

Vstup: "Zvažujeme, jestli outsourcovat zákaznický servis nebo dál budovat interní tým. Aktuálně máme 2 lidi, kapacita nestačí, outsourcing by byl rychlejší řešení, ale bojím se o kvalitu. Sehrej kritického poradce."

AI výstup:
Pros outsourcingu: rychlost škálování, nižší fixní náklady, žádná HR agenda.
Cons: nižší kontrola kvality, ztráta firemní kultury v komunikaci, závislost na dodavateli.

Tři scénáře:
1. Outsourcing funguje → kapacita vyřešena, ale v 18 měsících chceš část vrátit interně.
2. Outsourcing nestačí kvalitou → musíš paralelně budovat interní tým — dražší varianta.
3. Hybrid → outsourcing na jednoduché dotazy, interní tým na komplexní — nejnáročnější na management.

Slepá skvrna: Nezmínil/a jsi, jak zákazníci vnímají aktuální kvalitu — pokud je dobrá, riziko outsourcingu je vyšší. Pokud je průměrná, prostor pro zlepšení existuje.

Co jsem se dozvěděl/a: Neměl/a jsem zmapovanou spokojenost zákazníků s aktuálním servisem. To je první krok před jakýmkoliv rozhodnutím.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra: Memory, Creation a Connection — zbývající tři superschopnosti v jednom přehledu.",
  },
  {
    day: 19,
    title: "Memory, Creation, Connection: zbývající tři superschopnosti.",
    subject: "Tři různé způsoby, jak AI rozšiřuje to, co dokážeš.",
    preheader: "Každá funguje jinak — a každá mění jiný typ práce.",
    concept: [
      "Za poslední dva dny jsi prošel/la Perception a Intelligence. Zbývají tři superschopnosti, které uzavírají rámec.",
      "Memory — rozšíření tvé pracovní paměti.",
      "Lidská paměť je skvělá na rozpoznávání. Horší je na přesné zachytávání. AI ti pomáhá systémem, který nezapomíná: zachytí rozhodnutí, kontext, výsledky, formáty. Nejsilnější využití je kombinace šablon + AI sumarizace + pravidelné ukládání — vznikne systém, kde nic neproklouznne.",
      "Příklady Memory v praxi:",
      [
        "Zápisy ze schůzek → AI je formátuje a ukládá ve stejné struktuře vždy.",
        "Retrospektivy projektu → AI zachytí co funguje, co ne, co příště jinak.",
        "Osobní znalostní báze → záznamy z konferencí, kurzů, knih — AI shrnuje a indexuje.",
      ],
      "Creation — tvorba na jiné úrovni.",
      "Creation není o tom, že AI tvoří za tebe. Je o tom, že s AI zvládáš celý cyklus: od nápadu přes strukturu po finální výstup — rychleji a s lepším výsledkem. Klíč je iterace s plným kontextem.",
      "Příklady Creation v praxi:",
      [
        "Komplexní prezentace → od hrubé myšlenky po slide strukturu s key messages.",
        "Strategické dokumenty → od zadání po finální formulace s více iteracemi.",
        "Obsah na více kanálů → jeden originální výstup přizpůsobený pro různé formáty.",
      ],
      "Connection — komunikace přizpůsobená situaci.",
      "Connection je superschopnost v mezilidské komunikaci. AI ti pomáhá připravit komunikaci, která zohledňuje kontext, vztah, cíl a tón — pro každou konkrétní situaci, ne jen obecně.",
      "Příklady Connection v praxi:",
      [
        "Zpětná vazba → 4 varianty pro různé vztahy a situace.",
        "Obtížné rozhovory → příprava na klíčové body, předvídání reakcí.",
        "Týmová komunikace → šablony a přístupy, které fungují napříč různými styly lidí.",
      ],
      "Zítra si Creation vyzkoušíš naplno — na reálném výstupu s plným kontextem a iterací.",
    ],
    taskIntro: "Pro každou ze tří superschopností napiš jednu větu:",
    taskItems: [
      "Memory: Kde v mé práci nejvíc 'proklouznou' důležité informace, které bych chtěl/a zachytit?",
      "Creation: Jaký výstup ze mé práce trvá nejdéle a přitom se dá rozložit na strukturu + obsah + formát?",
      "Connection: V jaké komunikační situaci bych chtěl/a mít lepší přípravu nebo více variant jak ji uchopit?",
    ],
    taskType: "ol",
    taskFallback: `Vstup: "Nevím, kde začít s Memory. Jak bych mohl/a AI používat pro zachytávání informací v práci?"

AI výstup: Začni se schůzkami. Po každé schůzce zkopíruj surové poznámky do AI a použij tento prompt: 'Strukturuj tento zápis: klíčové závěry, akční body s odpovědnými osobami, otevřené otázky. Formát: odrážky, max 200 slov.' Ukládej výstupy na jedno místo. Za 3 týdny budeš mít základ znalostní báze.`,
    taskExample: `Jak to vypadá v praxi — tři superschopnosti vedle sebe:

Memory:
Vstup: Raw poznámky z 60minutového workshopu (450 slov nesourodého textu).
AI výstup: Strukturovaný zápis — 3 rozhodnutí, 5 akčních bodů s odpovědnostmi, 2 otevřené otázky. Čas zpracování: 2 minuty.

Creation:
Vstup: "Potřebuji strategický brief pro novou kampaň — mám jen 4 odrážky co víme o cílové skupině."
AI výstup: Kompletní brief (situace, cíl, cílová skupina, klíčová zpráva, tón, formáty, KPIs) — 3 iterace za 20 minut. Výsledek byl použit přímo pro briefing agentury.

Connection:
Vstup: "Musím dát kolegovi zpětnou vazbu na opožděné plnění termínů — je to citlivé téma, máme dobrý vztah."
AI výstup: 3 varianty zpětné vazby — přímá a věcná, empatická s otázkami, koachingová zaměřená na systém. Plus věty, které je nejlepší neříkat, a jak otevřít rozhovor.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra: Creation naplno — vytvořte komplexní výstup s plným kontextem, strukturou a iterací.",
  },
  {
    day: 20,
    title: "Creation: komplexní výstup od nuly s iterací.",
    subject: "Ne 'napiš mi email'. Celý cyklus od nápadu po finální výstup.",
    preheader: "Creation funguje jinak, než si myslíš — záleží na kontextu a iteraci.",
    concept: [
      "Creation je superschopnost, která se nejvíc liší od toho, jak ji většina lidí používá.",
      "Když se řekne 'AI mi pomůže s tvorbou', většina lidí myslí: napíšu prompt, dostanu text, hotovo. Ale to není Creation — to je generování. A výsledky jsou tomu odpovídající.",
      "Skutečná Creation funguje jinak. Má tři fáze:",
      [
        "Kontext — AI potřebuje pochopit situaci: kdo to čte, proč to vzniká, co je cílem, co už existuje.",
        "Struktura — než AI tvoří obsah, nejdřív navrhne kostru. Ty komentáři, opravíš, schválíš.",
        "Iterace — finální výstup vzniká ve 2–3 kolech. Každá iterace zpřesňuje a zlepšuje.",
      ],
      "Proč iterace záleží: první výstup AI je návrh. Druhý výstup s tvým feedbackem je znatelně lepší. Třetí může být finální. Bez iterace zůstáváš u průměrných výsledků.",
      "Dnešní úkol je záměrně větší: vytvoříš komplexní výstup — strategický dokument, prezentaci, průvodce, nebo komunikační plán — od začátku po finálně použitelný výsledek.",
      "Klíčový princip: čím víc kontextu dáš AI na začátku, tím méně kol iterace potřebuješ. Investuj 5 minut do popisu situace — ušetříš 30 minut přepracování.",
    ],
    taskIntro: "Vyber si komplexní výstup, který potřebuješ vytvořit (nebo bys ho potřeboval/a). Projdi celým procesem Creation:",
    taskItems: [
      "Kontext (5–8 vět): popiš co vytváříš, pro koho, proč, co čtenář/uživatel potřebuje vědět nebo udělat.",
      "Požádej AI o strukturu výstupu — jen kostru, bez obsahu. Projdi ji, uprav, schval.",
      "Požádej AI o první verzi obsahu na základě schválené struktury. Dej konkrétní feedback a požádej o upravenou verzi.",
    ],
    taskType: "ol",
    taskFallback: `Pokud nevíš, co vytvořit, zkus jeden z těchto výstupů:

Varianta A — Strategický brief: pro projekt nebo iniciativu, kterou plánuješ spustit.
Varianta B — Průvodce onboardingem: pro nového kolegu, klienta nebo dodavatele.
Varianta C — Komunikační plán: pro sdílení výsledků nebo změny s týmem nebo vedením.

Vstup pro start: "Vytváříme [výstup] pro [příjemce]. Cílem je [co má výstup udělat/říct]. Kontext: [situace, klíčové informace]. Začni strukturou — bez obsahu, jen kostru s nadpisy a krátkým popisem každé sekce."`,
    taskExample: `Jak to vypadá v praxi — Creation ve třech kolech:

Výstup: Strategický brief pro redesign zákaznického portálu.

Kolo 1 — Kontext a struktura:
Vstup: Popis situace (7 vět) + "Navrhni strukturu briefu."
AI výstup: 6 sekcí — situace, cíl projektu, cílová skupina, klíčové požadavky, out of scope, úspěch = co. Čas: 3 minuty.

Kolo 2 — První verze obsahu:
Vstup: "Napiš obsah ke každé sekci. Tón: věcný, pro interní publikum. Max 1 strana A4."
AI výstup: Kompletní draft briefu. Dva problémy: sekce 'cílová skupina' příliš obecná, 'out of scope' chybí.
Feedback: "Uprav cílovou skupinu — přidej 3 konkrétní persony. Doplň out of scope: mobilní aplikace, integrace s ERP."

Kolo 3 — Finální verze:
AI výstup po feedbacku: Brief připravený k použití. Celý proces: 35 minut. Výsledek, který by ručně trval 2–3 hodiny.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra uzavíráme Týden 3: která superschopnost ti přirozeně sedí a kterou chceš dál rozvíjet?",
  },
  {
    day: 21,
    title: "Tvoje AI superschopnosti: která ti sedí, kterou chceš rozvíjet?",
    subject: "Reflexe týdne — tvůj osobní profil superschopností.",
    preheader: "Poznáš sám/sama, kde máš přirozenou sílu — a kde je prostor.",
    concept: [
      "Dnešní den je reflexivní. Za posledních sedm dní jsi prošel/la pěti superschopnostmi — a každou jsi trochu vyzkoušel/a v praxi.",
      "Reflexe není jen zpětné ohlédnutí. Je to základ pro to, co budeš dál rozvíjet. Bez reflexe se náhodně vrháš na nástroje a tipy. S reflexí víš, kam investovat energii.",
      "Tři věci, které dnes zmapuješ:",
      [
        "Přirozená síla — která superschopnost ti šla nejsnáz nebo dávala největší smysl? Kde jsi cítil/a okamžitý přínos?",
        "Potenciál pro rozvoj — která superschopnost je pro tvou práci nejdůležitější, ale zatím ji nevyužíváš naplno?",
        "Konkrétní další krok — ne obecné 'chci se zlepšit', ale jeden konkrétní úkol nebo systém, který začneš budovat.",
      ],
      "Superschopnosti se rozvíjejí postupně. Není potřeba být silný/á ve všech najednou. Stačí si vybrat jednu nebo dvě a jít do hloubky.",
      "Připomínka pěti superschopností: Perception (vidíš vzory), Intelligence (lepší rozhodnutí), Memory (nic neproklouznne), Creation (výstupy na jiné úrovni), Connection (komunikace přizpůsobená situaci).",
    ],
    taskIntro: "Projdi si pět superschopností a pro každou napiš jednu větu odpovídající na otázku:",
    taskItems: [
      "Kde jsem ji tento týden vyzkoušel/a — co jsem udělal/a?",
      "Jak silná je tato schopnost v mé aktuální práci (1–5)?",
      "Jaký by byl můj konkrétní další krok, kdybych ji chtěl/a posílit?",
    ],
    taskType: "ol",
    taskFallback: `Vstup: "Přemýšlím, která superschopnost mi sedí nejvíc. Mám ráda práci s texty a komunikaci, ale nejsem analytický typ."

AI výstup: Na základě toho, co popisuješ, ti přirozeně sedí Creation a Connection. Creation proto, že práce s texty je přesně tam, kde AI funguje jako spolupracovník na celém cyklu. Connection proto, že komunikace přizpůsobená situaci — zpětná vazba, obtížné rozhovory, týmové zprávy — je oblast, kde máš zájem i zkušenost.

Doporučuji začít s Creation: vezmi jeden výstup, který děláš opakovaně, a postav k němu plný context + iterační workflow. To bude tvůj základ.`,
    taskExample: `Jak to vypadá v praxi — reflexe pěti superschopností:

Perception (2/5): Vyzkoušel/a jsem analýzu dokumentu. Šlo to dobře, ale zatím to nedělám pravidelně. Další krok: při každém reportu, který dostanu, ho nejdřív analyzuji s AI.

Intelligence (3/5): Analyzoval/a jsem jedno rozhodnutí — byl to největší 'aha moment' týdne. Chci to dělat u každého větší rozhodnutí. Další krok: vytvořím si šablonu pro analýzu rozhodnutí.

Memory (2/5): Zatím nepoužívám systematicky. Ví, že schůzky jsou slabé místo. Další krok: příští schůzka → zápis přes AI do 10 minut po ní.

Creation (4/5): Toto mi jde přirozeně a mám z toho výsledky. Chci iteraci ještě zdokonalit. Další krok: přidat kolo struktury před každý větší výstup.

Connection (3/5): Použil/a jsem pro přípravu zpětné vazby — velmi užitečné. Chci rozšířit na obtížné rozhovory. Další krok: příší obtížný rozhovor připravit s AI předem.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Příští týden: jak budovat AI systém na větší měřítko — pro sebe, pro tým, pro opakující se procesy.",
  },
  {
    day: 22,
    title: "Human-in-the-loop: kde jsi ty v AI procesu.",
    subject: "AI rozhodovat nesmí sama. Kde a proč záleží na tobě.",
    preheader: "Čím víc AI dělá, tím víc záleží na tom, kde se rozhoduješ ty.",
    concept: [
      "Týden 4 se zabývá systémem na větším měřítku. A začínáme základní otázkou: kde jsi ty v celém AI procesu?",
      "Human-in-the-loop je princip, který říká: ve správně postaveném AI workflow vždy existuje bod, kde člověk rozhoduje, kontroluje nebo schvaluje. Ne proto, že AI je nespolehlivá. Ale proto, že odpovědnost za výsledek je vždy lidská.",
      "Kde má člověk vždy být v procesu:",
      [
        "Zadání a kontext — co AI řeší, s jakými informacemi, pro koho. Toto nikdy nedeleguj zcela.",
        "Interpretace výstupu — výsledek AI je návrh, ne rozhodnutí. Ty ho posuzuješ a schvaluješ.",
        "Etická a strategická rozhodnutí — co komunikujeme zákazníkovi, jak reagujeme na krizi, co říkáme investorovi. Toto jsou rozhodnutí s dopadem — a jsou tvoje.",
        "Zpětná vazba pro zlepšování — co fungovalo, co ne, jak upravit prompt nebo proces pro příště.",
      ],
      "Kde AI může pracovat autonomněji:",
      [
        "Rutinní generování a formátování výstupů.",
        "Analýza dat bez rozhodovacích dopadů.",
        "Příprava variant a návrhů, ze kterých ty vybíráš.",
      ],
      "Praktická otázka: projdi si jeden workflow, který děláš pravidelně, a ptej se: kde v tomto procesu jsem já? Kde rozhoduji? Kde mi AI pomáhá bez mého zapojení? A jsou ta místa správně nastavena?",
      "Zítra si tento workflow nakreslíš nebo popíšeš — s jasně vyznačenými body, kde jsi ty.",
    ],
    taskIntro: "Vyber si jeden opakující se workflow z tvé práce. Pro každý krok napiš:",
    taskItems: [
      "Co se v tomto kroku děje?",
      "Kdo (nebo co) to dělá — ty, AI, nebo společně?",
      "Proč je nebo není lidský rozhodovací bod v tomto kroku důležitý?",
    ],
    taskType: "ol",
    taskFallback: `Vstup: "Jak poznám, kde v mém workflow musím být já a kde může pracovat AI autonomněji?"

AI výstup: Existují čtyři signály pro lidský rozhodovací bod:
1. Výsledek má přímý dopad na zákazníka, kolegu nebo firmu — tam jsi ty.
2. Špatné rozhodnutí by bylo těžké vrátit zpět — tam jsi ty.
3. Rozhodnutí závisí na vztahu, kontextu nebo emocích — tam jsi ty.
4. Jde o věc, za kterou neseš osobní nebo profesní odpovědnost — tam jsi ty.

Všude jinde může AI pracovat autonomněji a ty schvaluješ výstup.`,
    taskExample: `Jak to vypadá v praxi — workflow s jasným human-in-the-loop:

Workflow: Tvorba a odesílání newsletteru.

Krok 1: Sběr témat → AI prohledá zápisky a navrhne 5 témat. Lidský bod: Ty vybereš 1–2 relevantní.
Krok 2: Tvorba obsahu → AI napíše první verzi. Lidský bod: Ty opravíš fakta, přidáš osobní kontext.
Krok 3: Editace tónu → AI upraví formulace na základě feedbacku. Lidský bod: Finální schválení.
Krok 4: Technické odeslání → nástroj odešle automaticky. Bez lidského bodu — čistě mechanické.
Krok 5: Analýza výsledků → AI shrne metriky. Lidský bod: Interpretace a rozhodnutí co příště jinak.

Výsledek: Jasně víš, kde musíš být a kde ti AI šetří čas. Nic neproklouzne.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra si nakreslíš nebo popíšeš vlastní workflow — s jasně vyznačenými body, kde rozhoduješ ty.",
  },
  {
    day: 23,
    title: "Nakresli svůj workflow: kde jsi ty, kde pracuje AI.",
    subject: "Vizualizuj proces — uvidíš místa, kde AI šetří čas i místa kde musíš být ty.",
    preheader: "Dobrý workflow je viditelný. Dnešní den ho uděláš viditelným.",
    concept: [
      "Včera jsi přemýšlel/a o principu human-in-the-loop. Dnes ho uděláš konkrétním.",
      "Vizualizace nebo popis workflowu má praktický účel: teprve když workflow vidíš celý najednou, poznáš kde jsou zbytečné kroky, kde AI přidá hodnotu a kde musíš být nezbytně ty.",
      "Jak popsat nebo nakreslit workflow:",
      [
        "Vypiš kroky v pořadí — co se děje, co za čím.",
        "Ke každému kroku přidej: kdo to dělá (já / AI / oba / nástroj).",
        "Vyznač body, kde probíhá rozhodnutí nebo schválení — to jsou human-in-the-loop momenty.",
        "Vyznač body, kde výstup jde přímo k dalšímu kroku bez rozhodnutí — to je prostor pro automatizaci.",
      ],
      "Formát je na tobě: může to být seznam s poznámkami, tabulka, nebo skutečná mapa ve Figmě, Miro nebo jen na papíře.",
      "Po vytvoření workflowu si polož tři otázky: Kde trávím nejvíc času a dalo by se to delegovat AI? Kde AI pracuje bez mé kontroly a měla by tam být? Kde je celý krok zbytečný?",
      "Cílem není dokonalý workflow hned. Cílem je mít workflow, který vidíš — a pak ho postupně vylepšovat.",
    ],
    taskIntro: "Vyber si jeden opakující se proces z tvé práce a popoptávej ho v tomto formátu:",
    taskItems: [
      "Název procesu a jak často se opakuje.",
      "Kroky v pořadí — každý na jeden řádek nebo odrážku.",
      "Ke každému kroku: já / AI / oba / nástroj. Plus označení: [R] = rozhodnutí (human-in-the-loop), [A] = automatizovatelné.",
    ],
    taskType: "ol",
    taskFallback: `Vstup: "Popsal/a jsem si workflow, ale nevím jak to popsat přehledně."

Zkus tento formát:

Workflow: Příprava měsíčního reportu (každý měsíc, ~3 hodiny)

1. Sběr dat → já [A] — lze delegovat AI na základě dat z tabulky
2. Sumarizace výsledků → já [R] — interpretace je moje
3. Příprava vizualizací → já+AI [A] — AI navrhne, já schválím
4. Napsání komentáře → já+AI [R] — AI navrhne draft, já upravím
5. Finální check → já [R] — vždy moje
6. Odeslání vedení → já [A] — automatizovatelné

Výsledek: vidíš kde ušetříš ~45 minut a kde musíš být ty.`,
    taskExample: `Jak to vypadá v praxi — workflow přípravy nabídky pro klienta:

Workflow: Příprava obchodní nabídky (každé 2 týdny, ~5 hodin)

1. Briefing s klientem → já [R] — klíčové potřeby, kontext
2. Interní research → já+AI [A] — AI hledá precedenty, já doplním specifika
3. Struktura nabídky → já+AI [R] — AI navrhne, já schválím nebo upravím
4. Tvorba obsahu → já+AI [A] — AI píše draft, já iteruji
5. Kalkulace ceny → já [R] — vždy moje rozhodnutí
6. Finální editace tónu → já+AI [A] — AI upraví formulace, já schválím
7. Odeslání → já [R] — kontrola před odesláním

Identifikované úspory: kroky 2, 3, 4, 6 jsou částečně delegovatelné → přibližně 2 hodiny zpět.
Human-in-the-loop momenty: 1, 5, 7 jsou nezbytně moje.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra: jak sdílet AI znalost v týmu — bez hype, bez odporu, s výsledky.",
  },
  {
    day: 24,
    title: "AI adoption v týmu: jak sdílet znalost bez hype a bez odporu.",
    subject: "Co funguje při zavádění AI do týmu — a co ne.",
    preheader: "Adopce AI není o přesvědčování. Je o konkrétních výsledcích.",
    concept: [
      "Jednou z největších překážek AI adoption v týmech není technologie. Je to způsob, jakým se o AI mluví.",
      "Hype funguje krátkodobě. 'AI změní všechno', 'musíme začít hned', 'tohle ušetří 40 % práce' — takové výroky vyvolávají buď přehnaná očekávání nebo obranné reakce. A pak, když výsledky přijdou pomaleji, zanechávají zklamání nebo skepsi.",
      "Co funguje místo hype:",
      [
        "Konkrétní výsledek, ne obecný přínos — 'tento prompt ušetří 20 minut přípravy na každou schůzku' funguje lépe než 'AI zrychlí naši práci'.",
        "Ukázka na reálném příkladu — předveď workflow, ne teorii. Lidé věří tomu, co vidí.",
        "Respektování různých startovních bodů — někdo je nadšenec, někdo skeptik. Oba jsou v pořádku.",
        "Malé kroky, ne velké transformace — jeden nový prompt nebo šablona je dosažitelný cíl.",
      ],
      "Co nefunguje:",
      [
        "Tlak a povinnosti — 'od teďka všichni musí používat AI' bez podpory a smyslu.",
        "Příliš složité začátky — pokud první krok vyžaduje 3 hodiny, nikdo to neudělá.",
        "Ignorování obav — strach ze ztráty práce nebo pocit zastaralosti jsou reálné. Jsou potřeba otevřeně adresovat.",
      ],
      "Nejlepší způsob adoption: najít jednoho kolegu, ukázat mu jeden konkrétní příklad, který mu šetří čas — a nechat ho, aby to sdílel dál sám. Organické šíření funguje lépe než top-down nařízení.",
      "Zítra si tohle vyzkoušíš v praxi: nauč kolegu jeden konkrétní AI trick nebo ho zapiš jako mini guide.",
    ],
    taskIntro: "Přemýšlej o jednom kolegovi nebo členu týmu, kterému by AI mohla pomoct. Odpověz na tři otázky:",
    taskItems: [
      "Co dělá opakovaně, co by šlo s AI zjednodušit? (jeden konkrétní úkol)",
      "Jaká je jeho nebo její aktuální zkušenost s AI — nadšenec, skeptik, nebo neutrální?",
      "Jak bys mu/jí ukázal/a výsledek — živou ukázkou, nebo krátkým návodem?",
    ],
    taskType: "ol",
    taskFallback: `Vstup: "Nevím jak začít s kolegou, který je k AI skeptický."

AI výstup: Nejlépe funguje neptat se 'chceš zkusit AI?' — ale ukázat konkrétní výsledek bez předchozího dotazu.

Příklad: Příde na schůzku, zmíní, že má problem s přípravou agendy. Ty otevřeš Claude, zadáš cíl schůzky a za 2 minuty máš strukturu. Nedej to kolegovi jako 'AI tě naučím' — jen řekni 'zkus tento prompt'. Nic více není potřeba.

Skeptici se mění nejlépe přes vlastní zkušenost, ne přes přesvědčování.`,
    taskExample: `Jak to vypadá v praxi — úspěšný a neúspěšný přístup k adoption:

Neúspěšný přístup:
Na týmovém meetingu: "Od příštího měsíce budeme všichni používat AI nástroje. Tady jsou 3 nástroje, které jsem vybral/a. Prosím nastudujte dokumentaci."

Výsledek: Dva lidé zkusí, zbytek ne. Za měsíc se na to zapomene.

Úspěšný přístup:
Jeden na jednoho: "Hele, mám tip jak ušetřit 15 minut při přípravě každého reportu. Ukáži ti jeden prompt — zabere to 3 minuty."

Ukázka v reálném čase. Výsledek viditelný okamžitě.

Výsledek: Kolega si prompt zkopíruje. Za týden ho ukáže dalšímu kolegovi. Za měsíc ho používají čtyři lidé — bez jakékoliv nařízení.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra to uděláš: nauč kolegu jeden trick nebo ho zapiš jako mini guide (max jedna strana).",
  },
  {
    day: 25,
    title: "Nauč kolegu jeden AI trick — nebo ho zapiš jako mini guide.",
    subject: "Znalost, která zůstane, když ji předáš dál.",
    preheader: "Nejlepší způsob jak si znalost zafixovat: naučit ji někoho jiného.",
    concept: [
      "Dnes přichází praxe k včerejší teorii. Cílem je udělat jednu věc: předat konkrétní AI znalost kolegovi — nebo ji zapsat tak, aby ji mohl použít kdokoliv.",
      "Proč právě předávání? Tři důvody:",
      [
        "Potvrdíš si, co skutečně umíš — teprve když to vysvětluješ, poznáš kde jsou mezery.",
        "Vytvoříš trvalý artefakt — guide nebo šablona zůstane i po tom, co challenge skončí.",
        "Spustíš organické šíření — každý, komu to ukážeš, může ukázat dalšímu.",
      ],
      "Formáty pro předávání znalosti:",
      [
        "Živá ukázka — sednete si spolu, ty ukazuješ v reálném čase. Nejefektivnější pro skeptiky.",
        "Mini guide — jeden dokument, max jedna strana A4. Situace, prompt, výstup, jak použít.",
        "Šablona s komentářem — připravená šablona nebo prompt s vysvětlením proč funguje.",
        "Krátké video nebo screen recording — pro vzdálené týmy nebo asynchronní sdílení.",
      ],
      "Dobrý mini guide má tuto strukturu: název (co guide řeší), situace (kdy ho použít), prompt nebo postup (přesné zadání), příklad výstupu (aby bylo jasné co čekat), tipy a úpravy (jak přizpůsobit).",
      "Dnešní úkol je záměrně konkrétní: buď zavolej kolegovi a ukáž mu jeden trick, nebo napiš mini guide na jeden konkrétní AI workflow z tvé práce.",
    ],
    taskIntro: "Vyber si jednu z variant a udělej ji dnes:",
    taskItems: [
      "Varianta A: Najdi kolegu a v reálném čase mu ukáž jeden prompt nebo workflow, který ti šetří čas. Zapiš si jeho reakci a otázky.",
      "Varianta B: Napiš mini guide (max 1 strana) pro jeden konkrétní AI workflow. Použij strukturu: situace, prompt, výstup, jak použít.",
    ],
    taskType: "ul",
    taskFallback: `Vstup: "Chci napsat mini guide, ale nevím jak ho strukturovat."

Zkus tento formát — zkopíruj a doplň:

Název: Jak připravit strukturu meetingu za 2 minuty

Situace: Kdy to použít
Máš schůzku za méně než hodinu a potřebuješ rychle strukturu a agendu.

Prompt:
"Jsi zkušený facilitátor. Připravím meeting na téma [doplň]. Účastníci jsou [doplň]. Cíl meetingu je [doplň]. Navrhni agendu na [délka] minut s časy, klíčovými body pro každý blok a návrhem jak otevřít a uzavřít."

Příklad výstupu: [vlož reálný výstup z AI]

Tipy: Doplň konkrétní jména účastníků pro lepší výsledek. Pokud je meeting opakující se, ulož výstup jako šablonu.`,
    taskExample: `Jak to vypadá v praxi — mini guide pro tvorbu zpětné vazby:

Název: Jak připravit konstruktivní zpětnou vazbu za 5 minut

Situace: Kdy to použít
Potřebuješ dát zpětnou vazbu kolegovi na konkrétní situaci a chceš, aby byla věcná, jasná a nevedla ke zbytečnému napětí.

Prompt:
"Jsi zkušený kouč a komunikační poradce. Potřebuji dát zpětnou vazbu kolegovi na tuto situaci: [popiš situaci]. Náš vztah je [přátelský/formální/napjatý]. Cílem zpětné vazby je [změna chování/uznání/korekce]. Napiš 2–3 varianty — jednu přímou, jednu empatickou, jednu koachingovou. Každá max 4 věty."

Příklad výstupu:
Přímá: "Na posledních třech projektech byl termín posunutý o více než týden. Potřebuji abychom si řekli, co tomu brání, a domluvili konkrétní kroky."
Empatická: "Vidím, že máš hodně práce a projekty jsou náročné. Zároveň se potřebujeme bavit o termínech — kdy bys měl/a chvíli?"
Koachingová: "Jak ty sám/sama vnímáš termíny na posledních projektech? Co by pomohlo, aby to šlo jinak?"

Tipy: Čím přesnější popis situace, tím relevantnější varianty. Guide funguje pro zpětnou vazbu nahoru, dolů i horizontálně.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra: Leverage na úrovni systému — ne jen rychlejší úkoly, ale jiný způsob práce.",
  },
  {
    day: 26,
    title: "Leverage na úrovni systému: nástroj vs. způsob práce.",
    subject: "Rychlejší úkoly nestačí. Jde o to změnit způsob, jak práce funguje.",
    preheader: "Systém funguje i tehdy, když u toho nejsi. Nástroj ne.",
    concept: [
      "Na začátku challenge jsme mluvili o Leverage jako způsobu myšlení. Dnes se k tomu vrátíme na jiné úrovni: Leverage na úrovni systému.",
      "Většina lidí, kteří AI používají, ji mají jako nástroj. Otevřou ChatGPT, zadají úkol, dostanou výsledek, zavřou ho. To je v pořádku — a je to začátek. Ale není to systém.",
      "Systém funguje jinak. Má čtyři vlastnosti, které nástroj nemá:",
      [
        "Opakovatelnost — funguje stejně pokaždé, ne jen tehdy, když si vzpomeneš.",
        "Šíření — ostatní ho mohou použít bez toho, abys vždy byl/a u toho.",
        "Zlepšování — každé použití přináší feedback, který systém vylepší.",
        "Nezávislost — funguje i tehdy, kdy ty máš jiné věci na práci.",
      ],
      "Praktický rozdíl:",
      [
        "Nástroj: pokaždé znovu otevřeš AI, napíšeš prompt od nuly, dostaneš výsledek.",
        "Systém: máš šablonu promptu, workflow kroky, výstupy ukládané na jednom místě, a způsob jak je sdílet nebo předávat.",
      ],
      "Jak poznat, jestli používáš nástroj nebo systém: polož si otázku — kdybys byl/a nemocný/á týden, fungovalo by to dál? Nebo by to záviselo na tom, že ty tam budeš?",
      "Zítra si postavíš end-to-end mini AI systém pro jeden konkrétní opakující se úkol. Dnes si připrav půdu: vyber úkol a promysli čtyři vlastnosti systému v kontextu tvé práce.",
    ],
    taskIntro: "Vyber si jeden opakující se úkol, který teď děláš jako nástroj — a promysli, jak by vypadal jako systém:",
    taskItems: [
      "Opakovatelnost: co by se muselo zdokumentovat, aby to fungovalo bez tvé přítomnosti?",
      "Šíření: kdo jiný by mohl tento systém použít? Co by k tomu potřeboval?",
      "Zlepšování: jak bys zachytil/a co funguje a co ne po každém použití?",
      "Nezávislost: co by systém dělal automaticky (nebo polomaticky) bez tvého vstupu pokaždé?",
    ],
    taskType: "ol",
    taskFallback: `Vstup: "Jak poznám, jestli mám nástroj nebo systém?"

AI výstup: Zkus si odpovědět na tyto otázky:
– Musím pokaždé vzpomenout na to, že to existuje? → Nástroj.
– Je to zdokumentované tak, aby to mohl použít kolega bez dotazů na tebe? → Systém.
– Kdybys to dělal/a potřetí, začínáš od nuly nebo máš výchozí bod? → Opakující se nula = nástroj.
– Funguje to i v době tvé dovolené? → Ne = nástroj. Ano = systém.`,
    taskExample: `Jak to vypadá v praxi — přechod od nástroje k systému:

Nástroj (jak to dělám teď):
Každý pátek ráno otevřu AI, napíšu zhruba stejný prompt pro týdenní report, dostanu draft, upravím ho, odešlu vedení. Trvá 40 minut.

Systém (jak to může vypadat):
1. Šablona promptu uložená v Notion — otevřu, doplním čísla, odešlu do AI. 2 minuty.
2. Šablona výstupu reportu — AI vyplní strukturu, já schválím. 5 minut.
3. Archiv výstupů — každý report uložen ve stejné složce, stejný název souboru, datum.
4. Instruktáž pro kolegu — pokud nejsem, kolega ví kde šablona je a jak ji použít.

Výsledek: 40 minut → 15 minut. Funguje bez mé přítomnosti. Kolega ho může převzít bez briefingu.

Přechod trval jednu hodinu nastavení. Ušetřil ~25 minut každý týden = 20 hodin za rok.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra: postavíš end-to-end mini AI systém pro jeden reálný opakující se úkol od začátku do konce.",
  },
  {
    day: 27,
    title: "Postav end-to-end mini AI systém.",
    subject: "Vstup → kroky → výstup. Systém pro jeden složitý opakující se úkol.",
    preheader: "Jedna hodina práce dnes = hodiny ušetřené každý měsíc.",
    concept: [
      "Dnes přichází jeden z nejdůležitějších dnů celé challenge. Postavíš end-to-end mini AI systém — kompletní workflow pro jeden opakující se úkol.",
      "Co to znamená end-to-end: vstup (co do systému přichází), kroky (jak systém pracuje), výstup (co ze systému vychází). Každý krok zdokumentovaný, replikovatelný, předatelný.",
      "Proč je to důležité: bez zdokumentovaného systému zůstáváš u nástroje. Každé další použití začíná znovu. S dokumentovaným systémem máš základ, který se zlepšuje — ne opakuje.",
      "Struktura mini AI systému:",
      [
        "Název a popis — co systém řeší, pro koho, jak často se používá.",
        "Vstup — co přichází do systému: jaká data, texty, informace, v jakém formátu.",
        "Kroky — pořadí akcí: co dělá AI, co dělá člověk, co dělá nástroj. Každý krok jednou větou.",
        "Prompty — přesné texty promptů pro každý AI krok (nebo šablony s proměnnými v [hranatých závorkách]).",
        "Výstup — co ze systému vychází: formát, délka, kde se ukládá.",
        "Human-in-the-loop body — kde ty rozhoduješ nebo schvaluješ.",
        "Tipy a úpravy — co zlepší výsledek, jak přizpůsobit různým situacím.",
      ],
      "Cíl dne není dokonalý systém. Cíl je systém verze 1.0 — použitelný, zdokumentovaný, připravený na iteraci.",
    ],
    taskIntro: "Vyber si jeden složitý opakující se úkol a postav pro něj end-to-end mini AI systém. Dokumentuj ho v této struktuře:",
    taskItems: [
      "Název, popis, frekvence použití.",
      "Vstup — co přichází do systému.",
      "Kroky v pořadí — kdo nebo co je dělá, human-in-the-loop body označeny [R].",
      "Prompty — přesné texty pro každý AI krok.",
      "Výstup — formát a místo uložení.",
    ],
    taskType: "ol",
    taskFallback: `Nevíš, jaký úkol vybrat? Tyto typy fungují nejlépe pro mini AI systém:

– Pravidelné reporty (denní, týdenní, měsíční)
– Příprava podkladů pro opakující se typy schůzek
– Tvorba obsahu pro konkrétní kanál (newsletter, LinkedIn, blog)
– Zpracování feedbacku od zákazníků nebo průzkumů
– Onboarding nových kolegů nebo klientů

Vstup pro start: "Pomoz mi navrhnout strukturu mini AI systému pro [název úkolu]. Potřebuji: popis vstupu, kroky procesu, prompty pro AI kroky a formát výstupu."`,
    taskExample: `Jak to vypadá v praxi — mini AI systém pro zpracování zákaznického feedbacku:

Název: Měsíční analýza zákaznického feedbacku
Frekvence: Jednou měsíčně, ~2 hodiny → po zavedení systému ~35 minut.

Vstup: Export zákaznických hodnocení a komentářů z CRM (CSV nebo zkopírovaný text), aktuální měsíc.

Kroky:
1. Příprava dat → já [A] — zkopíruji data do AI, odstraním citlivé informace.
2. Kategorizace → AI [A] — prompt: "Kategorizuj tento feedback do témat. Identifikuj 5 hlavních kategorií, počty zmínek, sentiment (pozitivní/negativní/neutrální)."
3. Identifikace vzorů → AI [R] — prompt: "Jaké jsou tři opakující se problémy? Jaké jsou tři opakující se pochvaly? Co je nové oproti minulému měsíci?" Já schválím interpretaci.
4. Doporučení → já+AI [R] — prompt: "Na základě analýzy navrhni tři konkrétní akce pro příští měsíc." Já vyberu a upravím.
5. Výstup reportu → AI [A] — prompt: "Napiš shrnutí feedbacku pro vedení. Max 200 slov, odrážky, klíčová čísla."
6. Archivace → já [A] — uložím do složky /Zákaznický feedback/[rok-měsíc].

Výstup: Strukturovaný report pro vedení + akční body + archiv.

Human-in-the-loop body: krok 3 (interpretace vzorů), krok 4 (výběr doporučení).`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra: závěrečný den. Co jsi vybudoval/a. Kam dál. Systém, který pracuje za tebe.",
  },
  {
    day: 28,
    title: "Co jsi vybudoval/a. Systém, který pracuje za tebe.",
    subject: "Závěr challenge — a začátek nového způsobu práce.",
    preheader: "28 dní. Jeden velký posun. A to teprve začíná.",
    concept: [
      "Dostál/a jsi to. 28 dní. Dvacet osm myšlenek, praxí, systémů a malých posunů.",
      "Na začátku challenge jsi sepsal/a tři věci, které děláš opakovaně ručně. Dnes si můžeš odpovědět na otázku: kolik z nich teď funguje jinak?",
      "Za 28 dní jsi prošel/la třemi vrstvami AI adoption:",
      [
        "Mindset — pochopil/a jsi, že nejde o rychlost, ale o leverage. Že kvalita zadání = kvalita výstupu. Že AI je spolupracovník, ne vyhledávač.",
        "Tools — postavil/a jsi systémy: šablony, prompty, workflows, zápisový systém, znalostní báze.",
        "Superpowers — rozvinul/a jsi Perception, Intelligence, Memory, Creation a Connection. A víš, která z nich je tvoje silná stránka.",
      ],
      "Co tě čeká dál:",
      [
        "Systémy, které jsi postavil/a, jsou verze 1.0. Každé použití je příležitost je vylepšit.",
        "Superschopnosti se rozvíjejí praxí — ne čtením. Každý reálný úkol je trénink.",
        "Sdílení znalosti v týmu je multiplikátor — jeden guide nebo ukázka může spustit adopci u dalších lidí.",
        "AI se rychle mění. Klíčem není vědět o každém novém nástroji — ale mít základní systém a mindset, který funguje nezávisle na konkrétním nástroji.",
      ],
      "Jeden poslední impuls: najdi jeden systém z posledních 28 dní, který funguje nejlépe, a použij ho dnes. Ne aby ses naučil/a novou věc. Ale proto, že opakování je základ zvyku.",
      "Tohle není konec. Je to základ. Stavíš na něm dál.",
    ],
    taskIntro: "Závěrečná reflexe: projdi si tři otázky a napiš si odpovědi:",
    taskItems: [
      "Jaký je největší posun za 28 dní? (jeden konkrétní způsob práce, výsledek nebo systém, který před challengí neexistoval)",
      "Které tři věci ze začátku challenge jsi přeproměnil/a — jsou jinak nebo vůbec neexistují?",
      "Jaké jsou tvoje tři konkrétní kroky pro dalších 30 dní? (systém, superschopnost nebo adoption v týmu)",
    ],
    taskType: "ol",
    taskFallback: `Vstup: "Nevím jak popsat svůj největší posun za 28 dní."

AI výstup: Zkus odpovědět na tuto otázku: Co dnes děláš jinak než před 28 dny? Nemusí to být velká věc. Může to být:
– Jeden prompt, který teď používáš pravidelně.
– Jeden workflow, který je zdokumentovaný a replikovatelný.
– Jeden typ úkolu, kde už nezačínáš od nuly.
– Jeden způsob přemýšlení o zadáních, který jsi předtím neměl/a.

To je tvůj posun. A je to reálný.`,
    taskExample: `Jak to vypadá v praxi — závěrečná reflexe:

Největší posun: Před challengí jsem každý report psal/a od nuly. Teď mám šablonu promptu a výstup uložený jako template. Report trvá 15 minut místo 45.

Tři věci, které jsou jinak:
1. Schůzkové zápisy — dřív volné poznámky, teď AI struktura do 5 minut po každé schůzce.
2. Rozhodování — teď si ke každému většímu rozhodnutí vyžádam analýzu od AI jako myšlenkového partnera.
3. Tvorba obsahu — místo přemýšlení od nuly začínám strukturou, pak obsah, pak iterace.

Tři kroky pro dalších 30 dní:
1. Rozšíření Knowledge Base o záznamy z tohoto měsíce.
2. Ukázka jednoho systému kolegovi v marketingu — konkrétně analýza feedbacku.
3. Prohlubování Intelligence superschopnosti: každé větší rozhodnutí nejdřív s AI, pak moje.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "",
  },
];
