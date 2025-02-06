
"use client"
import { Box, Typography } from "@mui/material";


export default function TermsView() {
  return (
    <Box sx={{ 
        pt: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pb: 12, 
      }}>
        <Typography variant="h2" gutterBottom sx={{ my: 2 }}>
          Podmienky používania
        </Typography>
        <Typography variant="body1"  >
          Vitajte na stránke ZoškApp. Používaním tejto stránky súhlasíte s nasledujúcimi podmienkami používania. Ak nesúhlasíte s týmito podmienkami, prosím, nepoužívajte našu stránku.
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ my: 2 }}>
          1. Používanie stránky
        </Typography>
        <Typography variant="body1"  >
          Stránka ZoškApp je určená na zdieľanie a prezeranie fotografií. Používatelia sú povinní používať stránku v súlade s platnými zákonmi a predpismi. Je zakázané zverejňovať obsah, ktorý je nezákonný, urážlivý, ohováračský, obscénny alebo inak nevhodný.
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ my: 2 }}>
          2. Registrácia a účet
        </Typography>
        <Typography variant="body1"  >
          Na používanie niektorých funkcií stránky je potrebná registrácia. Používatelia sú povinní poskytovať pravdivé a aktuálne informácie pri registrácii. Používatelia sú zodpovední za ochranu svojho účtu a hesla a za všetky aktivity, ktoré sa uskutočnia pod ich účtom.
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ my: 2 }}>
          3. Ochrana osobných údajov
        </Typography>
        <Typography variant="body1"  >
          Ochrana vašich osobných údajov je pre nás dôležitá. Prečítajte si naše Zásady ochrany osobných údajov, aby ste sa dozvedeli viac o tom, ako zhromažďujeme, používame a chránime vaše osobné údaje.
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ my: 2 }}>
          4. Duševné vlastníctvo
        </Typography>
        <Typography variant="body1"  >
          Všetok obsah na stránke ZoškApp, vrátane textov, obrázkov, log a dizajnu, je chránený autorskými právami a ďalšími právami duševného vlastníctva. Používatelia nesmú kopírovať, reprodukovať ani distribuovať obsah bez predchádzajúceho písomného súhlasu.
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ my: 2 }}>
          5. Zmeny podmienok používania
        </Typography>
        <Typography variant="body1"  >
          Vyhradzujeme si právo kedykoľvek zmeniť tieto podmienky používania. O zmenách vás budeme informovať prostredníctvom našej stránky. Pokračovaním v používaní stránky po zmenách podmienok súhlasíte s týmito zmenami.
        </Typography>
        <Typography variant="h3" gutterBottom sx={{ my: 2 }}>
          6. Kontakt
        </Typography>
        <Typography variant="body1"  >
          Ak máte akékoľvek otázky alebo pripomienky týkajúce sa týchto podmienok používania, kontaktujte nás na emailovej adrese: support@zoskapp.sk.
        </Typography>
      </Box>
  );
}