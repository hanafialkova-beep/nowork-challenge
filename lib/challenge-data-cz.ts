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
    taskFallback: `Nevíš, co vybrat? Zkus si odpovědět na tyhle otázky:
– Co mi zabere víc než 30 minut a přitom to dělám každý týden?
– Co opisuju nebo kopíruju z minulého dokumentu pokaždé znovu?
– Co si říkám "to přece nějak musí jít líp"?

Příklady ze skutečné práce, které ostatní vybrali:
→ Každý pátek píšu status email vedení – vždy stejná struktura, jiná čísla.
→ Po každé schůzce opisuju poznámky do zápisu a posílám týmu.
→ Zákazníci se stále ptají na ty samé věci – odpovídám každému zvlášť.`,
    taskExample: `Markéta pracuje jako projektová manažerka. Napsala si:
1. Týdenní report pro vedení (45 minut každý pátek)
2. Shrnutí z projektových schůzek (20 minut po každé schůzce)
3. Odpovědi na stále stejné dotazy klientů ohledně fakturace

Na konci challenge si k těmhle třem věcem postavila šablony a prompty.
Výsledek: přibližně 3–4 hodiny zpět každý týden.

Tvůj seznam bude sloužit jako základ pro to samé – budeme se k němu v challenge vracet.`,
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
    taskFallback: `Příklady pro inspiraci – vyber si, co je ti nejblíž:

Situace A (obchod):
Úkol: Připravit nabídku pro nového klienta.
Skutečný výsledek: Klient pochopí, co dostane, a proč je to pro něj správná volba – ne jen dostane soubor s čísly.

Situace B (marketing):
Úkol: Napsat newsletter na tento měsíc.
Skutečný výsledek: Čtenáři kliknou na odkaz nebo si produkt zapamatují – ne jen "odeslat email".

Situace C (management):
Úkol: Udělat 1:1 s každým v týmu.
Skutečný výsledek: Vím, kdo má za co problém a mám konkrétní kroky jak pomoct – ne jen "splnil/a jsem 1:1".`,
    taskExample: `Jak vypadá tento rozdíl v praxi s AI:

Vstup: "Mám zítra schůzku s klientem, který váhá s prodloužením smlouvy. Pomoz mi pojmenovat skutečný výsledek, kterého chci dosáhnout."

AI odpověď:
"Skutečný výsledek není 'projít schůzku' ani 'ukázat novou nabídku'.
Je to: buď klient řekne ano a víme termín a podmínky,
nebo víš přesně, co ho brzdí – cena, alternativa, interní schválení – a máš konkrétní další krok.

Aktivita (co uděláš): připravit podklady, agenda, key argumenty.
Výsledek (co chceš odejít s): rozhodnutí nebo jasný bloker."

Proč to pomáhá: s tímto pohledem se připravíš na schůzku jinak – ne jako na prezentaci, ale jako na rozhovor zaměřený na rozhodnutí.`,
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
    taskFallback: `Kdybys nevěděl/a, co vybrat, zkus tenhle prompt přímo v AI:

"Vytvoř mi šablonu pro týdenní status email pro vedení.
Šablona má obsahovat: co bylo hotové tento týden, co je v plánu na příští týden, co potřebuji rozhodnutí nebo pomoc.
Výstup ve formátu krátkých odrážek, celkově max 150 slov."

Nebo pro follow-up po schůzce:
"Vytvoř mi šablonu pro follow-up email po obchodní schůzce.
Obsah: poděkování za čas (1 věta), shrnutí klíčových bodů (max 3), dohodnuté kroky s termíny, jasná výzva k akci.
Styl: přátelský a věcný, max 120 slov."`,
    taskExample: `Jindra píše follow-up email po každé schůzce. Dřív: 20–25 minut, začínal od nuly, každý email trochu jiný.

Teď: otevře šablonu, doplní 4 pole (jméno, klíčové body, kroky, termín), přečte jednou a pošle. 5–7 minut.

Šablona, kterou použil po první schůzce s AI:
———
Předmět: Shrnutí – [datum], [firma]
Ahoj [jméno], díky za čas dnes.
Klíčové body: [body]
Co jsme domluvili: [kroky] do [termín]
Dej vědět, pokud by bylo něco jinak.
[Podpis]
———
Za první měsíc ušetřil ~3 hodiny. A každý follow-up byl konzistentnější – žádné zapomenuté body nebo jiná formulace pokaždé.`,
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
    taskFallback: `Zkus přepsat tenhle vágní prompt na konkrétní zadání se 4 částmi:

Vágní (jak to většina lidí zadává):
"Napiš email zákazníkovi, že projekt je hotový."

Přepsaný na 4 části:
"Jsi zkušený projektový manažer v B2B IT.
Napiš email zákazníkovi, že projekt je hotový a připravený k předání.
Projekt byl 3 týdny zpožděný – zákazník to ví. Teď je vše v pořádku.
Email max 5 vět, přátelský a konkrétní tón, bez technického žargonu."`,
    taskExample: `Srovnání výstupů:

Vágní prompt: "Napiš email zákazníkovi, že projekt je hotový."
→ AI napsala formální email, 9 vět, obecné, nic přizpůsobené situaci – nutné celé přepsat.

Prompt se 4 částmi:
→ Email 4 věty, zmínil skluz a překonání, věcný tón, šel přímo ven.

Konkrétní výstup z 4dílného promptu:
———
"Ahoj Michale, projekt je připravený k předání – vše prošlo finální kontrolou. Vím, že cesta sem nebyla přímočará, ale jsem rád, že jsme to dotáhli do kvalitního výsledku. Přístupy a dokumentaci posíláme do konce dne. Dej vědět, kdy by se hodil krátký call k předání."
———
Tenhle email šel rovnou. Přepsání zabralo 2 minuty.`,
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
    taskFallback: `Zkus tenhle konkrétní příklad – zkopíruj a pošli do AI:

"Jsi expert na marketingovou komunikaci.
Chci napsat LinkedIn post o tom, jak jsem začal/a používat AI v práci.
Než začneš psát, polož mi 3 doplňující otázky, které zlepší výsledek."

AI se tě zeptá – odpověz a pak požádej o samotný post.
Srovnej výsledek s tím, co by vzniklo bez otázek.`,
    taskExample: `Co se stalo po odeslání promptu s doplňujícími otázkami:

AI se zeptala:
1. "Pro koho přesně píšeš – pro odbornou komunitu nebo širší publikum?"
2. "Chceš sdílet konkrétní příběh nebo spíš rady a poznatky?"
3. "Jaký tón preferuješ – inspirativní, analytický, nebo konverzační?"

Lucie odpověděla: "Píšu pro HR manažery, chci sdílet konkrétní příběh s tím, jak AI změnila onboarding u nás, a tón má být konverzační."

Výsledný post:
→ Byl o 60 % konkrétnější než to, co dostala bez otázek.
→ Zmiňoval HR onboarding, nikoliv obecné téma AI.
→ Šel přímo na LinkedIn bez dalších úprav.

Bez otázek: generický post o AI, mohl ho napsat kdokoliv.
S otázkami: osobní příběh, který seděl Lucii na míru.`,
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
    taskFallback: `Vezmi si svůj zítřejší seznam úkolů a zkus přiřadit každý do jedné ze tří skupin.

Příklad z reálného pracovního dne projektové manažerky:

Jen já:
→ Strategický rozhovor s klíčovým zákazníkem o obnovení smlouvy
→ Hodnotící rozhovor s členem týmu (tohle nesmí dělat nikdo jiný)

Já + AI:
→ Příprava prezentace stavu projektu pro vedení
→ Složitá odpověď zákazníkovi s kontextem z více hovorů
→ Analýza zpětné vazby z posledního sprintu

Hlavně AI:
→ Formátování a přepis zápisu z dnešního meetingu
→ Odpovědi na standardní dotazy zákazníků (FAQ)
→ Shrnutí dokumentace pro nového kolegu`,
    taskExample: `Co se změnilo, když Jana seřadila svůj úterní den takhle:

Zjistila, že z 8 hodin práce jsou jen 2 hodiny "Jen já" věci – strategická rozhodnutí a klíčové vztahy.
Dalších 3,5 hodiny jsou "Já + AI" – zadá směr a AI pomůže s exekucí.
A 2,5 hodiny jsou "Hlavně AI" – věci, které se opakují pokaždé stejně.

Jeden posun, který udělala ihned:
Zpracování zápisů z meetingů (každý den 30–40 minut) přesunula do "Hlavně AI".
Workflow: napíše 2 minuty hrubých poznámek po schůzce → AI vytáhne zápis + action items.

Ušetřila ~2 hodiny týdně. Ty věnuje práci, kde je opravdu potřeba ona.`,
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
    taskFallback: `Zkus tento konkrétní 4krokový postup na šabloně pro měsíční report:

Krok 1 – vstup do AI:
"Potřebuji šablonu pro měsíční report pro vedení.
Nevím přesně, co má obsahovat – napiš mi první verzi.
Zahrň: shrnutí výsledků, co šlo dobře, co ne, plán na příští měsíc."

(Nečti výsledek kriticky – jen zapiš, co chybí nebo co je moc. Pak jdi na krok 2.)

Krok 2 – feedback:
"Verze je moc dlouhá. Zkrať na max 1 stranu. Vyhoď sekci X, přidej sekci Rizika."`,
    taskExample: `Jak iterace fungovala v praxi – měsíční report:

Tomáš měl 30 minut na přípravu reportu, který dřív dával 2 hodiny.

Krok 1: Dal AI 3 věty o tom, co projekt dělá. AI napsala draft – příliš dlouhý, příliš formální, ale měl správnou strukturu.

Krok 2: "Zkrať o polovinu, přidej sekci Rizika & příležitosti, změň tón na věcný a přímý."

Krok 3: AI přepsala – 1 strana, čistá, 5 sekcí.

Krok 4: Tomáš přidal 2 věty s kontextem, který AI nemůže znát (interní situace v týmu), přečetl a odeslal.

Výsledek za 28 minut – hotový report, který vedení pochválilo.
Šablona uložená v Notion. Příští měsíc: 10 minut.

Klíčové: Tomáš nezačal od dokonalého promptu. Začal od záměru.`,
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
    taskFallback: `Zkus si popsat tento konkrétní workflow (nebo ho rovnou vyzkoušej):

Workflow: Schůzka → Zápis → Follow-up email

Vstup: Hrubé poznámky z meetingu (stačí 3–5 bullet pointů napsaných za schůzky nebo hned po ní)

Prompt do AI:
"Tady jsou moje poznámky ze schůzky: [vlož bullet pointy]
Vytvoř: 1) strukturovaný zápis s action items a termíny, 2) krátký follow-up email pro účastníky."

Výstup: Zápis + email připravené k odeslání.
Časová úspora: 20–30 minut → 5 minut.`,
    taskExample: `Marek pracuje jako obchodní manažer. Po každé zákaznické schůzce psal zápis 20–30 minut.

Vstup, který zadal AI:
"zákazník Novák, líbí se jim náš software, zarazila cena (20 % nad jejich budget), potřebují schválení CFO, volný termín příští čtvrtek"

AI výstup za 30 sekund:

Zápis: "Schůzka proběhla pozitivně. Zákazník má zájem o produkt. Hlavní bloker: cena překračuje budget o ~20 %. Rozhodovatel: CFO. Příští krok: demo pro CFO nebo cenová nabídka s variantami."

Follow-up email:
"Ahoj Karle, díky za dnešní schůzku. Rád, že produkt dává smysl pro váš tým. Jak jsme se domluvili, připravím variantní cenovou nabídku do pátku. CFO demo bychom mohli naplánovat příští čtvrtek – hodí se ti 10:00 nebo 14:00?"

Marek odeslal s jednou úpravou. Celkem: 4 minuty místo 25.`,
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
    taskFallback: `Jak vypadá tato mapa pro někoho, kdo pracuje v marketingu:

Chatbot (úroveň 1): Claude pro psaní textů, subject lines, LinkedIn posty – každý den.
Asistent (úroveň 2): Vlastní GPT s instrukcemi pro brand voice – nestojí mě každý chat znovu nastavovat tón.
Skripty (úroveň 3): Šablona pro měsíční newsletter – AI doplňuje, já jen schvaluji.
Automatizace (úroveň 4): Nové zákaznické dotazy z formuláře → AI klasifikuje → přesměruje na správnou osobu (nastaveno v Make).
Agent (úroveň 5): AI, která jednou týdně projde data z kampaní a navrhne, co testovat příště (zatím nápad, pracuju na tom).`,
    taskExample: `Výsledek mapování 5 úrovní u Petry:

Po cvičení zjistila: "Jsem hlavně na úrovni 1 – píšu s ChatGPT každý den, ale pokaždé znovu nastavuju tón a kontext. Zabere mi to 5 minut na začátku každého chatu."

Přirozený další krok: úroveň 2 – nastavit vlastního asistenta s instrukcemi o brand voice, cílové skupině a způsobu psaní.

Co to v praxi změnilo:
Dřív: 5 minut nastavování kontextu na začátku každého chatu.
Po nastavení asistenta: první výstup sedí hned, bez úvodu.
Ušetřeno: ~20 minut denně, výrazně konzistentnější výstupy.

Klíčový poznatek ze cvičení: nebylo potřeba přeskočit na úroveň 4 nebo 5. Stačil jeden krok výš.`,
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
    taskFallback: `Vlož do AI tento email (nebo svůj vlastní text) a požádej o analýzu stylu:

Vzorový text pro analýzu (pokud nemáš vlastní po ruce):
"Ahoj Petro, posílám shrnutí z dnešního callu. Hlavní body: schválili jsme termín, Jana se ujme dokumentace, příště se potkáme ve čtvrtek. Dej vědět, jestli jsem na něco zapomněl/a."

Prompt pro AI:
"Analyzuj styl tohoto textu. Popiš: 1) tón a rytmus, 2) co je typické pro tento způsob psaní, 3) co v něm není – čemu se pisatel vyhýbá. Tento styl použij při dalších zadáních."`,
    taskExample: `Co vzniklo po analýze stylu a jak se to projevilo v praxi:

Ondřej vložil do AI 3 emaily, které napsal za poslední týden.

AI popis jeho stylu:
"Píšeš stručně a věcně – průměrně 3–4 věty na email. Přecházíš rovnou k věci bez zdvořilostního úvodu. Používáš aktiva ('schválili jsme') místo pasiva ('bylo schváleno'). Vyhýbáš se frázím jako 'Dovolte mi uvést' nebo 'S pozdravem'. Výstupy jsou orientované na akci – vždy je jasný příští krok."

Jak to pak použil:
Prompt na začátku každého chatu: "Piš v tomto stylu: stručně, věcně, bez úvodů, orientovaně na akci. Max 4 věty."

Výsledek: AI emaily přestal přepisovat. 8 z 10 výstupů šlo přímo – maximálně s jednou drobnou úpravou.`,
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
    taskFallback: `Pokud nevíš, jak odpovědět na otázky, zkus si nejdřív odpovědět na tyhle:

– Kde teď ukládám poznámky a nápady? (hlava / telefon / appka / notesky / email)
– Kolikrát za poslední měsíc mi chyběla informace, o které jsem věděl/a, že ji mám – ale nemohl/a jsem ji najít?
– Jaký typ věcí se mi ztrácí nejčastěji? (zákaznická zpětná vazba / nápady / kontext z rozhodnutí / zdroje a články)

Příklad odpovědí:
Kde ukládám: hlava + poznámky v telefonu, nesystematicky
Co se ztrácí: kontext z minulých rozhodnutí a zpětná vazba zákazníků
Jedno místo jako základ: Notion – složka nazvaná "Inbox"`,
    taskExample: `Jak chaos prompt pomohl Davidovi:

Vstup:
"Mám chaos ohledně rebrandingu naší firmy. Zákazníci reagují jinak na nový vizuál, někteří se ptají na změnu názvu, nevím, jestli to celé dělat nebo ne – a nemám kapacitu na velký projekt."

AI výstup:
Bloky: 1) Zákaznická reakce na vizuál (pozitivní), 2) Otázka názvu (nevyřešená), 3) Kapacita na rebranding (nejasná).

Klíčová otázka: Je to rebranding vizuálu, nebo rebranding identity? Jsou to dva různé projekty s jiným rozsahem a jiným dopadem.

První kroky: 1) Zeptat se 5 klíčových zákazníků na reakci. 2) Rozlišit vizuál vs. název jako samostatná rozhodnutí. 3) Odhadnout kapacitu do konce kvartálu.

Co ještě potřebuješ vědět: Jaký je původní důvod k rebrandingu? Zákaznická reakce, nebo interní záměr?

Výsledek: David měl za 10 minut jasno v tom, co vůbec řeší. Dřív by na to potřeboval hodinu s kolegou.`,
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
    taskFallback: `Jak vypadá Capture inbox v praxi – příklady toho, co tam patří:

Nápady (zachyť hned, netřiď):
→ "Co kdybychom posílali zákazníkům video místo textového onboardingu?"
→ "Šablona pro nabídku funguje, ale chybí sekce s referencemi."

Zdroje:
→ Článek o AI agentech, ke kterému se chceš vrátit
→ Citát z podcastu, který chceš použít v prezentaci

Zpětná vazba:
→ "Zákazník říkal: přeji si víc konkrétních příkladů, ne jen teorii."
→ "Na workshopu se zaseklo 60 % lidí u stejného kroku – co to říká o zadání?"

Klíč: do inboxu jde vše bez třídění. Netřiď, nerozvíjej. Jen zachyť.`,
    taskExample: `Co se stalo, když Klára začala Capture systém používovat:

Před Capture: Každý týden ztratila 3–4 nápady nebo postřehy, protože je nezachytila.

Po nastavení inboxu (složka "Inbox – nezpracované" v Notion):
Za první týden zachytila 12 položek: 4 nápady na obsah, 3 zdroje, 5 postřehů ze zákaznických hovorů.

Jeden konkrétní případ:
Zákazník řekl v hovoru: "Vaše dokumentace je dobrá, ale musím v ní dost hledat."
Klára to zachytila jako: "Zákazník: dokumentace hůře navigovatelná – chybí obsah nebo indexy?"
O 2 týdny později při práci na dokumentaci tuto poznámku vytáhla a opravila přesně ten problém.

Bez Capture by na to zapomněla. S ním: postřeh z hovoru se proměnil v konkrétní zlepšení produktu.`,
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
    taskFallback: `Zkus Clean prompt na těchto poznámkách (nebo vlož vlastní):

Hrubé poznámky z meetingu:
"Q2 plán – Petr říkal málo zdrojů. Jana chce odložit projekt X. Tomáš: souhlasí, ale deadline Q3 musí vydržet. Já jsem měl/a pocit, že projekt Y je v nebezpečí taky – nikdo to nezmínil. Příště se potkáme za 2 týdny."

Prompt:
"Zpracuj tyto poznámky: 1) Stručné shrnutí (3–5 vět). 2) Klíčová rozhodnutí. 3) Konkrétní kroky – kdo, co, do kdy. 4) Krátký follow-up email pro tým."`,
    taskExample: `Clean v praxi – ze 4 řádků k hotovému zápisu:

Martina vložila hrubé poznámky (8 řádků psaných za meetingu).

AI výstup za 45 sekund:

Shrnutí: Q2 plán je ohrožen kapacitou. Tým se shodl na odložení projektu X do Q3.

Klíčová rozhodnutí: Projekt X odložen. Deadline Q3 zůstává. Projekt Y bude přehodnocen na příštím meetingu.

Kroky: Jana připraví revidovaný Q2 plán do pátku. Martina přidá na příští program: stav projektu Y.

Follow-up email (připravený k odeslání):
"Ahoj, shrnutí z dnešního meetingu: odložili jsme projekt X do Q3, Q3 deadline zůstává. Jana pošle nový plán do pátku. Příště: situace projektu Y. Pokud jsem něco přehlédl/a, dejte vědět."

Martina přečetla, přidala jednu větu s kontextem a odeslala. Celkem 3 minuty místo 25.`,
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
    taskFallback: `Zkus Connect s tímto konkrétním scénářem:

Kontext z druhého mozku (vlož místo něj vlastní):
"Zákazník ABC, 150 lidí, IT firma, hlavní rozhodovatel. Historie: jednali jsme v říjnu – zájem byl, projekt nezačal kvůli rozpočtu na Q1. V únoru jsem psal/a – neodpověděli. Aktuálně: nový rozpočtový rok, slyšel/a jsem od kolegy, že hledají nové řešení."

Zadání: "Na základě tohoto kontextu napiš email s návrhem na znovu zahájení spolupráce."`,
    taskExample: `Srovnání – bez kontextu vs. s kontextem z druhého mozku:

Bez kontextu:
Jakub zadal AI: "Napiš email, že chceme obnovit spolupráci s klientem."
→ Výsledek: obecný cold outreach email, mohl ho dostat kdokoliv. Klient ani neodpověděl.

S kontextem z druhého mozku:
Jakub vložil 4 věty o historii s klientem a co aktuálně ví o jejich situaci.
→ Email zmínil konkrétní rozhovor z října, uznal, že Q1 nebyl správný čas, a navázal na to, že teď to může dávat smysl.

Klientova reakce: odpověděl do hodiny a navrhl call.

Proč to fungovalo: email ukazoval, že Jakub situaci zná a váží si původního rozhovoru.
Bez kontextu v AI: to nejde napsat. S kontextem: AI to sestaví za minutu.`,
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
    taskFallback: `Pokud nevíš, co napsat – zkus odpovědět na tyhle konkrétní otázky:

Co reálně používám: Kolikrát za poslední týden jsem použil/a AI? Na co přesně?
Největší posun: Byl to moment, kdy výstup překvapil kvalitou? Kdy jsem ušetřil/a čas?
Co odkládám: Je to nastavení asistenta? Capture systém? Šablony? Proč to odkládám?
Na co se zaměřím dál: Je to PACT? Druhý mozek? Lepší prompty?`,
    taskExample: `Halfway checkpoint Josefa (projektový manažer, B2B SaaS):

Co reálně používám: Claude každý den – zápisy z meetingů, follow-upy, shrnutí pro vedení. Odhadem 45 minut ušetřeno denně.

Největší posun v myšlení: "Přestal jsem se ptát 'jak to napsat' a začal se ptát 'co tím chci dosáhnout'. Tohle změnilo způsob, jak zadávám práci AI i lidem."

Co odkládám: Nastavit vlastního asistenta pro komunikaci se zákazníky. Vím, že by pomohlo, ale zatím to nevypadá urgentně.

Na co se zaměřím ve druhé polovině: PACT framework – chci mít strukturované prostředí, ne jen ad hoc prompty.

Konkrétní výsledek za 14 dní: 3 funkční šablony, 1 workflow (meeting → zápis → follow-up), Tone of voice nastavený.`,
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
    taskFallback: `Zkus tento projekt prompt přímo v AI:

"Pracuji na projektu: Příprava nové onboardingové emailové sekvence pro zákazníky.
Cíl: zákazník pracuje samostatně do 2 týdnů od podpisu smlouvy.
Deadline: 6 týdnů.
Tým: já + kolegyně z marketingu.
Zdroje: stávající emaily, zákaznická zpětná vazba, přístup k nástrojům.

Prosím o: 1) Rozložení na fáze s milníky. 2) Top 3 rizika nebo neznámé. 3) Co bych měl/a udělat jako první."`,
    taskExample: `Co projekt prompt přinesl Nikole:

Nikola měla záměr – onboarding sekvence pro nové zákazníky. Nevěděla, kde začít.

AI výstup:
Fáze 1 (týden 1–2): Analýza – zmapovat, kde zákazníci v onboardingu odpadají, jaké dotazy se opakují.
Fáze 2 (týden 3): Obsah – napsat 5 emailů s AI, 3 varianty každého, vybrat nejlepší.
Fáze 3 (týden 4): Revize + nastavení – zapracovat feedback, technické nastavení v Mailchimp.
Fáze 4 (týden 5–6): Pilotní spuštění + sběr zpětné vazby.

Top 3 rizika: 1) Schválení obsahu trvá déle (nemá kdo), 2) Technická integrace s CRM, 3) Kapacita grafika na vizuály.

První krok: Strávit 1 hodinu analýzou zákaznické zpětné vazby z posledních 6 měsíců.

Co Nikola říká: "Normálně bych strávila den přemýšlením o plánu. S AI jsem měla strukturu za 20 minut a okamžitě jsem věděla, co udělat dnes."`,
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
    taskFallback: `Zkus napsat systémovou instrukci pro svého prvního asistenta:

Role: Komunikační asistent pro psaní odpovědí zákazníkům a interní komunikaci.

Instrukce (zkopíruj a uprav pro sebe):
"Jsi můj osobní komunikační asistent.
Styl: neformální ale věcný, bez korporátních frází, krátké věty (max 3–4 na email).
Vždy přecházíš rovnou k věci – žádné úvody jako 'Dovolte mi uvést'.
Před psaním se zeptej: pro koho to je a co je cílem zprávy.
Výstup: vždy max 150 slov, pokud neřeknu jinak."`,
    taskExample: `Co se změnilo po nastavení asistenta u Radka:

Před nastavením:
– Každý chat znovu popisoval svůj styl.
– První verze emailu: 8 vět, formální, příliš výmluvný.
– Přepisoval každý druhý email.

Po nastavení systémové instrukce:
– První verze emailu: 3–4 věty, věcné, tón sedí.
– Přepisuje 1 z 10 emailů.
– Ušetří 5–7 minut na každém emailu.

Konkrétní výstup po prvním testu:
Zadání: "Zákazník napsal, že dodávka dorazila pozdě. Napiš omluvu a nabídni řešení."
AI výstup s asistentskou instrukcí: "Ahoj Pavle, mrzí mě prodlení. Zásilka dorazila s 2denním zpožděním kvůli kapacitní situaci u dopravce. Jako kompenzaci ti nabízíme [X]. Příští objednávka bude prioritizovaná."
Radek to odeslal beze změn.`,
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
    taskFallback: `Zkus si napsat první blok kontextu pro svou nejčastější situaci:

Vzor pro projektového manažera (uprav pro sebe):
"[KONTEXT: Pracuji jako projektový manažer v B2B SaaS firmě. Píšu hlavně pro interní tým a zákazníky z korporátního sektoru. Styl: věcný, přímý, bez korporátního žargonu. Co nechci: prázdná adjektiva, pasivní věty, vágní závěry. Výstup vždy max 5 vět, pokud neřeknu jinak.]"

Jak ho pak používáš: vlož ho na začátek každého promptu, kde záleží na tónu a formátu výstupu.`,
    taskExample: `Jak blok kontextu změnil každodenní práci Luboše:

Bez bloku kontextu – psal každý prompt takto:
"Napiš shrnutí projektu pro zákazníka. Buď stručný."
→ AI: 7 vět, formální tón, generická struktura, nutné přepisovat.

S blokem kontextu:
"[KONTEXT: Projektový manažer v SaaS, zákazník z korporátu, věcný styl, max 5 vět]
Napiš shrnutí stavu projektu – jsme o týden napřed, zákazník to neví."
→ AI: 4 věty, konkrétní, věcný tón, žádné přepisování.

Co Luboš dělá teď:
Má blok kontextu uložený jako 3 varianty (pro zákazníka / pro vedení / pro tým).
Vloží příslušnou variantu na začátek promptu a jde rovnou na věc.
Průměrný čas na přípravu statusu: 5 minut místo 20.`,
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
    taskFallback: `Příklad toolkit reviewu – jak to může vypadat:

Používám každý týden: Claude (každý den – drafty, shrnutí), Notion (zápisky a druhý mozek).
Nainstalované, ale málo používám: Perplexity (zkusil/a jsem 2×), Grammarly (zapínám zřídka).
Nevyřešená potřeba: rychlé zpracování nahrávek z meetingů bez ruční práce.
Stojí za prozkoumání: Otter.ai nebo nativní přepis v Notion.

Kritéria pro rozhodnutí o novém nástroji:
– Jaký konkrétní problém řeší? (ne: "vypadá zajímavě")
– Jak rychle uvidím první výsledek?
– Integruje se s tím, co už mám a používám?`,
    taskExample: `Výsledek toolkit reviewu – Alžběta, marketingová manažerka:

Po revizi zjistila: má 7 různých AI nástrojů nainstalovaných, reálně používá 2.

Klíčový poznatek: "Pokaždé, když vidím nový nástroj, zkusím ho a pak ho nepoužívám. Ztrácím čas nastavováním místo samotnou prací."

Rozhodnutí, která udělala:
1. Hlavní nástroj: Claude – zná ho, funguje, neopouštět ho pro každou novinku.
2. Odinstalovat: Jasper, Writesonic – překrývají se s Claude, nepoužívá je.
3. Prozkoumat do 2 týdnů: Otter.ai – nahrávky meetingů jsou skutečná nevyřešená potřeba.
4. Pravidlo pro každý nový nástroj: "Do 3 dnů musí ušetřit čas, jinak ho nezavedu."

Výsledek: jednodušší stack, jasno v tom, co a proč.`,
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
    taskFallback: `Zkus tento WBS prompt přímo:

"Pracuji na projektu: [napiš svůj záměr].
Cíl: [co je úspěch].
Deadline: [datum nebo čas v týdnech].
Tým / zdroje: [kdo a co máme].

Vytvoř prosím:
1) Fáze projektu (max 4–5)
2) Klíčové milníky v každé fázi
3) 3–5 konkrétních úkolů pro každou fázi
4) Top 3 rizika nebo klíčové neznámé"`,
    taskExample: `WBS v praxi – launch nových cen a balíčků pro zákazníky:

Radovan zadal záměr: Spuštění nové cenové struktury a balíčků pro existující zákazníky.
Deadline: 6 týdnů. Tým: on + obchod + marketing.

AI výstup:
Fáze 1 – Analýza (týden 1): Zmapovat zákazníky podle segmentu, definovat nové balíčky.
Fáze 2 – Příprava (týden 2–3): Cenová strategie, komunikační plán, interní školení týmu.
Fáze 3 – Pilotní komunikace (týden 4): Oslovit klíčové zákazníky individuálně před veřejným oznámením.
Fáze 4 – Spuštění (týden 5): Email kampaň, update webu, FAQ pro support.
Fáze 5 – Stabilizace (týden 6): Zpracovat otázky zákazníků, vyhodnotit první reakce.

Top 3 rizika: 1) Zákazníci přejdou na levnější plán → připravit argumenty pro retenci. 2) Právní revize podmínek zabere déle. 3) Kapacita supportu na vlnu dotazů po spuštění.

Radovan: "WBS za 15 minut. Normálně bych ho skládal hodinu a stejně bych na 2 rizika zapomněl."`,
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
    taskFallback: `Jednoduchá pravidla, která lze zavést hned:

Vždy přečíst před odesláním:
→ Emaily zákazníkům nebo partnerům (tón a vztah jsou příliš důležité)
→ Nabídky a smlouvy (přesnost faktů a čísel)
→ Cokoli, co jde ven s mým jménem (odpovídám za to)

Stačí rychlý pohled:
→ Interní shrnutí a poznámky pro tým
→ První drafty dokumentů k dalšímu zpracování
→ Zápisy ze schůzek pro interní použití

Přímo bez kontroly:
→ Brainstorming a nápady k dalšímu výběru
→ Research a shrnutí zdrojů pro vlastní potřebu
→ Šablony, kde fakta doplňuju sám/sama`,
    taskExample: `Případ, kdy Human-in-the-loop zachránil situaci:

Tomáš nechával AI psát odpovědi zákazníkům a posílal je bez čtení.

Jednou AI napsala: "Váš požadavek nespadá do rozsahu naší smlouvy."
Přitom zákazníkova situace byla hraniční – Tomáš by výjimku udělal.

Zákazník se cítil odmítnutý. Trvalo 2 emaily navíc a telefonát, než se situace srovnala.

Co Tomáš změnil:
Jedno jednoduché pravidlo: Cokoli jde zákazníkovi = přečíst před odesláním.
Ne proto, že AI dělá chyby. Ale proto, že zákaznický vztah závisí na tónu a kontextu, který AI bez hlubšího nastavení nedokáže posoudit.

Čas kontroly: 30 sekund na email.
Cena špatného výstupu: hodiny srovnávání.`,
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
    taskFallback: `Zkus Perception prompt na jedné situaci, která tě teď zajímá:

"Podívej se na tuto situaci ze tří perspektiv:
1) Zákazník nebo klient, který to zažívá
2) Kritický hlas, který vidí rizika
3) Expert z jiného oboru, který by to řešil jinak

Situace: [napiš, co řešíš]

Pro každou perspektivu napiš: Co tato osoba vidí jako hlavní výhodu nebo problém? Co by řekla, že je přehlížené?"`,
    taskExample: `Perception v praxi – rozhodnutí o novém produktu:

Hana řešila, jestli přidat levnější verzi služby pro startupy.

AI výstup ze tří perspektiv:

Zákazník (startup founder, omezený budget):
"Levnější verze? Jasně chci. Ale potřebuji vidět reference od firem jako já a jasnou kalkulaci, co dostanu za méně."

Kritický hlas (rizika):
"Levnější tier = víc zákazníků s vyšším support zatížením a nižší marží. Zároveň to může kanibalizovat zákazníky, kteří by jinak zaplatili plnou cenu."

Expert z jiného oboru (SaaS growth):
"Freemium nebo self-service tier funguje, ale jen pokud zákazník nepotřebuje onboarding. Jinak náklady přesáhnou příjem. Zvládat to bez lidského onboardingu je podmínka, ne detail."

Co Hana neviděla:
→ Maržový problém a self-service jako podmínku, ne bonus.
→ Bez tohoto pohledu by spustila levnější verzi a zjistila problém až za 3 měsíce.`,
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
    taskFallback: `Zkus Intelligence prompt na tomto vstupu (nebo vlož vlastní):

Vzorový vstup – zpětná vazba po workshopu (8 odpovědí):
"Skvělé tempo, ale moc teorie. Chyběly příklady. Hodně jsem si odnesl/a. Moc nástrojů najednou. Chtěl/a bych víc cvičení. Přednášející byl/a výborný/á. Nestíhal/a jsem zapisovat. Moc teorie, málo praxe."

Prompt: "Analyzuj tuto zpětnou vazbu: 1) Hlavní vzorce nebo opakující se témata. 2) Co je nejdůležitější pro příště. 3) Co je překvapivé nebo neočekávané. 4) Co doporučuješ změnit jako první."`,
    taskExample: `Intelligence v praxi – analýza zákaznické zpětné vazby:

Veronika shromáždila 15 odpovědí z průzkumu po prvním měsíci používání produktu.
Místo ručního čtení vložila vše do AI.

AI výstup:
Vzorce: 11/15 hodnotí "jednoduchost" kladně. 8/15 zmiňuje "chybějící integraci s nástrojem X". 5/15 chce lepší notifikace.

Nejdůležitější: Integrace s nástrojem X je bloker pro část zákazníků – pravděpodobně ovlivňuje retenci.

Překvapivé: Cena nebyla zmíněna ani jednou. Není to problém.

Doporučení: Prioritizovat integraci s nástrojem X jako první technický úkol Q2.

Co by Veronika udělala bez AI:
Přečetla by odpovědi, udělala si intuitivní dojem, pravděpodobně by přehlídla téma integrace jako "jen jedna odpověď".

S Intelligence: strukturovaný výstup za 2 minuty, konkrétní rozhodnutí pro Q2 plán.`,
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
    taskFallback: `Zkus Memory prompt na tomto konkrétním scénáři (nebo vlož vlastní):

Scénář: Schůzka s klientem, se kterým jsi naposledy jednal/a před 3 měsíci.

Kontext, který vložíš do AI:
"Klient ABC: zákaznická firma, 80 lidí, mají problémy s interní komunikací. Minulá schůzka (září): zájem o náš produkt, brzdil je budget na Q4. V lednu jsem psal/a – neodpověděli. Teď mají nový Q2 budget."

Zadání: "Na základě tohoto kontextu navrhni, jak zahájit schůzku a co zmínit jako první."`,
    taskExample: `Memory superpower v praxi – příprava na klientský call:

Michal má call za 30 minut s klientem, se kterým naposledy mluvil 4 měsíce zpátky.

Bez Memory (jak to dělal dřív):
Prošel emaily 15 minut. Dost kontextu si stejně nepamatoval. Na callu se ptal na věci, které klient dřív říkal – to působilo neprofesionálně.

S Memory (jak to dělá teď):
Michal má v Notion pro každého klíčového klienta krátký dokument: co řeší, co bylo rozhodnuto, co je bloker, poslední interakce.

Vložil do AI: "Tady je kontext ke klientovi ABC: [4 věty z Notion]."
AI output: Doporučený úvod callu, na co navázat, co klientovi mohlo mezitím dojít, otázky k ověření.

Výsledek callu: klient řekl "vidím, že si pamatujete, co jsme řešili" – a schůzka šla rychleji.

Klíčové: AI Memory nenahrazuje znalost klienta. Doplňuje to, co máš uloženo, a pomůže s tím vstoupit do situace připravený/á.`,
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
    taskFallback: `Zkus Creation workflow na LinkedIn postu nebo krátkém textu:

Záměr: napsat post o tom, co ti pomohlo v práci za poslední měsíc.

Prompt:
"Napiš mi 3 varianty LinkedIn postu na toto téma: [tvoje téma].
Varianta 1: praktický seznam (co jsem změnil, co funguje)
Varianta 2: osobní příběh jedné konkrétní situace
Varianta 3: kontrariánský pohled nebo překvapivé zjištění
Cílová skupina: [kdo tě čte]. Tón: [jak chceš znít]. Max 150 slov každá varianta."`,
    taskExample: `Creation v praxi – LinkedIn post o AI v projektovém řízení:

Petr chtěl napsat post, ale seděl 40 minut u prázdné stránky. Napsal jednu verzi, nebyl spokojený, odkládal.

S Creation workflow: zadal záměr, cílovou skupinu a požádal o 3 varianty. Za 3 minuty měl materiál.

Varianta 1 (seznam): "5 věcí, které přestávám dělat ručně: zápisy z meetingů, follow-up emaily, status reporty..."
Varianta 2 (příběh): "Minulý čtvrtek jsem měl 2 hodiny na přípravu prezentace pro vedení. S AI jsem měl draft za 35 minut a zbyl čas na přípravu odpovědí na otázky."
Varianta 3 (kontra): "AI mi nepomohla s kreativitou. Pomohla mi zbavit se práce, která kreativitu blokovala."

Petr vybral prvky z varianty 1 a 2, zkombinoval je a přidal svůj hlas.

Výsledný post: 3× vyšší engagement než jeho průměr.
Čas: 15 minut místo 40.`,
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
    taskFallback: `Zkus Connection prompt na jedné konkrétní situaci:

Situace: Sdělit zákazníkovi, že projekt má 2týdenní skluz.

Prompt:
"Chci sdělit [zákazníkovi / senior manažerovi], že projekt se zpozdí o 2 týdny.
Příjemce: očekává výsledky, nechce výmluvy bez řešení.
Cíl: udržet důvěru, oznámit změnu, domluvit nový termín.

Navrhni: 1) Formulaci, která je přímá, ale udržuje vztah. 2) Co by mohlo být vnímáno špatně. 3) Jak uzavřít email s jasným dalším krokem."`,
    taskExample: `Connection v praxi – těžká zpráva zákazníkovi:

Jana měla napsat klientovi, že projekt bude hotový o 3 týdny déle, než bylo slíbeno.

Bez AI: psala 30 minut. Měla 4 verze. Pořád jí přišly buď příliš omlouvavé nebo příliš strohé.

S Connection promptem – vstup: popsala situaci, příjemce (senior manažer v korporátu, nesnáší vágní odpovědi), cíl (udržet vztah + domluvit nový termín).

AI výstup:
"Vážený Michale, píšu vám s informací, která mě mrzí: závěrečná fáze projektu se posune o 3 týdny – na [nový datum]. Příčina: technická komplikace při integraci, kterou jsme identifikovali teprve tento týden. Přidáváme závěrečnou kontrolu navíc a nový termín je realistický. Navrhujeme 20minutový call příští úterý."

Co AI označila jako riziko: pasivní formulace a vágní příčiny ("komplikace") – Jana to upřesnila na konkrétní technický detail.

Výsledek: Klient odpověděl den nato s potvrzením callu. Žádná eskalace.`,
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
    taskFallback: `Pokud nevíš, co do tří vrstev napsat, zkus tato vodítka:

Mindset – co se reálně změnilo v tom, jak přemýšlíš?
→ "Ptám se teď nejdřív na výsledek, ne na aktivitu."
→ "Věci, které se opakují, beru jako signál pro šablonu, ne výzvu být rychlejší."

Tools – co reálně funguje a chceš udržet?
→ Konkrétní šablony, prompty nebo workflow, které používáš každý týden.

Superpowers – která ti dává největší hodnotu?
→ Kde díky AI vidíš víc, tvoříš rychleji nebo komunikuješ lépe?`,
    taskExample: `Reflexe AI Adoption po 26 dnech – Jana, HR manažerka:

Mindset:
"Největší posun: přestala jsem brát AI jako vyhledávač. Teď jí zadávám práci se čtyřmi částmi – a výstupy jsou použitelné napoprvé. Ušetří mi to přepisování každého druhého textu."

Tools:
"Odnáším si: 1) Šablonu pro náborový inzerát (s AI ji mám za 15 min místo 2h), 2) Workflow meeting → zápis → follow-up, 3) Tone of voice nastavený pro interní komunikaci."

Superpowers:
"Nejčastěji používám Creation – draft čehokoliv je za minuty. A Intelligence – analýza zpětné vazby z exit interviews mi ukázala vzorce, které bych ručně neviděla."

Celkové zhodnocení: "Za 26 dní jsem nezměnila každou část práce. Ale 5–6 konkrétních věcí, které dělám teď jinak, mi dává zpět 2–3 hodiny týdně."`,
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
    taskFallback: `Příklad hotového AI systému na 1 stránce (uprav pro sebe):

Na co AI používám nejčastěji:
→ Claude každý den: drafty emailů, shrnutí, zápisy z meetingů

Uložené prompty a šablony:
→ Tone of voice instrukce (3 věty popisující můj styl)
→ Šablona follow-up emailu po schůzce
→ Prompt pro čištění zápisů z meetingů
→ WBS prompt pro nové projekty

Workflow:
→ Schůzka → hrubé poznámky → AI zápis + follow-up (15 min místo 45 min)

Druhý mozek:
→ Notion: složka "Inbox" + týdenní Clean rutina (20 min každý pátek)

Pravidlo:
→ Cokoli jde zákazníkovi nebo partnerovi = přečíst před odesláním`,
    taskExample: `Jak systém změnil práci za poslední 4 týdny – Ondřej, konzultant:

Situace před challenge: AI používal ad hoc, bez struktury. Pokaždé začínal od nuly.

Systém, který si sestavil:
– 4 uložené prompty (email, zápis, shrnutí, WBS)
– 1 fungující workflow (schůzka → Capture → AI zpracování → follow-up)
– Notion inbox s týdenní Clean rutinou
– Pravidlo: zákaznická komunikace = lidský pohled vždy

Co to v praxi změnilo:
→ Zápisy z meetingů: 25 min → 5 min
→ Příprava nabídek: 2 hodiny → 45 minut
→ Týdenní reporty: 40 min → 10 min

Celkem: odhadem 3–4 hodiny zpět každý týden.

Ondřej: "Systém není dokonalý. Ale existuje. A to je celý rozdíl."`,
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
    taskFallback: `Pokud nevíš, co si udržet – tady je 5 věcí, které mají smysl zachovat vždy:

1. Alespoň jeden uložený prompt, který používáš každý týden
2. Jedno místo pro Capture (inbox), kam jde vše bez třídění
3. Pravidlo Human-in-the-loop: cokoli jde ven s tvým jménem = přečíst
4. Tone of voice nastavení pro nejčastější typ komunikace
5. Jedno konkrétní místo, kde ukládáš šablony a prompty

To je základ. Zbytek lze stavět postupně.`,
    taskExample: `90denní plán Michaely (UX designérka):

Keep:
→ Claude na denní bázi pro texty a shrnutí (ušetří 45 min/den)
→ Šablona pro brief k designovým zadáním (týden bez ní ukázal, jak moc ji potřebuji)
→ Pravidlo: cokoli jde klientovi = vždy přečíst

Build:
→ Druhý mozek pro projektovou dokumentaci – teď mám poznámky všude, chci je centralizovat v Notion
→ Vlastní AI asistent s Tone of voice pro zákaznickou komunikaci

Share:
→ Ukázat kolegovi Jirkovi, jak dělám zápisy z meetingů – mohl by ušetřit hodinu denně

Measure:
→ Za 90 dní: min. 5 projektů bez zbytečného přepisování dokumentace od nuly
→ Konkrétní pocit: "příprava na nový projekt mi nezabere celý den"

Michaela: "Neřeším, jestli 90denní plán bude dokonalý. Řeším, aby za 3 měsíce existoval."`,
    taskTip: "Pracuj přímo v Claude, ChatGPT nebo Gemini – výsledek si ulož do Notion, Google Docs nebo Apple Notes.",
    teaser: "",
  },
];
