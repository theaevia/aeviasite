// Centralised service booking redirects
import { Router } from "express";

export const go = Router();

const DEST: Record<string, string> = {
  // Square Site
  square_site: "https://the-aevia.square.site/",
  
  // Skin Consultations
  skin_consultations: "https://book.squareup.com/appointments/flwwunfdy1hm72/location/L1TKSRMBS3N9H/services",
  skin_virtual: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/YVJF3NEOQ3BDDDBRTCLVHKIN",
  skin_clinic: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/Y3OKJD2YYAJ63DKH3GUEB5S6",

  // Anti-wrinkle 
  all_anti_wrinkle: "https://app.squareup.com/appointments/buyer/widget/1k3jc9ixa10yk7/L1TKSRMBS3N9H",
  three_areas: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/ON4GV5WYYWPY4SQDAJUTO6KC",
  masseter: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/OVJ7CCR56PAS5U6UXCOESIKG",
  nefertiti: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/WL6KSZX75GUXV2IPZD5DVN3B",
  dao: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/UHWQSUZOAETSA4MYBHWGU3QR",
  hyperhidrosis: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/WKPVKNLVYWDO5QXYASJBRDG3",
  contour_duo: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/TJODL43UWGBSOXFWHP4BRWGA",

  // Polynucleotides
  all_pns: "https://app.squareup.com/appointments/buyer/widget/mh0b7onlv9ths6/L1TKSRMBS3N9H",
  face_pns: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/2ZKXKHXJRQCJ34V74F7QTHHU",
  eyes_pns: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/PR5TPFISQ5TS5XKK3MUTMZLD",
  pns_3x: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/TQBUFP46OX3TM66VYQ7X4BV5",

  // Boosters
  skin_boosters: "https://book.squareup.com/appointments/18lb1m8iirrpqg/location/L1TKSRMBS3N9H/services",
  sunekos: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/OGM54Y3R44JDMBBSKD6WVHWJ",
  profhilo: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/QHKI7JHEM3A65CJ4GTNYJTSW",

  // Bio-voluminisation 
  sculptra: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/5YRBIUCURJZQ3NMDACZMXCUW",

  // Signature offers
  wrinkle_reset: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/DHNAE4YPX7TJ2TYXHJX5NWFH",
  glow_revival: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/27TAWF7EQYSCHM6EB6ZIU463",

  //Mind services
  mind_consultation: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/GCC3YKLK465XLBFKMST26IXV",
  clarity_strategy_session: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services/MSQRJ3E3FMVF25P4P2RVX6MH",
  momentum_6: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H/services?service_id=EWO2ZNUMY3K3NX7DWE6R3BIV",
  transformation_12: "https://book.squareup.com/appointments/jwhtw6lg3uleti/location/L1TKSRMBS3N9H?service_id=LGKQHJZFMGCCEJB2N3C4ZJ36",
};

go.get('/go/:slug', (req, res) => {
  const base = DEST[req.params.slug];
  if (!base) return res.status(404).send('Unknown link');

  const qs = new URLSearchParams(req.query as Record<string, string>).toString();
  const url = base + (qs ? (base.includes('?') ? '&' : '?') + qs : '');

  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Robots-Tag', 'noindex');
  res.redirect(302, url);
});
