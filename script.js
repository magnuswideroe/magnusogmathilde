/* Magnus & Mathilde – språk, meny og RSVP
   Norsk står direkte i index.html. Engelsk står i T.en under.
   For å endre en tekst: rediger norsk i index.html og engelsk her (samme nøkkel). */

// Lim inn adressen til skjematjenesten her (f.eks. Formspree eller Google Forms).
// Så lenge den er tom, sendes ingenting.
const RSVP_ENDPOINT = "";

const T = {
  en: {
    "nav.home": "Home",
    "nav.program": "Programme",
    "nav.transport": "Transport",
    "nav.stay": "Accommodation",
    "nav.rsvp": "RSVP",
    "nav.info": "Good to know",
    "nav.menu": "Menu",

    "cover.alt": "Magnus and Mathilde kissing at a dinner table",
        "intro.title": "We're getting married!",
    "intro.lead": "And we hope you'll celebrate with us in Kragerø on 26 June 2027.",
    "facts.ceremonyT": "Ceremony",
    "facts.ceremony": "Skåtøy Church, 1 pm",
    "facts.partyT": "Garden party",
    "facts.dressT": "Dress code",
    "facts.dress": "Summer formal",
    "facts.rsvp": "By 1 April 2027, <a href=\"#rsvp\">here on this site</a>",

    "program.title": "Programme",
    "program.fri": "Friday 25 June",
    "program.friText": "On Friday there will be a chance to get together for those who'd like. More information to come.",
    "program.sat": "Saturday 26 June",
    "program.sun": "Sunday 27",
    "program.soon": "coming",
    "program.soon2": "coming",
    "program.alt": "Old photograph of Skåtøy Church",
    "program.caption": "Skåtøy Church",
    "program.t1": "Ceremony",
    "program.t1d": "Skåtøy Church",
    "program.t2": "Ferry to Langøy",
    "program.t2d": "Guests travel together from Skåtøy pier to the wedding party",
    "program.t3": "Bubbles and aperitifs",
    "program.t3d": "In the garden, Isnesveien 6",
    "program.t4": "Dinner",
    "program.t4d": "With speeches along the way",
    "program.t5": "Cake and dessert",
    "program.t6": "The dance floor opens",
    "program.t6d": "Until the last boat leaves",

    "transport.title": "Transport",
    "transport.lead": "On the day, we'll mostly be travelling by water. We're arranging boats between Kragerø town centre, the church and the party.",
    "transport.alt": "A white house and a red outbuilding by the sea",
    "transport.h1": "To the ceremony",
    "transport.p1": "We're arranging water taxis from Kragerø town centre and other central spots to Skåtøy Church. Let us know in the RSVP form if you need a seat.",
    "transport.h2": "To the garden party",
    "transport.p2": "We've booked a ferry that takes all the guests together from Skåtøy pier, a short walk from the church, to the garden party. The trip takes about 30 minutes.",
    "transport.h3": "Home",
    "transport.p3": "We're booking water taxis that run from the party to the town centre and other places nearby throughout the night.",

    "stay.title": "Accommodation",
    "stay.p1": "We know that many of you will be staying in your own cabins in the area over the wedding weekend. For those who can't or would rather not, we've reserved 20 rooms of different sizes at Hotel Victoria in Kragerø town centre. They can be booked from Friday to Sunday, or from Saturday to Sunday.",
    "stay.help": "We're also happy to help find other options, such as borrowing or renting a cabin nearby. Just get in touch with Magnus.",
    "stay.alt": "Magnus and Mathilde smiling in a tent, Magnus reading a book",
    "stay.whenT": "Available",
    "stay.p2": "From January 2027, first come, first served",
    "stay.howT": "Booking",
    "stay.how": "Send an email to <span class=\"todo\">[email address]</span> with your name, the number of guests and the nights you'd like.",

    "rsvp.alt": "Magnus and Mathilde in sunglasses in front of turquoise water",
    "rsvp.lead": "Please reply by 1 April 2027, on behalf of everyone on your invitation.",
    "rsvp.name": "Name",
    "rsvp.coming": "Will you come?",
    "rsvp.yes": "Yes, of course",
    "rsvp.no": "Sadly not",
    "rsvp.plus": "Who else",
    "rsvp.boat": "Water taxi to the ceremony?",
    "rsvp.boatYes": "Yes, from the town centre",
    "rsvp.boatNo": "No thanks",
    "rsvp.fri": "Friday get-together?",
    "rsvp.friNote": "Friday 25 June, 17:00–21:00",
    "rsvp.friYes": "Yes",
    "rsvp.friNo": "No",
    "rsvp.friMaybe": "Not sure yet",
    "rsvp.allergy": "Allergies",
    "rsvp.msg": "Anything else?",
    "rsvp.send": "Send reply",

    "info.title": "Good to know",
    "info.alt": "Magnus and Mathilde holding each other on a boat, looking out over the sea",
    "info.dress1": "Summer formal. Women: a long dress, not black. Men: a suit, or a tuxedo if you like.",
    "info.dress2": "It's a garden wedding, so choose shoes and outfits with that in mind. We have a tent with walls that can be put up, and blankets if the weather turns bad.",
    "info.speechT": "Speeches",
    "info.speech": "We'd like the evening to flow well, with a good mix of speeches and mingling around the tables. All speeches and performances must be agreed with our toastmaster Torjus on <span class=\"todo\">[phone]</span> in advance, by 1 June 2027 at the latest.",
    "info.allergyT": "Allergies",
    "info.allergy": "Add them to your reply, or let us know at <span class=\"todo\">[email address]</span>.",
    "info.giftT": "Gifts",
    "info.gift1": "Many of our guests are travelling to celebrate this day with us, and we don't expect any gifts. The greatest gift is that you come!",
    "info.gift2": "If you'd still like to give something, a contribution towards our honeymoon would make us very happy. We'd also love:",
    "info.w1": "A camping stove (stormkjøkken) or accessories",
    "info.w2": "A thermos",
    "info.w3": "A record player",
    "info.w4": "A stand mixer (Le Rotier or Ankarsrum)",

    "foot.sees": "See you there!",
    "foot.top": "Back to top"
  }
};

