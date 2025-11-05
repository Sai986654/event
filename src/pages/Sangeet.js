import CategoryPageLayout from "../components/CategoryPageLayout";

const sangeetPackages = {
  Basic: [
    "Sound & light for 50 guests",
    "Stage décor",
    "2-hour DJ/music",
  ],
  Premium: [
    "Extended sound/light for 100 guests",
    "4hr professional DJ/Band",
    "Elegant stage décor",
  ],
  Elite: [
    "Designer stage décor with effects",
    "Celebrity performer",
    "Unlimited hours",
  ],
};

const sangeetPhotos = [
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/sangeet/images%20%281%29.jpg"},
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/sangeet/images%20%282%29.jpg"},
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/sangeet/images%20%283%29.jpg"},
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/sangeet/images.jpg"},
]

const Sangeet = () => (
  <CategoryPageLayout
    title="Sangeet"
    currentCategory="sangeet"
    packages={sangeetPackages}
    photos={sangeetPhotos}
  />
);

export default Sangeet;
