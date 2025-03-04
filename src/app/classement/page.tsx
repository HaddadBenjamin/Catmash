"use client";

import { Button } from "@/components/designSystem/Button";
import { listCatPaths } from "@/utils/listCatPaths";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const catFiles = listCatPaths();

  return (
    <div>
      {JSON.stringify(catFiles)}
      <Button onClick={() => router.push("/")}>Button accueuil</Button>
    </div>
  );
}
