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

const Decoration = () => (
  <CategoryPageLayout
    title="Decoration"
    currentCategory="decoration"
    packages={decorationPackages}
  />
);

export default Decoration;
