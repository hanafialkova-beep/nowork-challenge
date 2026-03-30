import type { ChallengeDay } from "./types";

export const challengeDataCZ: ChallengeDay[] = [
  {
    day: 0,
    title: "Tohle není jen AI challenge. Tohle je upgrade způsobu práce.",
    subject: "Začínáme. Takhle bude challenge fungovat.",
    preheader: "28 dní, 5–7 minut denně. Jeden opravdový posun.",
    concept: [
      "AI je dnes všude. Nové nástroje, nové funkce, nové sliby. A právě proto je snadné skončit u toho, že člověk jen zkouší další a další věci – ale ve skutečnosti se jeho práce moc nemění.",
      "Tahle challenge vznikla proto, aby pomohla udělat pravý opak.",
      "Nejde o to naučit se co nejvíc AI nástrojů. Jde o to začít AI používat prakticky, pravidelně a tak, aby opravdu ulehčovala práci. Tohle je AI-first mindset: způsob přemýšlení je důležitější než jakýkoliv konkrétní nástroj.",
      "Každý den ti zabere přibližně 5–7 minut. Každý den si odneseš něco použitelného:",
      ["nový pohled na práci", "malý praktický krok", "konkrétní výstup nebo drobné zlepšení něčeho, co už děláš"],
      "Postupně si nebudeš jen hrát s AI, ale začneš si budovat vlastní způsob práce – AI Adoption v praxi. Ten funguje ve třech vrstvách: Mindset, Tools a Superpowers. A přesně tímhle pořadím budeme procházet i v challenge.",
      "Tady je rámec celé challenge: prvních sedm dní ladíme způsob myšlení a základní přístupy. Pak přidáme systémy pro ukládání znalostí, digitální prostředí a práci s projekty. Na konci se podíváme na pět superschopností, které AI spoluprací získáváš.",
      "A ještě jedna důležitá věc: když narazíš na něco, co už znáš, nevadí to. Naopak. Každou výzvu lze prohloubit – upravit prompt, vylepšit šablonu, zabudovat do reálné práce.",
      "Smyslem téhle challenge není stihnout všechno. Smyslem je posouvat se každý den o kousek dál. Stačí málo. Pět minut. Jedna myšlenka. Jeden krok. A právě z toho nakonec vzniká skutečná změna.",
    ],
    taskIntro: "Sepiš si 3 věci, které ve své práci nebo běžném dni děláš opakovaně ručně. Nemusí to být nic velkého. Stačí drobnosti, které se vracejí znovu a znovu. Budeme se k nim v challenge vracet.",
    taskItems: [],
    taskType: "text",
    taskFallback: `Odpisuji zákazníkům na stále stejné otázky.
Píšu týdenní shrnutí stavu projektu pro vedení.
Připravuji zápis z meetingu – vždy stejná struktura.`,
    taskExample: `Výsledek dne 0 v praxi:
→ Tvůj seznam tří věcí je základ pro celou challenge.
→ Příklad: zákaznické dotazy → šablona (Day 2); zápisy → workflow (Day 7); report → OHIO princip (Day 2).`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "V práci se nečeká odměna za samotnou práci, ale za výsledek – a tohle mění vše v tom, jak se zadávají AI úkoly.",
  },
  {
    day: 1,
    title: "V práci se neplatí za práci. Platí se za výsledek.",
    subject: "V práci se neplatí za práci. Platí se za výsledek.",
    preheader: "Jeden posun v myšlení, který mění všechno ostatní.",
    concept: [
      "Když je toho hodně, většinou automaticky řešíme jednu věc: jak všechno stihnout.",
      "Jenže právě tady se láme rozdíl mezi běžným fungováním a AI-first myšlením.",
      "Nejde totiž jen o to udělat věci rychleji. Nejdřív je potřeba se zastavit a podívat se, co je vlastně skutečný výsledek, kterého chceme dosáhnout.",
      "Ne vždy se platí za to, že:",
      ["napíšeš email", "připravíš prezentaci", "vytvoříš dokument", "nebo strávíš hodinu rešerší"],
      "Platí se za to, že:",
      ["někdo dostane jasnou informaci", "vznikne rozhodnutí", "posune se projekt", "nebo se něco kvalitně připraví"],
      "A v tom je velký rozdíl. Jakmile začneš víc přemýšlet o výsledku než o samotném úkolu, začneš mnohem snáz vidět, co lze zjednodušit, co zadat AI, co nemusí začínat od nuly – nebo co možná vůbec nemusíš dělat.",
      "Tohle je základ Leverage přístupu. Leverage neznamená dělat více. Znamená dělat správné věci – a AI zapojovat tam, kde přidává hodnotu, ne tam, kde jen přidává rychlost.",
      "Neptat se jen: Jak to udělám? Ale nejdřív: Čeho tím vlastně chci dosáhnout? Tento rozdíl – aktivita vs. výsledek – je klíčový. Bez tohoto posunu se AI stane jen dalším nástrojem na dělání věcí rychleji. S tímto posunem se stane nástrojem na dělání správných věcí.",
    ],
    taskIntro: "Vyber si jeden úkol, který dnes řešíš, a napiš si k němu dvě věci:",
    taskItems: ["Jak ten úkol zní teď", "Jaký je skutečný výsledek, kterého chceš dosáhnout"],
    taskType: "ol",
    taskFallback: `Úkol jak zní: Připravit podklady na obchodní schůzku.
Skutečný výsledek: Klient řekne ano nebo přesně vím, co ho brzdí.`,
    taskExample: `Vstup do AI:
"Pomoz mi pojmenovat skutečný výsledek tohoto úkolu: Zítra mám schůzku s klientem o prodloužení smlouvy."
AI odpověděla:
"Výsledek: Klient potvrdí prodloužení nebo se dozvíš, co je třeba k jeho rozhodnutí.
Aktivita: Připravit podklady, agenda, klíčové argumenty."`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Cokoliv děláš podruhé, by nemělo začínat od nuly. Ukážeme si princip OHIO – a jak ti ušetří energii.",
  },
  {
    day: 2,
    title: "Cokoliv děláš podruhé, už by to nemělo začínat od nuly.",
    subject: "Co děláš podruhé, přestaň psát od nuly.",
    preheader: "Opakování je signál – ne výzva pracovat rychleji, ale postavit šablonu.",
    concept: [
      "Spousta práce nevypadá na první pohled složitě. Ale právě ty malé opakující se věci často berou nejvíc energie.",
      "Když něco děláš opakovaně, je to signál. Ne signál, že máš být rychlejší. Ale signál, že by to mělo mít šablonu, postup, prompt nebo aspoň jednodušší výchozí bod.",
      "Tady přichází na řadu princip OHIO: Only Handle It Once. Pokud děláš něco podruhé, nastav to hned teď jednou dobře – šablonu, prompt, strukturu – a příště začínáš z výchozí pozice, ne od nuly.",
      "Existují tři typy věcí, které se v práci opakují a kde OHIO dává největší smysl:",
      ["Dokumenty – zprávy, nabídky, briefy, zápisky, souhrny", "Komunikace – follow-upy, potvrzení, odpovědi na časté otázky, úvodní emaily", "Rozhodnutí – opakující se volby, kde vždy zvažuješ stejná kritéria"],
      "AI je nejsilnější právě tam, kde se něco opakuje. Ne proto, že všechno udělá dokonale. Ale proto, že pomůže přestat začínat pokaždé znovu.",
      "Konkrétní prompt pro tvorbu šablony funguje takto: Vytvoř mi šablonu pro [typ dokumentu]. Šablona má obsahovat: [sekce]. Výstup v [formátu]. Zkus ho teď použít na jeden z opakujících se dokumentů.",
      "Smyslem dne není vymyslet dokonalý systém. Smyslem je najít jednu věc, která se opakuje, a udělat první krok k tomu, aby se příště dělala snadněji.",
    ],
    taskIntro: "Vyber si jednu opakující se činnost a zkus si k ní napsat prompt pro tvorbu šablony ve formátu:",
    taskItems: [
      "Vytvoř mi šablonu pro [dopiš typ dokumentu nebo zprávy]",
      "Šablona má obsahovat tyto sekce: [dopiš sekce, které se vždy opakují]",
      "Výstup ve formátu [dopiš – seznam, tabulka, odstavce...]",
    ],
    taskType: "ul",
    taskFallback: `Vytvoř mi šablonu pro follow-up email po schůzce s klientem.
Šablona má obsahovat: poděkování za čas, shrnutí klíčových bodů, dohodnuté kroky a termíny, výzvu k akci.
Výstup ve formátu krátkých odstavců, max 150 slov.`,
    taskExample: `AI výstup – šablona follow-up emailu:
---
Předmět: Shrnutí schůzky – [datum]

Ahoj [jméno], díky za čas na dnešní schůzce.
Shrnutí klíčových bodů: [body]
Dohodnuté kroky: [kroky] do [termín]

Dej vědět, pokud chceš něco doplnit. [Podpis]`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "AI není jen vyhledávač. Je to spolupracovník – a klíčem je kvalita zadání.",
  },
  {
    day: 3,
    title: "Kvalita zadání = kvalita výstupu.",
    subject: "Přestaň AI používat jako vyhledávač.",
    preheader: "Největší posun nastane, když přestaneš AI ptát a začneš jí zadávat práci.",
    concept: [
      "Většina lidí pořád používá AI tak, jako by to byl trochu chytřejší vyhledávač. Něco se zeptají, dostanou odpověď a tím to skončí.",
      "Jenže největší posun nastane ve chvíli, kdy AI přestaneš brát jako místo, kam něco napíšeš, a začneš ji brát jako někoho, komu zadáváš práci.",
      "Tohle je základ symbiózy s AI: ty říkáš směr – co se má udělat, pro koho, v jakém kontextu – a AI pomáhá s exekucí. Výsledek závisí přímo na tom, jak jasné je zadání.",
      "Klíčový princip: kvalita zadání = kvalita výstupu. Tato rovnice platí absolutně. Vágní otázka = vágní výstup. Konkrétní zadání s kontextem = použitelný výsledek.",
      "Dobré zadání má čtyři části, které AI opravdu potřebuje znát:",
      ["Kým má být – jakou roli nebo expertízu má v tomto zadání zaujmout (zkušený obchodník, kouč, analytik...)", "Co přesně má udělat – napsat, shrnout, analyzovat, navrhnout, přepsat...", "Co potřebuje vědět – kontext o situaci, produktu, cílové skupině, tónu a omezení", "Jak má vypadat výsledek – délka, formát, tón, struktura"],
      "Ukázka rozdílu v praxi. Vágní prompt: Napiš mi email. Konkrétní zadání: Jsi zkušený obchodní komunikátor. Napiš follow-up email klientovi, který viděl nabídku na software pro HR, ale neodpověděl. Cílem je dostat schůzku. Tón je přátelský a konkrétní, maximálně 5 vět.",
      "Tohle je změna, která nejvíc mění kvalitu výstupů. A je to změna, kterou lze udělat hned – bez učení se nových nástrojů.",
      "Vezmi jeden prompt z dnešní práce a doplň mu všechny čtyři části. Uvidíš rozdíl v kvalitě výstupu okamžitě.",
    ],
    taskIntro: "Vezmi si jeden konkrétní prompt, který jsi napsal dříve nebo plánuješ napsat dnes, a přepracuj ho tak, aby obsahoval všechny čtyři části dobrého zadání:",
    taskItems: [
      "Kým má AI být – napiš roli (příklad: Jsi zkušený projektový manažer s praxí v IT projektech)",
      "Co přesně má udělat – konkrétní úkol (příklad: Napiš stručný souhrn stavu projektu pro klienta)",
      "Co potřebuje vědět – kontext (příklad: Projekt je v prodlení 2 týdny, klient zatím neví proč)",
      "Jak má vypadat výsledek – formát a rozsah (příklad: Max 5 vět, profesionální tón, bez technického žargonu)",
    ],
    taskType: "ul",
    taskFallback: `Jsi zkušený projektový manažer.
Napiš shrnutí stavu projektu pro klienta.
Projekt má 2týdenní skluz kvůli nemoci klíčového člena týmu, klient o tom zatím neví.
Max 5 vět, uklidňující a přímý tón.`,
    taskExample: `Vágní prompt: "Napiš email klientovi."
→ výsledek: obecná zpráva, 10 vět, formální, bez kontextu.

Prompt se 4 částmi: "Jsi obchodní komunikátor. Napiš follow-up klientovi, který viděl nabídku ale neodpověděl. Cíl: dostat schůzku. Tón: přátelský, max 5 vět."
→ výsledek: konkrétní email, 4 věty, hned použitelný.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Prompt Generator přístup: místo okamžité tvorby se nejdřív zeptat na klíčové detaily – a pak teprve vytvořit.",
  },
  {
    day: 4,
    title: "Nejdřív se zeptej. Pak vytvoř.",
    subject: "Tvůj prompt je příliš vágní. Tady je jak ho opravit.",
    preheader: "Prompt Generator přístup: AI si nejdřív doplní kontext, pak teprve tvoří.",
    concept: [
      "Spousta lidí má pocit, že umět AI znamená znát nějaké tajné formulky nebo složité triky. Ve skutečnosti velmi často stačí jedna jednodušší věc: nejdřív dát AI prostor doplnit si kontext – a pak teprve tvořit.",
      "Tohle se jmenuje Prompt Generator přístup. Místo toho, abys hned zadával finální prompt, řekneš AI: nejdřív se mě zeptej na klíčové detaily, které potřebuješ vědět, a pak vytvoř výsledek.",
      "Proč to funguje? Protože AI nemá intuici ani zkušenost s tebou a tvou situací. Ptaní se nahrazuje to, co by zkušený kolega zjistil přes neformální rozhovor.",
      "Dobrý prompt má zpravidla pět složek:",
      [
        "Role – kým má AI být (expert, kouč, copywriter, analytik...)",
        "Cíl – co má přesně udělat (napsat, analyzovat, přepsat, navrhnout, shrnout)",
        "Kontext – co potřebuje vědět o projektu, situaci, cílové skupině nebo požadavcích",
        "Omezení – co nemá dělat, jak má psát, jaký je maximální rozsah",
        "Formát výstupu – odstavce, číslovaný seznam, tabulka, nadpisy, krátký text",
      ],
      "A je tu ještě jeden přístup, který funguje skvěle – přidej na konec promptu větu: Než začneš, polož mi 3 doplňující otázky, které zlepší výstup. AI se sama zeptá na to, co jí chybí. A tím, že odpovíš, dáš jí lepší kontext. Výsledek bude znatelně lepší.",
      "Ukázkový plný prompt vypadá takto: Jsi zkušený marketingový stratég. Napíšeš 3 varianty subject line pro email, který oznamuje novou funkci v aplikaci pro produktivitu. Cílová skupina jsou projektoví manažeři ve firmách s 50+ lidmi. Tón je přátelský a přímý, žádné korporátní fráze. Každá varianta max 8 slov. Než začneš, polož mi 3 doplňující otázky.",
      "Nejdůležitější věc je začít. Vezmi si jeden starý prompt – takový, kde výstup nebyl ideální – a aplikuj pět složek plus větu o doplňujících otázkách. Uvidíš rozdíl okamžitě.",
    ],
    taskIntro: "Vezmi si jeden prompt, kde výstup nebyl ideální, a přepiš ho s pěti složkami. Pak ho doplň větou: Než začneš, polož mi 3 doplňující otázky, které zlepší výstup.",
    taskItems: [
      "Role – kým má AI být",
      "Cíl – co přesně má udělat",
      "Kontext – co potřebuje vědět",
      "Omezení – co nemá dělat nebo jak omezit rozsah",
      "Formát výstupu – jak má výsledek vypadat",
    ],
    taskType: "ul",
    taskPrompt: `Než začneš, polož mi 3 doplňující otázky, které zlepší výstup.`,
    taskFallback: `Jsi zkušený marketingový stratég.
Napíšeš 3 varianty subject line pro emailovou kampaň o nové funkci v produktivitní aplikaci.
Cílová skupina: projektoví manažeři ve firmách s 50+ lidmi.
Tón přátelský a přímý, žádné korporátní fráze. Max 8 slov každý.
Než začneš, polož mi 3 doplňující otázky.`,
    taskExample: `AI se zeptala:
1) Jaký je hlavní benefit nové funkce?
2) Je kampaň součástí série nebo standalone?
3) Má subject line obsahovat čísla nebo urgenci?

