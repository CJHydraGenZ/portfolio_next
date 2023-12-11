"use client";
// import { log } from 'console'
import Image from "next/image";
import useSWR from "swr";
import { fetcher } from "../components/func/fetcher";
import { For } from "million/react";
import { ProductRow } from "../components/Product";
export default function Data() {
  const { data } = useSWR("https://dummyjson.com/products", fetcher);

  if (!data) return "loading...";
  console.log(data);

  return (
    <>
      <h1>Data</h1>
      <div>
        <For each={data?.products}>
          {({ id, title, description, price, thumbnail }: any) => (
            <ProductRow
              id={id}
              title={title}
              description={description}
              price={price}
              thumbnail={thumbnail}
            />
          )}
        </For>
      </div>
    </>
  );
}
