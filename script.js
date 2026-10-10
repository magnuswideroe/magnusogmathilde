/* Magnus & Mathilde – språk, meny og RSVP
   Rediger tekstene i T under. Norsk står også direkte i index.html. */

// Lim inn adressen til skjematjenesten her (f.eks. Formspree eller Google Forms-endpoint).
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

    "hero.script": "We're getting married",
    "hero.when": "When",
    "hero.where": "Where",
    "hero.date": "Saturday 26 June 2027",
    "hero.cta": "Reply to the invitation",
    "hero.caption": "The Kragerø archipelago",

    "intro.lead": "We're getting married at Skåtøy Church and celebrating afterwards with a garden party by the sea at Isnes. Here you'll find everything you need to know about the day, the journey and where to stay.",

    "program.title": "Programme",
    "program.script": "Saturday 26 June",
    "program.t1": "Ceremony",
    "program.t1d": "Skåtøy Church",
    "program.t2": "Ferry to Isnes",
    "program.t2d": "A shared ferry from Skåtøy pier to the garden party",
    "program.t3": "Bubbles and aperitifs",
    "program.t4": "Dinner",
    "program.t4d": "In the garden, with speeches along the way",
    "program.t5": "Cake and dessert",
    "program.t6": "The dance floor opens",

    "transport.title": "Transport",
    "transport.script": "across the water",
    "transport.lead": "Most of the travelling on the day happens by boat. We'll take care of transport between the church, the party and Kragerø town centre.",
    "transport.l1": "Kragerø centre → Skåtøy Church",
    "transport.h1": "Water taxi to the ceremony",
    "transport.p1": "We're arranging water taxis from Kragerø centre to the church. If you need a boat from somewhere else, get in touch with us.",
    "transport.l2": "Skåtøy pier → Isnes",
    "transport.h2": "Ferry to the garden party",
    "transport.p2": "After the ceremony we'll all take a ferry together from Skåtøy pier, a short walk from the church. The trip takes about 30 minutes.",
    "transport.l3": "Isnes → Kragerø centre",
    "transport.h3": "Boats home",
    "transport.p3": "Water taxis run from the garden party to the town centre and other places nearby throughout the night.",
    "transport.dep": "Provisional departures",

    "stay.title": "Accommodation",
    "stay.script": "a place to rest",
    "stay.p1": "You're free to stay wherever you like. We've reserved 20 rooms at Hotel Victoria, which can be booked from Friday to Sunday or from Saturday to Sunday.",
    "stay.p2": "The rooms become available in January 2027, on a first-come, first-served basis.",
    "stay.howTitle": "How to book",
    "stay.how": "Send an email to <span class=\"todo\">[email address]</span> with your name, the number of guests and the nights you'd like.",

    "rsvp.script": "we hope you can come",
    "rsvp.lead": "Please let us know by <span class=\"todo\">[reply-by date]</span> whether you can make it.",
    "rsvp.name": "Full name",
    "rsvp.coming": "Will you be there?",
    "rsvp.yes": "Yes, I'll be there",
    "rsvp.no": "Sadly, I can't make it",
    "rsvp.plus": "Names of others on your invitation who are coming",
    "rsvp.allergy": "Allergies or dietary requirements",
    "rsvp.msg": "Anything else we should know?",
    "rsvp.send": "Send reply",

    "info.title": "Good to know",
    "info.script": "the practical bits",
    "info.dressT": "Dress code",
    "info.dress1": "Summer formal. Women: a long dress, please avoid black. Men: a suit, or a tuxedo for those who'd like.",
    "info.dress2": "This is a garden wedding, so choose shoes that can handle grass.",
    "info.speechT": "Speeches and performances",
    "info.speech": "Would you like to give a speech or perform? Contact our toastmaster <span class=\"todo\">[name and contact]</span> by 1 June 2027.",
    "info.allergyT": "Allergies",
    "info.allergy": "Do you have allergies or dietary requirements? Add them to the RSVP form, or let us know at <span class=\"todo\">[email address]</span> by 1 May 2027.",
    "info.giftT": "Gifts",
    "info.gift1": "Many of you are travelling a long way to be with us, and we don't expect any gifts. Having you there to celebrate with us is the greatest gift.",
    "info.gift2": "If you'd still like to give something, a contribution towards our honeymoon would make us very happy. We'd also love:",
    "info.w1": "A camping stove (stormkjøkken) or accessories",
    "info.w2": "A thermos",
    "info.w3": "A record player",
    "info.w4": "A stand mixer (Le Rotier or Ankarsrum)",

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

/* ---------- Språk ---------- */
const nodes = document.querySelectorAll("[data-i18n]");
const original = new Map();
nodes.forEach(n => original.set(n, n.innerHTML));
let lang = "no";

function setLang(next) {
  lang = next === "en" ? "en" : "no";
  document.documentElement.lang = lang;
  nodes.forEach(n => {
    const key = n.dataset.i18n;
    n.innerHTML = lang === "en" && T.en[key] ? T.en[key] : original.get(n);
  });
  document.querySelectorAll(".lang button").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  document.title = lang === "en"
    ? "Magnus & Mathilde · 26 June 2027"
    : "Magnus & Mathilde · 26.06.2027";
  try { localStorage.setItem("mm-lang", lang); } catch (e) {}
  const url = new URL(location.href);
  if (lang === "en") url.searchParams.set("lang", "en"); else url.searchParams.delete("lang");
  history.replaceState(null, "", url);
}

function initialLang() {
  const q = new URLSearchParams(location.search).get("lang");
  if (q) return q;
  try { const saved = localStorage.getItem("mm-lang"); if (saved) return saved; } catch (e) {}
  const nav = (navigator.language || "no").toLowerCase();
  return /^(nb|nn|no|da|sv)/.test(nav) ? "no" : "en";
}

document.querySelectorAll(".lang button").forEach(b =>
  b.addEventListener("click", () => setLang(b.dataset.lang)));
setLang(initialLang());

/* ---------- Mobilmeny ---------- */
const nav = document.getElementById("nav");
const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", e => {
  if (e.target.closest("a")) { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
});

/* ---------- Aktiv seksjon og mørk toppfelt over oliven ---------- */
const bar = document.querySelector(".bar");
const links = [...nav.querySelectorAll("a")];
const sections = links.map(a => document.querySelector(a.getAttribute("href")));
const dark = [...document.querySelectorAll(".hero, .sec-olive, .foot")];

function onScroll() {
  const y = window.scrollY + bar.offsetHeight + 1;
  let current = sections[0];
  sections.forEach(s => { if (s.offsetTop <= y + window.innerHeight * 0.3) current = s; });
  links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === "#" + current.id));
  const overDark = dark.some(el => el.offsetTop <= y && el.offsetTop + el.offsetHeight > y);
  bar.classList.toggle("on-dark", overDark);
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
  if (!data.get("navn") || !data.get("kommer")) { status.textContent = s.missing; return; }
  if (!RSVP_ENDPOINT) { status.textContent = s.notReady; return; }
  status.textContent = s.sending;
  data.append("språk", lang);
  try {
    const res = await fetch(RSVP_ENDPOINT, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error(res.status);
    form.reset();
    status.textContent = s.ok;
  } catch (err) {
    status.textContent = s.fail;
  }
});