Po odpovědích vznikly 3 konkrétní subject liny s různým přístupem – místo jednoho generického výsledku.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Nejdůležitější otázka není: jak to udělám rychleji? Ale: musí tohle být uděláno ručně?",
  },
  {
    day: 5,
    title: "Neřeš rychlost. Řeš leverage.",
    subject: "Zapomeň na rychlost. Řeš tohle místo toho.",
    preheader: "Leverage matice: co musíš dělat ty, co je lepší s AI, co může dělat hlavně AI.",
    concept: [
      "Nejdůležitější otázka není: Jak to udělám rychleji? Ale: Musí tohle být uděláno ručně?",
      "Leverage znamená přemýšlet o tom, co má zůstat na tobě, kde má pomáhat AI a co by vůbec nemělo projít ručně od začátku do konce.",
      "Existuje jednoduchá Leverage matice, která pomůže třídit práci do tří skupin:",
      [
        "Jen ty – práce, která vyžaduje tvoje zkušenosti, vztahy, hodnoty, kreativitu nebo rozhodovací pravomoc",
        "Ty + AI – spolupráce, kde říkáš směr, kontext a priority, a AI pomáhá s exekucí",
        "Hlavně AI – opakující se nebo předvídatelné úkoly, které AI zvládne s minimálním dohledem",
      ],
      "Příklady pro každou kategorii: Do kategorie Jen ty patří vedení lidí, strategická rozhodnutí, osobní vztahy s klienty nebo etické úsudky. Do kategorie Ty + AI patří psaní zpráv, příprava prezentací, analýza dat nebo research. Do kategorie Hlavně AI patří formátování, sumarizace, přepisy, opakující se emaily nebo generování variant.",
      "Klíčová otázka, která změní způsob, jak se díváš na práci: Musím tohle dělat já, nebo musím jen dohlédnout na to, aby to bylo hotové?",
      "Tohle není o lenosti. Je to o tom být chytřejší v tom, kam se investuje pozornost. Nejcennější věc, kterou máš, je soustředěný čas – a ten stojí za to šetřit pro práci, kde opravdu záleží na tom, kdo to dělá.",
      "Když se díváš na svůj den touhle optikou, vidíš ho jinak. Vidíš, kde je opravdová přidaná hodnota – a kde se jen spotřebuje energie na věci, které by mohl někdo nebo něco udělat jinak.",
    ],
    taskIntro: "Vezmi si dnešní nebo zítřejší seznam úkolů a rozděl každý úkol do jedné ze tří skupin podle Leverage matice:",
    taskItems: [
      "Jen já – tady musím být osobně, nedá se delegovat ani AI (napiš alespoň 2 příklady)",
      "Já + AI – zadám směr a kontext, AI pomůže s exekucí (napiš alespoň 2 příklady)",
      "Hlavně AI – předvídatelné, AI to zvládne s minimálním dohledem (napiš alespoň 2 příklady)",
    ],
    taskType: "ol",
    taskFallback: `Jen já: Strategická rozhodnutí o produktu, osobní rozhovory s klíčovými zákazníky
Já + AI: Příprava nabídek a prezentací, psaní reportů, analýza zpětné vazby
Hlavně AI: Formátování dokumentů, přepisy meetingů, follow-up emaily se standardní strukturou`,
    taskExample: `Výsledek Leverage matice v praxi:
"Každý týden trávím 2h formátováním dokumentů → Hlavně AI → ušetřím 2h/týden."
Jedna konkrétní věc přesunutá do AI = první velký leverage celé challenge.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Proč dokonalost zabíjí automatizaci – a jak první verze mění všechno.",
  },
  {
    day: 6,
    title: "V1 je vždy lepší než žádná verze.",
    subject: "Dokonalost tě brzdí. Dnes to změníme.",
    preheader: "Nepotřebuješ dokonalý systém. Potřebuješ první použitelnou verzi.",
    concept: [
      "Čekání na dokonalý moment je jedna z nejčastějších příčin, proč automatizace v praxi nikdy nezačne.",
      "Vždy je něco málo nedodělané. Vždy by to šlo udělat lépe. Vždy chybí jeden krok, jedna šablona, jeden nástroj. A tak se nic nezačne.",
      "Klíčový princip, který tohle mění: V1 > 0. První verze je vždy lepší než žádná verze. Tato rovnice je základ iterace s AI.",
      "Jak iterovat s AI: není potřeba začínat od dokonalého zadání. Stačí začít takto:",
      [
        "Napiš draft – řekni AI záměr a nech ji napsat první verzi, i kdyby nebyla dokonalá",
        "Nech AI zlepšit – dej jí konkrétní feedback: co je dlouhé, co chybí, co změnit v tónu",
        "Uprav – přidej svůj pohled, zkušenost nebo kontext, který AI nemá",
        "Finalizuj – krátká kontrola, malé úpravy, hotovo",
      ],
      "Konkrétní workflow pro vytvoření šablony pro opakující se dokument: Krok 1 – dej AI jeden příklad dokumentu, který jsi napsal ručně. Krok 2 – požádej ji, aby z něj vytáhla strukturu a proměnné části. Krok 3 – nech ji vytvořit šablonu s prázdnými místy pro doplnění. Krok 4 – otestuj šablonu na dalším dokumentu.",
      "Tohle celé zabere méně než 15 minut. A výsledkem je šablona, která existuje – ne dokonalá šablona, která ještě nevznikla.",
      "Možná to bude jen jednoduchá šablona, jeden uložený prompt, krátká osnova, základní postup nebo pracovní verze něčeho, co časem upravíš.",
      "Cílem není mít dnes všechno perfektní. Cílem je, aby zítra něco nemuselo vznikat znovu od nuly. Začni málo. Uprav časem. Tak to funguje.",
    ],
    taskIntro: "Vyber si jednu opakující se věc – dokument, email nebo proces – a projdi dnešní 4krokový iterační workflow:",
    taskItems: [
      "Napiš AI záměr a nech ji napsat první verzi (neupravuj zatím nic)",
      "Dej AI konkrétní feedback: co zlepšit, co zkrátit, co změnit",
      "Přidej svůj kontext nebo pohled, který AI nemůže vědět",
      "Ulož výsledek jako šablonu nebo reusable základ pro příště",
    ],
    taskType: "ol",
    taskFallback: `Záměr: Potřebuji šablonu pro měsíční report pro vedení. Zatím nemám nic, jen přibližnou představu.
(Nech AI napsat první verzi – nic neopravuj, jen přidej feedback v kroku 2.)`,
    taskExample: `Krok 1: AI napsala draft reportu – přibližně to, co potřebuji, ale trochu moc formální.
Krok 2 feedback: "Zkrať o třetinu, méně titulků, přidej sekci Rizika na konec."
Krok 3: AI přepsala – čistší, 1 strana, struktura sedí.
Krok 4: Uloženo jako šablona v Notion. Příští report: 10 minut místo 45.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Dnes si postavíš svůj první mini workflow – jednoduchý systém, kde kroky navazují.",
  },
  {
    day: 7,
    title: "Tvůj první mini AI workflow.",
    subject: "Dnes si postavíš svůj první mini AI systém.",
    preheader: "3 kroky, jeden výstup, nulový chaos. Takhle to funguje.",
    concept: [
      "AI je nejsilnější ve chvíli, kdy se stane součástí malého workflow – ne jen nástrojem pro jednorázové použití.",
      "Mini AI workflow není složitý. Je to řetězec 2–3 kroků, kde každý krok navazuje na předchozí a AI pomáhá s alespoň jedním z nich.",
      "Tři příklady funkčních mini AI workflow:",
      [
        "Poznámky z hovoru => AI shrnutí => follow-up email: Napiš hrubé poznámky, nech AI vytvořit strukturované shrnutí s action items, z toho vygeneruj follow-up email pro klienta",
        "Nápad => osnova => draft: Napiš 2-3 větný záměr, nech AI vytvořit osnovu s hlavními body, z osnovy nech AI napsat první draft textu",
        "Briefing => zadání => followup: Vlož briefing nebo zadání od klienta, nech AI vytáhnout klíčové požadavky a otázky, z toho vytvoř strukturované zadání pro tým",
      ],
      "Každý z těchto řetězců nahrazuje 20–40 minut ruční práce. A jakmile ho jednou nastavíš, funguje pořád.",
      "Klíč je v tom, že nepřemýšlíš o jednotlivých krocích zvlášť. Přemýšlíš o celém toku: co je vstup, co s tím udělá AI, co je výstup. To je jiný způsob přemýšlení o práci – základ symbiózy s AI, kde ty říkáš směr a AI pomáhá s exekucí.",
      "Začít nemusíš složitě. I trojkrokový řetězec, který ušetří pět minut denně, má za měsíc velkou hodnotu – to jsou přes 2 hodiny zpět každý měsíc.",
      "Vyber si jeden takový řetězec, který ti dává smysl pro tvoji práci, a napiš si ho. Vstup, co udělá AI, výstup. Tři kroky. Jednou vyzkoušej.",
    ],
    taskIntro: "Vyber si jednu činnost, která má 2–3 navazující kroky, a popiš si svůj první mini AI workflow:",
    taskItems: [
      "Co je vstup – co dostaneš nebo co vznikne jako startovní materiál",
      "Co s tím udělá AI – co jí zadáš a co má připravit",
      "Co je finální výstup – co pošleš, uložíš nebo předáš dál",
    ],
    taskType: "ol",
    taskFallback: `Vstup: Hrubé bullet-point poznámky z meetingu
AI: Shrne do strukturovaného zápisu s action items a odpovědnými osobami
Výstup: Follow-up email připravený k odeslání zákazníkovi`,
    taskExample: `Vyzkoušený workflow v praxi:
Vstup: "schůzka s klientem – líbí se nabídka, zaskočila cena, potřebuje schválení vedení, deadline pátek"
AI: Strukturovaný zápis + follow-up email s konkrétním návrhem dalšího kroku
Výsledek: Za 3 minuty hotový email pro klienta místo 20 minut ručně.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Existuje pět úrovní AI nástrojů – a většina lidí zůstává jen u první. Ukážeme si, co je za ní.",
  },
  {
    day: 8,
    title: "5 úrovní AI nástrojů – kde jsi ty?",
    subject: "Chatboty jsou jen začátek. Tady je co je dál.",
    preheader: "Od chatbotů k agentům: 5 úrovní AI nástrojů a kde začít.",
    concept: [
      "Většina lidí zná AI jako chatbot. Ale chatbot je jen první ze pěti úrovní, na které se AI nástroje pohybují.",
      "Každá úroveň dává jiný typ hodnoty – a každá vyžaduje jiný přístup, jiné zadání a jinou míru dohledu.",
      "5 úrovní AI nástrojů:",
      [
        "Chatboty – konverzační AI, kde píšeš prompt a dostaneš odpověď. Příklady: ChatGPT, Claude, Gemini. Hodnota: rychlé odpovědi, brainstorming, první drafty.",
        "Asistenti – AI nastavená pro konkrétní roli, tón nebo znalostní bázi. Má instrukce, styl a kontext. Hodnota: konzistentnější výstupy, méně opakování kontextu.",
        "Skripty – automatizované posloupnosti kroků bez kódu. Šablony v AI, pevné workflow. Hodnota: opakovatelnost bez manuálního zadávání.",
        "Automatizace – propojení nástrojů, kde AI je součástí toku (například Zapier, Make). Vstup spustí akci, AI zpracuje, výstup jde dál. Hodnota: práce probíhá bez aktivní účasti.",
        "Agenti – AI, která samostatně plánuje kroky, volá nástroje a dokončuje komplexní úkoly. Hodnota: nejvyšší leverage, ale vyžaduje nastavení a kontrolu.",
      ],
      "Kde začít? Většina přidané hodnoty se skrývá na úrovních 1–3. Agenti jsou mocní, ale komplexní – a jejich čas přijde, až jsou základy pevné.",
      "Nejdůležitější otázka dne: Na které úrovni teď pracuješ nejčastěji? A jaká by byl přirozený další krok?",
      "Nemusíš hned skákat na úroveň 5. Ale je dobré vědět, co existuje – a rozumět tomu, k čemu každá úroveň slouží.",
    ],
    taskIntro: "Projdi si 5 úrovní AI nástrojů a pro každou napiš příklad z vlastní práce nebo nápadu, kde by ta úroveň dávala smysl:",
    taskItems: [
      "Chatbot – kde ho teď používáš nebo kde by pomohl",
      "Asistent – pro jakou roli nebo situaci by dávalo smysl mít vlastního asistenta",
      "Skripty / šablony – co by šlo zautomatizovat jako opakující se sekvenci",
      "Automatizace – kde se informace opakovaně přepisují nebo přeposílají ručně",
      "Agenti – kde by dávalo smysl nechat AI komplexní úkol vyřešit samostatně (i jen jako nápad)",
    ],
    taskType: "ul",
    taskFallback: `Chatbot: ChatGPT pro drafty emailů a shrnutí
Asistent: vlastní GPT nastavený pro zákaznickou komunikaci v mém stylu
Skript: šablona pro každotýdenní status report
Automatizace: Notion + Make pro automatické zápisy z meetingů (zatím nápad)
Agent: AI, která sama navrhne priority týdne (zatím nápad)`,
    taskExample: `Po tomto cvičení budeš mít přehled jako:
"Teď jsem hlavně na úrovni 1–2. Přirozený další krok: nastavit si vlastního asistenta pro psaní (úroveň 2) – to by mi ušetřilo ~20 minut denně."
Toto konkrétní rozhodnutí je cennější než seznam nástrojů.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "AI mluví tvojí řečí – pokud ji to naučíš. Zítra si nastavíš svůj vlastní Tone of voice.",
  },
  {
    day: 9,
    title: "AI mluví tvojí řečí – pokud ji to naučíš.",
    subject: "Nastavit AI svůj styl. Tady je jak.",
    preheader: "Tone of voice: jak AI přestat psát genericky a začít psát jako ty.",
    concept: [
      "Výstupy z AI mají jednu společnou slabinu: zpočátku znějí genericky. Přesně, ale bez osobitosti. Správně, ale bez tónu.",
      "Řešením je nastavit AI svůj Tone of voice – svůj styl komunikace, který pak AI reflektuje ve výstupech.",
      "Tone of voice není jen formálnost nebo neformálnost. Je to kombinace několika věcí:",
      ["Jak mluvíš s lidmi – přátelsky, přímě, odborně, konverzačně", "Co nesmí být ve výstupech – korporátní fráze, klišé, prázdná adjektiva", "Jaká slova nebo obraty jsou typicky tvoje", "Jakou délku a strukturu preferuješ"],
      "Jak AI naučit svůj styl: nejjednodušší způsob je dát jí vzorový text, který jsi napsal sám. Může to být email, LinkedIn post, zpráva kolegovi nebo kus dokumentu. A pak říct: Analyzuj můj styl psaní a popiš mi ho. Co je pro můj styl typické? Pak při dalším zadání řekneš: Piš ve stylu, který jsi analyzoval.",
      "Prompt pro nastavení Tone of voice: Tady je vzor textu, který jsem napsal: [vlož text]. Analyzuj můj styl: 1) Jak píšu – tón, rytmus, délka vět. 2) Co je pro můj styl typické. 3) Co v mém stylu není – fráze nebo výrazy, které nepoužívám. Ulož si tento styl a použij ho při dalších zadáních.",
      "Jakmile AI zná tvůj styl, výstupy přestanou znít genericky. Budou bližší tomu, co bys napsal sám – jen rychleji.",
      "Toto nastavení se vyplatí udělat jednou pořádně. A pak ho přidávat jako součást promptů tam, kde záleží na tónu – emaily, LinkedIn, texty pro zákazníky.",
    ],
    taskIntro: "Napiš si svůj první Tone of voice prompt. Postup:",
    taskItems: [
      "Vezmi jeden text, který jsi napsal a který ti přijde typický pro tvůj styl",
      "Vlož ho do AI s promptem pro analýzu stylu z dnešního dne",
      "Nech AI popsat tvůj styl – co je typické, co tam není, jaký je tón",
      "Ulož si výsledný popis jako základ pro budoucí prompty",
    ],
    taskType: "ol",
    taskPrompt: `Tady je vzor textu, který jsem napsal/a: [vlož text]

Analyzuj můj styl psaní:
1) Jak píšu – tón, rytmus, délka vět
2) Co je pro můj styl typické
3) Co v mém stylu není – fráze nebo výrazy, které nepoužívám

Ulož si tento styl a použij ho při dalších zadáních.`,
    taskFallback: `Text pro analýzu stylu (vlož místo něj vlastní):
"Ahoj Martine, dávám vědět – dotáhli jsme to. Malý tým, žádný chaos. Jde to. Dej vědět, jestli potřebuješ cokoli ode mě."`,
    taskExample: `AI popis stylu po analýze:
"Tvůj styl je neformální ale věcný. Krátké věty, bez zbytečných slov. Typické: přímý přechod k věci bez úvodu. Vyhýbáš se formálním pozdravům a frázím jako 'Dovolte mi uvést'. Preferuješ akci nad vysvětlováním."
Tento popis pak přidáváš do promptů: "Piš v mém stylu."`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Druhý mozek – proč mít systém pro ukládání znalostí a k čemu to celé je.",
  },
  {
    day: 10,
    title: "Druhý mozek: proč mít systém pro znalosti.",
    subject: "Proč ti AI pomůže víc, když máš druhý mozek.",
    preheader: "Druhý mozek není appka. Je to systém – a AI ho umí výrazně posílit.",
    concept: [
      "Informace se dnes valí ze všech stran. Články, poznámky, emaily, nápady, zpětná vazba, zdroje. A většina z toho zmizí dřív, než ji stihneme zpracovat.",
      "Druhý mozek je systém pro ukládání znalostí – externí systém, kde se zachycují myšlenky, materiály a poznatky tak, aby byly použitelné i za týden, měsíc nebo rok.",
      "Proč to funguje s AI? Protože AI je nejsilnější, když má co zpracovat. Čím víc uložených podkladů, kontextu a materiálů, tím přesnější a relevantnější výstupy AI produkuje.",
      "Druhý mozek plní tři funkce:",
      ["Zachycuje – neztrácí se myšlenky, zdroje, zpětná vazba, rozhodnutí", "Zpracovává – surový materiál se mění v použitelné znalosti", "Propojuje – starší poznatky se propojují s novým kontextem a prací"],
      "Bez systému se informace hromadí a nejsou k dispozici ve správný moment. S druhým mozkem se stávají aktivem – něčím, co lze kdykoli vytáhnout, doplnit nebo předat AI.",
      "Druhý mozek nemusí být složitý. Stačí jedno místo, kde se pravidelně ukládá to, co stojí za uchování – i kdyby to byl jen jeden dokument nebo složka.",
      "V příštích třech dnech si projdeme konkrétní 3C framework – Capture, Clean, Connect – který dává druhému mozku strukturu a funguje skvěle i ve spolupráci s AI.",
    ],
    taskIntro: "Zamysli se nad tím, kde teď informace a znalosti ukládáš. Napiš si odpovědi na tyto otázky:",
    taskItems: [
      "Kde teď zachycuješ nápady, poznámky a zdroje (nic, hlava, appka, notebook...)",
      "Co se ti nejčastěji ztrácí – jaký typ informací nebo kontextu bys potřeboval mít po ruce",
      "Jaké jedno místo by dávalo smysl jako základ tvého druhého mozku",
    ],
    taskType: "ul",
    taskPrompt: `Mám chaos v hlavě ohledně tohoto tématu nebo situace:
[napiš, co tě trápí nebo v čem nemáš jasno]

Pomoz mi prosím:
1. Rozdělit to do přehledných bloků
2. Pojmenovat hlavní problém nebo klíčovou otázku
3. Navrhnout 2-3 možné způsoby, jak to řešit
4. Určit nejlepší první krok, který dává smysl udělat teď`,
    taskFallback: `Kde ukládám: hlava + nesystematické poznámky v telefonu
Co se ztrácí: kontext z minulých rozhodnutí, zpětná vazba zákazníků, nápady na zlepšení
Jedno místo jako základ: Notion – jeden dokument nazvaný "Inbox"`,
    taskExample: `Vstup do AI (chaos prompt):
"Chaos ohledně rebrandingu – nevím jestli změnit název, zákazníci se ptají na nový styl..."
AI výstup:
1) Fakta: zákazníci reagují pozitivně na vizuální změny
2) Klíčová otázka: Chceme rebrandovat název nebo jen vizuál?
3) Možné kroky: průzkum u 5 zákazníků → rozhodnutí do 2 týdnů`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Capture: první krok ke druhému mozku – jak zachytit informace, aby se neztratily.",
  },
  {
    day: 11,
    title: "3C framework: Capture – zachyť, co stojí za uchování.",
    subject: "Jak zachytit informace, aby se neztratily.",
    preheader: "Capture je první krok 3C frameworku. Tohle je základ druhého mozku.",
    concept: [
      "Capture je první krok 3C frameworku – Capture, Clean, Connect. Jde o to zachytit informace ve chvíli, kdy přijdou, bez zbytečného třídění nebo editace.",
      "Největší chyba při budování druhého mozku je čekat na správný moment. Správný moment nikdy nepřijde. Funguje jen jedno: zachytit hned.",
      "Co stojí za zachycení? Čtyři základní typy:",
      ["Nápady – co tě napadlo, co by šlo zlepšit, co chceš vyzkoušet", "Zdroje – článek, video, podcast, citát, který chceš využít nebo se k němu vrátit", "Rozhodnutí a kontext – co bylo rozhodnuto, proč a za jakých podmínek", "Zpětná vazba – co říkají zákazníci, kolegové, co se osvědčilo nebo neosvědčilo"],
      "Jak na zachycení: nejjednodušší systém je jeden inbox – jedno místo, kam jde všechno bez třídění. Může to být appka, dokument nebo poznámkový blok. Důležité není kde, ale že se to zachytí.",
      "AI pomáhá v Capture fázi tím, že dokáže zpracovat i hrubý nestrukturovaný vstup. Stačí napsat: Tady jsou moje hrubé poznámky: [vlož]. Vytáhni z toho klíčové myšlenky a seřazení.",
      "Dobré zachycení ušetří spoustu práce při zpracování. Informace, která je v systému i v surovém stavu, je vždy lepší než dokonalá informace, která zmizela.",
      "Dnes se nezaměřuj na to, jak informace třídit. Zaměřuj se jen na to, zda se zachytí. Clean a Connect přijdou v příštích dvou dnech.",
    ],
    taskIntro: "Nastav si svůj Capture systém. Projdi tři kroky:",
    taskItems: [
      "Vyber jedno místo pro inbox – kde budeš zachytávat vše bez třídění (appka, dokument, folder)",
      "Zachyť dnes aspoň 3 věci – nápady, zdroje nebo poznámky, které by jinak zmizely",
      "Zkus jednu sadu hrubých poznámek hodit do AI a nechat ji vytáhnout klíčové myšlenky",
    ],
    taskType: "ol",
    taskPrompt: `Tady jsou moje hrubé poznámky: [vlož]

Vytáhni z toho prosím:
1. Klíčové myšlenky (max 5 bodů)
2. Co z toho plyne nebo co bych měl/a udělat
3. Co si chci zapamatovat
4. Otázky, které z toho vyvstávají`,
    taskFallback: `Inbox: složka v Notion nazvaná "Inbox – nezpracované"
Dnešní 3 zachycení:
1. Nápad: nový onboarding email pro zákazníky po prvním měsíci
2. Zdroj: článek o AI agentech – chci se k němu vrátit
3. Zpětná vazba zákazníka: "Přeji si víc konkrétních příkladů"`,
    taskExample: `Hrubé poznámky → AI výstup:
Vstup: "meeting s klientem – líbí se nabídka, zaskočila cena, potřebuje schválení vedení, deadline pátek"
AI výstup:
- Klíčové: nabídka schválena konceptuálně, bloker = cena
- Co plyne: připravit cenové srovnání do úterý
- Otázka: Kdo rozhoduje o ceně na straně klienta?`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Zachyceno nestačí. Jak přetavit hrubý materiál v použitelné znalosti – to je Clean.",
  },
  {
    day: 12,
    title: "3C framework: Clean – zpracuj, co jsi zachytil.",
    subject: "Zachyceno nestačí. Jak z hrubého materiálu udělat znalost.",
    preheader: "Clean je druhý krok 3C frameworku. Tady z informací vznikají znalosti.",
    concept: [
      "Capture bez Clean je jen hromada poznámek. Clean je krok, který z hrubého materiálu dělá použitelné znalosti.",
      "Clean neznamená perfektní nebo dokonalé zpracování. Znamená dostatečné – takové, aby informace byla použitelná ve správný moment.",
      "Tři úrovně Clean zpracování:",
      ["Minimální – přečti, označ co je důležité, přidej krátký komentář co z toho plyne", "Střední – shrň hlavní myšlenky, odstraň zbytečné, dej tomu strukturu", "Hlubší – propoj s jiným materiálem, vyvoď závěry, napiš vlastní pohled"],
      "AI je v Clean fázi nejsilnější. Z hrubého materiálu dokáže rychle vytvořit strukturovaný výstup – shrnutí, klíčové body, akční kroky nebo otázky k dalšímu zamyšlení.",
      "Fungující prompt pro Clean: Tady jsou moje hrubé poznámky nebo materiál: [vlož]. Zpracuj to takto: 1) Hlavní myšlenky v max 5 bodech. 2) Co z toho plyne nebo co bych měl/a udělat. 3) Co si chci zapamatovat. 4) Otázky, které z toho vyvstávají.",
      "Kdy na Clean? Nestačí dělat Capture a doufat, že se zpracování udělá samo. Clean funguje nejlépe jako malá rutina – krátký blok jednou za den nebo týden, kdy se prochází inbox a zpracovává se to, co tam leží.",
      "Nezpracovaný inbox je jen digitální chaos. Zpracovaný druhý mozek je aktivum, které roste s časem.",
    ],
    taskIntro: "Vezmi si materiál, který jsi zachytil v posledních dnech, a projdi ho přes Clean proces:",
    taskItems: [
      "Vyber 2–3 položky z inboxu nebo zachycených poznámek",
      "Pro každou použij AI prompt pro zpracování – nech ji vytáhnout hlavní myšlenky a co z toho plyne",
      "Ulož výsledek na místo, kde ho najdeš znovu (dokument, složka, appka)",
    ],
    taskType: "ol",
    taskPrompt: `Zde jsou moje poznámky z meetingu nebo hovoru:
[vlož text]

Vytvoř z toho prosím:
1. Stručné shrnutí (3-5 vět)
2. Hlavní rozhodnutí, která padla
3. Konkrétní další kroky: kdo, co, do kdy
4. Krátký follow-up text, který mohu odeslat účastníkům`,
    taskFallback: `Materiál pro Clean (vlož místo něj vlastní poznámky):
"Meeting o Q2 plánu: Petr říkal, že máme málo zdrojů. Jana navrhla odložit jeden projekt. Tomáš souhlasil. Deadline zůstal stejný."`,
    taskExample: `Vstup: 4 řádky hrubých poznámek z meetingu
AI výstup:
Shrnutí: Q2 plán je ohrožen nedostatkem zdrojů.
Rozhodnutí: Odložit projekt X na Q3.
Kroky: Jana připraví revidovaný plán do pátku.
Follow-up email: připraveno k odeslání týmu.
Výsledek: 5 minut práce místo 30 minut psaní ručně.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Connect: jak propojit znalosti tak, aby AI mohla s tímto kontextem opravdu pracovat.",
  },
  {
    day: 13,
    title: "3C framework: Connect – propoj znalosti s prací.",
    subject: "Druhý mozek je hotový, až když znalosti propojíš s prací.",
    preheader: "Connect je třetí krok 3C frameworku. Tady se druhý mozek stává aktivem.",
    concept: [
      "Capture zachycuje. Clean zpracovává. Connect propojuje – a tím se druhý mozek stává skutečným aktivem.",
      "Connect znamená propojit znalosti s aktuální prací, projekty a rozhodnutími. Informace, která leží uložená bez propojení, nemá přidanou hodnotu. Informace, která se ve správný moment propojí s tím, co právě řešíš – to je jiná kategorie.",
      "Jak Connect funguje v praxi:",
      ["Při zahájení projektu si projdeš, co máš uloženo k podobným tématům", "Při psaní textu dáš AI kontext z dříve zachycených zdrojů nebo rozhodnutí", "Při rozhodování vytáhneš poznámky z minulých situací nebo zpětnou vazbu", "Při přípravě pro zákazníka použiješ shrnutí z minulých hovorů nebo materiálů"],
      "Connect s AI vypadá takto: dáš AI svůj zpracovaný materiál z druhého mozku jako kontext – a pak se ptáš nebo zadáváš práci. AI pak pracuje s tvým kontextem, ne s obecnými znalostmi.",
      "Prompt pro Connect: Tady je kontext z mého druhého mozku k tomuto tématu: [vlož zpracovaný materiál]. Použij tento kontext při: [konkrétní zadání].",
      "Tímto způsobem se druhý mozek stává produktivním partnerem pro AI spolupráci. Nejen že neztrácíš informace – ale aktivně je zapojuješ do výstupů.",
      "3C framework – Capture, Clean, Connect – je systém, ne jednorázová akce. Funguje nejlépe, když se stane rutinou: Capture průběžně, Clean jednou za čas, Connect při každé relevantní příležitosti.",
    ],
    taskIntro: "Zkus dnešní Connect krok v praxi:",
    taskItems: [
      "Vyber jeden aktuální projekt nebo úkol, na kterém pracuješ",
      "Projdi si, co máš ve druhém mozku k podobnému tématu – poznámky, shrnutí, zdroje",
      "Vlož relevantní materiál do AI jako kontext a zadej konkrétní úkol s tímto kontextem",
      "Porovnej výsledek s tím, co by AI produkovala bez tohoto kontextu",
    ],
    taskType: "ol",
    taskPrompt: `Tady je kontext z mého druhého mozku k tomuto tématu:
[vlož zpracovaný materiál]

Na tomto základě prosím:
[vlož konkrétní zadání nebo otázku]`,
    taskFallback: `Kontext z druhého mozku:
"Klient ABC: 200 lidí, IT oddělení rozhoduje. Hlavní problém: integrace s legacy systémem. Minulá schůzka: zájem byl, projekt se nezahájil kvůli rozpočtu."
Zadání: Napiš email s návrhem na obnovení spolupráce.`,
    taskExample: `Bez kontextu: AI napsala obecný obchodní email – korektní, ale bez relevance pro klienta.
S kontextem z druhého mozku: Email zmiňuje legacy problém, navazuje na předchozí zájem, nabízí pilotní projekt jako první krok.
Rozdíl: personalizovaný email, který ukazuje reálné pochopení situace klienta.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Halfway checkpoint – co máš, co stavíš dál a jak na tom závisí druhá polovina challenge.",
  },
  {
    day: 14,
    title: "Halfway checkpoint: co máš a co stavíš dál.",
    subject: "Polovina za námi. Co si odnášíš a co přijde dál.",
    preheader: "Den 14 ze 28. Čas se zastavit, zhodnotit a nastavit kurz na druhou polovinu.",
    concept: [
      "Jsi v polovině. 14 dní za tebou, 14 dní před tebou. Čas se zastavit a podívat se, co vlastně máš.",
      "Prvních 14 dní bylo o základech: AI-first mindset, Leverage matice, OHIO princip, kvalita zadání, Prompt Generator přístup, V1 a iterace, první workflow, 5 úrovní AI nástrojů, Tone of voice a 3C framework pro druhý mozek.",
      "Tohle nejsou jen koncepty. Jsou to nástroje, které lze používat hned – a většina z nich se stane silnější, čím víc se propojí dohromady.",
      "Zastavení má tři účely:",
      ["Zhodnotit, co se opravdu zabudovalo do práce – co používáš, co jen znáš", "Pojmenovat, co má smysl dál rozvíjet – kde je největší potenciál pro zbytek challenge", "Připravit se na druhou polovinu – která bude o systémech, nástrojích a superschopnostech"],
      "Druhá polovina challenge přinese PACT framework pro digitální pracovní prostředí, WBS pro práci s projekty, Human-in-the-loop přístup a pět Superpowers, které AI spolupráce přináší.",
      "Tyto koncepty dávají největší smysl, když na ně nasazuješ to, co jsi postavil v první polovině: mindset, prompty, šablony, workflow a druhý mozek.",
      "Checkpoint není hodnocení. Je to příležitost vědomě vybrat, na co se soustředit dál – a co si z prvních 14 dní opravdu vzít s sebou.",
    ],
    taskIntro: "Projdi si krátký halfway checkpoint. Napiš si odpovědi na čtyři otázky:",
    taskItems: [
      "Co z prvních 14 dní reálně používáš nebo ti pomohlo – konkrétní příklady",
      "Co ti dalo největší posun v přemýšlení o práci a AI",
      "Co jsi zatím nezkoušel, ale chceš vyzkoušet – co odkládáš",
      "Na co se chceš zaměřit ve druhé polovině challenge",
    ],
    taskType: "ul",
    taskFallback: `Co reálně používám: 4× týdně píšu s AI – hlavně emaily a shrnutí
Největší posun v myšlení: přestal jsem se AI ptát, začal jsem jí zadávat konkrétní práci
Co odkládám: nastavit si vlastního asistenta
Na co se zaměřím dál: Capture systém a PACT prostředí`,
    taskExample: `Vzorový výsledek checkpointu:
"Za 14 dní: 3 šablony, 1 fungující workflow, Tone of voice nastavený.
Největší ušetřená práce: follow-up emaily a zápisy z meetingů – odhadem 2h za 2 týdny.
Dál rozvíjet: Druhý mozek (teprve začínám) a PACT prostředí."`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "PACT framework: jak přemýšlet o digitálním pracovním prostředí – začínáme s Projects.",
  },
  {
    day: 15,
    title: "PACT: Projects – AI v řízení projektů.",
    subject: "Jak zapojit AI do každodenní práce na projektech.",
    preheader: "PACT framework začíná u projektů. Tady je jak AI mění způsob jejich řízení.",
    concept: [
      "PACT framework popisuje digitální pracovní prostředí ve čtyřech vrstvách: Projects, Agents, Context a Tools. Začínáme s Projects.",
      "Projects v PACT nejsou jen seznam úkolů. Jsou to strukturované celky se záměrem, milníky, kontextem a výstupy. A právě tady AI přidává velkou hodnotu.",
      "Jak AI pomáhá v projektové práci:",
      ["Rozložení projektu na kroky – z velkého záměru udělá přehledné fáze a úkoly", "Příprava briefingů a zadání – z hrubých vstupů vytvoří jasné zadání pro tým", "Sledování pokroku – shrnutí stavu projektu z poznámek nebo aktualizací", "Identifikace rizik – co se může zaseknout, co chybí, co je nejkritičtější"],
      "Fungující prompt pro zahájení projektu: Pracuji na projektu [název]. Cíl je [co chceme dosáhnout]. Deadline je [datum]. Hlavní zainteresované osoby jsou [kdo]. Zdroje, které máme: [co máme k dispozici]. Rozlož projekt na logické fáze a klíčové úkoly. Identifikuj top 3 rizika.",
      "Projekt bez jasné struktury se zadrhává dřív, než začne. AI pomáhá strukturu vytvořit rychle – a pak ji udržovat aktuální.",
      "Nejsilnější použití AI v projektech není na jednom úkolu. Je na přehledu: co je stav, co je priorita, co se zaseklo a co je třeba rozhodnout. Tohle AI dokáže vytáhnout z hrubých poznámek za minuty.",
    ],
    taskIntro: "Vezmi si jeden projekt, na kterém teď pracuješ nebo ho plánuješ, a projdi ho přes AI:",
    taskItems: [
      "Napiš záměr projektu – co je cíl a co je úspěch",
      "Nech AI rozložit projekt na fáze a klíčové kroky",
      "Požádej AI o identifikaci top 3 rizik nebo nejasností",
      "Z výsledku sestav přehled stavu projektu v 5 větách",
    ],
    taskType: "ol",
    taskFallback: `Záměr projektu: Příprava nové onboardingové sekvence emailů pro zákazníky
Cíl úspěchu: Zákazník pracuje samostatně do 2 týdnů od startu
Deadline: za 6 týdnů | Kdo: já + kolegyně z marketingu
Zdroje: stávající emaily, zákaznická zpětná vazba, přístup k nástrojům`,
    taskExample: `AI výstup – strukturovaný plán projektu:
Fáze 1 – Analýza (týden 1–2): zmapovat current state, identifikovat bottlenecky
Fáze 2 – Tvorba (týden 3): napsat emaily s AI, 3 drafty ke schválení
Fáze 3 – Revize + nastavení (týden 4–5): zapracovat feedback, technické nastavení
Rizika: schválení obsahu vedením, kapacita grafika, integrace s emailovým nástrojem`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "PACT: Agents – AI agenti a asistenti v praxi. Co jsou, k čemu slouží a kde začít.",
  },
  {
    day: 16,
    title: "PACT: Agents – AI asistenti a agenti v praxi.",
    subject: "Co jsou AI agenti a asistenti – a k čemu je použít.",
    preheader: "Agents je druhá vrstva PACT frameworku. Tady AI dostává konkrétní roli.",
    concept: [
      "Agents v PACT frameworku jsou AI nástroje, které mají přiřazenou konkrétní roli, instrukce a kontext – a v této roli konzistentně fungují.",
      "Rozdíl mezi chatbotem a agentem: chatbot odpovídá na otázky. Agent má roli, styl, instrukce a kontext – a v této roli funguje konzistentně bez opakování základního nastavení.",
      "Dva typy agents, se kterými pracuješ nejčastěji:",
      ["Asistenti – AI s přiřazenou rolí a stylem, se kterou opakovaně spolupracuješ (příklady: AI pro psaní obsahu, AI pro shrnutí, AI pro analýzu dat)", "Agenti – AI, která samostatně plánuje kroky a volá různé nástroje k dokončení komplexního úkolu (stále se vyvíjí, ale přibývá jich)"],
      "Jak si nastavit vlastního asistenta: nejjednodušší způsob je vytvořit systémovou instrukci – krátký text, který AI říká, kým je, jak pracuje, co dělá a co nedělá. Tuto instrukci pak vkládáš do každého nového chatu nebo ji nastavíš v custom instructions.",
      "Ukázka systémové instrukce: Jsi můj osobní komunikační asistent. Píšeš v mém stylu – [vlož popis tónu]. Vždy se ptáš na kontext před psaním. Vyhýbej se [konkrétní frázi nebo přístupu]. Výstup je vždy v [formátu].",
      "Čím lépe je agent nastaven, tím méně opakuješ kontext v každém novém zadání. A tím rychleji dostáváš použitelné výstupy.",
      "V PACT frameworku jsou Agents klíčovým prvkem – jsou to spolupracovníci, ne jen nástroje. A jako spolupracovníci potřebují jasné instrukce, roli a způsob spolupráce.",
    ],
    taskIntro: "Vytvoř si prvního vlastního AI asistenta. Projdi tři kroky:",
    taskItems: [
      "Vyber roli – k čemu asistenta potřebuješ nejčastěji (psaní, analýza, shrnutí, komunikace)",
      "Napiš systémovou instrukci – kým je, jak pracuje, co dělá a co nedělá, jaký má tón",
      "Otestuj ho na jednom konkrétním zadání – porovnej výsledek s běžným chatbotem bez instrukce",
    ],
    taskType: "ol",
    taskFallback: `Role: Komunikační asistent pro psaní odpovědí zákazníkům
Styl: neformální ale věcný, bez korporátních frází, krátké věty, přímý přechod k věci
Dělám: odpovědi na dotazy, follow-upy, onboarding emaily
Nedělám: nerozhoduji za firmu, nevymýšlím ceny, neptám se bez základního kontextu`,
    taskExample: `Asistent bez instrukce: odpovídal formálně, emaily 8 vět, generický tón.
Asistent se systémovou instrukcí: neformální, 3–4 věty, konkrétní odpověď.
Výsledek: s instrukcí ušetřím ~80% přepracování každého emailu.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "PACT: Context – proč kontext mění kvalitu výstupů víc než jakýkoli nástroj.",
  },
  {
    day: 17,
    title: "PACT: Context – kontext mění všechno.",
    subject: "Proč kontext mění kvalitu AI výstupů víc než jakýkoli nástroj.",
    preheader: "Context je třetí vrstva PACT. Bez kontextu i nejlepší AI produkuje průměrné výstupy.",
    concept: [
      "Context je třetí vrstvou PACT frameworku – a je to možná ta nejpodceňovanější. Bez dobrého kontextu i nejlepší AI nástroj produkuje průměrné výstupy.",
      "Kontext není jen informace. Je to soubor toho, co AI potřebuje vědět, aby mohla pracovat přesně – pro tebe, pro tvou situaci, pro tvůj výstup.",
      "Čtyři typy kontextu, které nejvíc mění kvalitu výstupů:",
      ["Osobní kontext – kdo jsi, jak pracuješ, jaký je tvůj styl a co preferuješ", "Projektový kontext – co je záměr, kdo jsou zainteresované osoby, co bylo rozhodnuto, co je v pozadí", "Situační kontext – pro koho výstup je, v jaké situaci bude použit, co je cílem", "Negativní kontext – co nemá výstup obsahovat, jaké přístupy nebo formáty nefungují"],
      "Jak efektivně předávat kontext: nejsilnějším přístupem je mít připravené bloky kontextu pro opakující se situace – kratší texty, které přidáváš na začátek promptu. Není potřeba psát kontext znovu pokaždé.",
      "Prompt s blokem kontextu vypadá takto: [KONTEXT: Pracuji jako... na projektu... pro klienta... v situaci kdy...] [ZADÁNÍ: Nyní potřebuji...]",
      "V propojení s druhým mozkem (3C framework) je Context zvlášť silný: materiál zachycený a zpracovaný ve druhém mozku se stává blokem kontextu pro AI. Nemusíš pokaždé znovu vysvětlovat – vložíš prepared kontext a jdeš na věc.",
      "Lidé, kteří dostávají nejlepší výstupy z AI, nevyužívají lepší nástroje. Využívají lepší kontext.",
    ],
    taskIntro: "Vytvoř si první blok kontextu pro svou nejčastější situaci:",
    taskItems: [
      "Vyber jednu opakující se situaci, kde AI pravidelně používáš (psaní, analýza, shrnutí...)",
      "Napiš krátký blok kontextu – kdo jsi, co je záměr, pro koho, v jakém kontextu",
      "Přidej negativní kontext – co nemá výstup obsahovat nebo jaký přístup nefunguje",
      "Otestuj prompt s tímto blokem kontextu a porovnej výsledek s tím, co dostáváš bez něj",
    ],
    taskType: "ol",
    taskFallback: `[KONTEXT: Pracuji jako projektový manažer v IT firmě. Píšu pro vedení i klientské týmy. Styl: věcný a přímý, bez korporátních frází ani prázdných adjektiv.]
[ZADÁNÍ: Napiš stručné shrnutí stavu projektu pro klienta. Projekt je v pořádku, mírný skluz 1 týden – klient o tom ví.]`,
    taskExample: `Bez bloku kontextu: AI napsala obecný status report, 8 vět, formální tón, generická struktura.
S blokem kontextu: přesný styl, 4 věty, věcné – žádné přepisování.
Rozdíl: s připraveným blokem kontextu je výstup hned použitelný.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "PACT: Tools – jak vybírat správné nástroje a neutopit se v jejich množství.",
  },
  {
    day: 18,
    title: "PACT: Tools – výběr správného nástroje.",
    subject: "Jak vybírat AI nástroje a neutopit se v jejich množství.",
    preheader: "Tools je čtvrtá vrstva PACT. Nástroj je vždy až čtvrtý krok, ne první.",
    concept: [
      "Tools jsou čtvrtou – a závěrečnou – vrstvou PACT frameworku. A záměrně jsou na čtvrtém místě. Protože nástroj je vždy až čtvrtý krok.",
      "Většina lidí to dělá obráceně: vidí nástroj, chce ho použít, hledá problém. Výsledkem je hromada nástrojů, které se nepoužívají.",
      "Správné pořadí v PACT: nejdřív definuj projekty a jejich potřeby. Pak promysli, jací agenti nebo asistenti by pomohli. Pak zjisti, jaký kontext potřebuješ mít připravený. A teprve pak vyber tool – ten, který toto celé podpoří.",
      "Jak hodnotit AI nástroj před tím, než ho začneš používat:",
      ["Jaký konkrétní problém řeší – co bez něj nejde nebo jde hůř", "Kolik to stojí v čase na nastavení versus kolik vrátí – V1 kalkulace", "Jak dobře se integruje s tím, co už máš a používáš", "Jak rychle lze poznat, zda to funguje – do kdy uvidíš první výsledek"],
      "Tři kategorie nástrojů, které mají smysl pro většinu pracovního prostředí:",
      ["Konverzační AI – pro tvorbu, analýzu, shrnutí a brainstorming (ChatGPT, Claude, Gemini)", "Asistenti se specializací – AI s přiřazenou rolí a kontextem pro konkrétní oblast", "Automatizace – propojení nástrojů, kde AI zpracovává vstupy bez manuální účasti"],
      "Nejsilnější sada nástrojů není ta největší. Je to ta nejpoužívanější. Dva nebo tři nástroje, které dobře znáš a máš pro ně připravený kontext a workflow, jsou cennější než deset nástrojů, které občas zkusíš.",
    ],
    taskIntro: "Projdi si svůj současný toolkit AI nástrojů a zhodnoť ho:",
    taskItems: [
      "Které nástroje reálně používáš každý týden – a které jen občas nebo vůbec",
      "Kde v práci máš nevyřešenou potřebu, pro kterou nemáš dobrý nástroj",
      "Jaký jeden nástroj by stál za hlubší prozkoumání nebo lepší nastavení",
    ],
    taskType: "ul",
    taskFallback: `Používám každý týden: Claude (denně), Notion (zápisky)
Občas: ChatGPT, Grammarly
Nainstalované, ale nepoužívám: Perplexity
Nevyřešená potřeba: rychlé shrnutí z hovorů nebo nahrávek
Stojí za prozkoumání: Otter.ai nebo nativní přepis v Notion`,
    taskExample: `Výsledek toolkit reviewu:
"Zredukoval jsem na 2 core nástroje. Jasno o tom, co nepoužívám a proč.
Gap: shrnutí hovorů. Plán: zkusit Otter.ai tento týden – do 2 týdnů rozhodnutí přidat nebo ne."`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "WBS – jak rozložit projekt na kroky s pomocí AI. Větší projekty bez chaosu.",
  },
  {
    day: 19,
    title: "WBS: rozlož projekt na kroky.",
    subject: "Jak rozložit velký projekt na kroky, které dávají smysl.",
    preheader: "AI-WBS: Work Breakdown Structure s pomocí AI. Větší projekty bez chaosu.",
    concept: [
      "Velké projekty se zasekávají ne proto, že jsou příliš velké. Ale proto, že nejsou dostatečně rozložené na menší, konkrétní kroky.",
      "WBS – Work Breakdown Structure – je nástroj, který tento problém řeší. Projekt se rozloží na fáze, fáze na milníky a milníky na konkrétní úkoly. Výsledkem je přehled, ze kterého jasně vidíš, co je třeba udělat a v jakém pořadí.",
      "AI-WBS kombinuje tradiční WBS přístup se silou AI: místo hodin přemýšlení nad strukturou zadáš záměr projektu a AI navrhne rozložení, které pak upravíš podle reality.",
      "Čtyři kroky AI-WBS:",
      ["Záměr projektu – co je cíl, co je úspěch, co je deadline", "Fáze – logické celky, kterými projekt prochází (příprava, realizace, finalizace...)", "Milníky – klíčové výstupy nebo rozhodnutí v každé fázi", "Úkoly – konkrétní akce s vlastníkem a odhadovaným rozsahem"],
      "Fungující prompt pro AI-WBS: Pracuji na projektu [název]. Cíl je [co chceme dosáhnout]. Deadline je [datum]. Tým nebo zdroje: [co máme]. Vytvoř WBS strukturu: 1) Fáze projektu. 2) Hlavní milníky v každé fázi. 3) Klíčové úkoly pro každou fázi. 4) Co jsou největší rizika nebo neznámé.",
      "AI-WBS není náhrada za řízení projektu. Je to rychlý způsob, jak dostat strukturu z prázdné stránky – a pak ji upřesnit podle skutečnosti.",
      "Největší hodnota je v tom, že se vidí projekt jako celek, ne jen jako dnešní úkol. A to mění to, jak se prioritizuje, deleguje a komunikuje o pokroku.",
    ],
    taskIntro: "Vezmi si jeden větší projekt nebo záměr a projdi ho přes AI-WBS:",
    taskItems: [
      "Napiš záměr projektu – co je cíl, co je úspěch, jaký je deadline",
      "Nech AI navrhnout fáze a klíčové milníky",
      "Pro každou fázi nech AI navrhnout 3–5 konkrétních úkolů",
      "Identifikuj s AI top 3 rizika nebo klíčové neznámé",
    ],
    taskType: "ol",
    taskFallback: `Projekt: Příprava nového zákaznického onboardingu
Cíl: Zákazník pracuje samostatně do 2 týdnů od podpisu smlouvy
Deadline: za 6 týdnů | Tým: já + zákaznický tým (3 lidi)
Zdroje: stávající dokumentace, přístup k nástrojům, zpětná vazba od zákazníků`,
    taskExample: `AI výstup WBS:
Fáze 1 – Mapování (týden 1): zmapovat current state, identifikovat bottlenecky
Fáze 2 – Design (týden 2–3): nový flow, šablony, emaily
Fáze 3 – Testování (týden 4): pilot se 2 zákazníky, sbírat feedback
Fáze 4 – Launch (týden 5–6): rollout + zpracování feedbacku
Top 3 rizika: kapacita týmu, schválení dokumentace, technické závislosti`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Human-in-the-loop: AI dělá 90%, člověk kontroluje výsledek. Jak to nastavit správně.",
  },
  {
    day: 20,
    title: "Human-in-the-loop: AI dělá 90%, člověk kontroluje.",
    subject: "Kde do AI výstupu musíš vstoupit ty – a kde ne.",
    preheader: "Human-in-the-loop je princip, ne omezení. Tady je jak ho aplikovat.",
    concept: [
      "AI může udělat obrovské množství práce. Ale ne vše, co AI připraví, je rovnou připraveno k odeslání nebo použití.",
      "Human-in-the-loop je přístup, který říká: AI dělá 90% práce, člověk vstupuje na klíčových místech, kde záleží na lidském úsudku, vztahu nebo odpovědnosti.",
      "Kde je Human-in-the-loop nejdůležitější:",
      ["Výstupy jdoucí zákazníkovi nebo partnerovi – tón, přesnost a vztah jsou příliš důležité", "Rozhodnutí s dopadem – kde chyba má reálné důsledky", "Citlivé informace – kde AI mohla zpracovat nepřesně nebo neúplně", "Kreativní nebo strategické výstupy – kde chybí osobitost nebo specifický kontext"],
      "Kde Human-in-the-loop není potřeba – nebo stačí letmý pohled: interní dokumenty a poznámky, první drafty určené k dalšímu zpracování, shrnutí nebo sumarizace pro osobní použití, opakující se texty se standardizovanou strukturou.",
      "Praktický přístup: při každém AI výstupu si polož jednu otázku – Pokud se ukáže, že tohle je špatně, komu to vadí a jak moc? Čím vyšší je dopad chyby, tím větší musí být lidská kontrola.",
      "Human-in-the-loop neznamená kontrolovat vše. Znamená vědět, kde kontrola přidává skutečnou hodnotu – a kde je jen zbytečné tření, které zpomaluje práci.",
      "Cílem není nedůvěřovat AI. Cílem je rozumně rozložit odpovědnost tak, aby AI dělala to, co zvládne, a člověk vstupoval tam, kde to skutečně záleží.",
    ],
    taskIntro: "Projdi si své aktuální AI použití a napiš si, kde je Human-in-the-loop kritický a kde ne:",
    taskItems: [
      "Výstupy, kde vždy musíš zkontrolovat před použitím – a proč",
      "Výstupy, kde stačí rychlý pohled nebo se mohou použít přímo",
      "Jedna situace, kde jsi výstup AI použil bez kontroly a stálo by za to to přehodnotit",
    ],
    taskType: "ul",
    taskPrompt: `Tady jsou moje data nebo text:
[vlož vstup]

Odpověz mi prosím:
- Co se tu opakuje nebo co je nejčastější?
- Co je nejdůležitější nebo nejzásadnější?
- Co je překvapivé nebo neočekávané?
- Co doporučuješ udělat dál na základě těchto informací?`,
    taskFallback: `Vždy kontroluji před použitím: emaily zákazníkům, smlouvy, cenové kalkulace
Stačí rychlý pohled: interní dokumenty, drafty pro tým, poznámky ze schůzek
Mohu použít přímo: sumarizace pro sebe, research, přepisy, brainstorming
Situace k přehodnocení: minule jsem odeslal AI email bez kontroly – tón byl příliš formální`,
    taskExample: `Výsledek analýzy:
"3 kategorie jasné. Hlavní pravidlo: cokoliv jde zákazníkovi = vždy přečíst.
Ušetřím ~30 min/týden tím, že interní věci přestanu přepisovat.
Kontrola tam, kde to má smysl – ne kontrola všeho."`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Superpowers: první ze pěti schopností, které AI spolupráce přináší – Perception.",
  },
  {
    day: 21,
    title: "Superpowers: Perception – vidět víc.",
    subject: "AI ti pomůže vidět víc, než co vidíš sám.",
    preheader: "Perception je první ze 5 Superpowers. Jak AI rozšiřuje to, co vnímáš.",
    concept: [
      "Superpowers jsou pět schopností, které AI spolupráce přináší, když je vědomě rozvíjíš. Nejde o to, co AI umí – jde o to, co umíš ty díky AI.",
      "První superpower je Perception: schopnost vidět víc, všímat si víc a mít širší záběr informací a perspektiv, než co by bylo možné bez AI.",
      "Jak Perception funguje v praxi:",
      ["Rychlý přehled tématu – v minutách se zorientuješ v oblasti, kde nejsi expert", "Alternativní pohledy – AI ukáže jak by se na situaci dívali jiní lidé, zákazníci nebo odborníci", "Signály ve zpětné vazbě – AI vytáhne vzorce z velkého množství komentářů nebo odpovědí", "Slepá místa – AI upozorní na co jsi zapomněl, přehlédl nebo podcenil"],
      "Perception prompt: Podivej se na tuto situaci z pohledu [různé role: zákazník, kritik, odborník]. Co každý z nich vnímá jinak? Co by každý z nich viděl jako hlavní problém nebo příležitost?",
      "Perception je cenná právě proto, že každý má přirozené slepé skvrny – oblasti, kde vidíme méně, protože je to mimo naši zkušenost nebo perspektivu. AI může tento záběr rozšířit.",
      "Tato superpower neznamená, že AI vidí vždy správně. Znamená, že díky AI vidíš víc možností, perspektiv a signálů – a pak se rozhoduješ lépe.",
      "Vědomě rozvíjená Perception mění způsob, jak přistupuješ k problémům a příležitostem. Přestáváš hledět jen z jednoho úhlu a začínáš přirozeně zvažovat širší obraz.",
    ],
    taskIntro: "Procvič Perception na jedné aktuální situaci nebo výzvě:",
    taskItems: [
      "Vyber jeden aktuální problém nebo rozhodnutí, které řešíš",
      "Požádej AI, aby se na něj podívala ze tří různých perspektiv – zákazník, kritik, odborník z jiného oboru",
      "Napiš, co tě z výsledku překvapilo nebo co jsi neviděl",
    ],
    taskType: "ul",
    taskFallback: `Situace: Přemýšlím, jestli spustit levnější verzi služby pro menší klienty.
Perspektivy pro AI:
- zákazník (menší firma, omezený rozpočet)
- kritik (rizika pro firmu, odvede pozornost od core businessu)
- odborník z jiného oboru (jak to řeší SaaS firmy)`,
    taskExample: `AI výstup – 3 perspektivy:
Zákazník: "Zajímavé, ale chci reference a kalkulaci ROI před rozhodnutím."
Kritik: "Riziko: menší klienti = více supportu, nižší marže, odvede focus."
Odborník ze SaaS: "Řešení: self-service onboarding – škáluje bez přidaných nákladů."
Co jsem neviděl: maržový problém a možnost self-service jako řešení.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Superpowers: Intelligence – jak AI pomáhá analyzovat lépe a rychleji.",
  },
  {
    day: 22,
    title: "Superpowers: Intelligence – analyzovat lépe.",
    subject: "Jak AI pomáhá analyzovat lépe a rychleji.",
    preheader: "Intelligence je druhá ze 5 Superpowers. Jak AI rozšiřuje analytické schopnosti.",
    concept: [
      "Druhá superpower je Intelligence: schopnost analyzovat, vyhodnocovat a nacházet vzorce rychleji a přesněji, než je možné bez AI.",
      "Intelligence neznamená, že AI myslí za tebe. Znamená, že ti pomáhá zpracovat větší množství informací, identifikovat vzorce a vyvodit závěry – a to rychleji, než bys to zvládl sám.",
      "Kde Intelligence přidává největší hodnotu:",
      ["Zpětná vazba ve velkém množství – AI vytáhne témata, opakující se vzorce a klíčové body", "Porovnání variant – AI zhodnotí plusy a mínusy možností podle zadaných kritérií", "Analýza textu nebo dat – strukturovaný přehled z nestrukturovaného vstupu", "Identifikace anomálií – co v datech nebo situaci nesedí do vzorce"],
      "Intelligence prompt: Tady jsou [data / zpětná vazba / texty / informace]: [vlož vstup]. Analyzuj a: 1) Identifikuj hlavní vzorce nebo opakující se témata. 2) Co je nejdůležitější nebo nejkritičtější. 3) Co je neočekávané nebo neodpovídá vzorci. 4) Co z toho plyne pro další kroky.",
      "Klíčový rozdíl mezi Intelligence a pouhým vyhledáváním: Intelligence není o tom dostat odpověď. Je o tom dostat strukturovanou analýzu, která ti pomůže lépe rozumět situaci a lépe rozhodovat.",
      "Intelligence jako superpower roste s tím, jak zlepšuješ kvalitu vstupu – čím lepší kontext a data, tím přesnější analýza. To opět odkazuje na druhý mozek a 3C framework: zachycené a zpracované materiály jsou skvělým vstupem pro Intelligence.",
    ],
    taskIntro: "Procvič Intelligence na jednom reálném vstupu:",
    taskItems: [
      "Vyber vstup, který potřebuješ analyzovat – zpětná vazba, data, seznam věcí, texty",
      "Zadej ho AI s Intelligence promptem z dnešního dne",
      "Z výsledku vyvoď jeden konkrétní závěr nebo rozhodnutí",
    ],
    taskType: "ul",
    taskFallback: `Vstup pro analýzu (vyber jeden):
a) 10 zpětných vazeb zákazníků z posledního průzkumu
b) Výsledky posledního projektu (co fungovalo, co ne)
c) Seznam úkolů z minulého měsíce – co se udělalo, co se posunulo
Zadání AI: identifikuj vzorce, co se opakuje, co je nejdůležitější`,
    taskExample: `Vstup: 10 zpětných vazeb zákazníků
