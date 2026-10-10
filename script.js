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

    "hero.hand": "we're getting married",
    "hero.date": "Saturday 26 June 2027",
    "hero.down": "Read more",
    "hero.alt": "Magnus and Mathilde kissing at a dinner table",

    "welcome.title": "Dear friends and family",
    "welcome.p1": "Next summer we're getting married at Skåtøy Church, and we'd love for you to be there. After the ceremony we'll take the ferry over to Isnes and celebrate for the rest of the day and night with a garden party by the sea.",
    "welcome.p2": "Here you'll find the programme, how to get around, where to stay and everything practical. We'll add more as our plans come together.",
    "welcome.alt": "Magnus and Mathilde in sunglasses in front of turquoise water",

    "program.title": "Programme",
    "program.hand": "Saturday 26 June",
    "program.alt": "Old black-and-white photograph of Skåtøy Church",
    "program.caption": "Skåtøy Church",
    "program.t1": "Ceremony",
    "program.t1d": "Skåtøy Church",
    "program.t2": "Ferry to Isnes",
    "program.t2d": "We'll take the ferry together from Skåtøy pier",
    "program.t3": "Bubbles and aperitifs",
    "program.t3d": "Garden party at Isnesveien 6",
    "program.t4": "Dinner",
    "program.t4d": "In the garden, with speeches along the way",
    "program.t5": "Cake and dessert",
    "program.t6": "The dance floor opens",
    "program.t6d": "And we'll dance until the last boat",

    "transport.title": "Transport",
    "transport.lead": "On the day, we'll mostly be travelling by water. We're arranging boats between Kragerø town centre, the church and the party.",
    "transport.alt": "A white house and a red outbuilding by the sea in the archipelago",
    "transport.hand": "across the water",
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

    "stay.title": "Accommodation",
    "stay.hand": "a place to rest",
    "stay.p1": "You're free to stay wherever you like. We've reserved 20 rooms at Hotel Victoria, which can be booked from Friday to Sunday or from Saturday to Sunday.",
    "stay.p2": "The rooms become available in January 2027, first come, first served.",
    "stay.howTitle": "How to book",
    "stay.how": "Send an email to <span class=\"todo\">[email address]</span> with your name, the number of guests and the nights you'd like.",

    "rsvp.hand": "will you come?",
    "rsvp.lead": "Please let us know by <span class=\"todo\">[reply-by date]</span>. Reply once for everyone on your invitation.",
    "rsvp.name": "Full name",
    "rsvp.coming": "Can you come?",
    "rsvp.yes": "Yes, I'll be there",
    "rsvp.no": "Sadly not",
    "rsvp.plus": "Others on your invitation who are coming",
    "rsvp.allergy": "Allergies or dietary requirements",
    "rsvp.msg": "Anything else we should know?",
    "rsvp.send": "Send reply",

    "info.title": "Good to know",
    "info.hand": "the practical bits",
    "info.dressT": "Dress code",
    "info.dress1": "Summer formal. Women: a long dress, preferably not black. Men: a suit, or a tuxedo if you like.",
    "info.dress2": "It's a garden wedding, so choose shoes that can handle grass.",
    "info.speechT": "Speeches and performances",
    "info.speech": "Would you like to give a speech or perform? Contact our toastmaster <span class=\"todo\">[name and contact]</span> by 1 June 2027.",
    "info.allergyT": "Allergies",
    "info.allergy": "Add them to the RSVP form, or let us know at <span class=\"todo\">[email address]</span> by 1 May 2027.",
    "info.giftT": "Gifts",
    "info.gift1": "Many of you are travelling a long way to be with us, and we don't expect any gifts. Having you there to celebrate with us is the greatest gift.",
    "info.gift2": "If you'd still like to give something, a contribution towards our honeymoon would make us very happy. We'd also love:",
    "info.w1": "A camping stove (stormkjøkken) or accessories",
    "info.w2": "A thermos",
    "info.w3": "A record player",
    "info.w4": "A stand mixer (Le Rotier or Ankarsrum)",

    "foot.hand": "we can't wait",
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
  document.title = en ? "Magnus & Mathilde – 26 June 2027" : "Magnus & Mathilde – 26. juni 2027";
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

/* ---------- Toppfelt og aktiv knapp ---------- */
const hero = document.querySelector(".hero");
const links = [...nav.querySelectorAll("a")];
const sections = links.map(a => document.querySelector(a.getAttribute("href")));
const oliveAreas = [...document.querySelectorAll(".olive")];

function onScroll() {
  const line = window.scrollY + bar.offsetHeight;
  bar.classList.toggle("solid", line > hero.offsetHeight);
  bar.classList.toggle("on-olive", oliveAreas.some(el => el.offsetTop <= line && el.offsetTop + el.offsetHeight > line));
  let current = sections[0];
  sections.forEach(s => { if (s.offsetTop <= line + window.innerHeight * 0.35) current = s; });
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
