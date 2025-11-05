import CategoryPageLayout from "../components/CategoryPageLayout";

const makeupPackages = {
  Basic: [
    "Simple party makeup for 1 person",
    "Light foundation, basic eye makeup",
    "Duration: 1 hour",
    "Touch-up kit included",
  ],
  Premium: [
    "Bridal makeup for 1 person",
    "Eye makeup with lashes, contouring",
    "Hairstyling included",
    "One pre-event trial session",
    "Duration: 2 hours",
  ],
  Elite: [
    "Bridal package for 1-2 people",
    "Premium HD makeup & hairstyling",
    "Skin prep & luxury facial",
    "Two pre-event trials",
    "On-call makeup artist during event",
  ],
};

const makeupPhotos = [
  {url : "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/makeup/download%20%281%29.jpg"},
  {url : "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/makeup/download.jpg"},
  {url : "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/makeup/rishabhagarwal-dulhan-makeup.jpg"},
  {url : "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/makeup/Non-Dramatic-South-Indian.jpg"},
]

const Makeup = () => (
  <CategoryPageLayout
    title="Makeup"
    currentCategory="makeup"
    packages={makeupPackages}
    photos={makeupPhotos}
  />
);

export default Makeup;
