// Style atlas data: seven style families and thirty public websites.
// Every line is our own short description; no screenshots or images of the sites are used.
// Links checked on 2026-11-06 (all answered 200 in a browser-like request).

window.ATLAS = {
  families: [
    {
      id: "editorial",
      name: "Editorial serif",
      rule: "Reads like a printed page: a serif or bookish headline, warm paper colours, generous margins and long, calm text.",
      signs: ["serif display type", "ivory or tinted paper", "wide margins", "few, quiet images"],
    },
    {
      id: "swiss",
      name: "Swiss technical",
      rule: "A strict grid, small sans and mono labels, black on white or grey, and the product itself as the only picture.",
      signs: ["visible grid", "tiny labels", "neutral greys", "one bold shape"],
    },
    {
      id: "glow",
      name: "Dark product glow",
      rule: "A near-black canvas where the app's own interface floats in soft light, with fine borders and gradients that look lit from behind.",
      signs: ["near-black ground", "product UI as hero", "edge glow", "hairline borders"],
    },
    {
      id: "worlds",
      name: "3D worlds",
      rule: "The page is a place: a real-time WebGL scene you scroll, drag or drive through, with the text kept out of the way.",
      signs: ["real-time 3D", "a loader first", "pointer and scroll as controls", "sound optional"],
    },
    {
      id: "kinetic",
      name: "Kinetic agency",
      rule: "Huge type that moves, crops and reacts, high contrast, grain or glitch, and transitions that make every click feel staged.",
      signs: ["oversized type", "black plus one loud colour", "scroll-driven motion", "page transitions"],
    },
    {
      id: "playful",
      name: "Playful and retro",
      rule: "Toy-like: bright flat colours, thick outlines, cartoon objects or a whole old operating system rebuilt in the browser.",
      signs: ["saturated flat colour", "chunky outlines and shadows", "characters and stickers", "desktop windows"],
    },
    {
      id: "plain",
      name: "Plain and personal",
      rule: "Mostly text, very little chrome: small type, a few links, the browser's own look, and one detail done perfectly.",
      signs: ["text first", "one accent at most", "system fonts", "careful micro-interactions"],
    },
  ],

  sites: [
    // Editorial serif
    { name: "Anthropic", url: "https://www.anthropic.com/", family: "editorial", line: "Warm ivory ground, calm large headlines and hand-made-looking illustrations instead of tech gloss." },
    { name: "Stripe Press", url: "https://press.stripe.com/", family: "editorial", line: "A dark bookshelf you browse spine by spine; each book keeps its own cover typography." },
    { name: "Craig Mod", url: "https://craigmod.com/", family: "editorial", line: "A writer's site set like a small book: centred serif, wide air and newsletters as chapters." },
    { name: "Granola", url: "https://www.granola.ai/", family: "editorial", line: "An AI notes app introduced with a big serif headline on soft grey-green, like a magazine opener." },
    { name: "Dia", url: "https://www.diabrowser.com/", family: "editorial", line: "A browser sold with a curly serif wordmark on warm yellow, closer to a book jacket than a tech page." },

    // Swiss technical
    { name: "Vercel", url: "https://vercel.com/", family: "swiss", line: "One black triangle, a light grey grid and tight sans type: almost nothing, placed exactly." },
    { name: "teenage engineering", url: "https://teenage.engineering/", family: "swiss", line: "An industrial catalogue: tiny lowercase labels, line icons and product photos on black." },
    { name: "OKLCH colour picker", url: "https://oklch.com/", family: "swiss", line: "A tool whose interface is the design: mono labels, sliders and live colour graphs in a tidy grid." },
    { name: "Cursor", url: "https://cursor.com/", family: "swiss", line: "Small, quiet type on warm off-white, with the editor window as the one big picture." },

    // Dark product glow
    { name: "Linear", url: "https://linear.app/", family: "glow", line: "The reference for the genre: near-black, crisp white headline and the app glowing in the dark." },
    { name: "Raycast", url: "https://www.raycast.com/", family: "glow", line: "A launcher sold with diagonal red light streaks behind the headline, like a lit glass object." },
    { name: "Spline", url: "https://spline.design/", family: "glow", line: "Dark and soft, with an AI prompt box centre stage and 3D objects shown as small chips." },
    { name: "Rive", url: "https://rive.app/", family: "glow", line: "Cinematic black with heavy wide caps and a live game interface running in the hero." },

    // 3D worlds
    { name: "Lusion", url: "https://lusion.co/", family: "worlds", line: "A studio site built from playful physics scenes; objects tumble and react as you scroll." },
    { name: "Bruno Simon", url: "https://bruno-simon.com/", family: "worlds", line: "A portfolio you drive through with a toy car, every project a place in the world." },
    { name: "Igloo Inc.", url: "https://www.igloo.inc/", family: "worlds", line: "An icy, pale 3D igloo built from blocks, in a web of fine lines and cold blue light." },
    { name: "Messenger", url: "https://messenger.abeto.co/", family: "worlds", line: "A tiny planet you walk around delivering letters: a game that is also the website." },

    // Kinetic agency
    { name: "Locomotive", url: "https://locomotive.ca/en", family: "kinetic", line: "Smooth-scroll pioneers: pixelated portraits, layered type and transitions on every move." },
    { name: "darkroom.engineering", url: "https://darkroom.engineering/", family: "kinetic", line: "Condensed red capitals across black, neon photography and a terminal-like grid of small print." },
    { name: "Obys", url: "https://obys.agency/", family: "kinetic", line: "A slow, staged entrance, then big editorial type, grain and an object at the centre." },
    { name: "basement.studio", url: "https://basement.studio/", family: "kinetic", line: "Black, loud and technical: bold type, orange signals and 3D pieces dropped into the grid." },

    // Playful and retro
    { name: "PostHog", url: "https://posthog.com/", family: "playful", line: "A whole desktop operating system in the browser: windows, icons, a dock and hedgehog mascots." },
    { name: "Poolsuite", url: "https://poolsuite.net/", family: "playful", line: "A summer radio inside a retro Mac window on pastel pink, complete with a static-noise screen." },
    { name: "Family", url: "https://family.co/", family: "playful", line: "A crypto wallet sold with bouncy cartoon objects and bright primaries around plain black type." },
    { name: "Gumroad", url: "https://gumroad.com/", family: "playful", line: "Neo-brutalist pink: thick black outlines, hard shadows and spinning coin stickers." },
    { name: "The Pudding", url: "https://pudding.cool/", family: "playful", line: "Visual essays behind a hand-lettered logo and bright cover cards, one colour per story." },

    // Plain and personal
    { name: "Rauno Freiberg", url: "https://rauno.me/", family: "plain", line: "One large statement over a big yellow disc, and almost nothing else." },
    { name: "Paco Coursey", url: "https://paco.me/", family: "plain", line: "Three small columns of links on white; the craft is in the spacing and hover states." },
    { name: "Emil Kowalski", url: "https://emilkowal.ski/", family: "plain", line: "A short list of projects and writing in grey and black, every animation tuned by hand." },
    { name: "Yale School of Art", url: "https://art.yale.edu/", family: "plain", line: "A wiki the school edits itself: system fonts, blue links, a calendar and a weather box." },
  ],
};
