import CategoryPageLayout from "../components/CategoryPageLayout";

const cateringPackages = {
  Basic: [
    "Vegetarian menu for 50 guests",
    "2 starters, 2 main courses, 1 dessert",
    "Buffet setup and serving staff",
  ],
  Premium: [
    "Multi-cuisine for 100 guests",
    "Live counter option",
    "Themed décor, buffet + table service",
  ],
  Elite: [
    "Gourmet for 200 guests",
    "Mocktail bar, chef-curated dishes",
    "Luxury tableware and event manager",
  ],
};

const cateringPhotos = [
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/catering/download%20%281%29.jpg"},
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/catering/download%20%282%29.jpg"},
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/catering/download%20%283%29.jpg"},
  {url:"https://yjthu6vkxab3pogk.public.blob.vercel-storage.com/catering/download.jpg"},
]

const Catering = ()=>(
<CategoryPageLayout
    title="Catering"
    currentCategory="catering"
    packages={cateringPackages}
    photos={cateringPhotos}
/>
);


export default Catering;

