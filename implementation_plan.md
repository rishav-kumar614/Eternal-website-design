# Implementation Plan - Eternal by Azimuth (Luxury Funeral Mobility Web Application)

Design and build a responsive, ultra-premium frontend web application for **Eternal by Azimuth** based on `Eternal_Website_Requirement_Document.docx` and the exact brand copy deck `Eternal_Homepage_Copy_Deck - Google Docs.pdf`.

## User Review Required

> [!IMPORTANT]
> **Strict Brand Guardrails**:
> - **Forbidden Words**: Words like `ambulance`, `mortuary van`, `dead body transport`, `hearse van`, `cheap/affordable`, `EV/electric` are **strictly forbidden** and will not appear anywhere in the codebase or copy.
> - **Single Vehicle Architecture**: Eternal features **one single, purpose-built ceremonial hearse** on a wide-body chassis with premium amenities (not multiple models or cheap variants).

> [!NOTE]
> **Color & Typography Palette**:
> - **Primary Dark**: Obsidian / Rich Dark Brown (`#161311` & `#0a0a0c`)
> - **Accent**: Champagne Gold (`#D4AF37` & `#C5A059`)
> - **Background / Surface**: Cream (`#FDF8F0`), Soft Blush (`#F5EFE6`), Warm White (`#FFFFFF`)
> - **Typography**: Serif Headings (`Playfair Display` / `Cormorant Garamond`) + Sans-serif Body (`Inter`)

---

## Proposed Changes

### [Project Setup & Configuration]

#### [NEW] [package.json](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/package.json)
- React 18, TypeScript, Vite, Tailwind CSS, Lucide React icons.

#### [NEW] [vite.config.ts](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/vite.config.ts)
- Vite configuration with local path aliases.

#### [NEW] [tailwind.config.js](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/tailwind.config.js)
- Custom color tokens for Obsidian, Rich Dark Brown, Champagne Gold, Soft Blush, and Cream.
- Serif and sans font family declarations.

---

### [Components & Pages]

#### [NEW] [src/App.tsx](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/src/App.tsx)
- Application shell with state routing (Home, About, Vehicle, Services, Institutions, Gallery, Contact, Blog), interactive modals (B2B Request, Demo Scheduler, Gallery Lightbox), and persistent WhatsApp floating button.

#### [NEW] [src/components/Navbar.tsx](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/src/components/Navbar.tsx)
- Brand header featuring Azimuth logo, navigation links, and primary CTA ("Partner With Us" / "Request Demo").

#### [NEW] [src/pages/Home.tsx](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/src/pages/Home.tsx)
- Implementation of the exact **Homepage Copy Deck**:
  1. **Hero Section**: `Established in Dignity · Delhi NCR`, H1: `India's First Ultra-Premium Luxury Funeral Mobility`, Sub-tagline: `From Utility to Legacy. From Transport to Tribute.`, CTAs: `View Our Vehicle` & `Partner With Us`.
  2. **Brand Introduction Strip**: `“We don't build vehicles. We create experiences that honour life and respect every goodbye.”` - *The Eternal Promise*.
  3. **Why Eternal**: 3 Differentiator cards: `Silent Luxury`, `Premium Design`, `Institutional Trust`.
  4. **The Eternal Vehicle**: `The Silent Journey, the Glass Sanctuary` with 8 feature highlights (Panoramic 360° side glass, hydraulic bier, acoustic insulation, antimicrobial surfaces, air purification, surround sound, LED memorial displays, floral mounts).
  5. **Institutional Trust Bar**: Trust markers for Hospitals, Funeral Managers, Municipal Corporations, Religious Trusts & NGOs.
  6. **Pull-Quotes**: Audience quotes for Hospitals, Funeral Management Companies, and Families.
  7. **Closing CTA**: B2B Partnership request & Vehicle Demo Scheduler trigger.

#### [NEW] [src/pages/About.tsx](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/src/pages/About.tsx)
- Azimuth Business on Wheels background, solving the market gap in funeral mobility in Delhi NCR, mission and vision.

#### [NEW] [src/pages/Vehicle.tsx](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/src/pages/Vehicle.tsx)
- Interactive 360°/Hotspot inspection view of the wide-body Force Urbania luxury ceremonial hearse.

#### [NEW] [src/pages/Services.tsx](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/src/pages/Services.tsx)
- Vehicle Fabrication, Fleet Leasing, AMC Maintenance, Mortuary Refrigeration Systems, Institutional Custom Livery.

#### [NEW] [src/pages/Institutions.tsx](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/src/pages/Institutions.tsx)
- B2B portal for Hospitals, Funeral Firms, Municipal Bodies, NGOs. Includes downloadable Partnership PDF brochure viewer and quote generator.

#### [NEW] [src/pages/Gallery.tsx](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/src/pages/Gallery.tsx)
- Filterable gallery (Exterior, Interior, Ceremonial, Walkthrough) with Lightbox viewer.

#### [NEW] [src/pages/Contact.tsx](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/src/pages/Contact.tsx)
- Form with 24-hr response SLA guarantee, direct map display, contact details, and WhatsApp integration.

#### [NEW] [src/components/Footer.tsx](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Eternal%20Grace/src/components/Footer.tsx)
- Brand footer with quick links, taglines, legal policies, and copyright (© 2026 Azimuth Business on Wheels).

---

## Verification Plan

### Automated Build & Code Quality
- Run `npm run build` to confirm zero TypeScript compilation or bundle errors.

### Manual Verification & Brand Compliance
- Verify that **no forbidden terms** (`ambulance`, `mortuary van`, `dead body transport`, etc.) exist anywhere in the user interface.
- Test interactive features: Page navigation, Vehicle Hotspot inspection, B2B Modal, Gallery Lightbox, PDF Brochure trigger, and WhatsApp button.
