"use client";

import { useRouter } from "next/navigation";
import ButtonGreen from "./ButtonGreen";

export default function PrevPath() {
  const router = useRouter();

  return (
   <ButtonGreen text="Back" action={() => router.back()} />
  );
}