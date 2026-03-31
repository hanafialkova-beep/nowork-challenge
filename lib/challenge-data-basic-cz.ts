import type { ChallengeDay } from "./types";

export const challengeDataBasicCZ: ChallengeDay[] = [
  {
    day: 0,
    title: "Vítej v challenge",
    subject: "28 dní, 5–7 minut denně. Začínáme.",
    preheader: "Tohle není kurz. Je to zvyk.",
    concept: [
      "Většina lidí zkouší AI tak, že si jednou napíše do ChatGPT, nedostane co čekala, a zavře záložku. Tohle nebude to samé.",
      "Tato challenge má jiný přístup: místo toho, aby ses učila o AI, budeš AI každý den používat na věci, které už děláš. Malé kroky, každý den, bez přetížení.",
      [
        "5–7 minut denně — víc není potřeba",
        "Každý den jedno téma nebo jeden úkol",
        "Výsledky ukládáš, iteruješ, stavíš na sobě",
      ],
      "Tenhle první den je záměrně jednoduchý. Jde o to, abys začala — ne abys všechno pochopila hned.",
    ],
    taskIntro: "Než začneme, jeden malý úkol. Zamysli se a zapiš si:",
    taskItems: [
      "3 věci, které v práci (nebo v životě) děláš opakovaně — každý týden nebo každý den",
      "Klidně i banální věci: odpovídání na e-maily, příprava schůzek, psaní textů, shrnutí, reporty",
      "Zapiš si je do Notion, Google Docs nebo Apple Notes — budeme se k nim vracet",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Přemýšlím, co dělám opakovaně v práci.\nAI výstup: Tady příklad, jak může vypadat tvůj seznam — připravuju týdenní report pro šéfa, odpovídám na dotazy klientů, píšu podklady na schůzky, shrnu výsledky kampaní, kontroluju a opravuju texty kolegů.",
    taskExample:
      "Vstup (tvůj seznam): 1. Každý týden píšu reporty, 2. Odpovídám na opakující se dotazy e-mailem, 3. Připravuju agendu na porady.\nAI výstup: To jsou přesně úkoly, kde AI může ušetřit nejvíc času. Reporty jde generovat z dat, e-maily šablonovat, agendy strukturovat automaticky.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra se podíváme na to, proč je AI víc než rychlejší Google.",
  },
  {
    day: 1,
    title: "AI není jen rychlejší Google",
    subject: "Jiný způsob myšlení mění výsledky",
    preheader: "Leverage, ne rychlost — tohle je ten přístup.",
    concept: [
      "Většina lidí používá AI jako vyhledávač: napíše otázku, dostane odpověď, jde dál. To funguje — ale využívá zlomek toho, co AI umí.",
      "Klíčový posun v myšlení: AI není nástroj pro rychlost. Je to nástroj pro leverage — pro zásadní rozdíl ve výsledku při stejném nebo menším úsilí.",
      "Co to znamená v praxi? Místo 'jak rychle napsat e-mail' se ptáš: 'co kdybych e-mail vůbec psát nemusel/a?' Nebo: 'jak napsat e-mail tak, aby přinesl výsledek, který bych sám/sama nedosáhla?'",
      [
        "Rychlost: udělám totéž rychleji",
        "Leverage: dosáhnu výsledku, který by jinak nebyl možný",
        "Mindset: AI jako spolupracovník, ne jako zkratka",
      ],
      "Tohle přeskočení mindsetové části je důvod, proč většina lidí AI 'vyzkouší a pak nechá'. Nevidí leverage — jen vidí, že výsledek není dost dobrý napoprvé.",
    ],
    taskIntro:
      "Vezmi jeden úkol ze svého včerejšího seznamu a zkus se zamyslet ze dvou úhlů:",
    taskItems: [
      "Jak by mi AI pomohla udělat tento úkol rychleji? (rychlost)",
      "Jak by mi AI pomohla dosáhnout lepšího výsledku, než kdybych to dělal/a sám/sama? (leverage)",
      "Zapiš si obě odpovědi — i kdyby druhá vypadala nereálně",
    ],
    taskType: "ol",
    taskPrompt:
      "Dělám [název úkolu]. Jak by mi AI mohla pomoci dosáhnout lepšího výsledku, než kdybych to dělal/a sám/sama — nejen rychleji?",
    taskFallback:
      "Vstup: Dělám týdenní reporty pro manažera. Jak by mi AI pomohla dosáhnout lepšího výsledku, ne jen rychleji?\nAI výstup: Rychlost: AI napíše strukturu reportu za tebe. Leverage: AI může analyzovat data a navrhnout, co zdůraznit — třeba trend, který jsi přehlédla, nebo srovnání s minulým týdnem, které manažer vždy chce vidět.",
    taskExample:
      "Vstup: Připravuju podklady na schůzky. Jak mi AI může pomoci lépe, ne jen rychleji?\nAI výstup: Místo přípravy agendy od nuly ti AI může navrhnout strukturu na základě cíle schůzky, předvídat otázky účastníků a připravit odpovědi, nebo navrhnout, co z minulé schůzky sledovat.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra se podíváme na to, co AI skutečně umí — a co ne.",
  },
  {
    day: 2,
    title: "Co AI umí a co ne",
    subject: "Realistická očekávání = méně zklamání",
    preheader: "AI není vševědoucí. A to je v pořádku.",
    concept: [
      "Jedna z největších chyb při práci s AI je přehnané očekávání. Nebo naopak — přílišná skepse. Obojí vede ke stejnému výsledku: člověk AI nepoužívá efektivně.",
      "Co AI skutečně umí dobře:",
      [
        "Strukturovat a přepisovat text",
        "Generovat varianty, nápady, návrhy",
        "Shrnovat dlouhé dokumenty",
        "Vysvětlovat složité věci jednoduše",
        "Asistovat při opakujících se úkolech",
        "Pracovat rychle s velkým množstvím textu",
      ],
      "Co AI neumí nebo dělá špatně:",
      [
        "Přistupovat k internetu v reálném čase (bez speciálních nástrojů)",
        "Pamatovat si minulé konverzace (pokud to nenastavíš)",
        "Vždy říkat pravdu — AI může 'vymýšlet' fakta přesvědčivě",
        "Rozumět tvému kontextu, pokud mu ho neposkytnuješ",
        "Nahradit odborný úsudek v kritických oblastech",
      ],
      "Klíčový princip: AI je nejlepší spolupracovník, když víš, co od ní chceš — a ověříš, co ti dá.",
    ],
    taskIntro:
      "Zamysli se nad jedním úkolem, kde si nejsi jistá, jestli by AI pomohla. Zkus to otestovat:",
    taskItems: [
      "Vyber úkol, kde jsi skeptická nebo kde se ti AI dosud neosvědčila",
      "Napiš AI jednoduchý prompt a zjisti, co dostaneš",
      "Zhodnoť: bylo to užitečné? Kde AI selhala? Co by pomohlo?",
    ],
    taskType: "ol",
    taskPrompt:
      "Potřebuji pomoc s [úkol]. Mám k dispozici [co máš k dispozici]. Výsledek by měl být [co potřebuješ].",
    taskFallback:
      "Vstup: Potřebuji pomoc s přípravou odpovědi na stížnost klienta. Mám e-mail klienta. Výsledek by měl být profesionální a empatický.\nAI výstup: Vážený kliente, děkujeme za zpětnou vazbu. Omlouváme se za vzniklé komplikace a chápeme vaše zklamání. Situaci prošetříme a do 3 pracovních dnů vás budeme kontaktovat s řešením.",
    taskExample:
      "Vstup: Potřebuji shrnout 4stránkový report do 5 vět pro manažera.\nAI výstup: [Shrnutí reportu v 5 větách s klíčovými čísly a závěry — AI tohle zvládne dobře a rychle, tady má jasnou instrukci a konkrétní formát.]",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra to bude praktické — napíšeš AI, co děláš v práci, a necháš ji navrhnout, kde může pomoci.",
  },
  {
    day: 3,
    title: "Tvůj první AI výstup",
    subject: "Napiš co děláš — dostaneš návrh jak pomoci",
    preheader: "Praktický den. Výstup garantován.",
    concept: [
      "Dnes poprvé přesně popíšeš AI, co děláš v práci nebo ve svém projektu. Ne obecně — ale konkrétně, s kontextem.",
      "Proč je to důležité? Protože AI bez kontextu generuje generické odpovědi. S kontextem generuje odpovědi, které jsou použitelné.",
      "Tenhle úkol má dvě části: nejdřív napíšeš AI o sobě, pak se jí zeptáš, kde může pomoci. Výsledek si ulož — budeme se k němu vracet.",
    ],
    taskIntro: "Použij tento postup:",
    taskItems: [
      "Otevři Claude, ChatGPT nebo Gemini",
      "Napiš AI prompt podle šablony níže",
      "Výstup si ulož — seznam oblastí, kde AI navrhla pomoct",
    ],
    taskType: "ol",
    taskPrompt:
      "Pracuji jako [tvoje role nebo obor]. Moje běžné úkoly jsou: [vypiš 3–5 konkrétních úkolů]. Navrh mi 5 konkrétních způsobů, jak by mi AI mohla pomoci — ne obecně, ale přímo na moje úkoly.",
    taskFallback:
      "Vstup: Pracuji jako marketingová koordinátorka. Moje běžné úkoly jsou: psaní příspěvků na sociální sítě, příprava newsletterů, shrnutí výsledků kampaní, komunikace s agenturou.\nAI výstup: 1. Příspěvky na sítě: navrhnu ti 5 variant textu z jedné informace. 2. Newslettery: napíšu strukturu i draft podle tvého briefu. 3. Shrnutí kampaní: zadej mi čísla, dostaneš komentář. 4. Komunikace s agenturou: pomůžu formulovat brief nebo feedback. 5. Plánování obsahu: navrhnu témata na měsíc na základě tvých cílů.",
    taskExample:
      "Vstup: Pracuji jako projektový manažer. Úkoly: vedení schůzek, příprava statusů, komunikace s týmem, sledování deadlinů.\nAI výstup: 1. Příprava agendy schůzky na základě cíle. 2. Draft statusu z tvých poznámek. 3. Šablony pro opakující se e-maily. 4. Strukturování úkolů do přehledného seznamu. 5. Příprava podkladů pro retrospektivu.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra se naučíš, co dělá největší rozdíl mezi dobrým a špatným promptem.",
  },
  {
    day: 4,
    title: "Dobrý prompt vs. špatný",
    subject: "Co dělá největší rozdíl",
    preheader: "Jeden detail změní celý výsledek.",
    concept: [
      "Špatný výsledek z AI má ve většině případů jednu příčinu: špatný prompt. Ne špatnou AI.",
      "Co dělá prompt špatným:",
      [
        "Je příliš vágní: 'napiš mi e-mail'",
        "Chybí kontext: AI neví, pro koho, proč, v jakém tónu",
        "Chybí formát: AI neví, jak dlouhý, jak strukturovaný",
        "Chybí cíl: AI neví, čeho má výstup dosáhnout",
      ],
      "Co dělá prompt dobrým:",
      [
        "Je konkrétní: 'napiš mi e-mail pro klienta, který čeká na nabídku'",
        "Má kontext: 'klient je malá firma, očekává cenu do týdne'",
        "Má formát: 'krátký, max 5 vět, přátelský tón'",
        "Má cíl: 'chci, aby klient věděl, že na nabídce pracujeme'",
      ],
      "Pravidlo palce: čím víc si představíš výsledek, který chceš — tím přesnější prompt napíšeš.",
    ],
    taskIntro: "Porovnej tyto dva prompty a zkus oba v AI:",
    taskItems: [
      "Špatný: 'Napiš mi e-mail.'",
      "Lepší: 'Napiš e-mail klientovi, který čeká na cenovou nabídku. Firma je malá, tón přátelský, max 5 vět. Cíl: ujistit klienta, že nabídka bude do pátku.'",
      "Zapiš si, jak se liší výstupy — kvalitou, použitelností, délkou",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup (špatný prompt): Napiš mi e-mail.\nAI výstup: Vážený pane/paní, píšu vám ohledně naší spolupráce. Pokud máte zájem, dejte mi vědět. S pozdravem.\n---\nVstup (dobrý prompt): Napiš e-mail klientovi, který čeká na cenovou nabídku. Firma je malá, tón přátelský, max 5 vět. Cíl: ujistit ho, že nabídka bude do pátku.\nAI výstup: Ahoj Petře, jen rychlá zpráva — na tvé nabídce pracujeme a do pátku ji budeš mít v e-mailu. Dej vědět, pokud mezitím přibyly nějaké požadavky. Těšíme se na spolupráci!",
    taskExample:
      "Vstup (špatný): Shrň mi tento text.\nAI výstup: Text pojednává o různých tématech.\n---\nVstup (dobrý): Shrň tento text do 3 odrážek pro manažera, který nemá čas číst celý dokument. Každá odrážka max 1 věta.\nAI výstup: • Projekt překročil plánovaný rozpočet o 12 %. • Hlavní příčinou bylo zpoždění dodávky materiálu. • Doporučujeme revizi dodavatelských smluv.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra si procvičíš přepisování špatných promptů na lepší.",
  },
  {
    day: 5,
    title: "Přepiš 3 špatné prompty",
    subject: "Praxe: z vágního na konkrétní",
    preheader: "Tohle je dovednost, ne znalost. Musíš si ji zkoušet.",
    concept: [
      "Přepisování promptů je jako editace textu — první verze nikdy není nejlepší. Důležité je vědět, co přidat.",
      "Dnes máš tři příklady špatných promptů. Tvůj úkol: přepsat je tak, aby dávaly lepší výstup. Pak je obě verze otestovat.",
      "Co typicky chybí ve špatných promptech:",
      [
        "Cílová skupina nebo příjemce",
        "Tón nebo styl komunikace",
        "Požadovaný formát nebo délka",
        "Kontext situace nebo cíl výstupu",
      ],
    ],
    taskIntro: "Přepiš tyto 3 prompty a otestuj je v AI:",
    taskItems: [
      "'Napiš mi text na LinkedIn.' → přidej: pro koho, na jaké téma, jaký cíl, jaký tón",
      "'Pomoz mi s prezentací.' → přidej: na jaké téma, pro jaké publikum, kolik slidů, jaký výstup",
      "'Napiš odpověď na e-mail.' → přidej: co obsahoval e-mail, co chceš sdělit, jaký tón",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup (přepsaný prompt): Napiš krátký LinkedIn post pro HR manažery o tom, jak AI šetří čas při náboru. Tón přátelský a praktický, délka max 5 vět, bez hashtagů.\nAI výstup: Nábor zabere průměrně 23 hodin na jednu pozici. AI zvládne za 5 minut: screening CV, návrh otázek na pohovor i draft nabídky. Zbývá ti čas na to, co AI neumí — poznat člověka.",
    taskExample:
      "Vstup (přepsaný prompt): Napiš odpověď na e-mail, kde klient reklamuje zpoždění dodávky. Chci se omluvit, vysvětlit důvod (problém s dopravcem) a nabídnout slevu 10 % na příští objednávku. Tón profesionální a empatický, max 6 vět.\nAI výstup: Vážená paní Nováková, omlouváme se za zpoždění vaší objednávky. Zpoždění bylo způsobeno výpadkem u přepravní společnosti, který byl mimo naši kontrolu. Oceňujeme vaši trpělivost a jako poděkování vám nabízíme 10% slevu na příští objednávku. Těšíme se na další spolupráci.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra se podíváme na iteraci — proč první výsledek z AI není finální.",
  },
  {
    day: 6,
    title: "Iterace — první výsledek není finální",
    subject: "Jak pracovat s AI jako s kolegou, ne s vyhledávačem",
    preheader: "Dobrý výstup vzniká ve druhém nebo třetím kole.",
    concept: [
      "Největší chyba při práci s AI: napsat prompt, dostat výsledek, a buď ho přijmout nebo zahodit. Obojí je špatně.",
      "AI funguje nejlépe jako iterativní spolupracovník. První výstup je základ — ne finální produkt.",
      "Jak iterovat efektivně:",
      [
        "Pokud je výsledek moc obecný: přidej více kontextu nebo specifikuj, co chybí",
        "Pokud je výsledek moc dlouhý: 'zkrať to na 3 věty'",
        "Pokud tón nesedí: 'přepiš to formálněji / přátelštěji'",
        "Pokud chybí detail: 'rozveď bod číslo 2'",
        "Pokud je špatná struktura: 'přepiš jako odrážkový seznam'",
      ],
      "Klíčový princip: nemusíš začínat znovu. Pokračuj v konverzaci s AI — pamatuje si kontext celého vlákna.",
    ],
    taskIntro:
      "Vezmi libovolný výstup z minulých dnů a proveď s ním 3 iterace:",
    taskItems: [
      "Iterace 1: zkrať nebo prodluž výstup",
      "Iterace 2: změň tón (formálnější nebo přátelštější)",
      "Iterace 3: přidej nebo odeber konkrétní informaci",
    ],
    taskType: "ol",
    taskPrompt:
      "Přepiš předchozí výstup takto: [konkrétní instrukce co změnit].",
    taskFallback:
      "Vstup (iterace 1): Zkrať tento e-mail na max 3 věty, zachovej klíčové informace.\nAI výstup: Omlouváme se za zpoždění způsobené výpadkem dopravce. Jako kompenzaci nabízíme 10% slevu na příští objednávku. Těšíme se na další spolupráci.\n---\nVstup (iterace 2): Přepiš tento e-mail formálněji.\nAI výstup: Vážená paní, dovolujeme si vyjádřit lítost nad zpožděním dodávky a nabídnout kompenzaci ve výši 10 % z hodnoty příští objednávky.",
    taskExample:
      "Vstup (iterace 3): Přidej do předchozího e-mailu konkrétní datum, do kdy bude objednávka doručena.\nAI výstup: Vážená paní Nováková, omlouváme se za zpoždění. Vaše objednávka bude doručena nejpozději do 15. dubna. Jako poděkování za trpělivost přikládáme 10% slevu na příští nákup.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra je reflexe — zapíšeš si 3 věci, které ti za první týden fungovaly.",
  },
  {
    day: 7,
    title: "Reflexe prvního týdne",
    subject: "Co ti fungovalo? Zapiš si 3 zjištění.",
    preheader: "Týden za tebou. Čas zastavit se a zapsat.",
    concept: [
      "Jeden z nejcennějších návyků při práci s AI je reflexe. Ne proto, abys hodnotila výkon — ale proto, abys věděla, co opakovat.",
      "Za první týden jsi vyzkoušela: mindset (D1–D2), první výstupy (D3), prompting (D4–D5), iteraci (D6). Každý z těch dnů mohl fungovat jinak.",
      "Reflexe ti pomůže odpovědět na dvě otázky:",
      [
        "Co mi přineslo největší hodnotu? (opakovat)",
        "Co mi nešlo nebo mi nepřišlo užitečné? (přizpůsobit nebo přeskočit)",
      ],
      "Tohle není hodnocení. Je to kalibrace — nastavuješ si, jak budeš AI používat dál.",
    ],
    taskIntro: "Zapiš si odpovědi na tyto otázky:",
    taskItems: [
      "Co ze prvního týdne ti přišlo nejvíc užitečné — konkrétní den nebo úkol?",
      "Co nefungovalo nebo ti přišlo zbytečné?",
      "Jedno zjištění o sobě — jak reaguješ na AI výstupy?",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Shrň mi moje zkušenosti z prvního týdne na základě tohoto: nejvíc mi pomohlo D3 a D5. D1 mi přišlo moc teoretické. Zjistila jsem, že první výsledek nikdy nepoužívám rovnou.\nAI výstup: Tvoje silná stránka je praktické testování — hned vidíš, co funguje. Teoretické rámce tě tolik neoslovují. Zároveň máš intuici pro iteraci, což je přesně správný návyk. Do druhého týdne vstupuješ s dobrým základem.",
    taskExample:
      "Vstup: Chci si zapsat 3 zjištění z prvního týdne. Pomoz mi to zformulovat na základě tohoto: prompty mi šly lépe než jsem čekala, ale výstupy jsou někdy moc dlouhé a musím je zkracovat.\nAI výstup: Zjištění 1: Prompting je pro tebe přirozenější, než jsi čekala. Zjištění 2: Délka výstupu je parametr, který musíš explicitně nastavit. Zjištění 3: Iterace (zkracování) je součást tvého workflow, ne výjimka.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Příští týden se zaměříme na prompting jako dovednost — začínáme strukturou.",
  },
  {
    day: 8,
    title: "Struktura promptu",
    subject: "Role, úkol, kontext, formát",
    preheader: "Čtyři složky, které mění výsledek.",
    concept: [
      "Dobrý prompt má strukturu. Ne proto, aby byl složitý — ale proto, aby AI věděla přesně, co potřebuješ.",
      "Čtyři složky kvalitního promptu:",
      [
        "Role: kdo má AI být? ('Jsi zkušený copywriter...')",
        "Úkol: co přesně má udělat? ('Napiš e-mail...')",
        "Kontext: co AI potřebuje vědět? ('Klient čeká na nabídku, firma je malá...')",
        "Formát: jak má vypadat výstup? ('Max 5 vět, přátelský tón, bez jargonu...')",
      ],
      "Nemusíš vždy použít všechny čtyři. Ale čím víc jich použiješ, tím přesnější výsledek dostaneš.",
      "Jak to vypadá v praxi:",
      "Bez struktury: 'Napiš mi text o produktu.'\nSe strukturou: 'Jsi produktový copywriter. Napiš popis produktu pro e-shop. Produkt je ergonomická židle, cílová skupina jsou pracující rodiče 30–45 let. Max 3 věty, tón přátelský a praktický.'",
    ],
    taskIntro:
      "Napiš jeden prompt se všemi čtyřmi složkami pro úkol, který běžně děláš:",
    taskItems: [
      "Přidej roli: 'Jsi...'",
      "Přidej úkol: 'Napiš / Shrň / Navrhni...'",
      "Přidej kontext: co AI potřebuje znát",
      "Přidej formát: délka, tón, struktura",
    ],
    taskType: "ol",
    taskPrompt:
      "Jsi [role]. [Úkol]. Kontext: [co AI potřebuje vědět]. Formát: [délka, tón, struktura].",
    taskFallback:
      "Vstup: Jsi zkušený HR recruiter. Napiš krátký inzerát na pozici junior grafika. Kontext: firma je startup v oblasti e-commerce, tým je mladý a přátelský, hledáme někoho na částečný úvazek. Formát: max 5 vět, tón neformální.\nAI výstup: Hledáme junior grafika, který chce růst v e-commerce prostředí! Nabízíme částečný úvazek v mladém startupu, kde tvoje nápady budou vidět hned. Práce na produktových fotkách, bannerech a sociálních sítích. Pokud máš základ z Canvy nebo Adobe a chuť učit se, ozvěte se.",
    taskExample:
      "Vstup: Jsi obchodní asistent. Shrň tento e-mail od klienta do 2 vět pro mého manažera. Kontext: klient vznáší požadavek na úpravu smlouvy kvůli změně rozsahu. Formát: 2 věty, neutrální tón, bez emocí.\nAI výstup: Klient žádá o úpravu smlouvy v důsledku rozšíření projektového rozsahu. Požadavek zahrnuje změnu v sekci 3.2 týkající se dodacích termínů.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra se zaměříme na kontext — AI neví, co jí neřekneš.",
  },
  {
    day: 9,
    title: "Kontext je klíč",
    subject: "AI neví, co jí neřekneš",
    preheader: "Více kontextu = lepší výsledek. Pokaždé.",
    concept: [
      "AI nemá přístup k tvé firmě, tvým kolegům, tvé historii ani tvým preferencím. Pokud jí to neřekneš, bude hádat — a hádat obecně.",
      "Kontext není o tom být upovídaný. Je o tom dát AI to, co potřebuje k dobrému výsledku.",
      "Co do kontextu patří:",
      [
        "Pro koho je výstup určen (klient, manažer, tým, veřejnost)",
        "Jaký je vztah nebo situace (nový klient, opakovaná spolupráce, eskalace)",
        "Co už AI nebo příjemce ví (neopakuj, co je jasné)",
        "Co je cíl výstupu (přesvědčit, informovat, uklidnit, motivovat)",
        "Jaký je kontext firmy nebo projektu (velikost, obor, tón)",
      ],
      "Jednoduchý test: přečti si svůj prompt a zeptej se — kdybych to četla poprvé bez jakéhokoliv kontextu, věděla bych přesně, co se po mně chce? Pokud ne, přidej víc.",
    ],
    taskIntro:
      "Vezmi prompt, který jsi napsala v D8, a přidej mu víc kontextu:",
    taskItems: [
      "Pro koho konkrétně je výstup? (jméno role, ne jméno osoby)",
      "Jaká je situace nebo vztah?",
      "Jaký je cíl — co má příjemce udělat nebo pocítit?",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup (bez kontextu): Napiš e-mail o schůzce.\nAI výstup: Vážený pane, zvu vás na schůzku v úterý ve 14:00.\n---\nVstup (s kontextem): Napiš e-mail obchodnímu partnerovi, se kterým jsme loni spolupracovali. Zvu ho na schůzku k prodloužení smlouvy. Tón přátelský, zmíň naši předchozí spolupráci, navrhni dvě možná data: úterý 14:00 nebo čtvrtek 10:00.\nAI výstup: Ahoj Martine, jak se máš? Rád/a bych navázal/a na naši spolupráci z minulého roku a prodiskutoval/a možnosti dalšího pokračování. Bylo by ti příjemné se sejít — třeba v úterý ve 14:00 nebo ve čtvrtek v 10:00?",
    taskExample:
      "Vstup: Napiš shrnutí pro klienta, který je konzervativní a formální, nikdy předtím neviděl naše reporty. Cíl: aby pochopil klíčové výsledky bez toho, aby musel číst celý dokument. Formát: 3 odrážky, formální tón.\nAI výstup: • Celkové tržby za Q1 dosáhly 1,2 mil. Kč, meziroční nárůst 8 %. • Konverzní poměr se zvýšil z 2,1 % na 3,4 % díky optimalizaci landing pages. • Doporučujeme navýšit rozpočet na výkonnostní reklamu o 15 % v Q2.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra napíšeš kompletní prompt se všemi čtyřmi složkami pro svůj nejčastější pracovní úkol.",
  },
  {
    day: 10,
    title: "Prompt pro svůj nejčastější úkol",
    subject: "Čtyři složky v praxi — na tvůj reálný úkol",
    preheader: "Dnes napíšeš prompt, který budeš reálně používat.",
    concept: [
      "Tenhle den je přelomový. Dosud jsi cvičila na příkladech. Dnes napíšeš prompt pro úkol, který skutečně děláš.",
      "Proč je to jiné? Protože vlastní kontext mění všechno. AI s tvým kontextem dává výstupy, které jsou použitelné rovnou — nebo s minimálními úpravami.",
      "Připomeň si čtyři složky: Role, Úkol, Kontext, Formát. Dnes je všechny použiješ najednou.",
    ],
    taskIntro:
      "Vyber svůj nejčastější pracovní úkol a napiš pro něj plný prompt:",
    taskItems: [
      "Role: kdo má AI být?",
      "Úkol: co přesně má udělat?",
      "Kontext: co AI potřebuje o situaci vědět?",
      "Formát: délka, tón, struktura výstupu",
    ],
    taskType: "ol",
    taskPrompt:
      "Jsi [role]. [Úkol]. Kontext: [specifické informace o situaci, příjemci, projektu]. Formát: [délka, tón, struktura, případně příklad].",
    taskFallback:
      "Vstup: Jsi zkušený projektový manažer. Napiš týdenní status update pro stakeholdery projektu. Kontext: projekt vývoje nového e-shopu, jsme ve fázi testování, tým 5 lidí, deadline za 3 týdny, aktuálně 1 týden pozadu kvůli technickým problémům. Formát: 3 části — co bylo hotovo, co plánujeme, co blokuje. Max 10 vět celkem.\nAI výstup: Co bylo hotovo: Dokončili jsme testování platební brány a opravili 14 kritických bugů. Co plánujeme: Tento týden spustíme user testing s 5 testery a dokončíme mobilní optimalizaci. Co blokuje: Integrace s ERP systémem způsobila zpoždění 1 týden — pracujeme na řešení s dodavatelem.",
    taskExample:
      "Vstup: Jsi content stratég. Navrhni témata na 4 LinkedIn posty pro B2B SaaS firmu v oblasti HR tech. Kontext: cílová skupina jsou HR manažeři ve firmách 50–200 lidí, firma chce budovat autoritu v oboru, ne prodávat přímočaře. Formát: seznam 4 témat s jednou větou vysvětlení pro každé.\nAI výstup: 1. Jak poznáš, že onboarding nefunguje (3 signály z praxe). 2. Kolik skutečně stojí špatný nábor — čísla, která překvapí. 3. Proč HR manažeři nevěří svým datům — a co s tím. 4. Jedno rozhodnutí, které zkrátilo náš time-to-hire o 40 %.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra se naučíš, jak opravit špatný výstup — bez toho, abys začínala znovu.",
  },
  {
    day: 11,
    title: "Jak opravit špatný výstup",
    subject: "Follow-up vs. přepisování od nuly",
    preheader: "Špatný výstup není konec — je to začátek.",
    concept: [
      "Dostaneš špatný výsledek. Co uděláš?",
      "Většina lidí udělá jedno ze dvou: přijme ho (i když není dobrý) nebo začne znovu od nuly. Obojí je suboptimální.",
      "Správná odpověď je follow-up — pokračuj v konverzaci a uprav výstup cílenou instrukcí.",
      "Kdy použít follow-up vs. přepisování:",
      [
        "Follow-up: výstup je přibližně správný, ale potřebuje úpravu (tón, délka, detail, struktura)",
        "Přepisování od nuly: výstup je úplně mimo — špatný cíl, špatný kontext, fundamentálně jiný výsledek než co jsi chtěla",
      ],
      "Příklady dobrých follow-up instrukcí:",
      [
        "'Zkrať to na half délky.'",
        "'Přidej konkrétní příklad k bodu číslo 2.'",
        "'Přepiš to tak, aby to znělo víc přátelsky.'",
        "'Odstraň žargon a nahraď ho jednoduchým jazykem.'",
        "'Přidej na konec výzvu k akci.'",
      ],
    ],
    taskIntro:
      "Vezmi výstup z D10 a záměrně ho oprav třemi různými follow-up instrukcemi:",
    taskItems: [
      "Uprav tón (formálnější nebo neformálnější)",
      "Zkrať nebo prodluž výstup",
      "Přidej nebo odstraň konkrétní prvek",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup (follow-up 1): Přepiš předchozí status update formálněji — jde do výroční zprávy.\nAI výstup: V uplynulém týdnu bylo dokončeno testování platební brány a odstraněno 14 kritických defektů. V nadcházejícím období bude realizováno uživatelské testování a dokončena mobilní optimalizace rozhraní. Aktuálním rizikovým faktorem zůstává integrace s ERP systémem.\n---\nVstup (follow-up 2): Přidej konkrétní datum k bodu o ERP integraci.\nAI výstup: Integrace s ERP systémem způsobila zpoždění — očekávané řešení do 12. dubna.",
    taskExample:
      "Vstup (follow-up): Předchozí návrh LinkedIn postů je dobrý, ale první téma je příliš obecné. Navrhni konkrétnější variantu s číslem nebo příkladem.\nAI výstup: Místo 'Jak poznáš, že onboarding nefunguje' zkus: '3 věci, které nový zaměstnanec udělá v prvním týdnu, když onboarding selže' — každý HR manažer si to okamžitě dokáže představit.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra navážeš na D10 a vylepšíš výstup třemi iteračními kroky.",
  },
  {
    day: 12,
    title: "Iteruj — 3 follow-up kroky",
    subject: "Vezmi výstup z D10 a vylepši ho",
    preheader: "Výstup z minulého týdne dnes dotáhneš do finální verze.",
    concept: [
      "Dnes je čistě praktický den. Vezmeš výstup, který jsi vytvořila v D10, a provedeme ho třemi iteračními kroky.",
      "Cíl: na konci dnešního cvičení budeš mít výstup, který je reálně použitelný — nebo se mu přiblížíš.",
      "Každý iterační krok má jinou funkci:",
      [
        "Krok 1: Upřesnění obsahu — co chybí nebo co je navíc?",
        "Krok 2: Tón a styl — sedí to pro daný kontext a příjemce?",
        "Krok 3: Finalizace — délka, struktura, použitelnost",
      ],
    ],
    taskIntro: "Otevři výstup z D10 a proveď ho třemi kroky:",
    taskItems: [
      "Krok 1: Přidej nebo odstraň obsah — co konkrétně chybí nebo přebývá?",
      "Krok 2: Uprav tón — sedí pro příjemce?",
      "Krok 3: Uprav délku a strukturu — je to připravené k použití?",
    ],
    taskType: "ol",
    taskPrompt:
      "Krok 1: [Co konkrétně přidat nebo odebrat?]\nKrok 2: [Jak upravit tón?]\nKrok 3: [Jak upravit délku nebo strukturu?]",
    taskFallback:
      "Vstup (krok 1): Přidej do statusu zmínku o tom, že tým pracoval přesčas, aby dohnal zpoždění.\nAI výstup: ...Tým pracoval tento týden nad rámec standardní kapacity, aby minimalizoval dopad zpoždění na deadline.\n---\nVstup (krok 2): Udělej text trochu méně formální — jde na interní Slack, ne do reportu.\nAI výstup: Tenhle týden byl náročný — tým přidal hodiny navíc, abychom dohnali skluz s ERP integrací. Platební brána funguje, testování běží. Do příštího týdne bychom měli být zpět v plánu.",
    taskExample:
      "Vstup (krok 3): Zkrať celý výstup na max 3 odrážky. Každá max 1 věta.\nAI výstup: • ERP integrace způsobila 1 týden zpoždění, řeší se. • Platební brána otestována, 14 bugů opraveno. • Tento týden: user testing a mobilní optimalizace.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra se zamyslíme nad tím, kdy AI skutečně pomáhá — a kdy přidává práci.",
  },
  {
    day: 13,
    title: "Kdy AI pomáhá a kdy přidává práci",
    subject: "Ne vše stojí za automatizaci",
    preheader: "AI není řešení na všechno. A to je důležité vědět.",
    concept: [
      "Existují úkoly, kde AI ušetří hodiny. A existují úkoly, kde ti AI přidá práci — protože výstup musíš opravovat déle, než by trvalo to napsat ručně.",
      "Kdy AI skutečně pomáhá:",
      [
        "Úkoly s jasnou strukturou a opakujícím se vzorem",
        "Psaní prvních draftů, které pak upravíš",
        "Shrnutí, přepisy, překlady",
        "Generování variant (5 verzí textu, 10 nápadů na téma)",
        "Vysvětlení nebo zjednodušení složitého obsahu",
      ],
      "Kdy AI přidává práci:",
      [
        "Velmi specifické znalosti nebo interní kontext, který AI nemá",
        "Kreativní práce, kde záleží na tvém osobitém stylu",
        "Úkoly vyžadující ověření faktů — AI si věci vymýšlí přesvědčivě",
        "Jednorázové krátké úkoly, kde prompt trvá déle než samotná práce",
        "Komunikace vyžadující hlubokou empatii nebo znalost vztahu",
      ],
    ],
    taskIntro:
      "Projdi svůj seznam úkolů z D0 a zařaď každý do jedné ze tří kategorií:",
    taskItems: [
      "AI výrazně pomáhá — ušetří mi čas nebo zvýší kvalitu",
      "AI občas pomáhá — záleží na situaci",
      "AI přidává práci — rychleji to udělám sám/sama",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Mám tyto úkoly: psaní newsletterů, odpovídání na stížnosti klientů, analýza dat z Excelu, brainstorming témat, osobní reference pro kolegu.\nAI výstup: Výrazně pomáhá: newslettery, brainstorming témat. Občas pomáhá: odpovídání na stížnosti (záleží na složitosti). AI přidává práci: analýza dat z Excelu (potřebuješ správný nástroj, ne jen text), osobní reference (musí být autentická a osobní).",
    taskExample:
      "Vstup: Chci vědět, jestli má smysl používat AI na přípravu podkladů na schůzky.\nAI výstup: Záleží na typu schůzky. Opakující se schůzky s podobnou agendou — ano, AI ušetří čas. Strategické schůzky s novými klienty — příprava vyžaduje znalost vztahu a kontextu, AI může pomoct s strukturou, ale ne s obsahem.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra je checkpoint druhého týdne — napíšeš si vlastní prompt checklist.",
  },
  {
    day: 14,
    title: "Checkpoint — tvůj prompt checklist",
    subject: "3–5 bodů, které si odneseš z druhého týdne",
    preheader: "Druhý týden za tebou. Čas zkonsolidovat.",
    concept: [
      "Za dva týdny jsi prošla prompting od základů přes strukturu, kontext, iteraci až po analýzu kdy AI pomáhá. Teď je čas to zkonsolidovat.",
      "Prompt checklist je tvůj osobní seznam věcí, které kontroluješ před odesláním každého promptu. Nebude fungovat pro každého stejně — proto si ho píšeš ty.",
      "Co do checklistu patří:",
      [
        "Věci, na které zapomínáš (a víš, že ti pak kazí výsledky)",
        "Věci, které ti naopak pokaždé fungují",
        "Zkratky nebo přístupy, které šetří čas",
      ],
      "Příklad checklistu (přizpůsob si pro sebe): Přidal/a jsem kontext? Specifikoval/a jsem formát? Mám jasný cíl výstupu? Odpovídá tón příjemci?",
    ],
    taskIntro: "Napiš si svůj osobní prompt checklist — 3 až 5 bodů:",
    taskItems: [
      "Na co při psaní promptů zapomínáš nebo ti to kazí výsledky?",
      "Co ti pokaždé funguje a chceš si to připomínat?",
      "Zapiš jako checklist, který budeš mít po ruce",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Pomoz mi sestavit prompt checklist. Vím, že zapomínám na formát a tón. Pokaždé mi funguje přidat roli.\nAI výstup: Tvůj prompt checklist: ✓ Přidal/a jsem roli? ✓ Specifikoval/a jsem formát (délka, struktura)? ✓ Sedí tón pro příjemce? ✓ Mám jasný cíl výstupu? ✓ Potřebuje AI znát kontext situace?",
    taskExample:
      "Vstup: Chci jednoduchý checklist na 3 body, který si zafixuji.\nAI výstup: 1. Kontext: víš AI, pro koho a proč? 2. Formát: víš AI, jak má výstup vypadat? 3. Cíl: víš AI, co má výstup dosáhnout?",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Příští týden začínáme s návyky — a prvním krokem je leverage matice.",
  },
  {
    day: 15,
    title: "Opakující se práce je signál",
    subject: "Leverage matice — kde je tvůj čas nejlíp investovaný",
    preheader: "Pokud to děláš pořád dokola, je to příležitost.",
    concept: [
      "Pokud děláš něco pořád dokola, mozek to přestane vnímat jako problém. Prostě to děláš. Ale opakující se práce je signál — znamená to, že tam je systém nebo šablona, která čeká na vznik.",
      "Leverage matice ti pomůže roztřídit úkoly do čtyř kvadrantů:",
      [
        "Vysoká frekvence + AI pomáhá → priorita pro šablony a workflow",
        "Vysoká frekvence + AI moc nepomáhá → hledej jiné zkrácení nebo deleguj",
        "Nízká frekvence + AI pomáhá → použij AI ad hoc, nebuduj systém",
        "Nízká frekvence + AI moc nepomáhá → nechej být",
      ],
      "Kouzlo matice: pomůže ti soustředit energii tam, kde máš největší návratnost. Ne na to, co vypadá zajímavě — ale na to, co ti skutečně šetří čas.",
    ],
    taskIntro:
      "Napiš do AI svůj seznam opakujících se úkolů a nech ji navrhnout zařazení:",
    taskItems: [
      "Vypiš 5–8 úkolů, které děláš pravidelně",
      "Pro každý odhadni: jak často (denně / týdně / měsíčně) a jak časově náročný",
      "Nech AI navrhnout zařazení do leverage matice",
    ],
    taskType: "ol",
    taskPrompt:
      "Dělám tyto opakující se úkoly: [seznam]. Zařaď je do leverage matice podle frekvence a toho, jak moc by mi AI mohla pomoci. Vysvětli proč.",
    taskFallback:
      "Vstup: Dělám tyto úkoly: 1. Týdenní report (každý týden, 2 hod), 2. Odpovídání na FAQ e-maily (každý den, 30 min), 3. Příprava nabídek pro klienty (2× týdně, 1 hod), 4. Zápis z porady (každý týden, 45 min).\nAI výstup: Priorita: FAQ e-maily (vysoká frekvence, AI zvládá skvěle — navrhni šablony), týdenní report (vysoká frekvence, AI pomůže s strukturou a textem), nabídky (střední frekvence, AI dobře generuje draft). Nižší priorita: zápis z porady (záleží na nástroji — pokud nemáš přepis, AI pomůže méně).",
    taskExample:
      "Vstup: Každý měsíc píšu newsletter (4 hod), každý den kontroluji a schvaluji texty (1 hod), jednou za čtvrt roku dělám prezentaci pro vedení (8 hod).\nAI výstup: Nejvyšší leverage: kontrola textů (denně, AI může být první filtr), newsletter (měsíčně, ale časově náročný — AI draft ušetří hodiny). Prezentace pro vedení: AI pomůže s strukturou a draftem, ale obsah musí být tvůj.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra zmapuješ svých 5 nejčastějších úkolů a zařadíš je do leverage matice.",
  },
  {
    day: 16,
    title: "Leverage matice v praxi",
    subject: "Zmapuj 5 úkolů a zjisti, kde začít",
    preheader: "Data o svém čase jsou první krok k jeho úspoře.",
    concept: [
      "Dnešní den je o mapování — ne o teorii. Vezmeme pět tvých nejčastějších pracovních úkolů a zařadíme je do leverage matice.",
      "Proč právě pět? Protože víc najednou zahltí a méně neposkytne dostatečný přehled. Pět je akční číslo.",
      "Co budeš potřebovat:",
      [
        "Svůj seznam z D0 nebo D15",
        "Hrubý odhad: jak často to děláš a kolik to trvá",
        "Upřímnost: co ti skutečně jde s AI a co ne",
      ],
    ],
    taskIntro: "Otevři AI a proveď toto cvičení:",
    taskItems: [
      "Vypiš 5 nejčastějších pracovních úkolů s odhadem frekvence a délky",
      "Zeptej se AI, jak by v každém z nich mohla pomoci",
      "Označ jeden úkol jako 'priorita pro šablonu' — ten, kde je největší leverage",
    ],
    taskType: "ol",
    taskPrompt:
      "Moje 5 nejčastějších úkolů jsou: [seznam s frekvencí a délkou]. Jak by mi AI mohla pomoci u každého z nich? Který má podle tebe největší leverage potenciál?",
    taskFallback:
      "Vstup: 1. Psaní newsletteru (1× měsíčně, 3 hod). 2. Schůzka s klientem — příprava (2× týdně, 45 min). 3. Social media posty (3× týdně, 1 hod). 4. Odpovědi na e-maily (denně, 30 min). 5. Reporting pro vedení (1× měsíčně, 2 hod).\nAI výstup: Největší leverage: social media posty (vysoká frekvence, AI generuje drafty rychle). Druhá priorita: příprava na schůzku (opakující se vzor, AI navrhne agendu a otázky). Newsletter a reporting: AI ušetří čas na psaní draftu. E-maily: šablony pro opakující se typy.",
    taskExample:
      "Vstup: Označuji social media posty jako prioritu. Co by taková šablona mohla obsahovat?\nAI výstup: Šablona pro social media post: Hák (první věta, která zastaví scrollování) → Hlavní myšlenka (1–2 věty) → Kontext nebo příklad → Výzva k akci nebo otázka. Ty doplníš téma a specifika, AI vygeneruje varianty.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra se podíváme na rozdíl mezi šablonou a workflow — co jsou a kdy použít které.",
  },
  {
    day: 17,
    title: "Šablona vs. workflow",
    subject: "Dva různé nástroje — kdy použít který",
    preheader: "Šablona je vzor. Workflow je postup. Obojí se hodí jinak.",
    concept: [
      "Dva pojmy, které se často pletou — a přitom dělají velmi rozdílné věci.",
      "Šablona je pevná struktura, do které dosazuješ nový obsah. Pokaždé vyplníš jiné políčko, ale kostra zůstává stejná.",
      "Příklady šablon:",
      [
        "Šablona e-mailu pro onboarding nového klienta",
        "Šablona struktury prezentace",
        "Šablona promptu pro týdenní report",
      ],
      "Workflow je posloupnost kroků — jak jde jeden krok za druhým. AI může být součástí kroků.",
      "Příklady workflow:",
      [
        "Přijdu na téma → nechám AI navrhnout draft → upravím → pošlu na schválení",
        "Dostanu brief → AI navrhne strukturu → vyplním obsah → AI zkontroluje tón",
      ],
      "Kdy použít šablonu: opakující se výstupy se stejnou strukturou. Kdy použít workflow: opakující se procesy s více kroky a rozhodovacími body.",
    ],
    taskIntro:
      "Pro jeden ze svých opakujících se úkolů rozhodněte: šablona nebo workflow?",
    taskItems: [
      "Vyber úkol z leverage matice z D16",
      "Zeptej se: je to spíš výstup (šablona) nebo proces (workflow)?",
      "Nech AI navrhnout strukturu šablony nebo kroky workflow",
    ],
    taskType: "ol",
    taskPrompt:
      "Pravidelně dělám [úkol]. Je to spíš opakující se výstup nebo opakující se proces? Navrhni mi [šablonu / workflow] pro tento úkol.",
    taskFallback:
      "Vstup: Pravidelně připravuji podklady na schůzku s klientem. Je to spíš výstup nebo proces? Navrhni mi workflow.\nAI výstup: Je to proces — má víc kroků. Workflow: 1. Zkontroluj předchozí zápis ze schůzky. 2. Připrav 3 klíčové body k probrání. 3. Navrhni otázky, které chceš položit. 4. Připrav podklady nebo data, na která se odkážeš. 5. Nastav cíl schůzky: co chceš rozhodnout nebo posunout.",
    taskExample:
      "Vstup: Každý týden píšu report pro vedení. Je to výstup nebo proces? Navrhni šablonu.\nAI výstup: Je to výstup — má pevnou strukturu. Šablona: [Týden X] — [Datum] / Klíčové výsledky: [3 odrážky] / Co probíhá: [2–3 body] / Rizika nebo blocky: [pokud existují] / Plán na příští týden: [3 priority].",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra vytvoříš svoji první reálnou šablonu pro tvůj nejčastější úkol.",
  },
  {
    day: 18,
    title: "Vytvoř první šablonu",
    subject: "Tvůj nejčastější úkol — jako šablona",
    preheader: "Jednou vytvoříš, stokrát použiješ.",
    concept: [
      "Šablona je investice. Jednou ji uděláš dobře a pak ji opakovaně používáš — s minimální úpravou.",
      "Jak vypadá dobrá šablona promptu:",
      [
        "Má pevnou část: roli, účel, formát — to se nemění",
        "Má proměnnou část: konkrétní obsah, kontext, specifika — to dosazuješ pokaždé nově",
        "Je uložena na místě, kde ji najdeš za týden",
      ],
      "Příklad šablony vs. hotového promptu: Šablona: 'Jsi [role]. Napiš [typ výstupu] pro [příjemce]. Kontext: [specifika situace]. Formát: [délka, tón, struktura].' Hotový prompt: 'Jsi HR specialistka. Napiš onboarding e-mail pro nového zaměstnance. Kontext: nastupuje v pondělí, práce na dálku. Formát: max 8 vět, přátelský tón.'",
    ],
    taskIntro: "Vytvoř šablonu pro svůj nejčastější úkol:",
    taskItems: [
      "Vyber úkol, který děláš nejčastěji",
      "Navrhni strukturu šablony s pevnou a proměnnou částí",
      "Otestuj šablonu v AI s konkrétním dosazením",
    ],
    taskType: "ol",
    taskPrompt:
      "Pomoz mi vytvořit šablonu promptu pro [úkol]. Šablona by měla mít pevnou část (role, účel, formát) a proměnnou část (kontext, specifika). Ukáž mi hotový příklad s konkrétním dosazením.",
    taskFallback:
      "Vstup: Pomoz mi vytvořit šablonu promptu pro psaní statusu na Slack pro tým. Pevná a proměnná část. Ukáž příklad.\nAI výstup: Šablona: 'Napiš krátký status update pro tým na Slack. Téma: [CO se děje]. Stav: [kde jsme]. Blokery: [co brzdí / nebo 'žádné']. Formát: max 5 vět, neformální tón, bez bullet pointů.'\nDosazení: 'Napiš krátký status update pro tým na Slack. Téma: spuštění nové kampaně. Stav: grafika hotová, čekáme na schválení textu. Blokery: schválení se zdrželo o den. Formát: max 5 vět.'\nVýstup: Grafika je hotová a kampaň je připravena ke spuštění! Čekáme ještě na finální schválení textů — mělo to přijít včera, ale snad dnes. Jakmile to bude, jdeme živě.",
    taskExample:
      "Vstup: Vytvořím šablonu pro týdenní report. Jak ji uložit, abych ji snadno našla?\nAI výstup: Nejjednodušší: ulož ji jako první stránku v Notion nebo jako Google Doc s názvem 'Šablona — týdenní report'. Každý týden otevřeš, dosadíš proměnné části a pošleš. Ušetří ti 30 minut týdně.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra se podíváme na to, kde AI skutečně šetří čas a kde ho paradoxně přidává.",
  },
  {
    day: 19,
    title: "Kde AI šetří čas a kde ho přidává",
    subject: "Upřímná analýza tvé vlastní praxe",
    preheader: "Ne každé použití AI je efektivní. Tohle je důležité přiznat.",
    concept: [
      "Po třech týdnech máš dost praxe na to, aby ses mohla upřímně zeptat: kde mi AI skutečně šetří čas?",
      "Existuje efekt, kterému se říká 'AI iluze produktivity' — přijde ti, že pracuješ rychleji nebo lépe, ale ve skutečnosti trávíš čas opravováním AI výstupů nebo psaním promptů pro věci, které by trvaly kratší dobu ručně.",
      "Jak poznat, že AI šetří čas:",
      [
        "Výstup jsi použila s minimální úpravou (< 5 minut)",
        "Úkol by bez AI trval znatelně déle (> 20 minut rozdíl)",
        "Kvalita výstupu je srovnatelná nebo lepší",
      ],
      "Jak poznat, že AI přidává práci:",
      [
        "Výstup jsi přepisovala déle, než by trvalo napsat ho od nuly",
        "Strávila jsi 20 minut psaním promptu pro 2minutový úkol",
        "Musela jsi ověřovat fakta (a zjistila jsi chybu)",
      ],
    ],
    taskIntro: "Proveď rychlý audit za poslední týden:",
    taskItems: [
      "Vypiš 3 momenty, kdy ti AI ušetřila čas (konkrétní příklady)",
      "Vypiš 1–2 momenty, kdy AI přidala práci nebo nepomohla",
      "Z toho vyvoď: kde budeš AI používat víc a kde míň?",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Chci udělat audit — kde mi AI za poslední týden pomohla a kde ne. Pomoz mi to zformulovat.\nAI výstup: Klidně to řekni jako 'šetřilo mi to čas' nebo 'bylo to víc práce než bez AI' — já z toho vytáhnu strukturu. Nebo zkus odpovědět na 3 otázky: 1. Jaký úkol s AI byl nejrychlejší? 2. Kdy jsi musela výstup hodně přepisovat? 3. Kdy jsi AI nepoužila, přestože by pomohla?",
    taskExample:
      "Vstup: Ušetřilo mi čas: draft newsletteru (uložila jsem 90 minut), šablona e-mailu pro klienta (5 minut místo 20). Přidalo práci: AI mi navrhla blog post s vymyšlenými statistikami, musela jsem vše ověřit.\nAI výstup: Silné stránky tvé praxe: dlouhé texty a šablony. Slabé místo: fakta a data vždy ověřuj — AI vymýšlí přesvědčivě. Doporučení: používej AI na psaní, ne na research.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra tě čeká jeden vědomý den s AI — zaznamenáš, co jsi použila a co ne.",
  },
  {
    day: 20,
    title: "Jeden vědomý den s AI",
    subject: "Zaznamenej co jsi použil/a — a co ne",
    preheader: "Dnes se díváš na vlastní práci s AI zvenku.",
    concept: [
      "Tenhle den je o uvědomění, ne o výkonu. Nebudeš se snažit AI používat víc nebo méně — budeš si jen všímat, kdy ji používáš a kdy ne.",
      "Proč to dělat? Protože většina lidí buď AI používá nahodile (bez systému) nebo ji nepoužívá ani tam, kde by pomohla. Vědomí vzorce je první krok ke změně.",
      "Jak zaznamenávat:",
      [
        "Krátká poznámka po každém pracovním bloku: 'použila jsem AI na X, ušetřilo mi Y minut'",
        "Nebo naopak: 'mohla jsem použít AI na X, ale nenapadlo mě to'",
        "Nestresuj se přesností — odhad je dost",
      ],
    ],
    taskIntro: "Na konci dne si zapiš:",
    taskItems: [
      "3 momenty, kdy jsi AI použila — a odhadni, kolik času to ušetřilo",
      "1–2 momenty, kdy jsi AI nepoužila, ale mohla jsi",
      "Jedno zjištění: co tě překvapilo?",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Použila jsem AI třikrát: draft e-mailu (ušetřeno 15 min), shrnutí dokumentu (ušetřeno 20 min), návrh agendy (ušetřeno 10 min). Nepoužila jsem AI na přípravu prezentace, i když jsem věděla, že by pomohla.\nAI výstup: Celkem odhadovaná úspora: 45 minut za jeden den. Vzorec: AI používáš dobře na psaní a shrnutí. Mezera: prezentace — pravděpodobně ti přijde 'příliš specifická', ale AI zvládne strukturu a osnovu velmi dobře.",
    taskExample:
      "Vstup: Překvapilo mě, že jsem AI nepoužila na brainstorming témat pro příští kampaň, i když to byl úkol, kde jsem seděla 30 minut a nic kloudného mě nenapadlo.\nAI výstup: To je přesně 'skrytá příležitost' — úkoly, kde se zasekneš, jsou ideální pro AI. Brainstorming je jedna z věcí, kde AI generuje dostatek nápadů rychle, a ty si pak vyberete nejlepší. Příště zkus: 'Dej mi 15 nápadů na téma kampaně pro [cílová skupina a produkt].'",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra je reflexe třetího týdne — zjistíš, co ti skutečně sedí a co přeskakuješ.",
  },
  {
    day: 21,
    title: "Tvůj AI styl",
    subject: "Co ti sedí, co přeskakuješ — 3 věci co opravdu děláš",
    preheader: "Nejlepší systém je ten, který skutečně používáš.",
    concept: [
      "Za tři týdny ses naučila dost o AI — teorie, prompting, šablony, workflow. Ale naučit se a dělat jsou dvě různé věci.",
      "Dnes si upřímně zapíšeš: co z toho opravdu děláš? Ne co bys měla dělat. Co děláš.",
      "Proč je to důležité? Protože tvůj AI styl je unikátní. Někdo preferuje rychlé prompty bez struktury. Někdo iteruje pečlivě. Někdo AI používá jen na psaní. Někdo na brainstorming.",
      "Neexistuje špatný styl — existuje jen styl, který nevíš, že máš. A styl, který vědomě rozvíjíš.",
    ],
    taskIntro: "Zapiš si tři věci, které skutečně děláš:",
    taskItems: [
      "Co z AI opravdu používám pravidelně? (Konkrétní příklady, ne kategorie)",
      "Co z challenge jsem přeskočila nebo ignorovala? (Bez sebeodsuzování — jen fakt)",
      "Jeden návyk, který chci posílit do čtvrtého týdne",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Chci si zformulovat svůj AI styl. Opravdu používám: AI na psaní e-mailů a draftů. Přeskočila jsem: leverage matici a šablony. Chci posílit: pravidelné ukládání výstupů.\nAI výstup: Tvůj AI styl: ad hoc pisatel/ka — používáš AI reaktivně na psaní, ale nemáš systém pro opakované použití. Příští krok: jeden soubor nebo Notion stránka kde budeš ukládat prompty a výstupy. Uvidíš, jak rychle to změní produktivitu.",
    taskExample:
      "Vstup: Opravdu dělám: AI na brainstorming a strukturování textů. Přeskákala jsem: workflow a šablony, přišly mi složité. Chci posílit: šablonu pro newsletter.\nAI výstup: Dobrá zpráva: brainstorming a strukturování jsou nejsnadnější AI návyky — a ty je máš. Šablony jsou přirozený další krok. Zkus udělat jednu šablonu pro newsletter — a tím 'složitost' přestane být důvod.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Příští týden budujeme systém — začínáme druhým mozkem a ukládáním výstupů.",
  },
  {
    day: 22,
    title: "Druhý mozek lite",
    subject: "Proč ukládat výstupy, ne jen hledat znovu",
    preheader: "Nejlepší AI výstup je ten, který najdeš za měsíc.",
    concept: [
      "Jeden z největších ztrát času při práci s AI: ptát se AI na to samé podruhé. Protože jsi výstup neuložila, nebo jsi zapomněla, kde je.",
      "Druhý mozek je systém pro ukládání toho, co jsi vytvořila — výstupy, šablony, prompty, poznámky. Nemusí být složitý. Musí být konzistentní.",
      "Proč 'lite' verze?",
      [
        "Nepotřebuješ sofistikovaný systém — stačí jedno místo",
        "Nepotřebuješ tagy ani kategorie — stačí prohledávatelný text",
        "Nepotřebuješ být dokonalá — stačí ukládat pravidelně",
      ],
      "Tři věci, které stojí za uložení:",
      [
        "Šablony promptů, které ti fungovaly",
        "AI výstupy, které jsi skutečně použila",
        "Poznámky ze své reflexe (D7, D14, D21)",
      ],
    ],
    taskIntro:
      "Zamysli se nad tím, kde teď ukládáš (nebo neukládáš) AI výstupy:",
    taskItems: [
      "Kde jsou tvoje výstupy z posledních tří týdnů? (Notion, Docs, nigde?)",
      "Jak rychle najdeš šablonu promptu z D18?",
      "Co by se změnilo, kdybys měla jedno konzistentní místo?",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Chci zjistit, jestli potřebuji systém pro ukládání AI výstupů. Výstupy mám různě v Notion, v Docs i v chatu AI.\nAI výstup: Ano, potřebuješ. Tři různá místa = žádné místo. Navrhuju: vytvoř jednu Notion stránku nebo Google Doc s názvem 'Moje AI' a přesuň tam: šablony, použité výstupy, prompt checklist. Za měsíc to budeš ráda mít pohromadě.",
    taskExample:
      "Vstup: Co by měl obsahovat minimální 'druhý mozek' pro práci s AI?\nAI výstup: Minimální verze: 1. Šablony promptů (5–10 nejpoužívanějších). 2. Výstupy, které jsi použila a hodily by se znovu (e-maily, reporty, posty). 3. Reflexe a zjištění (z D7, D14, D21). To je vše. Jeden dokument, konzistentní ukládání.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra si ten systém skutečně vytvoříš — jedno místo, základ hned.",
  },
  {
    day: 23,
    title: "Vytvoř základ — jedno místo pro AI výstupy",
    subject: "Dnes nastavíš systém, který bude fungovat za měsíc",
    preheader: "Systém, který nespravuješ, nefunguje. Udělej ho jednoduchý.",
    concept: [
      "Teorie o druhém mozku je hezká — ale dnes ho skutečně vytvoříš. I v minimální verzi.",
      "Co potřebuješ:",
      [
        "Jedno místo: Notion, Google Docs, Apple Notes — cokoliv, co už používáš",
        "Jedna stránka nebo dokument: nazvi ji 'Moje AI' nebo 'AI workspace'",
        "Tři sekce: Šablony promptů | Použité výstupy | Poznámky a reflexe",
      ],
      "Co tam hned přesuneš:",
      [
        "Šablonu z D18",
        "Prompt checklist z D14",
        "3 zjištění z D21",
      ],
      "Co budeš přidávat průběžně:",
      [
        "Každý výstup, který jsi skutečně použila",
        "Každý prompt, který chceš použít znovu",
        "Každou poznámku, která ti pomohla",
      ],
    ],
    taskIntro: "Dnes uděláš jen toto:",
    taskItems: [
      "Otevři Notion, Google Docs nebo Apple Notes",
      "Vytvoř stránku 'Moje AI' s třemi sekcemi: Šablony | Výstupy | Poznámky",
      "Přesuň tam aspoň jednu věc z minulých týdnů",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Pomoz mi navrhnout strukturu stránky 'Moje AI' v Notion.\nAI výstup: Navrhovaná struktura:\n\n# Moje AI\n\n## Šablony promptů\n- [Šablona 1 — název úkolu]\n- [Šablona 2 — název úkolu]\n\n## Použité výstupy\n- [Datum] [Typ výstupu] — [poznámka co se hodilo]\n\n## Poznámky a reflexe\n- Prompt checklist\n- Zjištění z týdenních reflexí\n- Co mi funguje / nefunguje",
    taskExample:
      "Vstup: Jaká je nejjednodušší verze, která by mi stačila na začátek?\nAI výstup: Minimální verze: jeden Google Doc, tři nadpisy (Šablony / Výstupy / Poznámky), nic víc. Kdykoli použiješ AI a výstup je dobrý, přidáš ho tam. Kdykoli napíšeš prompt, který chceš znovu použít, přidáš ho. Jednou za týden otevřeš a podíváš se co tam je.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra se naučíš, jak poznat, že ti AI skutečně pomáhá — ne jen pocitově.",
  },
  {
    day: 24,
    title: "Jak poznat, že AI ti skutečně pomáhá",
    subject: "Zpětná vazba, ne pocit",
    preheader: "Pocit produktivity a reálná úspora jsou dvě různé věci.",
    concept: [
      "Existuje rozdíl mezi tím, přijde ti, že AI pomáhá, a tím, že ti skutečně pomáhá.",
      "Pocit produktivity může být klam — klikáš, generuješ, iteruješ... a na konci dne máš méně hotového, než kdyby ses soustředila na práci přímo.",
      "Jak měřit reálný přínos AI (jednoduše):",
      [
        "Čas: kolik minut/hodin jsi ušetřila? (i hrubý odhad stačí)",
        "Kvalita: je výstup lepší, než bys vytvořila sama ve stejném čase?",
        "Frekvence: používáš AI pravidelně, nebo jen občas? Pravidelnost = návyk = systém",
        "Výsledek: vedl AI výstup k reálné akci? (Odeslala jsi e-mail? Použila jsi report?)",
      ],
      "Klíčová otázka: 'Kdybych to dělala bez AI, byl by výsledek horší nebo by mi to trvalo déle?' Pokud je odpověď ne — AI ti v tomhle nepomáhá.",
    ],
    taskIntro: "Proveď jednoduchou zpětnou vazbu za poslední týden:",
    taskItems: [
      "Jeden případ, kde AI skutečně pomohla — s odhadem úspory nebo zlepšení",
      "Jeden případ, kde AI nepomohla nebo ti přidala práci",
      "Z toho: co budeš dělat jinak nebo víc?",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Chci zhodnotit, jestli mi AI opravdu pomáhá. Pomohla mi: newsletter (ušetřeno 2 hodiny). Nepomohla: analýza dat — výstupy byly špatné a musela jsem vše ručně.\nAI výstup: Reálná úspora za týden: 2 hodiny. AI funguje na psaní textu, ne na analýzu dat bez správného nástroje. Doporučení: pro datovou analýzu použij specializovaný nástroj (Code Interpreter v ChatGPT nebo Claude s CSV). Pro texty pokračuj v současném přístupu.",
    taskExample:
      "Vstup: Jak si nastavit jednoduché měření přínosu AI, aby to nezabíralo víc jak 2 minuty týdně?\nAI výstup: Jednoduchá metrika: jednou týdně zapiš tři čísla — kolik úkolů jsi řešila s AI, kolik bez, a jak se odhaduje celková úspora v minutách. Nemusí být přesné. Po měsíci uvidíš trend — to je dost.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra porovnáš jeden reálný úkol s AI a bez AI.",
  },
  {
    day: 25,
    title: "Zpětné srovnání",
    subject: "Jeden úkol s AI vs. jak bys to dělal/a dřív",
    preheader: "Nejpřesvědčivější důkaz je tvůj vlastní.",
    concept: [
      "Dnes uděláš jeden praktický experiment: vezmeš konkrétní úkol a porovnáš, jak by to vypadalo s AI a bez AI.",
      "Proč to dělat? Protože abstraktní 'AI šetří čas' je méně přesvědčivé než konkrétní 'tento e-mail mi trval 3 minuty místo 20'.",
      "Jak experiment provést:",
      [
        "Vyber úkol, který běžně děláš",
        "Odhadni, jak dlouho by ti trval bez AI",
        "Proveď ho s AI a změř (nebo odhadni) čas",
        "Porovnej výsledek: čas, kvalita, energie",
      ],
      "Bonus: nezapomeň se ptát i na kvalitu, ne jen čas. Někdy AI neušetří čas, ale výsledek je výrazně lepší.",
    ],
    taskIntro:
      "Vyber jeden konkrétní úkol a proveď srovnání s AI vs. bez AI:",
    taskItems: [
      "Vyber úkol — ideálně takový, který jsi v minulosti dělala bez AI",
      "Odhadni, jak dlouho by ti trval bez AI a jaký by byl výsledek",
      "Proveď ho s AI a zapiš čas a zhodnocení výsledku",
    ],
    taskType: "ol",
    taskPrompt:
      "Pomoz mi s [konkrétní úkol]. [Kontext a instrukce].",
    taskFallback:
      "Vstup: Chci porovnat psaní obchodní nabídky s AI a bez. Bez AI: odhaduji 1,5 hodiny, průměrná kvalita. S AI: zadala jsem kontext a instrukce.\nAI výstup: [AI vygeneruje draft nabídky za 3 minuty]\nSrovnání: Čas s AI: 15 minut (draft + úpravy). Čas bez AI: odhad 90 minut. Úspora: ~75 minut. Kvalita: srovnatelná nebo lepší (AI navrhla strukturu, na kterou bych sama nenarazila).",
    taskExample:
      "Vstup: Porovnávám přípravu agendy na schůzku s AI vs. bez AI. Bez AI: 20 minut, zapomenu na nějaký bod. S AI: Napiš agendu na schůzku s klientem o prodloužení smlouvy. Cíl: dohodnout podmínky. Účastníci: já a obchodní ředitel. Čas: 45 minut.\nAI výstup: Agenda: 1. Přivítání a cíl schůzky (2 min). 2. Review uplynulého roku — klíčové výsledky (10 min). 3. Návrh podmínek nové smlouvy (15 min). 4. Otázky a diskuse (10 min). 5. Shrnutí a next steps (8 min).\nSrovnání: 3 minuty vs. 20 minut. Agenda strukturovanější než obvykle.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra se podíváme na to, jak z challenge udělat trvalý návyk.",
  },
  {
    day: 26,
    title: "Budování návyku",
    subject: "Z challenge na rutinu",
    preheader: "Challenge skončí. Návyk zůstane.",
    concept: [
      "Za 26 dní jsi prošla mindsetu, promptingu, šablonám, analýze a systému. Teď přichází nejdůležitější otázka: co z toho přetrvá po skončení challenge?",
      "Jak funguje návyk:",
      [
        "Musí být konkrétní: ne 'budu používat AI', ale 'každý den si přečtu e-maily a jeden napíšu s AI'",
        "Musí mít spouštěč: co tě připomene, že máš AI použít?",
        "Musí být snadný: první verze návyku by měla trvat max 5 minut",
        "Musí mít odměnu: co ti dá dobrý pocit z toho, že jsi to udělala?",
      ],
      "Příklady malých AI návyků:",
      [
        "Ráno: jeden úkol na den — nechám AI navrhnout prioritu",
        "Každý draft: začnu s AI, upravím sama",
        "Každý týden: zkontroluju co jsem uložila do 'Moje AI'",
      ],
    ],
    taskIntro: "Navrhni si jeden konkrétní AI návyk:",
    taskItems: [
      "Co konkrétně budeš dělat? (akce, ne záměr)",
      "Kdy a co tě spustí? (spouštěč)",
      "Jak ho uděláš tak jednoduchým, že ho fakt uděláš?",
    ],
    taskType: "ol",
    taskFallback:
      "Vstup: Chci si nastavit AI návyk, který vydrží. Realisticky mám 5 minut ráno.\nAI výstup: Navrhovaný návyk: Každé ráno při první kávě otevřeš AI a napíšeš: 'Jaké jsou moje 3 priority na dnes?' — doplníš co víš o svém dni. AI ti navrhne strukturu nebo priority. Trvá 3 minuty. Spouštěč: první káva. Odměna: jasný plán dne.",
    taskExample:
      "Vstup: Chci návyk kolem psaní — každý draft začít s AI. Jak to nastavit, aby to fungovalo?\nAI výstup: Pravidlo: 'Než začnu psát cokoliv delšího než 5 vět, otevřu AI.' Spouštěč: otevřeš nový dokument nebo e-mail. Akce: zadáš AI instrukci (šablona z D18). Trvá 2 minuty navíc, ušetří 15. Po 3 týdnech to bude automatické.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zítra si svůj denní AI rituál konkrétně nastavíš.",
  },
  {
    day: 27,
    title: "Nastav si svůj denní AI rituál",
    subject: "Konkrétní, max 5 minut",
    preheader: "Rituál není přepych. Je to systém, který tě unese.",
    concept: [
      "Rituál je návyk s kontextem. Neděláš to jen protože to máš v plánu — děláš to protože to patří k tvému dni.",
      "Dobrý denní AI rituál má tři vlastnosti:",
      [
        "Je konkrétní: víš přesně co otevřeš, co napíšeš, co dostaneš",
        "Je krátký: max 5 minut, jinak ho nepůjde udržet",
        "Dává okamžitý výsledek: po rituálu víš nebo umíš něco, co jsi před ním nevěděla",
      ],
      "Kdy rituál zařadit:",
      [
        "Ráno (start dne): priority, plán, naladění",
        "Před klíčovým úkolem: příprava, brainstorming, draft",
        "Po práci (konec dne): reflexe, shrnutí, příprava na zítřek",
      ],
      "Nemusíš mít jeden rituál na celý den. Stačí jeden na začátek — ostatní přidáš přirozeně.",
    ],
    taskIntro: "Nastav si svůj denní AI rituál — konkrétně:",
    taskItems: [
      "Kdy: ráno / před konkrétním úkolem / večer?",
      "Co přesně uděláš: jaký prompt nebo akci?",
      "Co tě spustí a co je výsledkem?",
    ],
    taskType: "ol",
    taskPrompt:
      "Pomoz mi nastavit denní AI rituál. Mám k dispozici [X minut] [ráno/večer/jindy]. Nejčastěji dělám [typ práce]. Chci dosáhnout [cíl rituálu].",
    taskFallback:
      "Vstup: Pomoz mi nastavit denní AI rituál. Mám 5 minut ráno. Nejčastěji dělám projektové řízení. Chci mít jasný plán dne.\nAI výstup: Tvůj ranní rituál:\nSpouštěč: druhý doušek kávy.\nAkce: otevřeš AI a napíšeš: 'Mám před sebou: [vypiš 3–5 věcí]. Co je dnes priorita? Co mohu delegovat nebo odložit?'\nVýsledek: 3 priority a jeden úkol, který přesunete.\nČas: 4 minuty.",
    taskExample:
      "Vstup: Chci večerní rituál — shrnutí dne a příprava na zítřek. Max 5 minut.\nAI výstup: Večerní rituál:\nSpouštěč: zavření počítače.\nAkce: napíšeš AI: 'Co jsem dnes dokončila: [seznam]. Nedokončené: [seznam]. Co je zítra nejdůležitější?'\nVýsledek: čistá hlava a jasný začátek zítřka.\nČas: 3–4 minuty.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "Zítra je poslední den — a je to tvůj závěr. Co ses naučila, co tě čeká.",
  },
  {
    day: 28,
    title: "Závěr Basic — co tě čeká dál",
    subject: "28 dní za tebou. Co teď?",
    preheader: "Tohle není konec. Je to základ.",
    concept: [
      "Prošla jsi 28 dny, 5–7 minut denně. Tohle není málo — většina lidí, kteří 'začínají s AI', to vzdá po prvním týdnu.",
      "Co ses za ty čtyři týdny naučila:",
      [
        "Týden 1: Jak na AI myslet — leverage, ne jen rychlost",
        "Týden 2: Jak psát dobré prompty — struktura, kontext, iterace",
        "Týden 3: Jak budovat první návyky — šablony, workflow, leverage matice",
        "Týden 4: Jak si vybudovat systém — druhý mozek, zpětná vazba, rutina",
      ],
      "Co teď máš, co jsi před 28 dny neměla:",
      [
        "Vlastní prompt checklist",
        "Aspoň jednu šablonu pro opakující se úkol",
        "Jedno místo pro AI výstupy",
        "Denní AI rituál",
        "Realistický pohled na to, kde AI pomáhá a kde ne",
      ],
      "Co přichází v Advanced? Pokud chceš jít dál — hlubší prompting, automatizace, práce s nástroji, vlastní AI workflow. Basic tě naučil chodit. Advanced tě naučí běžet.",
    ],
    taskIntro: "Závěrečný úkol — tři věci:",
    taskItems: [
      "Napiš si (nebo do AI): co jsi za 28 dní reálně zvládla? Konkrétně, ne obecně.",
      "Co ti z challenge vydrží — jeden návyk, jedna šablona, jedno zjištění?",
      "Co chceš udělat jako první krok po skončení challenge?",
    ],
    taskType: "ol",
    taskPrompt:
      "Prošla jsem 28denní AI challenge. Zvládla jsem: [co konkrétně]. Vydrží mi: [návyk nebo systém]. Chci dál: [co tě zajímá nebo kde chceš růst]. Shrň mi to jako malý milník a navrhni jeden konkrétní první krok.",
    taskFallback:
      "Vstup: Prošla jsem 28denní AI challenge. Zvládla jsem: psaní lepších promptů, šablonu pro newsletter, denní rituál. Vydrží mi: ranní AI checkin. Chci dál: automatizace a AI pro analýzu dat.\nAI výstup: Milník: Za 28 dní jsi prošla od nuly k fungujícímu systému — to není samozřejmost. Máš šablonu, rituál a realistický pohled na AI. První krok do Advanced: zkus ChatGPT Code Interpreter nebo Claude s CSV souborem — nahraj datový soubor a nech AI najít vzorec. Uvidíš hned, kde je hranice.",
    taskExample:
      "Vstup: Co by mi doporučila AI jako první krok po Basic challenge, pokud mě zajímá hlubší prompting a vlastní workflow?\nAI výstup: První krok: vezmi svou nejpoužívanější šablonu z Basic a rozviň ji o 'chain of thought' — místo jednoho promptu udělej tříkrokový proces. Krok 1: AI navrhne strukturu. Krok 2: ty doplníš obsah. Krok 3: AI zkontroluje tón a délku. To je základ workflow v Advanced.",
    taskTip:
      "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser:
      "V Advanced tě čeká hlubší prompting, automatizace a AI workflow — uvidíme se tam.",
  },
];
