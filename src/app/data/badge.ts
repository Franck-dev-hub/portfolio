export interface Badge {
  label: string;
  url: string;
}

export function badge(label: string, color: string, logo: string, logoColor = 'white'): Badge {
  const text = encodeURIComponent(label.replaceAll('-', '--').replaceAll('_', '__'));
  return {
    label,
    url: `https://img.shields.io/badge/${text}-${color}?logo=${logo}&logoColor=${logoColor}`,
  };
}
