import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function UnderDevelopmentCategory() {
  const [path, navigate] = useLocation();

  useEffect(() => {
    // Map the category path to the Treatments anchor slug
    // e.g. /categories/skin-boosters -> #skin-boosters
    const toSlug = (p: string): string => {
      if (p.includes('/categories/skin-boosters')) return 'skin-boosters';
      if (p.includes('/categories/polynucleotides')) return 'polynucleotides';
      if (p.includes('/categories/microneedling-peels')) return 'microneedling';
      if (p.includes('/categories/bio-voluminisation')) return 'bio-voluminisation';
      if (p.includes('/categories/consultation')) return 'skin-consultation';
      return '';
    };

    const slug = toSlug(path);
    // Fallback to base treatments page if unknown
    const target = slug ? `/treatments#${slug}` : '/treatments';
    navigate(target, { replace: true });
  }, [path, navigate]);

  return null;
}
