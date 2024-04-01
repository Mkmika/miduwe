"use client";
import { useState, useEffect } from "react";
import { naluka } from "@/fonts";
import Search from "@/components/Search";
import DanceCard from "@/components/DanceCard";
import { danceItem } from "@/interfaces/dance";

export default function Dancelistcard() {
  const [dances, setDances] = useState<danceItem[]>([]);
  const [search, setSearch] = useState("");
  const [filteredDances, setFilteredDances] = useState<danceItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/dances");
      const data = await res.json();
      setDances(data);
      setFilteredDances(data); // Initially set filteredDances to the full data
    }
    fetchData();
  }, []);

  const filterData = (searchValue: string) => {
    setSearch(searchValue);
    const filtered = dances.filter((dance) =>
      dance.danceName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredDances(filtered);
  };

  return (
    <div className="bg-default flex flex-col items-center justify-center gap-5 p-8">
      <div>
        <div>
          <p className={`text-white text-[50px] ${naluka.className}`}>
            Danses <span className="text-[#3A0409]">Traditionelles</span> Béninoises
          </p>
        </div>
        <div>
          <Search onChange={(value) => filterData(value)} value={search} />
        </div>
        <div className=" flex flex-col justify-center items center gap-3 py-8">
          <div className="grid grid-cols-2 gap-6">
            {filteredDances.map((dance, index) => (
              <DanceCard
                key={index}
                danceName={dance.danceName}
                imagePath={dance.imagePath}
                id={dance.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center ">
        <img src="images/plus.svg" className="w-10 h-10" alt="" />
        <p>Charger plus</p>
      </div>
    </div>
  );
}