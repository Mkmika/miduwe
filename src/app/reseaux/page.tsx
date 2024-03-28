import { naluka } from "@/fonts"

export default function Reseaux(){
    return(
        <div className="px-[30px] py-[50px] bg-[#BE894A] flex flex-col gap-10">
            <div className="">
                <img src="images/reseau.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <div>
                    <p className={`text-[#3F0408] text-[50px] ${naluka.className}`}>Les réseaux</p>
                    <p className="text-white font-medium text-xl">Les réseaux sociaux permettent à MI DU WE de vous partager les dernières exclusivités ainsi qu’à rester en contact pour toute question éventuelle.</p>
                </div>
                <div>
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>Les dernieres exclusivites</p>
                    <p className="text-white font-medium text-xl">MI DU WE est un projet qui se veut proche de sa communauté. Nous souhaitons partager à chacun nos dernières sorties, ainsi que les backstages du projet.</p>
                </div>
                <div>
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>Rester en contact</p>
                    <p className="text-white font-medium text-xl">Nous souhaitons pouvoir informer au mieux les jeunes sur les différentes danse traditionnelles béninoises et pour promouvoir les danses traditionnelles béninoises.</p>
                </div>
               <div className="flex flex-col justify-center items-center gap-4">
                    <hr style={{ backgroundColor: '#3F0408', height: '2px', border: 'none', width:'100px' }} />
                    <p className="text-[#3F0408] text-[22px] uppercase font-bold">Suivez-nous !</p>                 
                    <div className="flex justify-between gap-[50px] p-[25px] " >
                        <div className="bg-[#BE894A] rounded-full p-5 shadow-xl">
                            <img src="images/linkedin.svg" alt="" />
                        </div>
                        <div className="bg-[#BE894A] rounded-full p-5 shadow-xl">
                            <img src="images/facebook.svg" alt="" />
                        </div>
                        <div className="bg-[#BE894A] rounded-full p-5 shadow-xl">
                            <img src="images/instagram.svg" alt="" />
                        </div>
                    </div>
               </div>
            </div>
                     
        </div>
    )
}