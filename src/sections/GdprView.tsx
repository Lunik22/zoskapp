import { Box, Typography } from "@mui/material";


export default function GdprView() {

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    }}>
      <Typography variant="h6" gutterBottom>
        Vážený používateľ,
      </Typography>
      <Typography paragraph>
        Vaše súkromie a ochrana Vašich osobných údajov sú pre nás prioritou. Tento dokument opisuje, akými spôsobmi spracúvame, uchovávame a chránime Vaše osobné údaje v súhlase s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR).
      </Typography>
      <Typography variant="h6" gutterBottom>
        1. Prevádzkovateľ osobných údajov
      </Typography>
      <Typography component="ul">
        <li>
          <Typography paragraph>
            Názov spoločnosti: [Názov spoločnosti]
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Adresa: [Adresa spoločnosti]
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Kontaktné údaje: [Kontaktné údaje spoločnosti]
          </Typography>
        </li>
      </Typography>
      <Typography variant="h6" gutterBottom>
        2. Účel spracovania osobných údajov
      </Typography>
      <Typography paragraph>
        Vaše osobné údaje spracúvame za účelom [účel spracovania].
      </Typography>
      <Typography variant="h6" gutterBottom>
        3. Práva dotknutých osôb
      </Typography>
      <Typography component="ul">
        <li>
          <Typography paragraph>
            Právo na prístup k osobným údajom
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Právo na opravu osobných údajov
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Právo na vymazanie osobných údajov
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Právo na obmedzenie spracovania osobných údajov
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Právo na prenosnosť osobných údajov
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Právo namietať proti spracovaniu osobných údajov
          </Typography>
        </li>
      </Typography>
      <Typography variant="h6" gutterBottom>
        4. Kategórie osobných údajov
      </Typography>
      <Typography component="ul">
        <li>
          <Typography paragraph>
            Identifikačné údaje: meno, priezvisko, používateľské meno.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Kontaktné údaje: emailová adresa, telefónne číslo.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Profilové údaje: fotografia, osobný popis, záujmy.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Komunikačné údaje: správy a príspevky na platforme.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Technické údaje: IP adresa, súborové logy, cookies.
          </Typography>
        </li>
      </Typography>
      <Typography variant="h6" gutterBottom>
        5. Účel spracovania osobných údajov
      </Typography>
      <Typography paragraph>
        Vaše osobné údaje spracúvame na nasledujúce účely:
      </Typography>
      <Typography component="ul">
        <li>
          <Typography paragraph>
            Prevádzka sociálnej siete a poskytovanie jej funkcionalít.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Personalizácia obsahu a zlepšovanie používateľského zážitku.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Komunikácia so zákazníkmi a riešenie technických problémov.
          </Typography>
        </li>
        <li>
          <Typography paragraph>
            Plnenie právnych povinností.
          </Typography>
        </li>
      </Typography>
      <Typography variant="h6" gutterBottom>
      6. Prenos údajov tretím stranám

      Vaše osobné údaje môžeme preniesť:

      Poskytovateľom IT služieb a hostingových riešení.

      Orgánom verejnej moci v súlade s právnymi predpismi.

      Našim obchodným partnerom na základe Vášho súhlasu.

      7. Vaše práva

      Ako dotknutá osoba máte nasledujúce práva:

      Právo na prístup: Požiadať o potvrdenie, či spracúvame Vaše údaje a získať k nim prístup.

      Právo na opravu: Požiadať o opravu nesprávnych alebo neúplných údajov.

      Právo na vymazanie: Požiadať o vymazanie Vašich údajov, ak už nie sú potrebné na účel spracovania.

      Právo na obmedzenie spracúnia: Požiadať o obmedzenie spracovania v určitých prípadoch.

      Právo na prenosnosť: Požiadať o prenesenie Vašich údajov inej organizácii.

      Právo namietať: Namietať proti spracovaniu Vašich údajov na základe oprávneného záujmu.

      Právo odvolať súhlas: Kedykoľvek odvolať svoj súhlas na spracovanie.

      Svoje práva si môžete uplatniť kontaktovaním nás na [email alebo telefónne číslo].

      8. Cookies

      Používame cookies na zlepšenie našej služby. Viac informácií o cookies nájdete v [politike cookies].

      9. Záverečné ustanovenia

      Tieto podmienky nadobúdajú účinnosť dňom [dátum]. Vyhradzujeme si právo na ich zmenu. O významných zmenách Vás budeme informovať.

      Ak máte akékoľvek otázky, kontaktujte nás na [email alebo telefónne číslo].
      </Typography>
    </Box>
  
  );
}