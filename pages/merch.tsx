import useSWRInfinite from 'swr/infinite';
import axios from 'axios';
import MerchandiseCard from '../components/Merch/MerchandiseCard';
const fetcher = url => axios.get(url).then(res => res.data);
const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null;
  return `/api/merchandise/get-merchandise?page=${pageIndex + 1}`;
};
export default function MerchPage() {
  const {data, error, size, setSize} = useSWRInfinite(getKey, fetcher, {initialSize: 1});
  const merchandise = data ? data.flat() : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData || (size > 0 && data && typeof data[size - 1] === 'undefined');
  const isReachingEnd = data && data[data.length - 1]?.length < 10;
  const loadMore = () => {
    if (!isLoadingMore && !isReachingEnd) {
      setSize(size + 1);
    }
  };
  return (
    <div>
      <div>
        {merchandise.map(item => (
          <MerchandiseCard key={item.id} item={item} />
        ))}
      </div>
      <button disabled={isLoadingMore || isReachingEnd} onClick={loadMore}>
        {isLoadingMore ? 'Loading...' : isReachingEnd ? 'No More Items' : 'Load More'}
      </button>
    </div>
  );
}import React from "react";
// import { ReactPhotoCollage } from "react-photo-collage";
import { motion } from "framer-motion";
import { StoreItem } from "@/components/Shopping/StoreItem";
import storeItems from "@/data/items.json";
import Merch from "@/components/Merch";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger the children by 0.1 seconds
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function MerchPage() {
  return (
    <div className="flex items-center justify-center pt-6 bg-light">
      {/*}
      <div className="mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center items-center mb-6 footerXM:mb-8 nav:mb-12 xl:mb-14 nav:grid-cols-2 nav:grid  
                gap-y-6
                footerXM:gap-8
                nav:gap-12
                xl:gap-14
               mycommunityGrid:grid-cols-3"
        >
          {storeItems.map((item: any, index: number) => (
            <motion.div key={index} variants={childVariants}>
              <StoreItem {...item} key={item.id} />
            </motion.div>
          ))}

          
        </motion.div>
      </div>*/}
    </div>
  );
}
