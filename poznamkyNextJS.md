Poznamky NextJS na Ubuntu

<b>ls </b>-- zobrazenie directories

**cd \~/Dokumenty/dev **-- zmenenie directory z root na Dokumenty/dev

***npx ***<create-next-app@latest>*** **-- vytvorenie NextJS aplikacie
na najnovsiu verziu*

npm run dev -- spustit stranku

npm install @mui/material @emotion/react @emotion/styled -- instalacia
material ui do node projektu

*npm install @fontsource/roboto -- instalacia roboto fontu*

*import Typography from \'@mui/material/Typography\'; - importovanie
tagu Typography (nahradza paragraph/\<p\>)*


19.09.2024

Zanechavat komentare!!!!

Priklad zakladnej struktury stranky (front-end)

![](Pictures/100000010000009E0000013DEECF33C7.png){width="4.18cm"
height="8.387cm"}

Tato suborova struktura v NextJS zarucuje **routing **(smerovanie)

Domovska podstranka sa zakladne nachadza v **app **priecinku ale moze sa
pridat aj do priecinka (home)

Na to aby sme vytvorili novy subpage, je potrebne si v app priecinku
vytvorit novy priecinok lubovolnym nazvom. V tomto priecinku je potrebne
vytvorit subor ***page.tsx*** kde budeme pridavat cely obsah podstranky

K podstranke si mozeme vytvorit aj **layout.tsx **kde budeme pridavat
zakladny layout podstranky

Mame este specialny typ subpage subor **not-found.tsx **kde pridavame to
co sa bude zobrazovat ked do browsera zadame subpage ktory sa nenachadza
na nasej stranke

Nazvy suborov su striktne dane a nesmu sa menit!

Zakladna struktura suboru podstranky

![](Pictures/100000010000025A00000189CFDF629F.png){width="12.649cm"
height="8.257cm"}

V strukture by sa malo nachadzat (okrem potrebnych importov)

\- metadata: obsahuje zakladne info o podstranke (napr nazov podstranky
na hornej liste browsera)

\- function Meno(): obsah podstranky

V tomto priklade sa nachadzaju aj tagy z MaterialUI

\- Component: najviac podobny k \<div\> z HTML, spravi automaticky
responzivnost stranky

\- Typography: zakladny text, vedia sa upravit varianty (napr. h1, h3,
body1, \...)

Mame 3 zakladne mody spustenia:

\- npm run dev: spusti developersky mod, compilovanie trva dlshie ale
mate viac serverovych funkcii

\- npm run build: vytvori novy build stranky

\- **npm run start: **zakladne spustenie

26.9.2024

Nastavenie Git

\- **git branch -m main**: zmenit branch repo

\- **git init**: incializovanie gitu

\- **git config --global user.name „username"**: nastavenie username z
github uctu

**- git config --global user.email „email"**: nastav enie emailu z
github uctu

\- **git remote add origin (url): **prepojit github repo s lokalnym
kodom

\-

![](Pictures/10000001000002FB0000004881A438BC.png){width="16.173cm"
height="1.526cm"}: uistenie ci to mame prepojene

\- **git add .**: pridanie vsetkych zmien v kode do commitu

\- Stlacenim tlacidla** commit** vytvorime
![](Pictures/100000010000016B0000023FF1E35DD9.png){width="8.911cm"
height="14.113cm"}novy commit na odoslanie do github

\- ![](Pictures/1000000100000168000000A2E163235F.png){width="9.525cm"
height="4.286cm"}Stlacenim **Publish Branch **nahrame novy kod do github

\- Na hostovanie stranok budeme vyuzivat sluzbu **Vercel,** produkcny
server ktory poskytuje hostovanie NextJS aplikacii na web pod ich
domenou

\- Projekty taha z nasho GitHub uctu, konkretne na tento projekt budem
vyuzivat domenu **zoskapp.vercel.app**

**- Nova struktura
src**![](Pictures/10000001000000CC000002CD0417999A.png){width="4.935cm"
height="17.344cm"}![](Pictures/10000001000000D0000001784ABF424B.png){width="5.503cm"
height="9.948cm"}

\- Do priecinku prispevok a profil sme si vytvorili priecinok **\[id\],
**je to **dynamicky route**, ak do browsera zadame napr
zoskapp.vercel.app/profil/Lunik22

tak sa mi zobrazi detail profilu Lunik22
