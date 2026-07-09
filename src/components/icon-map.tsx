import {
  AIIcon,
  MolecularIcon,
  BiophysicsIcon,
  DrugDiscoveryIcon,
  BioinformaticsIcon,
} from "./custom-icons";

// Bespoke icons (see custom-icons.tsx), keyed to match researchAreas.icon
// in content.ts. Kept as a lookup map so content stays data, not JSX.
export const iconMap: Record<string, typeof AIIcon> = {
  BrainCircuit: AIIcon,
  Atom: MolecularIcon,
  Waves: BiophysicsIcon,
  FlaskConical: DrugDiscoveryIcon,
  Dna: BioinformaticsIcon,
};
