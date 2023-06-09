import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import pdd from "@/image/pdd.jpg";
import spark from "@/image/spark.jpg";
import facebook from "@/image/facebook.jpg";
import stackoverflow from "@/image/stackoverflow.jpg";
import nottrack from "@/image/nottrack.jpg";
import appstore from '@/image/appstore.jpg'
import safari from '@/image/safari.jpg'
const ImageDrag = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  const ImageList = [
    {
      src: pdd,
      x: 200,
      y: 100,
      width: 300,
    },
    {
      src: spark,
      x: 460,
      y: 450,
      width: 400,
    },
    {
      src: facebook,
      x: 800,
      y: 100,
      width: 400,
    },
    {
      src: stackoverflow,
      x: 400,
      y: -300,
      width: 400,
    },
    {
      src: nottrack,
        x: 100,
      y: -400,
      width: 300,
    },
    {
      src: appstore,
      x: 300,
      y: -650,
      width: 500,
    },
    {
      src: safari,
      x: 700,
      y: -1000,
      width: 500,
    }
  ];
  return (
    <>
      <div className="h-full w-full overflow-hidden">
        {ImageList.map((image) => (
          <>
            <motion.div initial={{ x: image.x, y: image.y }} drag>
              <Image
                src={image.src}
                alt={image.src.toString()}
                onDragStart={handleDragStart}
                width={image.width}
                className="select-none"
              />
            </motion.div>
          </>
        ))}
      </div>
    </>
  );
};

export default ImageDrag;
