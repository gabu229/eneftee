"use client";
import { useParams } from "next/navigation";

export default function ItemPage() {
  const p = useParams();
  return (
    <div>
      <div></div>
      Show Item On Page Here
    </div>
  );
}
