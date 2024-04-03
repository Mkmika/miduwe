import { naluka } from "@/fonts"

export default function Leprojet(){
    return(
        <div className="px-[25px] py-[35px] bg-[#BE894A] flex flex-col gap-10">
            <div>
                <p className={`text-[#3F0408] text-[70px] ${naluka.className}`}>
                    <span className={`text-white text-[70px] ${naluka.className}`}>Le</span> projet  
                    <span className={`text-white text-[70px] ${naluka.className}`}>Mi Du We</span>
                </p> 
                <div className="text-white flex flex-col gap-5">   
                    <div>
                        <p>
                            MI DU WE est une box éducative pour promouvoir les danses traditionnelles
                            béninoises à travers un jeu de cartes de mimes.. 
                            Ce projet est né dans le cadre d’un travail de fin d’année au sein de la 
                            licence en design graphique à Africa Design School.
                        </p>
                    </div>
                    <div>
                        <img src="images/boxcocoon 1.svg "alt="" />
                    </div>
                    <div>
                        <p>
                            Cette box est destinée aux enfants à partir de 6 ans.
                            Elle a été conçue, pensée et dessinée pour s’adapter 
                            au mieux aux besoins institutionnels promouvoir les danses traditionnelles béninoises . 
                            Elle s’inscrit dans un but éducatif.
                        </p>
                    </div>
                </div>
                <div className="text-white">
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>
                        Qui sommes-nous ?
                    </p> 
                    <div className="flex flex-col gap-5">
                        <div>
                            <p>MI DU WE est tout droit sorti de l’imagination de <span className="text-[#3F0408] font-extrabold">VINOU Bernice Joviale</span>  en troisième année de design graphique à Africa Design School.</p>
                        </div>
                        <div>
                            <p>Tous issus de bacheliers différents, cette licence permet de développer de nouvelles compétences et de gérer la création de projets tels que celui-ci.</p>
                        </div>
                        <div>
                            <p>Si vous désirez en apprendre plus sur nous vous trouverez toutes les informations nécéssaires ici:</p>
                        </div>
                        <div>
                            <button className="bg-[#3F0408] rounded-full px-11 py-5 text-[#BE894A] text-xl font-semibold">Découvrir</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
                <p className={`text-[#3F0408] text-[50px] ${naluka.className}`}>
                    <span className={`text-white text-[50px] ${naluka.className}`}>Le</span> jeu  
                    <span className={`text-white text-[50px] ${naluka.className}`}>& ses</span> médias
                </p>
                <div className="flex flex-col justify-center items-center gap-5">
                    <img src="images/reseau.svg" alt="" />
                    <div className="bg-[#3F0408] px-[125px] py-[25px] rounded-xl">
                        <p className="text-white font-bold uppercase">les réseaux</p>
                    </div>
                    <img src="images/dot.svg" alt="" />
                </div>
            </div>
            <div>
                <p className={` uppercase w-[200px] text-[#3F0408] text-[50px] ${naluka.className}`}> Le 
                    <span className={`text-white text-[50px] ${naluka.className}`}> jeu </span>
                     mi du we 
                </p>
                <div className="text-white  text-xl font-light">
                    <p>Envie de savoir à quoi ressemble notre jeu de cartes ?</p>
                </div>
            </div>
            <div className="">
                <div>
                    <button className="bg-[#3F0408] rounded-full px-10 py-4 text-[#BE894A] text-xs font-bold">Jouer</button>
                </div>
            </div>

           
        </div>
    )
}