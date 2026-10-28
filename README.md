
Denna appen hämtar information om världs alla länder, till exempel deras huvudstad, flagga, språk, väder, en beskrivning av landet med mer.
Man kan då söka på länder och får information om dem och man kan också filtrera länder baserat på deras region
och söka i en specifik region efter ett land och om det inte finns just i den region så visas att landet finns på hemsida men inte just i den regionen. 
man kan bläddra mellan länderna även när man har sökt och filtrat med region. 


### Ramverk
Jag valde React som ramverk och anledningne till det är att jag har jobbat mest med React under dennna kursen så jag kände mig mest bekväm med React jämförsvis med Next.js Jag gjorde ingen fördjupning 

här är Länken till Appen:
Den är deployade i netlify
https://travelourworld.netlify.app/ 

Jag valde att ha appen på Engelska för att Wikipedias api på svenska hade mindre bilder och intro texter i jämförelse med den engelska versionen.

Reflektion:
Det gick bra at hämta data från det olika apierna tex att använda namnet på landet från REST countries för att hämta wikipedias api intro text och bild för landet, använda använda REST countries huvud stads cornidnater för att hämta vändret.
Gick bra att använda shadcn komponenter och Tailwind CSS för utseendet skulle.
något som vart svårt var paginering för det har jag aldrig jobbat med tidigare och URLsearchparams navigering för på denna skalan var också svårt av samma anledning.
Något jag skulle göra annorlunda nästa gång är att vara  snabbare så jag kan lägga mer tid på att hemsidan ser bättre ut. Till nästa gång vill jag skriva bättre fel meddelade vid ett misslyckat API anrop i api.ts som mer beskriver felet specifikt.



AI-redovisning: Jag använde Copilot för rådgivning, förklaring, kod exempel och felsöking. 



## Om du vill köra projktet lokalt
behöver du Node.js och npm

### Rör att instalera
1.Behöver du klona repot och öppna projektmappen
2.du skriver npm install i din terminal
3.skapa filen .env.local i projekts rotmap inte inuti i src
4.Lägg din REST countries api key där i detta formatet:
VITE_COUNTRIES_API_KEY=din_api_nyckel
5.starta utveckling genom att skriva npm run dev i teminalen
6.kontrolera Typescript och bygg  produktionsversionen med npm run build.
