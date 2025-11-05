import CategoryPageLayout from "../components/CategoryPageLayout";


const decorationPackages = {
  Basic: [
    "Elegant backdrop with drapes",
    "Simple floral arrangements",
    "Basic lighting",
  ],
  Premium: [
    "Designer backdrop with fresh flowers",
    "LED & fairy lights",
    "Enhanced flooring and seating",
  ],
  Elite: [
    "Custom thematic designs",
    "Premium flowers & lighting effects",
    "Celebrity-style seating",
    "On-site decor manager",
  ],
};

const decorationPhotos = [
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/decorations/latest%20decoration.jpeg"},
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/decorations/IMG-20251024-WA0007%20%281%29.jpeg"},
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/decorations/IMG-20251024-WA0008%20%281%29%28%29.jpeg"},
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/decorations/IMG-20251105-WA0000.jpeg"},
]

const Decoration = () => (
  <CategoryPageLayout
    title="Decoration"
    currentCategory="decoration"
    packages={decorationPackages}
    photos={decorationPhotos}
  />
);

export default Decoration;
