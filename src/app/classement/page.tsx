"use client";

import { Button } from "@/components/designSystem/Button/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return <Button onClick={() => router.push("/")}>Button accueuil</Button>;
}
