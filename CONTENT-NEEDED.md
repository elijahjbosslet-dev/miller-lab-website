# Content Needed From Dr. Miller

Everything below is currently a placeholder or best-guess draft. Nothing here blocks the site from being live, but it should be reviewed/filled in before calling it final.

**Note:** the site went through a full visual redesign (the "Bulletin Board" theme — paper background, ink-black bars, hard offset shadows, tape/pin/stamp details, a single Kelly Green accent). This changed how placeholders are shown but not what's still needed from you — see Photography and Brand below for what moved.

## Contact & Basics
- [x] ~~Real contact email~~ — `wamillerlab@gmail.com`, live in the footer
- [ ] Physical location / room number, if you want a "visit us" section
- [ ] Phone number, if desired
- [ ] Preferred custom domain (e.g. `millerlab.org`) so we can buy and connect it

## Numbers (Homepage Impact Bar)
- [ ] Real count of peer-reviewed publications / presentations (currently a placeholder "25+")
- [ ] Real count of departments & investigators supported (currently "10+")
- [ ] Real count of active research collaborations (currently "15+")
- [ ] Any other metric you'd rather lead with (grant funding total, software releases, citations, etc.)

## Rates & Services
The Services & Rates page has been removed from the site for now, since
pricing/platform is still under discussion with Vice Provost Singh — no
"how to work with us" pitch should go live until that's settled. When
it's ready, the old copy (core services, 5-step consultation process,
rates note) is preserved in git history (see the commit that removed
`src/app/services/`) and can be restored/rebuilt at that point.

## Copy Review
- [ ] Sign off on the condensed mission/audience copy (I shortened the paragraphs from your doc into scannable bullet points — want to make sure nothing important got cut)
- [ ] Review the FAQ page — I drafted all 5 Q&As myself based on your doc; none of it is a direct quote from you
- [ ] Confirm the 5 research areas (AI, Molecular Simulation, Computational Biophysics, Drug Discovery, Bioinformatics) are the right framing/order

## People
- [x] ~~Headshot for Dr. Miller (PI)~~ — live on the Team page (`public/images/whelton-miller.jpg`)
- [ ] Headshots for any grad/undergrad researchers who want one (currently initials for everyone)
- [ ] Longer bios, if wanted — doc only specified name / program / research focus
- [ ] Any current team members missing from the doc, or alumni who should be removed/added
- [ ] Current openings/positions, if you want a "we're recruiting" callout

## Publications & Impact (not yet built — let us know if wanted)
- [ ] A real publication list (titles, journals, years, links/DOIs) — the Research page now has a "Coming soon" placeholder reserving room for a Publications page
- [ ] An "Ongoing Research" page/section (also reserved as a placeholder on the Research page) — what should this actually show? Active grants, in-progress projects, something else?
- [ ] Software/tools the lab has released publicly (GitHub links, names)
- [ ] Grant/funding highlights, if you want to showcase specific awards
- [ ] Notable press or collaborator testimonials

## Links
- [x] ~~LinkedIn~~ — linked in the footer
- [x] ~~X (Twitter)~~ — linked in the footer
- [x] ~~YouTube~~ — linked in the footer
- [ ] Google Scholar / ORCID profile
- [ ] GitHub org/repo, if the lab publishes code
- [ ] Real GoFundMe campaign URL — a "Donate" button now exists in the header/footer but points to `#` (nowhere) until you send the link

## Brand
- [x] ~~Recolored logo file~~ — done, logo now matches the Kelly Green accent (`#00B140`, Pantone 354C)
- [x] ~~Font~~ — now Archivo Black (display headlines) + Space Grotesk (body) + IBM Plex Mono (numerals/labels/kickers), as part of the Bulletin Board redesign
- [ ] Any further font/style preferences

## Photography
- [ ] Real photos of the lab, equipment, or team at work. Every photo slot on the site is currently filled with a stock placeholder, all Unsplash-licensed (free to use, no attribution required, credited here anyway):
  - `public/images/lab-pipette.jpg` (Nathan Rimoux) — Home hero
  - `public/images/lab-microscope.jpg` (Akram Huseyn) — Research page, "Wet Lab to Computation"
  - `public/images/lab-data-analysis.jpg` (CDC) — About page, "the lab, most days"

  These read fine but none of them are actually the Miller Lab. Swap in real photos as they come in — the `PinnedPhoto` component falls back to an honest striped `[ lab photo ]` placeholder if you'd rather leave a slot empty than use a stock photo in the meantime.

## Legal/Compliance
- [ ] Any Loyola disclosure language required on lab-affiliated external sites (check with Vice Provost Singh alongside the platform/rates discussion)
- [ ] Analytics preference — do you want visitor analytics (e.g. Google Analytics/Plausible)? None is currently installed
