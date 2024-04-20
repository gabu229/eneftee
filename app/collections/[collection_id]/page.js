"use client";
import { useParams } from "next/navigation";

export default function ItemPage() {
  const p = useParams();
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div></div>
      Show Collection Item On Page Here
    </div>
  );
}
