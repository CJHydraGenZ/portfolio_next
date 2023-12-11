import { block } from "million/react";
import Image from "next/image";

export const ProductRow = block(
  ({ id, title, description, price, thumbnail }) => {
    return (
      <div>
        <p>
          <span>{id}</span>
        </p>
        <p>
          <span>{title}</span>
        </p>
        <p>
          <span>{description}</span>
        </p>
        <div>
          <Image
            src={thumbnail}
            alt="Picture of the author"
            width={360}
            height={200}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <p>
          <span>{price}</span>
        </p>
      </div>
    );
  }
);
