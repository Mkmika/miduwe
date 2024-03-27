import { naluka } from "@/fonts"

export default function Dancelistcard(){
    return (
        <div className="bg-[#BE894A] shadow-inset bg-opacity-30 flex flex-col items-center justify-center gap-5 " id="dance_hero_section" >
            <div className="px-[50px] py-[20px]">
                <div>
                    <p className={`text-white text-[70px] ${naluka.className}`}>
                        Danses <span className="text-[#3A0409]">Traditionelles</span> Béninoises
                        </p>
                </div>
                <div className="flex w-[250px] " >
                    <input type="search" name="" id="" placeholder="Rechercher" className="w-[250px] h-[40px] rounded-xl " />
                    <button type="submit" className="search-button">
                        <img src="images/Search.svg" alt="" />
                    </button>                   
                </div>
                <div className=" flex flex-col justify-center items center gap-3 py-8 px-4">
                    <div className="flex gap-8">
                        <div className=" flex flex-col gap-3">
                            <img src="images/zinli.svg" alt="" className="bg-white w-15 h-15 rounded-2xl"/>
                            <p className={`text-[#3A0409] ${naluka.className}`}>Zinli</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <img src="images/tipenti.svg" alt="" className="bg-white w-15 h-15 rounded-2xl" />
                            <p className={`text-[#3A0409] ${naluka.className}`}>Tipenti</p>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="flex flex-col gap-3">
                            <img src="images/tchinkoume.svg" alt="" className="bg-white w-15 h-15 rounded-2xl" />
                            <p className={`text-[#3A0409] ${naluka.className}`}>Tchinkoumè</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <img src="images/agbadja.svg" alt="" className="bg-white w-15 h-15 rounded-2xl" />
                            <p className={`text-[#3A0409] ${naluka.className}`}>Agbadja</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center ">
                <img src="images/plus.svg" className="w-10 h-10" alt="" />
                <p>Charger plus</p>
            </div>
        </div>
    )
}