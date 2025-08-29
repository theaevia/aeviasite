import { Treatment } from "@/data/treatments";

/*
USAGE: Centralised image positioning and sizing for thumbnails and heroes

What this file controls
- Thumbnail cards (category pages): object-position and optional transforms.
- Hero images (per treatment page): object-position and optional transforms.

How to adjust a thumbnail
1) Add a case by slug in getThumbnailObjectPosition and/or getThumbnailClassName.
   - Example:
     case 'sculptra':
       return '50% 35%'; // lift focal point slightly
     case 'sculptra':
       return 'transform-gpu scale-[1.08]'; // crop a touch tighter
2) The category pages pass these props into <TreatmentCard>, so changes here apply everywhere.

How to adjust a hero image
1) Each treatment hero <img> calls getHeroImageObjectPosition('<slug>') and getHeroImageClassName('<slug>').
2) Add a case by slug in the helpers below to change focus/crop.
   - Example:
     case 'eye-rejuvenation': return '50% 40%';
     case 'eye-rejuvenation': return 'transform-gpu scale-[1.05]';

Object-position quick recipes
- Raise focus (show more lower face/neck): '50% 35%'
- Lower focus (show more forehead/hairline): '50% 65%'
- Shift left/right: '40% 50%' (left) or '60% 50%' (right)

Scaling recipes (via className)
- Slight crop: 'transform-gpu scale-[1.05]' (or 1.08 / 1.1)
- Disable scaling: return '' (default)

Defaults
- Thumbnail and hero helpers default to centered '50% 50%' and no extra classes, so wiring these helpers causes no visual change until you add a case.
*/

// Treatment image utilities (per-treatment page images)
export function getThumbnailClassName(treatment: Treatment): string {
  switch (treatment.slug) {
    case 'anti-wrinkle':
      return '';
    case 'jawline-slimming':
      return 'scale-[1.2]';
    case 'lower-face-contour-duo':
      return '';
    case 'full-face-regeneration':
      return 'scale-[1]';
    // Add more cases for other specific image classes here
    default:
      return '';
  }
}

// Controls the focal point within the 4:3 card frame.
// Adjust per slug as needed; defaults to centered.
export function getThumbnailObjectPosition(treatment: Treatment): string {
  switch (treatment.slug) {
    case 'anti-wrinkle':
      return '50% 50%'
    case 'neck-lift':
      return '50% 35%'; // focus slightly higher to keep neck/jaw in frame
    case 'jawline-slimming':
      return '50% 90%';
    case 'lower-face-contour-duo':
      return '50% 50%';
    case 'sweat-control':
      return '50% 50%'; // center a touch lower for underarm
    case 'smile-lift':
      return '5% 40%';
    case 'sculptra':
      return '90% 50%';
    case 'eye-rejuvenation':
      return '50% 0%';
    default:
      return '50% 50%';
  }
}

// Hero image utilities (per-treatment page heroes)
// Manage hero image object-position and optional transforms by treatment slug.
export function getHeroImageObjectPosition(slug: string): string {
  switch (slug) {
    // Example overrides (uncomment and tweak as needed):
    // case 'sculptra':
    //   return '50% 35%';
    case 'sculptra':
      return '100% 50%';
    case 'eye-rejuvenation':
      return '50% 20%';
    case 'smile-lift':
      return '5% 40%';
    default:
      return '50% 50%';
  }
}

export function getHeroImageClassName(slug: string): string {
  switch (slug) {
    // Example overrides (uncomment and tweak as needed):
    // case 'sculptra':
    //   return 'transform-gpu scale-[1.08]';
    case 'smile-lift':
      return 'transform-gpu scale-[1.1]';
    default:
      return '';
  }
}

// Backwards-compatible aliases for prior helper names used in category pages
// These ensure builds using older import names still succeed.
export {
  getThumbnailClassName as getTreatmentImageClassName,
  getThumbnailObjectPosition as getTreatmentImageObjectPosition,
};
