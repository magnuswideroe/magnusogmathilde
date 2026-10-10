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
    "nav.rsvp": "RSVP!",
    "nav.info": "Good to know",
    "nav.menu": "menu",

    "hero.sub": "Skåtøy, Kragerø<br>Saturday 26 June 2027",
    "hero.hand": "we're getting married",
    "hero.alt": "Magnus and Mathilde kissing at a dinner table",
    "hero.altChurch": "Old photograph of Skåtøy Church",
    "hero.poem": "<p>Next summer<br>we're getting married.</p><p>We hope<br>you'll be there.</p><p>First in the white church<br>on Skåtøy,</p><p>then across the water</p><p>to a garden<br>by the sea at Isnes.</p><p>We'll eat for hours,</p><p>make speeches,</p><p>dance</p><p>until the last boat leaves.</p>",
    "hero.month": "june",

    "band1.label": "Isnes, summer",
    "band1.text": "a long day<br>by the sea",
    "bleed1.alt": "A white house and a red outbuilding by the sea",
    "band2.label": "boat, ferry, water taxi",
    "band2.text": "across the water",
    "bleed2.alt": "Magnus and Mathilde in front of turquoise water",
    "band3.label": "reply by <span class=\"todo\">[reply-by date]</span>",
    "band3.text": "will you come?",

    "program.title": "Programme",
    "program.label": "Saturday 26 June 2027",
    "program.t1": "Ceremony",
    "program.t1d": "Skåtøy Church",
    "program.t2": "Ferry to Isnes",
    "program.t2d": "together, from Skåtøy pier",
    "program.t3": "Bubbles &amp; aperitifs",
    "program.t4": "Dinner",
    "program.t4d": "in the garden, with speeches",
    "program.t5": "Cake &amp; dessert",
    "program.t6": "The dance floor opens",
    "program.t6d": "until the last boat",
    "program.alt": "Old photograph of Skåtøy Church",
    "program.caption": "Skåtøy Church",
    "program.hand": "yes!",

    "transport.title": "Transport",
    "transport.lead": "On the day, we'll mostly be travelling by water. We're arranging boats between Kragerø town centre, the church and the party.",
    "transport.h1": "Water taxi to the ceremony",
    "transport.l1": "Kragerø centre → Skåtøy Church",
    "transport.p1": "We're arranging water taxis from Kragerø centre to the church. If you need a boat from somewhere else, let us know.",
    "transport.h2": "Ferry to the garden party",
    "transport.l2": "Skåtøy pier → Isnes",
    "transport.p2": "After the ceremony we'll all take a ferry from Skåtøy pier, a short walk from the church. The trip takes about 30 minutes.",
    "transport.h3": "Boats home",
    "transport.l3": "Isnes → Kragerø centre",
    "transport.p3": "Water taxis run from the party to the town centre and other places nearby throughout the night.",
    "transport.dep": "provisional departures",

    "stay.title": "Accommodation",
    "stay.alt": "A house by the sea",
    "stay.p1": "You're free to stay<br>wherever you like.",
    "stay.p2": "We've reserved 20 rooms<br>at Hotel Victoria,<br>Friday to Sunday<br>or Saturday to Sunday.",
    "stay.p3": "The rooms open<br>in January 2027.",
    "stay.p4": "First come,<br>first served.",
    "stay.how": "To book, send an email to <span class=\"todo\">[email address]</span> with your name, the number of guests and the nights you'd like.",
    "stay.hand": "sleep well",

    "rsvp.alt": "Magnus and Mathilde in front of turquoise water",
    "rsvp.lead": "Please let us know by <span class=\"todo\">[reply-by date]</span>.<br><span class=\"type\">Once for everyone on your invitation.</span>",
    "rsvp.name": "name",
    "rsvp.coming": "will you come?",
    "rsvp.yes": "yes, of course",
    "rsvp.no": "sadly not",
    "rsvp.plus": "who else",
    "rsvp.allergy": "allergies",
    "rsvp.msg": "anything else?",
    "rsvp.send": "send reply",

    "info.title": "Good to know",
    "info.dressT": "dress code",
    "info.dressBig": "Summer formal.",
    "info.dress1": "Women: a long dress, preferably not black. Men: a suit, or a tuxedo if you like.",
    "info.dress2": "It's a garden wedding. Choose shoes that can handle grass.",
    "info.speechT": "speeches &amp; performances",
    "info.speech": "Would you like to say a few words? Contact our toastmaster <span class=\"todo\">[name and contact]</span> by 1 June 2027.",
    "info.allergyT": "allergies",
    "info.allergy": "Add them to your reply, or let us know at <span class=\"todo\">[email address]</span> by 1 May 2027.",
    "info.giftT": "gifts",
    "info.giftBig": "The best gift is you being there.",
    "info.gift1": "Many of you are travelling a long way, and we don't expect any gifts. If you'd still like to give something, a contribution to our honeymoon would make us very happy, or:",
    "info.w1": "a camping stove (stormkjøkken)",
    "info.w2": "a thermos",
    "info.w3": "a record player",
    "info.w4": "a stand mixer <small class=\"type\">(Le Rotier or Ankarsrum)</small>",

    "foot.hand": "we can't wait",
    "foot.top": "back to top ↑"
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
