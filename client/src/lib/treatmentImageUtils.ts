import { Treatment } from "@/data/treatments";

export function getTreatmentImageClassName(treatment: Treatment): string {
  switch (treatment.slug) {
    case 'anti-wrinkle':
      return 'translate-y-[-20%]'; 
    case 'jawline-slimming':
      return 'scale-[1.3] translate-y-[5%]';      // Adjust percentage as needed for desired nudge
    case 'lower-face-contour-duo':
      return 'scale-[1.6] translate-y-[10%]';
    // Add more cases for other specific image classes here
    default:
      return '';
  }
}
