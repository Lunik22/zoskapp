import { Box, Typography } from "@mui/material";


export default function GdprView() {

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      pt: 12,
      pb: 12,
      px: 2,
    }}>
      <Typography variant="h3" gutterBottom sx={{ my: 2 }}>
        Vážený používateľ,
      </Typography>
      <Typography variant="body1"  >
        Vaše súkromie a ochrana Vašich osobných údajov sú pre nás prioritou. Tento dokument opisuje, akými spôsobmi spracúvame, uchovávame a chránime Vaše osobné údaje v súhlase s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR).
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ my: 2 }}>
        1. Prevádzkovateľ osobných údajov
      </Typography>
      <Typography variant="body1"  >
        Prevádzkovateľom osobných údajov je [Názov spoločnosti], so sídlom [Adresa spoločnosti], IČO: [IČO spoločnosti], zapísaná v obchodnom registri [Názov registra a číslo zápisu].
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ my: 2 }}>
        2. Účel spracovania osobných údajov
      </Typography>
      <Typography variant="body1"  >
        Vaše osobné údaje spracúvame za účelom poskytovania našich služieb, zlepšovania našich služieb, komunikácie s vami a plnenia našich zákonných povinností.
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ my: 2 }}>
        3. Právny základ spracovania
      </Typography>
      <Typography variant="body1"  >
        Spracovanie vašich osobných údajov je založené na vašom súhlase, plnení zmluvy, plnení našich zákonných povinností alebo na našom oprávnenom záujme.
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ my: 2 }}>
        4. Práva dotknutých osôb
      </Typography>
      <Typography component="ul">
        <li>
          <Typography variant="body1"  >
            Právo na prístup k osobným údajom – máte právo získať potvrdenie o tom, či spracúvame vaše osobné údaje, a ak áno, máte právo získať prístup k týmto údajom.
          </Typography>
        </li>
        <li>
          <Typography variant="body1"  >
            Právo na opravu – máte právo na opravu nepresných alebo neúplných osobných údajov.
          </Typography>
        </li>
        <li>
          <Typography variant="body1"  >
            Právo na vymazanie – máte právo na vymazanie vašich osobných údajov, ak už nie sú potrebné na účely, na ktoré boli zhromaždené, alebo ak odvoláte svoj súhlas.
          </Typography>
        </li>
        <li>
          <Typography variant="body1"  >
            Právo na obmedzenie spracovania – máte právo na obmedzenie spracovania vašich osobných údajov v určitých prípadoch.
          </Typography>
        </li>
        <li>
          <Typography variant="body1"  >
            Právo na prenosnosť údajov – máte právo získať vaše osobné údaje v štruktúrovanom, bežne používanom a strojovo čitateľnom formáte a preniesť ich inému prevádzkovateľovi.
          </Typography>
        </li>
        <li>
          <Typography variant="body1"  >
            Právo namietať – máte právo namietať proti spracovaniu vašich osobných údajov na základe oprávneného záujmu.
          </Typography>
        </li>
      </Typography>
      <Typography variant="h4" gutterBottom sx={{ my: 2 }}>
        5. Kontakt
      </Typography>
      <Typography variant="body1"  >
        Ak máte akékoľvek otázky alebo pripomienky týkajúce sa spracovania vašich osobných údajov, kontaktujte nás na emailovej adrese: support@zoskapp.sk.
      </Typography>
    </Box>
  
  );
}