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

const Sangeet = () => (
  <CategoryPageLayout
    title="Sangeet"
    currentCategory="sangeet"
    packages={sangeetPackages}
  />
);

export default Sangeet;
