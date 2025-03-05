"use client";

import { Button } from "@/shared/components/designSystem/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Button onClick={() => router.push("/")}>Button accueuil</Button>
    </div>
  );
}
