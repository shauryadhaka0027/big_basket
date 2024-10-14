import React from 'react';

const categories = [
  { title: 'DEALS OF', subtitle: 'View offers >', color: 'bg-red-500', add: 'THE WEEK' },
  { title: 'BIG PACK', subtitle: 'BIGGER DISCOUNTS', color: 'bg-red-500', add: 'BIGGER DISCOUNTS' },
  { title: 'COMBOS', subtitle: 'YOU CAN\'T MISS', color: 'bg-red-500', add: 'YOU CAN\'T MISS' },
  { title: 'THE', subtitle: 'View offers >', color: 'bg-red-500', add: '30 CORNERS' },
];

const products = [
  { title: 'Fresh Vegetables', offer: 'MIN 27% OFF', image: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-1920,q=80' },
  { title: 'Fresh Fruits', offer: 'MIN 27% OFF', image: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/41a0810e-1fc3-46e4-9d2c-7d9e79e0aa29/hp_f&v_m_fresh-vegetables_480_250923.jpg?tr=w-1920,q=80' },
  { title: 'Cuts & Exotics', offer: 'MIN 27% OFF', image: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80' },
  { title: 'Herbs & Seasonings', offer: 'MIN 27% OFF', image: 'path_to_herbs_image' },
];

const productImageArray = ["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_atta-flour-staplesStorefront_m_480_250323_01.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_rice-staplesStorefront_m_480_250323_02.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_dals-pulses-staplesStorefront_m_480_250323_03.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_cooking-oils-staplesStorefront_m_480_250323_04.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_dry-fruits-staplesStorefront_m_480_250323_05.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/0bb0a6da-8713-48fc-a40d-93cd63ca2025/hp_salt-staplesStorefront_m_480_250323_06.jpg?tr=w-1920,q=80"
]

const BeveragesArr=["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_health-drinks-&-supplements_480_250923.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_tea-&-coffee_480_250923.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_flavoured-&-soya-milk_480_250923.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_juices_480_250923.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_energy-drinks_480_250923.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/e4a9856b-dc3f-4927-a5a1-8edfe8d7dc38/hp_bev_m_soft-drinks-&-more_480_250923.jpg?tr=w-1920,q=80"
]

const SnackStoreArray=["https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_biscuits-&-namkeens_480_250923.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_breakfast-cereals_480_250923.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_pasta-sauces-&-more_480_270723.jpg?tr=w-1920,q=80",
    "https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/91e53046-98e0-4c5b-ae53-7d073e5210e1/09ece9f7-7ac9-4d1e-afbb-f8ac572add38/hp_sbf_m_sweet-cravings_480_250923.jpg?tr=w-1920,q=80"
]
const OfferCard = ({ title, subtitle, color, add }) => {
  return (
    <div className="rounded-lg shadow-lg text-white">
      <div className={`text-lg font-semibold rounded-lg py-14 bg-[#d72626]`}>
        <h2 className="font-extrabold text-2xl relative">
          <span className="absolute left-5 top-5">{title}</span>
        </h2>
      </div>
      <h2 className="text-black px-6 font-extrabold text-2xl h-24">{add}</h2>
      <p className="mt-2 bg-white text-black text-sm px-6 mb-4">{subtitle}</p>
    </div>
  );
};

const ProductCard = ({ title, offer, image }) => {
  return (
    <div className="rounded-lg shadow-lg p-4 bg-white">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className=" p-6 w-[75%] m-auto">
      {/* Top Offers Section */}
      <h2 className="text-2xl font-bold mb-4">Top Offers</h2>
      <div className="w-[98%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <OfferCard
            key={index}
            title={category.title}
            subtitle={category.subtitle}
            color={category.color}
            add={category.add}
          />
        ))}
       
      </div>

      {/* Fruits and Vegetables Section */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Fruits and Vegetables</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            offer={product.offer}
            image={product.image}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Your Daily Staples</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
        {productImageArray.map((product, index) => (
          <ProductCard
            key={index}
            image={product}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Beverages</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4">
        {BeveragesArr.map((product, index) => (
          <ProductCard
            key={index}
            image={product}
          />
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Snacks Store</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {SnackStoreArray.map((product, index) => (
          <ProductCard
            key={index}
            image={product}
          />
        ))}
      </div>

    </div>
  );
};

export default Dashboard;