AI výstup:
Vzorce: 7/10 zmiňuje rychlost odezvy kladně; 4/10 chybí dokumentace
Nejdůležitější: rychlost je silná stránka (udržet), dokumentace je gap (řešit)
Neočekávané: cena zmíněna jen 1/10 – není hlavním problémem
Doporučení: vytvořit help center, začít 3 klíčovými FAQ`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Superpowers: Memory – jak AI pomáhá pamatovat víc a lépe využívat to, co víš.",
  },
  {
    day: 23,
    title: "Superpowers: Memory – pamatovat víc.",
    subject: "Jak AI pomáhá pamatovat víc a lépe využívat znalosti.",
    preheader: "Memory je třetí ze 5 Superpowers. Jak AI rozšiřuje to, co si pamatuješ a využíváš.",
    concept: [
      "Třetí superpower je Memory: schopnost mít přístup k více kontextu, znalostem a historii, než co si dokáže pamatovat jeden člověk.",
      "Memory jako superpower není jen o ukládání informací. Je o schopnosti je vytáhnout ve správný moment a propojit s aktuální prací.",
      "AI rozšiřuje Memory třemi způsoby:",
      ["Externalizace kontextu – vše důležité se uloží a může se znovu použít, ne jen pamatovat", "Rychlé vyhledání a propojení – starší materiál se stane relevantním v novém kontextu", "Konzistence – AI si pamatuje kontext, který jí dáš, a pracuje s ním konzistentně v rámci konverzace"],
      "Memory superpower funguje nejlépe v propojení s druhým mozkem (3C framework): zachycené a zpracované materiály jsou přesně tím, co lze předávat AI jako kontext – a tím AI rozšiřuje tvoji Memory.",
      "Kde Memory jako superpower nejvíc pomáhá: před schůzkou s klientem (co bylo probíráno, co bylo rozhodnuto, jaký je kontext), při pokračování projektu po přerušení (co bylo kde, co ještě chybí), při onboardingu nové osoby (dokumentovaný kontext a rozhodnutí).",
      "Memory prompt: Tady je kontext a historie k tomuto tématu: [vlož materiál z druhého mozku]. Na tomto základě: [konkrétní zadání nebo otázka].",
      "Když propojíš druhý mozek s AI Memory, přestáváš ztrácet kontext. Každý projekt, každý klient, každé rozhodnutí má svou historii – a ta je dostupná ve správný moment.",
    ],
    taskIntro: "Procvič Memory superpower na jedné situaci, kde kontext hraje roli:",
    taskItems: [
      "Vyber situaci, kde kontext nebo historie jsou důležité – projekt, klient, téma",
      "Sestav krátký blok kontextu z toho, co o situaci víš nebo máš uloženo",
      "Vlož kontext do AI a zadej konkrétní úkol nebo otázku na tomto základě",
      "Porovnej výsledek s tím, co by AI produkovala bez tohoto kontextu",
    ],
    taskType: "ol",
    taskFallback: `Kontext a historie k projektu:
