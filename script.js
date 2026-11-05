/* Mathilde & Magnus – språk, meny og RSVP
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

    "cover.alt": "Mathilde and Magnus kissing at a dinner table",
    "run.intro": "Invitation",
    "intro.title": "We're getting married!",
    "intro.lead": "And we hope you'll celebrate with us in Kragerø on 26 June 2027. We'll be there all weekend, from Friday 25 to Sunday 27 June.",
    "facts.ceremonyT": "Ceremony",
    "facts.ceremony": "Skåtøy Church, 1 pm",
    "facts.partyT": "Garden party",
    "facts.dressT": "Dress code",
    "facts.dress": "Summer formal",
    "facts.rsvp": "By 1 April 2027, <a href=\"#rsvp\">here on this site</a>",

    "int1.altA": "Old photograph of Skåtøy Church",
    "int1.altB": "A white house and a red outbuilding by the sea",
    "int1.words": "<span>the church</span><span>the water</span><span>the garden</span>",

    "program.title": "Programme",
    "program.fri": "Friday 25",
    "program.sat": "Saturday 26",
    "program.sun": "Sunday 27",
    "program.soon": "coming",
    "program.soon2": "coming",
    "program.t1": "Ceremony",
    "program.t1d": "Skåtøy Church",
    "program.t2": "Ferry to Isnes",
    "program.t2d": "Together from Skåtøy pier, about 30 minutes",
    "program.t3": "Bubbles and aperitifs",
    "program.t3d": "In the garden, Isnesveien 6",
    "program.t4": "Dinner",
    "program.t4d": "With speeches along the way",
    "program.t5": "Cake and dessert",
    "program.t6": "The dance floor opens",
    "program.t6d": "Until the last boat leaves",

    "transport.title": "Transport",
    "transport.lead": "On the day, we'll mostly be travelling by water. We're arranging boats between Kragerø town centre, the church and the party.",
    "transport.l1": "Kragerø centre to Skåtøy Church",
    "transport.h1": "Water taxi to the ceremony",
    "transport.p1": "We're arranging water taxis from Kragerø centre to the church. If you need a boat from somewhere else, let us know.",
    "transport.l2": "Skåtøy pier to Isnes",
    "transport.h2": "Ferry to the garden party",
    "transport.p2": "After the ceremony we'll all take a ferry from Skåtøy pier, a short walk from the church. The trip takes about 30 minutes.",
    "transport.l3": "Isnes to Kragerø centre",
    "transport.h3": "Boats home",
    "transport.p3": "Water taxis run from the party to the town centre and other places nearby throughout the night.",
    "transport.dep": "Provisional departures",
    "transport.times": "23:00, 00:00, 01:00 and 02:00",

    "int2.altA": "Mathilde and Magnus smiling in a tent, Magnus reading a book",
    "int2.altB": "Mathilde and Magnus in sunglasses in front of turquoise water",
    "int2.words": "<span>eat</span><span>dance</span><span>sleep</span>",
    "int2.footA": "The evening",
    "int2.footB": "The night",

    "stay.title": "Accommodation",
    "stay.p1": "You're free to stay wherever you like. We've reserved 20 rooms at Hotel Victoria, which can be booked from Friday to Sunday or from Saturday to Sunday.",
    "stay.p2": "The rooms become available in January 2027, first come, first served.",
    "stay.howT": "How to book",
    "stay.how": "Send an email to <span class=\"todo\">[email address]</span> with your name, the number of guests and the nights you'd like.",

    "rsvp.lead": "Please reply by 1 April 2027. One reply for everyone on your invitation is fine.",
    "rsvp.name": "Name",
    "rsvp.coming": "Will you come?",
    "rsvp.yes": "Yes, of course",
    "rsvp.no": "Sadly not",
    "rsvp.plus": "Who else",
    "rsvp.allergy": "Allergies",
    "rsvp.msg": "Anything else?",
    "rsvp.send": "Send reply",

    "info.title": "Good to know",
    "info.dress1": "Summer formal. Women: a long dress, preferably not black. Men: a suit, or a tuxedo if you like.",
    "info.dress2": "It's a garden wedding, so choose shoes that can handle grass.",
    "info.speechT": "Speeches",
    "info.speech": "If you'd like to say a few words, contact our toastmaster Torjus on <span class=\"todo\">[phone]</span> by 1 June 2027.",
    "info.allergyT": "Allergies",
    "info.allergy": "Add them to your reply, or let us know at <span class=\"todo\">[email address]</span> by 1 May 2027.",
    "info.giftT": "Gifts",
    "info.gift1": "Many of you are travelling a long way to be with us, and we don't expect any gifts. Having you there is the greatest gift.",
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
  document.title = en ? "Mathilde & Magnus – Kragerø 26.06.27" : "Mathilde & Magnus – Kragerø 26.06.27";
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