const STATUS = {
  no: {
    missing: "Fyll inn navn og om du kommer.",
    notReady: "Svarskjemaet er ikke koblet til ennå. Send oss gjerne en melding i mellomtiden.",
    sending: "Sender …",
    ok: "Takk! Svaret ditt er sendt.",
    fail: "Svaret ble ikke sendt. Sjekk nettforbindelsen og prøv igjen."
  },
  en: {
    missing: "Please fill in your name and whether you're coming.",
    notReady: "The reply form isn't connected yet. Feel free to send us a message in the meantime.",
    sending: "Sending …",
    ok: "Thank you! Your reply has been sent.",
    fail: "Your reply wasn't sent. Check your connection and try again."
  }
};

/* ---------- Språk (norsk som standard) ---------- */
const textNodes = document.querySelectorAll("[data-i18n]");
const altNodes = document.querySelectorAll("[data-i18n-alt]");
const originalText = new Map([...textNodes].map(n => [n, n.innerHTML]));
const originalAlt = new Map([...altNodes].map(n => [n, n.alt]));
let lang = "no";

function setLang(next) {
  lang = next === "en" ? "en" : "no";
  const en = lang === "en";
  document.documentElement.lang = lang;
  textNodes.forEach(n => { const v = T.en[n.dataset.i18n]; n.innerHTML = en && v ? v : originalText.get(n); });
  altNodes.forEach(n => { const v = T.en[n.dataset.i18nAlt]; n.alt = en && v ? v : originalAlt.get(n); });
  document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  document.title = en ? "Magnus & Mathilde – 26.06.27 · Kragerø" : "Magnus & Mathilde – 26.06.27 · Kragerø";
  try { localStorage.setItem("mm-sprak", lang); } catch (e) {}
  const url = new URL(location.href);
  if (en) url.searchParams.set("lang", "en"); else url.searchParams.delete("lang");
  history.replaceState(null, "", url);
}

function startLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q) return q;
  try { return localStorage.getItem("mm-sprak") || "no"; } catch (e) { return "no"; }
}

document.querySelectorAll(".lang button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
setLang(startLang());

/* ---------- Mobilmeny ---------- */
const bar = document.querySelector(".bar");
const nav = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-btn");
function closeMenu() { nav.classList.remove("open"); bar.classList.remove("menu-open"); menuBtn.setAttribute("aria-expanded", "false"); }
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  bar.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", e => { if (e.target.closest("a")) closeMenu(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

/* ---------- Aktiv knapp ---------- */
const links = [...nav.querySelectorAll("a")];
const sections = links.map(a => document.querySelector(a.getAttribute("href")));

function onScroll() {
  const line = window.scrollY + window.innerHeight * 0.4;
  let current = sections[0];
  sections.forEach(s => { if (s.offsetTop <= line) current = s; });
  if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = sections[sections.length - 1];
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current.id));
}
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", onScroll);
onScroll();

/* ---------- RSVP ---------- */
const form = document.getElementById("rsvp-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const s = STATUS[lang];
  const data = new FormData(form);
  if (!String(data.get("navn") || "").trim() || !data.get("kommer")) { status.textContent = s.missing; return; }
  if (!RSVP_ENDPOINT) { status.textContent = s.notReady; return; }
  status.textContent = s.sending;
  data.append("sprak", lang);
  try {
    const res = await fetch(RSVP_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    status.textContent = s.ok;
  } catch (err) {
    status.textContent = s.fail;
  }
});
