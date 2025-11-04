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
  { url: "https://i.imgur.com/MmXY4zo.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/mzdDQ6b.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/ozZnTB5.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/wyXGxd7.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/G0cMYtw.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/QqUR34z.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/aKit1T5.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/wvulcEy.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/6NZR1QG.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/IChvXSj.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/gZUc03m.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/NV66v2t.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/cDpb2wT.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/TkBAidq.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/HnZ8vsE.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/zfo2XpN.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/n3GPfYU.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/MmMSACt.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/7uCNuQY.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/kFdwCX1.jpeg", alt: "Photo" },
  { url: "https://i.imgur.com/kfOxoJw.jpeg", alt: "Photo" },
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