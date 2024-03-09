export async function getServerSideProps(context) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/photos/get-cloudinary-photos?page=${context.query.page || 1}`);
import { useEffect, useState } from 'react';
import useSWRInfinite from 'swr/infinite';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Merchandise() {
  const { data, error, size, setSize } = useSWRInfinite((index) => `/api/photos/get-cloudinary-photos?page=${index + 1}`, fetcher);
  const photos = data ? data.reduce((acc, val) => [...acc, ...val.photos], []) : [];
  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) setSize(size + 1);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
import React from "react";
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
