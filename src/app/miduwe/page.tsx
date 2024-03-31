import { naluka } from "@/fonts"

export default function Miduwe(){
    return(
        <div className="px-[30px] py-[50px] bg-default flex flex-col gap-10">
            <div className="">
                <img src="images/boxcocoon 1.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <div>
                    <p className={`text-[#3F0408] text-[50px] ${naluka.className}`}>Mi Du We</p>
                    <p className="text-white font-medium text-xl">Le MI DU WE est le produit final de mon travail. Il renferme tous nos médias.</p>
                </div>
                <div>
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>Le produit final</p>
                    <p className="text-white font-medium text-xl">Pièce centrale de notre projet, MI DU WE regroupe tous nos médias en un seul lieu. Elle est l’outil parfait à utiliser en classe pour aborder un sujet tel que la valorisation des danses traditionnelles béninoises d’une manière plus décontractée et ludique.</p>
                </div>
                <div>
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>Nos médias</p>
                    <p className="text-white font-medium text-xl">Le jeu MI DU WE se compose d’un jeu de cartes de mimes ainsi que de nos réseaux sociaux. Chacun apporte leur pierre à l’édifice dans le but de former un tout.</p>
                </div>
                <div>
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>Son fonctionnement</p>
                    <p className="text-white font-medium text-xl">Avec un design épuré, elle est simple d’utilisation. Toutes les informations nécessaires à son utilisation sont sur les fiches à l’intérieur. Elle vous aidera à aborder le sujet avec vos élèves et entre amis également.</p>
                </div>
                <p className="text-white font-medium text-xl">Avec ses fiches explicatives et son jeu de cartes, la box se veut complète et souhaite amener les élèves et étudiants au travers de différents médias afin de les aider au mieux à connaître les différents danses traditionnelles béninoises.</p> 
                <hr style={{ backgroundColor: '#3F0408', height: '2px', border: 'none', width:'100px' }} />                    
                <div className="flex flex-col justify-center items-center">
                    <p className={` py-5 w-[250px] text-[#3F0408] text-[30px] text-center ${naluka.className}`}>Envie de commander le jeu ?</p>
                    <button className="bg-[#3F0408] rounded-full px-11 py-5 text-[#BE894A] text-xl font-semibold">Commander</button>
                </div>
            </div>
                     
        </div>
    )
}