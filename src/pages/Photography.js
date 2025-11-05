import CategoryPageLayout from "../components/CategoryPageLayout"; // Context to track global selections

const photographyPackages = {
  Basic: [
    "Traditional Photography",
    "Traditional Videography",
    "25 Sheets Album",
    "One Calendar",
    "One Photoframe",
    "2 Fridge Magnets",
  ],
  Premium: [
    "Traditional Photography",
    "Candid Photography",
    "Traditional Videography",
    "Drone",
    "30 Sheets Album",
    "One Calendar",
    "Two Photoframes",
    "2 Fridge Magnets",
  ],
  Elite: [
    "Traditional Photography",
    "Candid Photography",
    "Traditional Videography",
    "Candid Videography (Gimbal)",
    "Drone",
    "40 Sheets Album",
    "Two Calendars",
    "Two Photoframes",
    "Pre/Post wedding Shoot (T&C Apply)",
    "2 Fridge Magnets",
  ],
};

const photographyPhotos = [
  { url: "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/photography/79fe5ab5.jpg", alt: "Photo" },
  { url: "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/photography/8f1d0d00.jpg", alt: "Photo" },
  { url: "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/photography/c4e8bac8.jpg", alt: "Photo" },
  { url: "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/photography/caf0cdca.jpg", alt: "Photo" },
  { url: "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/photography/ea310828.jpg", alt: "Photo" },
  { url: "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/photography/f7e3835b.jpg", alt: "Photo" },
  { url: "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/photography/f98e31cf.jpg", alt: "Photo" },
  { url: "https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/photography/image02.jpg", alt: "Photo" },
];

const Photography = () => (
  <CategoryPageLayout
    title="Photography"
    currentCategory="photography"
    packages={photographyPackages}
    photos={photographyPhotos}
  />
);

export default Photography;