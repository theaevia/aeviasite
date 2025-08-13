import { Treatment } from "@/data/treatments";

export function getTreatmentImageClassName(treatment: Treatment): string {
  switch (treatment.slug) {
    case 'anti-wrinkle':
      return '';
    case 'jawline-slimming':
      return 'scale-[1.3]';
    case 'lower-face-contour-duo':
      return '';
    // Add more cases for other specific image classes here
    default:
      return '';
  }
}

// Controls the focal point within the 4:3 card frame.
// Adjust per slug as needed; defaults to centered.
export function getTreatmentImageObjectPosition(treatment: Treatment): string {
  switch (treatment.slug) {
    case 'anti-wrinkle':
      return '50% 50%'
    case 'neck-lift':
      return '50% 35%'; // focus slightly higher to keep neck/jaw in frame
    case 'jawline-slimming':
      return '50% 70%';
    case 'lower-face-contour-duo':
      return '50% 50%';
    case 'sweat-control':
      return '50% 50%'; // center a touch lower for underarm
    case 'smile-lift':
      return '5% 40%';
    default:
      return '50% 50%';
  }
}
