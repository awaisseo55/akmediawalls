import { STOCK } from "@/lib/images";
import type { Service } from "@/lib/types";

export const SERVICES: Service[] = [
  {
    slug: "media-walls-with-fireplace",
    name: "Media Walls with Fireplace",
    shortName: "Fireplace Media Walls",
    tagline: "Your TV and fire, built into one seamless feature wall",
    metaTitle: "Media Walls with Fireplace Manchester | Media Walls North",
    metaDescription:
      "Bespoke fireplace media walls installed across Manchester and the North West. Electric fires, concealed wiring, and premium finishes. Free quote.",
    heroImage: STOCK.fireplaceSlattedInset,
    cardImage: STOCK.fireplaceSlattedInset,
    summary:
      "A recessed electric fire and wall-mounted TV, built into a single custom feature wall with no visible cables.",
    intro: [
      "A fireplace media wall replaces the old idea of a TV perched on a stand next to a chimney breast. Instead, we build a single custom structure that houses a recessed electric fire, your television, and any shelving or storage you need, all finished in a material of your choosing: painted MDF, oak veneer, slatted wood, marble-effect panels, or a combination.",
      "It is the single most requested transformation we carry out across Manchester and the North West, and for good reason. A well-designed fireplace media wall becomes the anchor of a living room. It draws the eye, hides the clutter of a modern entertainment setup, and gives a house that finished, architect-designed feel without the cost or disruption of structural building work.",
      "Every media wall we build starts with a home visit rather than a template. We measure your chimney breast (or open wall, if you are working without one), discuss how you actually use the room, and design a structure that fits your TV size, seating distance, and the amount of storage you want. Most projects use a stud and MDF frame, insulated and fire-rated around the fire unit to current building regulations, then finished to a joinery standard.",
      "Because the fire is electric rather than gas, there is no flue or chimney requirement, which means we can build a media wall on almost any wall in the house, not just where an existing fireplace sits. This has made media walls popular in extensions, converted garages, and open-plan knock-throughs across Manchester, Bolton, and Stockport, where homeowners want a real focal point in a large new space.",
    ],
    features: [
      {
        title: "Recessed electric fire",
        description:
          "Inset or wall-mounted electric fires with realistic flame effects, supplied and fitted by our qualified electricians.",
        icon: "Flame",
      },
      {
        title: "Fully concealed wiring",
        description:
          "Power, HDMI, and aerial cables routed inside the stud wall so nothing is visible around the TV or fire.",
        icon: "Cable",
      },
      {
        title: "Custom storage and shelving",
        description:
          "Floating shelves, soft-close drawers, and hidden cable compartments built to your exact layout.",
        icon: "Archive",
      },
      {
        title: "LED accent lighting",
        description:
          "Dimmable LED strip lighting behind shelving or around the fire surround for evening ambience.",
        icon: "Sparkles",
      },
    ],
    materials: [
      { title: "Painted MDF (Standard)", description: "Spray-finished in any colour, smooth and durable, the most popular choice for a clean modern look." },
      { title: "Oak or walnut veneer", description: "Real wood veneer over a fire-rated substrate for a warmer, natural finish." },
      { title: "Slatted wood battens", description: "Vertical oak or walnut slats over acoustic felt backing, a signature premium look." },
      { title: "Marble-effect panels", description: "Large-format porcelain or laminate panels that mimic natural stone without the cost or weight." },
      { title: "Textured stone cladding", description: "Split-face or brick-slip cladding for a more rustic, tactile feature wall." },
    ],
    process: [
      { title: "Home visit and design", description: "We measure your wall, discuss TV size and fire choice, and agree a design and quote on site." },
      { title: "Electrical first fix", description: "Our qualified electrician runs power for the fire and TV, and containment for AV cables, before any boarding goes up." },
      { title: "Carpentry and build", description: "The stud frame is built, insulated around the fire zone to regulations, then boarded and finished." },
      { title: "Fire and TV fitting", description: "The electric fire is installed and tested, the TV is mounted, and all cables are dressed away inside the wall." },
      { title: "Finishing and handover", description: "Final decoration, LED lighting setup, and a full walkthrough before we sign off with your guarantee." },
    ],
    timeline: "Most fireplace media walls take 2 to 4 days on site, depending on size and finish.",
    pricingFrom: 1200,
    pricingFactors: [
      "Size of the wall and complexity of the design",
      "Choice of electric fire (inset vs. wall-mounted, size, features)",
      "Finish: painted MDF, veneer, slatted wood, or stone/marble-effect panels",
      "Amount of bespoke storage, shelving, or lighting included",
      "Any electrical upgrades needed to your consumer unit or supply",
    ],
    portfolioImages: [
      { image: STOCK.fireplaceSlattedInset, caption: "Slatted oak fireplace media wall with inset electric fire, Manchester" },
      { image: STOCK.fireplaceMarbleBuiltIn, caption: "Marble-effect media wall with built-in display shelving" },
      { image: STOCK.fireplaceGreyWallTv, caption: "Painted media wall with recessed fire and floating console" },
    ],
    faqs: [
      { question: "Do I need a chimney or flue for a media wall fire?", answer: "No. We fit electric fires, which need only a standard power supply, so a media wall can be built on any suitable wall, including in extensions and rooms without an existing chimney breast." },
      { question: "Can I fit a real gas or wood-burning fire into a media wall?", answer: "Most of our media walls use electric fires because they are safer to build around, more flexible in terms of wall position, and do not require ongoing servicing. We can discuss gas options on a case by case basis where a suitable flue already exists." },
      { question: "Will the TV overheat above the fire?", answer: "We build a ventilated void and use heat shielding between the fire and the TV recess, and we follow the fire manufacturer's clearance guidelines, so the television runs safely above a working fire." },
      { question: "How long does a fireplace media wall take to install?", answer: "Most projects are completed in 2 to 4 days, depending on the size of the wall, the complexity of the design, and the finish chosen." },
      { question: "Can you remove my old chimney breast or fireplace first?", answer: "Yes, we regularly strip out old gas fires, tiled hearths, and surrounds as part of the project, and can advise on capping off any redundant gas or flue points safely." },
      { question: "Is the electrical work certified?", answer: "Yes. All electrical work is carried out or supervised by a qualified electrician and certified to current UK wiring regulations, with certification provided on completion." },
    ],
  },
  {
    slug: "bespoke-acoustic-media-walls",
    name: "Bespoke Acoustic Media Walls",
    shortName: "Acoustic Media Walls",
    tagline: "Fabric and wood-slat panels that look premium and sound better",
    metaTitle: "Acoustic Media Walls Manchester | Fabric Panel Fitters",
    metaDescription:
      "Bespoke acoustic media walls with fabric and wood-slat panels. Reduce echo, add texture, and create a designer feature wall in your Manchester home.",
    heroImage: STOCK.slattedWoodTexture,
    cardImage: STOCK.slattedWoodTexture,
    summary:
      "Fabric-wrapped and slatted wood acoustic panels combined into a media wall that softens sound and adds real texture to a room.",
    intro: [
      "Acoustic media walls bring together two things homeowners increasingly ask for: a striking, textured feature wall, and a noticeable reduction in the echo and harshness that hard-floored, open-plan living rooms often suffer from. We build these walls using a combination of acoustic felt-backed wood slats and fabric-wrapped acoustic panels, arranged around your TV and any fireplace element.",
      "The acoustic layer sits directly behind the visible finish. Rigid mineral wool or acoustic felt absorbs mid and high frequencies, which noticeably calms down the sound of a home cinema setup, a soundbar, or simply a busy family room with a hard floor and large glazing. It is a genuinely functional upgrade as well as a design one.",
      "Visually, acoustic media walls tend to be the most photogenic of everything we build. Vertical oak or walnut slats with dark felt gaps create a rhythm across the wall that catches the light beautifully, especially with hidden LED strip lighting behind or between the slats. Fabric panels, usually in bouclé, wool-mix, or linen-look weaves, add a softer, almost hotel-lounge quality when used around a fireplace or gallery wall section.",
      "We design every acoustic wall around your actual TV size and seating position, and can mix materials, for example slats either side of a central TV recess with a fabric panel above, or a fully slatted wall with a discreet TV cut-out. Because the structure is stud-built like our other media walls, we can include the same concealed wiring, floating shelving, and fire options if you want them.",
    ],
    features: [
      { title: "Genuine acoustic absorption", description: "Acoustic felt or mineral wool backing behind every panel reduces echo and softens hard-surfaced rooms.", icon: "Volume2" },
      { title: "Slatted wood panels", description: "Oak, walnut, or painted timber battens spaced evenly over acoustic felt for a premium textured finish.", icon: "AlignJustify" },
      { title: "Fabric-wrapped panels", description: "Bouclé, wool-mix, or linen-look fabric over acoustic board, available in a wide range of colours.", icon: "Palette" },
      { title: "Integrated LED lighting", description: "Warm white LED strips recessed between slats or panel edges, dimmable to suit the room.", icon: "Sparkles" },
    ],
    materials: [
      { title: "Oak veneer slats", description: "Natural oak battens with visible grain, our most popular acoustic finish." },
      { title: "Walnut or black-stained slats", description: "A darker, more dramatic tone for contemporary and industrial-style rooms." },
      { title: "Fabric acoustic panels", description: "Wrapped in bouclé, wool-mix, or linen-look fabric, in a wide range of colours to match your interior." },
      { title: "Mixed panel layouts", description: "Combinations of slats and fabric, arranged in geometric or symmetrical patterns around the TV." },
    ],
    process: [
      { title: "Consultation and sound assessment", description: "We look at your room's floor, ceiling height, and glazing to judge how much acoustic treatment will help." },
      { title: "Panel and layout design", description: "We design the slat spacing, fabric colour, and TV position, and provide a visual before work starts." },
      { title: "Frame and acoustic backing", description: "A stud frame is built and lined with acoustic felt or mineral wool behind the panel zones." },
      { title: "Panel and slat fitting", description: "Slats or fabric panels are fitted by hand for consistent, even spacing and a tight, joinery-quality finish." },
      { title: "Lighting and final fit", description: "LED lighting, TV, and any shelving are fitted, cables concealed, and the room left clean and ready to use." },
    ],
    timeline: "Typically 2 to 4 days on site, depending on wall size and whether both slats and fabric panels are used.",
    pricingFrom: 1400,
    pricingFactors: [
      "Size of wall and mix of materials (slats, fabric, or both)",
      "Choice of timber species or fabric grade",
      "Amount of acoustic backing required for the room",
      "LED lighting and any additional shelving or fire elements",
      "Complexity of the panel pattern or layout",
    ],
    portfolioImages: [
      { image: STOCK.slattedWoodTexture, caption: "Close detail of oak acoustic slat panelling with felt backing" },
      { image: STOCK.slattedWoodTvFloatingShelf, caption: "Slatted acoustic media wall with floating TV shelf" },
      { image: STOCK.slattedWoodLedCove, caption: "Wood panel acoustic wall with integrated LED cove lighting" },
    ],
    faqs: [
      { question: "Will an acoustic media wall actually reduce echo in my room?", answer: "Yes, noticeably. The felt or mineral wool backing behind the panels absorbs sound reflections, which is particularly effective in open-plan rooms with hard flooring and large windows." },
      { question: "Can I choose my own fabric colour?", answer: "Yes. We work with a range of acoustic-rated fabric suppliers and can match or complement your existing sofa, curtains, or colour scheme." },
      { question: "Is slatted wood or fabric better for acoustics?", answer: "Both work well. Slats with felt backing suit a more natural, textured look, while fabric panels are softer and often better for rooms wanting a warmer, cosier feel. We can also combine the two." },
      { question: "Can you build a fireplace into an acoustic media wall?", answer: "Yes, we regularly combine an inset electric fire with slatted or fabric acoustic panels either side, giving you both the visual impact and the acoustic benefit in one wall." },
      { question: "How do you keep the slat spacing so even?", answer: "We set out and fit every batten by hand from a rod, checking spacing and level constantly, rather than relying on a pre-made panel system, which is what gives our slat walls a joinery finish rather than a flat-pack look." },
      { question: "Does the fabric need special cleaning?", answer: "Most acoustic fabrics only need light vacuuming with a soft brush attachment. We will give you specific care guidance for the fabric grade fitted in your home." },
    ],
  },
  {
    slug: "tv-wall-mounting-concealed-wiring",
    name: "TV Wall Mounting & Concealed Wiring",
    shortName: "TV Wall Mounting",
    tagline: "A flush-mounted TV with every cable hidden inside the wall",
    metaTitle: "TV Wall Mounting Manchester | Concealed Cable Installation",
    metaDescription:
      "Professional TV wall mounting with fully concealed wiring across Manchester and the North West. Flush fitting, any wall type, same-week appointments.",
    heroImage: STOCK.tvMountWoodConsole,
    cardImage: STOCK.tvMountWoodConsole,
    summary:
      "A dedicated TV mounting and cable concealment service for homes that want a clean wall without a full media wall build.",
    intro: [
      "Not every home needs a full media wall. Sometimes what you actually want is your existing TV mounted properly, sitting flush against the wall, with every cable, from the power lead to the HDMI and aerial feed, chased into the wall so nothing is visible. That is exactly what this service covers, and it is one of our most frequently booked jobs across Manchester and the surrounding boroughs.",
      "We fit TVs to plasterboard, brick, stone, and timber-frame walls, using the correct fixings and load calculations for each. For most homes we use an in-wall cable concealment kit, which routes cables safely behind the plasterboard between two low-profile plates, avoiding the need to chase into brick or block work. Where a solid wall is involved, we can chase a cable channel and plaster over it for a completely invisible finish.",
      "Every mount is chosen to suit how you actually use the room. A fixed bracket keeps the TV flush to the wall for the cleanest look, a tilting bracket adds a small viewing angle adjustment, and a full-motion bracket lets you pull the screen out and turn it, which is popular in kitchen-diners and rooms where seating changes position.",
      "We also handle the details that get overlooked in a rushed job: a power socket relocated behind the TV so there is no visible extension lead, a soundbar wired in alongside the television, and a media shelf added below if you need somewhere for a games console or set-top box. It is a same-week service in most cases, usually completed within half a day.",
    ],
    features: [
      { title: "Any wall type", description: "Plasterboard, brick, block, stone, and timber-frame walls, with the correct fixings calculated for your TV's weight.", icon: "Layers" },
      { title: "In-wall cable concealment", description: "Power and AV cables routed safely inside the wall cavity using certified in-wall power kits.", icon: "Cable" },
      { title: "Bracket choice", description: "Fixed, tilting, or full-motion brackets to suit your room layout and viewing position.", icon: "MoveDiagonal" },
      { title: "Socket relocation", description: "Power sockets moved behind the TV so no extension lead or trailing cable is ever visible.", icon: "Plug" },
    ],
    materials: [
      { title: "Fixed brackets", description: "The lowest profile option, holding the TV flush and static against the wall." },
      { title: "Tilting brackets", description: "Allows a few degrees of downward tilt, useful when the TV sits above eye level." },
      { title: "Full-motion brackets", description: "Extends, swivels, and tilts, ideal for kitchen-diners or rooms with flexible seating." },
      { title: "In-wall power kits", description: "Certified low-voltage and mains-rated kits that route cabling inside standard plasterboard walls." },
    ],
    process: [
      { title: "Wall assessment", description: "We identify the wall construction, check for services behind it, and confirm the right bracket and fixings." },
      { title: "Bracket fitting", description: "The bracket is fitted level and secure, using appropriate fixings for plasterboard, brick, or timber frame." },
      { title: "Cable concealment", description: "Cables are routed inside the wall using an in-wall kit or chased channel, depending on wall type." },
      { title: "TV fitting and testing", description: "The television is mounted, connected, and tested, including any soundbar or additional AV equipment." },
      { title: "Snagging and clean-up", description: "We check cable runs, tidy any dust from chasing work, and leave the room exactly as we found it." },
    ],
    timeline: "Most TV mounting jobs are completed within half a day, usually within the same week you book.",
    pricingFrom: 150,
    pricingFactors: [
      "TV size and weight, which determines bracket type",
      "Wall construction (plasterboard, brick, stone, or timber frame)",
      "Whether cables need chasing into solid brickwork or a standard in-wall kit is sufficient",
      "Socket relocation or additional AV equipment such as a soundbar",
      "Number of TVs being mounted in the same visit",
    ],
    portfolioImages: [
      { image: STOCK.tvMountWoodConsole, caption: "Flush-mounted TV with fully concealed cabling above a wood console" },
      { image: STOCK.tvMountWhiteConsole, caption: "Wall-mounted TV with hidden wiring, white media console below" },
      { image: STOCK.heroWoodPanelMediaWall, caption: "TV mounted flush to a wood panel wall with floating shelf" },
    ],
    faqs: [
      { question: "Can you mount a TV on a plasterboard stud wall?", answer: "Yes. We use fixings rated for the stud pattern and TV weight, either into the timber studs directly or with load-rated cavity fixings where studs do not align with your preferred position." },
      { question: "Will I be able to see any cables at all?", answer: "With an in-wall concealment kit or chased channel, no cables are visible between the TV and the skirting or socket. Only the small power lead from the wall plate to the TV itself remains, which sits directly behind the screen and is not visible from normal seating positions." },
      { question: "Can you hide the cables without chasing into a solid brick wall?", answer: "In most cases yes, using a certified in-wall power and AV cable kit that runs cables safely inside a standard plasterboard cavity without any chasing needed." },
      { question: "How much weight can a wall-mounted bracket hold?", answer: "This depends on the bracket and wall type, but our brackets are specified to comfortably support standard TVs up to 85 inches when fitted correctly into studs, brick, or block." },
      { question: "Do you supply the TV bracket or do I need to buy one?", answer: "We supply brackets as standard, matched to your TV size and chosen viewing angle, though we are happy to fit a bracket you have already bought if you prefer." },
      { question: "Can you also mount a soundbar or games console shelf?", answer: "Yes, we regularly fit soundbars beneath wall-mounted TVs and can add a small floating shelf for a games console or set-top box, with cables concealed alongside the TV wiring." },
    ],
  },
  {
    slug: "commercial-slatted-wood-walls",
    name: "Commercial & Slatted Wood Walls",
    shortName: "Commercial & Slatted Walls",
    tagline: "Feature walls and media walls for offices, salons, and hospitality spaces",
    metaTitle: "Commercial Media Walls Manchester | Slatted Wood Fit-Outs",
    metaDescription:
      "Slatted wood feature walls and commercial media walls for offices, receptions, salons, and hospitality venues across Manchester and the North West.",
    heroImage: STOCK.slattedWoodLedCove,
    cardImage: STOCK.slattedWoodLedCove,
    summary:
      "Slatted wood feature walls and media wall fit-outs for reception areas, offices, salons, and hospitality venues.",
    intro: [
      "Commercial clients across Manchester come to us for the same reason homeowners do: a slatted wood or media wall creates an immediate impression of quality. In a reception area, a salon, a restaurant, or an office breakout space, a well-built feature wall signals that a business has invested in its space, and it does so more effectively per square metre than almost any other single upgrade.",
      "Our commercial work covers reception feature walls with branding integrated into the slat pattern or backlighting, TV walls for meeting rooms and waiting areas, and full media wall fit-outs for hospitality venues wanting a striking backdrop behind a bar or lounge area. We work to commercial fire-rating and building regulation requirements throughout, and can supply certification for landlord or building management sign-off.",
      "Because commercial projects often need to work around trading hours, we schedule installation for evenings, weekends, or planned closure periods where required, and we protect surrounding areas and flooring for the duration of the build. Larger fit-outs are project-managed with a clear day-by-day schedule agreed in advance, so there are no surprises for your team or your customers.",
      "Materials and finishes are the same premium options available on our residential media walls, oak and walnut slats, painted MDF, acoustic fabric panels, and stone or marble-effect cladding, specified to suit commercial wear and, where needed, contract-grade fire ratings.",
    ],
    features: [
      { title: "Reception feature walls", description: "Branded or textured slatted wood walls that make a strong first impression for visitors and clients.", icon: "Building2" },
      { title: "Meeting room and waiting area TV walls", description: "Flush-mounted screens with concealed AV cabling for presentation and signage screens.", icon: "MonitorPlay" },
      { title: "Hospitality media walls", description: "Statement walls for bars, restaurants, and salons, built to withstand commercial footfall.", icon: "Wine" },
      { title: "Out-of-hours installation", description: "Evening, weekend, or closure-period scheduling to avoid disrupting trading hours.", icon: "Clock" },
    ],
    materials: [
      { title: "Oak and walnut slats", description: "Contract-grade timber battens, available pre-finished for durability in commercial settings." },
      { title: "Painted MDF panels", description: "Fire-rated MDF finished in brand colours, ideal for reception and office fit-outs." },
      { title: "Acoustic fabric panels", description: "Contract-grade acoustic fabric to reduce noise in open-plan offices and busy hospitality floors." },
      { title: "Stone and marble-effect cladding", description: "Large-format panels for a high-end look in salons, restaurants, and hotel lobbies." },
    ],
    process: [
      { title: "Site survey and specification", description: "We assess the space, agree fire-rating and material requirements, and provide a detailed proposal." },
      { title: "Design sign-off", description: "Visuals and material samples are approved before ordering, including any branding or backlighting details." },
      { title: "Scheduled installation", description: "Work is scheduled around your trading hours, with surrounding areas protected throughout." },
      { title: "Electrical and AV integration", description: "Lighting, screens, and any AV equipment are wired in and tested by our qualified electricians." },
      { title: "Handover and certification", description: "We provide certification for electrical and fire-rated materials, along with care guidance for your team." },
    ],
    timeline: "Small reception walls typically take 2 to 3 days; larger fit-outs are scheduled on a project timeline agreed in advance.",
    pricingFrom: 1800,
    pricingFactors: [
      "Size and complexity of the fit-out",
      "Fire-rating and contract-grade material requirements",
      "Out-of-hours or phased installation scheduling",
      "AV, lighting, or branding integration",
      "Site access and any structural or electrical upgrades needed",
    ],
    portfolioImages: [
      { image: STOCK.slattedWoodLedCove, caption: "Commercial slatted wood feature wall with LED cove lighting" },
      { image: STOCK.slattedWoodTvFloatingShelf, caption: "Slatted wood media wall in a client lounge and waiting area" },
      { image: STOCK.slattedWoodTexture, caption: "Contract-grade oak slat detail used in commercial fit-outs" },
    ],
    faqs: [
      { question: "Can you work outside our trading hours?", answer: "Yes, we regularly schedule commercial installations in the evening, at weekends, or during a planned closure period to avoid disrupting your business." },
      { question: "Do your materials meet commercial fire regulations?", answer: "Yes, we specify fire-rated boards and contract-grade finishes where required and can provide certification for building management or landlord sign-off." },
      { question: "Can you incorporate our branding into the design?", answer: "Yes, branding can be integrated through slat spacing, backlit logos, colour-matched panels, or printed acoustic fabric, depending on your brand guidelines." },
      { question: "Do you handle projects across multiple sites?", answer: "Yes, we work with businesses operating several sites across Greater Manchester and the North West and can phase installations across locations." },
      { question: "Is there a minimum project size for commercial work?", answer: "No, we take on projects from a single reception feature wall through to full hospitality fit-outs, and can advise on scope during your site survey." },
      { question: "Can you integrate screens for digital signage or presentations?", answer: "Yes, we fit and cable-conceal screens for meeting rooms, reception signage, and hospitality displays as part of the same build." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
