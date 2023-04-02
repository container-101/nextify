import { ComponentMeta } from "@storybook/react";
import Carousel from "./Carousel";
import { Image } from "@src/components/common";
import { useMemo } from "react";

export default {
  title: "Components/Carousel",
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

export const SingleImageCarousel = () => {
  const images = useMemo(() => {
    return Array(5)
      .fill(0)
      .map((_, index) => {
        return `https://picsum.photos/500/300?random=${index}`;
      });
  }, []);

  return (
    <div className="w-[500px] h-[300px]">
      <Carousel>
        {images.map((image, index) => {
          return (
            <div key={`carousel-item-${index}`}>
              <Image src={image} fill alt="" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export const SingleLetterCarousel = () => {
  return (
    <div className="w-[500px] h-[300px]">
      <Carousel>
        {Array(26)
          .fill(0)
          .map((_, index) => {
            return (
              <div
                key={`carousel-item-${index}`}
                className="w-full h-full flex justify-center items-center border-8 border-cyan-700"
              >
                TEST
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};
