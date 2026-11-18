Den här appen hämtar information om världens alla länder, till exempel huvudstad, flagga, språk, väder och en beskrivning av landet med mera.

Man kan söka efter länder och få information om dem. Det går också att filtrera länder efter region och söka efter ett land i en specifik region. Om landet inte finns i den valda regionen visas ett meddelande om att landet finns på hemsidan, men inte i den regionen. Man kan bläddra mellan länderna även efter att man har sökt eller filtrerat efter region.

### Ramverk
Jag valde React som ramverk. Anledningen är att jag har arbetat mest med React under kursen, så jag kände mig mest bekväm med React jämfört med Next.js. Jag gjorde ingen fördjupning.

### Länk till appen
Appen är driftsatt på Netlify:
https://travelourworld.netlify.app/

Jag valde att ha appen på engelska eftersom Wikipedias API på svenska hade färre bilder och introduktionstexter jämfört med den engelska versionen.

### Reflektion
Det gick bra att hämta data från de olika API:erna. Till exempel använde jag landets namn från REST Countries för att hämta Wikipedias introduktionstext och bild. Jag använde också REST Countries API:s koordinater för huvudstaden för att hämta vädret.

Det gick bra att använda shadcn-komponenter och Tailwind CSS för att skapa det utseende jag ville ha.

Något som var svårt var paginering, eftersom jag aldrig hade arbetat med det tidigare. Navigering med URLSearchParams var också svårt av samma anledning.

Något jag skulle göra annorlunda nästa gång är att arbeta snabbare, så att jag kan lägga mer tid på att förbättra hemsidans utseende. Nästa gång vill jag skriva bättre felmeddelanden vid misslyckade API-anrop i `api.ts`, som beskriver felet mer specifikt.

### AI-redovisning
Jag använde Copilot för rådgivning, förklaringar, kodexempel och felsökning.

## Om du vill köra projektet lokalt
Du behöver Node.js och npm.

### Så här installerar du projektet
1. Klona repot och öppna projektmappen.
2. Skriv `npm install` i terminalen.
3. Skapa filen `.env.local` i projektets rotmapp, inte inuti `src`.
4. Lägg in din REST Countries API-nyckel i följande format:
   `VITE_COUNTRIES_API_KEY=din_api_nyckel`
5. Starta utvecklingsservern genom att skriva `npm run dev` i terminalen.
6. Kontrollera TypeScript och bygg produktionsversionen med `npm run build`.