"Projekt jsme spustili v lednu. Prvních 6 týdnů problémy s onboardingem – chyběla dokumentace. Od března funguje lépe. Klíčová rozhodnutí: přidali jsme chat support, zrušili telefonní linku."
Zadání: Napiš Q2 plán pro zákaznický tým.`,
    taskExample: `Bez kontextu: AI napsala obecný Q2 plán s generickými cíli.
S kontextem z druhého mozku: Q2 plán reflektuje situaci – zmiňuje dokumentaci jako gap, navazuje na chat support, přizpůsobuje priority historii projektu.
Rozdíl: plán, který pracuje s tím, co reálně je – ne s tím, co by mohlo být.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Superpowers: Creation – jak tvořit rychleji a s větší rozmanitostí výstupů.",
  },
  {
    day: 24,
    title: "Superpowers: Creation – tvořit rychleji.",
    subject: "Jak AI pomáhá tvořit rychleji a s větší rozmanitostí.",
    preheader: "Creation je čtvrtá ze 5 Superpowers. Tvorba bez čekání na inspiraci.",
    concept: [
      "Čtvrtá superpower je Creation: schopnost tvořit více, rychleji a s větší rozmanitostí výstupů – bez čekání na správný moment nebo prázdné stránky.",
      "Creation jako superpower neznamená, že AI tvoří za tebe. Znamená, že přidáváš spolutvůrce, který nikdy nemá kreativní blok, produkuje varianty na počkání a nezastaví se u první verze.",
      "Kde Creation přidává největší hodnotu:",
      ["Překonání prázdné stránky – první draft čehokoliv vznikne za minuty, ne hodiny", "Varianty – místo jedné verze dostaneš tři, ze kterých si složíš lepší výsledek", "Repurposing – jeden obsah se přetaví do více formátů pro různé situace", "Iterace – rychlé přepracování na základě zpětné vazby bez ztráty energie"],
      "Creation workflow: 1) Záměr – co chcete vytvořit a proč. 2) Kontext – pro koho, v jakém tónu, v jakém formátu. 3) Varianty – požádej o 2–3 různé přístupy. 4) Výběr – vezmi nejlepší prvky z každé varianty. 5) Finalizace – přidej svůj hlas a detail.",
      "V1 > 0 je přesně tady nejsilnější: Creation s AI odstraňuje nejbolestivější část tvorby – začátek. Jakmile máš první verzi, práce se stane konkrétní a zvladatelnou.",
      "Creation superpower roste s tím, jak lépe zadáváš kontext a Tone of voice. Výstupy, které dostaneš, jsou jen tak dobré jako zadání – a to teď z předchozích dní už víš dobře.",
    ],
    taskIntro: "Procvič Creation superpower na jednom obsahu nebo výstupu:",
    taskItems: [
      "Vyber jeden text, dokument nebo obsah, který potřebuješ vytvořit",
      "Požádej AI o 3 varianty s různým přístupem nebo tónem",
      "Ze tří variant vyber nejlepší prvky a sestav finální verzi",
      "Ulož výsledný prompt jako šablonu pro příští podobné zadání",
    ],
    taskType: "ol",
    taskFallback: `Záměr: LinkedIn post o tom, co jsem se naučil díky AI za poslední měsíc
Kontext: pro manažery středně velkých firem, neformální tón, max 150 slov
Varianty:
1) praktický seznam věcí, co jsem změnil
2) osobní příběh jedné konkrétní situace
3) provokativní pohled – co AI neumí nebo kde selhává`,
    taskExample: `3 varianty od AI:
1) Praktická: "5 věcí, které jsem přestal dělat ručně: [seznam]"
2) Příběh: "Měl jsem 3 hodiny na přípravu prezentace. AI mi pomohla za 40 minut."
3) Kontra: "Nepoužívám AI pro vše. Ale tyhle 3 věci deleguji vždy."
Výsledný post: kombinace prvků 1 a 2 – nejlépe fungovala osobní konkrétnost.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Superpowers: Connection – jak AI pomáhá komunikovat lépe a dosáhnout víc.",
  },
  {
    day: 25,
    title: "Superpowers: Connection – komunikovat lépe.",
    subject: "Jak AI pomáhá komunikovat lépe a dosahovat víc.",
    preheader: "Connection je pátá ze 5 Superpowers. Komunikace, která funguje lépe.",
    concept: [
      "Pátá superpower je Connection: schopnost lépe komunikovat, přesvědčivěji formulovat a budovat silnější vztahy – s pomocí AI jako komunikačního partnera.",
      "Connection neznamená, že AI komunikuje za tebe. Znamená, že pomáhá připravit komunikaci, která je jasnější, přesnější a lépe přizpůsobená pro konkrétního člověka nebo situaci.",
      "Kde Connection přidává největší hodnotu:",
      ["Příprava důležité zprávy – AI pomůže formulovat to, co chceš říct, tak aby to bylo slyšet", "Přizpůsobení tónu – stejný obsah formulovat jinak pro různé příjemce", "Empatie a perspektiva – jak zprávu vnímá příjemce a co by mohl slyšet jinak", "Složité situace – feedback, eskalace, odmítnutí nebo přesvědčování"],
      "Connection prompt: Chci sdělit [obsah nebo záměr] pro [komu]. Tato osoba je [popis nebo kontext o příjemci]. Cíl komunikace je [co chceme dosáhnout]. Navrhni: 1) Jak to formulovat jasně a srozumitelně. 2) Co by mohlo být vnímáno špatně a jak tomu předejít. 3) Jak uzavřít zprávu tak, aby byl jasný další krok.",
      "Connection jako superpower zahrnuje i Tone of voice (den 9): když AI zná tvůj styl, komunikace zůstane osobitá – jen je lépe připravená.",
      "Nejsilnější komunikace není ta nejdelší ani nejformálnější. Je ta, která přesně říká, co má říct – a říká to způsobem, který příjemce slyší. A k tomu AI může výrazně pomoci.",
    ],
    taskIntro: "Procvič Connection superpower na jedné komunikační situaci:",
    taskItems: [
      "Vyber jednu důležitou zprávu, email nebo rozhovor, který potřebuješ připravit",
      "Použij Connection prompt – popiš příjemce, záměr a cíl komunikace",
      "Nech AI navrhnout formulaci a zhodnoť, co by mohlo být vnímáno jinak",
      "Finalizuj zprávu s vlastním tónem a pošli ji nebo použij",
    ],
    taskType: "ol",
    taskFallback: `Záměr: Sdělit klientovi, že projekt má 2týdenní skluz.
Příjemce: senior manažer, očekává výsledky, nechce výmluvy bez řešení
Cíl: udržet důvěru a domluvit nový termín bez poškození vztahu
Styl: přímý, konkrétní příčina + konkrétní řešení + konkrétní další krok`,
    taskExample: `AI navrhla formulaci:
"Chci vás informovat o 2týdenním posunu v projektu. Příčina: výpadek klíčového člena týmu. Nový termín: [datum]. Přidáváme závěrečnou kontrolu navíc. Navrhujeme 20minutový call příští týden."
Co by bylo vnímáno špatně: pasivní formulace, vágní příčiny, pozdní sdělení.`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "AI Adoption: jak to všechno propojit – Mindset, Tools a Superpowers jako celek.",
  },
  {
    day: 26,
    title: "AI Adoption: Mindset, Tools a Superpowers jako celek.",
    subject: "Jak to všechno propojit a pokračovat po challenge.",
    preheader: "AI Adoption trojice: Mindset, Tools, Superpowers. Tady je jak to funguje dohromady.",
    concept: [
      "V posledním dne před závěrem stojí za to se podívat na celou challenge jako celek.",
      "AI Adoption funguje ve třech vrstvách, které na sebe navazují: Mindset, Tools a Superpowers.",
      "Mindset je základ. Bez AI-first způsobu přemýšlení jsou nástroje jen hračky. Mindset zahrnuje vše z prvního týdne: AI-first přístup, Leverage matici, OHIO princip, kvalitu zadání, Prompt Generator přístup, V1 > 0 a iteraci.",
      "Tools jsou prostředky. Správné nástroje ve správném kontextu zesilují to, co Mindset umožnil. PACT framework, 5 úrovní AI nástrojů, druhý mozek a workflow jsou Tools vrstvou – způsob, jak práci organizovat a systémově zapojovat AI.",
      "Superpowers jsou výsledek. Perception, Intelligence, Memory, Creation a Connection nejsou schopnosti AI – jsou to schopnosti člověka, které AI spolupráce rozšiřuje. Rozvíjejí se postupně, jak Mindset a Tools silnějí.",
      "Jak pokračovat po challenge:",
      ["Udržuj Mindset – pravidelně se ptej na výsledek vs. aktivitu, leverage vs. rychlost", "Rozvíjej Tools – druhý mozek, PACT prostředí a workflow nebuduj najednou, ale postupně", "Vědomě rozvíjej Superpowers – každý týden si vyber jednu a zaměřuj se na ni"],
      "AI Adoption není jednorázový projekt. Je to postupná změna způsobu práce. A change, která začala tímhle challenge, pokračuje dál – v dalších 90 dnech, dalším roce a každý den, kdy se vědomě rozhoduješ pracovat chytřeji.",
      "Největší posun nepřichází z jednoho nástroje nebo jednoho promptu. Přichází z toho, že Mindset, Tools a Superpowers začnou fungovat jako celek.",
    ],
    taskIntro: "Zhodnoť svou AI Adoption cestu přes challenge ve třech vrstvách:",
    taskItems: [
      "Mindset – co se změnilo v tom, jak přemýšlíš o práci a AI spolupráci",
      "Tools – jaké nástroje, systémy nebo workflow si odneseš a chceš dál rozvíjet",
      "Superpowers – která ze pěti schopností ti přijde nejrelevantnější a chceš ji vědomě rozvíjet",
    ],
    taskType: "ul",
    taskFallback: `Mindset: Přestal jsem se AI ptát, začal jsem jí zadávat konkrétní práci s kontextem
Tools: OHIO šablony, Capture v Notion, PACT asistent pro psaní
Superpowers: Nejčastěji využívám Creation (rychlé drafty) a Intelligence (analýza zpětné vazby)`,
    taskExample: `Vzorový výsledek reflexe:
"Za 26 dní se nejvíc změnil způsob zadávání – kontext místo krátkých otázek.
Mám 4 uložené šablony, 1 fungující workflow, Tone of voice nastavený.
Superpowers: nejsilnější je Memory – kontext z druhého mozku reálně mění kvalitu výstupů."`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Předposlední den. Jak předat systém do praxe – a aby fungoval i bez aktivního přemýšlení.",
  },
  {
    day: 27,
    title: "Systém, který pracuje za tebe.",
    subject: "Teď už neskládáš tipy. Skládáš systém.",
    preheader: "Zítra je poslední den challenge. Dnes si sestavíš, co si odnášíš.",
    concept: [
      "Skutečný AI systém není jeden nástroj. Je to způsob práce, ve kterém se potkává víc věcí najednou.",
      "Je to kombinace toho, jak přemýšlíš o úkolech, co deleguješ AI, co si ukládáš a opakovaně používáš, jak si buduješ druhý mozek a kde si necháváš Human-in-the-loop kontrolu.",
      "Po 27 dnech challenge máš dost zkušeností, aby ti sestavení vlastního systému dávalo smysl. Není to teorie – je to přehled toho, co fungovalo a co si chceš udržet.",
      "Dobrý AI systém má šest součástí:",
      [
        "Mindset – jak přemýšlíš o práci: výsledky vs. aktivity, Leverage vs. rychlost",
        "Prompty – uložená sada promptů pro nejčastější situace (Tone of voice, šablony, Prompt Generator)",
        "Workflow – propojené řetězce kroků, kde AI pomáhá automaticky",
        "Druhý mozek – kde jsou uloženy znalosti, podklady a reusable assety (3C framework)",
        "PACT prostředí – Projects, Agents, Context, Tools nastavené pro tvoji práci",
        "Pravidla – kde je potřeba Human-in-the-loop a co do AI nedávat",
      ],
      "První verze nemusí být dokonalá. Ale musí existovat – jinak to zůstane jen u nápadu.",
      "Sestav si ji dnes. Prohledej poznámky z challenge, co ses naučil, co sis uložil, co sis vyzkoušel. Dej to dohromady. Bude to základ, ze kterého budeš vycházet dalších 90 dní.",
    ],
    taskIntro: "Sepiš si první verzi svého AI systému. Projdi všech šest součástí:",
    taskItems: [
      "Na co AI používám nejčastěji a kde mi opravdu pomáhá",
      "Jaké prompty nebo šablony si chci uložit a mít vždy po ruce",
      "Jaké workflow nebo řetězce kroků mi dávají smysl a chci je udržet",
      "Kde mám uloženy podklady, znalosti a materiály z challenge (druhý mozek)",
      "Kde potřebuji Human-in-the-loop – co nikdy neodešlu nebo nepoužiji bez ověření",
      "Co už nechci příště dělat od nuly ručně",
    ],
    taskType: "ul",
    taskFallback: `Nejčastěji používám: Claude na drafty a shrnutí každý den
Uložené prompty: Tone of voice, šablona follow-up emailu, WBS prompt
Workflow: Poznámky → Capture v Notion → AI shrnutí → follow-up email
Druhý mozek: složka "AI Workspace" v Notion s podklady a rozhodnutími
Pravidlo: cokoliv jde zákazníkovi – vždy přečíst před odesláním`,
    taskExample: `Vzorový AI systém na 1 stránce:
Mindset: Výsledky > aktivity, Leverage > rychlost
Prompty: 3 šablony (email, report, shrnutí) + Tone of voice
Workflow: Meeting → Capture → AI zápis → follow-up (15 min místo 45 min)
Druhý mozek: Notion inbox + weekly Clean rutina
Pravidlo: zákaznická komunikace = lidský pohled vždy`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "Poslední den challenge. A zároveň začátek toho, co přijde po ní.",
  },
  {
    day: 28,
    title: "Skutečná změna začíná až teď.",
    subject: "28 dní za tebou. Skutečná změna začíná teď.",
    preheader: "Dokončení challenge není cíl. Je to začátek. Tady je co dál.",
    concept: [
      "Dokončení challenge není cíl. Je to začátek.",
      "Nejde o to projít 28 dní a vyzkoušet 28 věcí. Jde o to, co z toho zůstane v běžné práci i potom. Co se změní v tom, jak přemýšlíš, jak zadáváš práci, jak se díváš na to, co musíš dělat ručně a co ne.",
      "Nejsilnější změna nevzniká z jednoho velkého skoku. Vzniká z malého kroku opakovaného každý den. A přesně tohle jsi dělal posledních 28 dní.",
      "Co teď víš, co jsi před challengí nevěděl nebo sis neuvědomoval:",
      [
        "že se platí za výsledky, ne za aktivitu – a že AI je nejsilnější, když s tím pracuješ vědomě",
        "že opakování je signál pro OHIO a šablonu, ne výzva být rychlejší",
        "že kvalita zadání = kvalita výstupu – vždy",
        "že V1 > 0 – první verze je vždy lepší než dokonalý systém, který ještě nevznikl",
        "že Leverage je důležitější než rychlost",
        "že Mindset, Tools a Superpowers fungují nejlépe jako celek",
      ],
      "Co dál. Challenge skončila, ale práce na systému ne. Příštích 90 dní jsou klíčové – to je okno, kdy se nové návyky buď zakotvily nebo se ztratily.",
      "Plán na dalších 90 dní se dá shrnout do čtyř kroků: Keep – co si chci určitě udržet. Build – co chci dál rozvíjet nebo postavit. Share – co chci sdílet s ostatními. Measure – podle čeho poznám, že mi to opravdu pomáhá.",
      "Stačí málo. Pět minut denně. Jeden prompt. Jeden ušetřený krok. A právě z toho vzniká skutečná změna – ta, která zůstane.",
    ],
    taskIntro: "Sepiš si krátký plán na dalších 90 dní. Projdi čtyři kroky:",
    taskItems: [
      "Keep – co si chci určitě udržet (min. 3 konkrétní věci z challenge)",
      "Build – co chci dál rozvíjet nebo postavit (min. 1 konkrétní cíl)",
      "Share – co chci sdílet s ostatními (komu a co konkrétně ukáži)",
      "Measure – podle čeho poznám, že mi to opravdu pomáhá (konkrétní metrika nebo pocit)",
    ],
    taskType: "ul",
    taskFallback: `Keep: Tone of voice nastavení, OHIO šablony pro emaily, AI workflow pro zápisy
Build: Plně funkční PACT prostředí s vlastním asistentem; rozšířit druhý mozek
Share: Ukáži kolegovi, jak nastavit Capture systém v Notion
Measure: Za 90 dní mám 5 fungujících workflow a ušetřím ~3 hodiny týdně`,
    taskExample: `Vzorový 90denní plán:
Keep: Prompty pro emaily, šablona pro report, Capture rutina každý den
Build: PACT asistent nastavený, druhý mozek s reálným obsahem
Share: Konkrétní setkání s kolegou – ukázka 1 workflow
Measure: Počet opakujících se věcí, které nedělám od nuly (cíl: min. 5)`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "",
  },
];
