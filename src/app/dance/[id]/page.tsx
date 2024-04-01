"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { naluka } from "@/fonts";
import { danceItem } from "@/interfaces/dance";

export default function DanceDetail() {
  const [danceData, setDanceData] = useState<danceItem>();
  const params = useParams<{ id: string}>()

  const danceId = params.id

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/dances?id=${danceId}`);
        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }
        const data = await res.json();
        setDanceData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching dance data:", error);
      }
    }
    fetchData();
  }, [danceId]);


  return (
    <div className="px-[30px] py-[50px] bg-default flex flex-col gap-10">
      <div className="drop-shadow">
        <img src={danceData?.imagePath} alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-5">
          <p className={`text-[#3F0408] text-[50px] ${naluka.className}`}>
            {danceData?.danceName}
          </p>
          <p>{danceData?.shortDesc}</p>

          <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>
            Histoire
          </p>
          <p>{danceData?.history}</p>
          <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>
            Pratique
          </p>
          <p>{danceData?.pratice}</p>
        </div>
        <div>
          <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>
            Instrumental
          </p>
          <div className="flex gap-3">
            <img src="/images/play-circle.svg" alt="" />
            <img src="/images/traitmusique.svg" alt="" />
          </div>
        </div>
        <div>
          <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>
            Photo-Video
          </p>
          <div>
            <img src="/images/zinliImage.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
