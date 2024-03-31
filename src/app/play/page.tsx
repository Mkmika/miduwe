import { naluka } from "@/fonts"

export default function Bienvenue(){
    return(
        <div className="px-[30px] py-[50px] bg-[#BE894A] flex flex-col justify-center items-center gap-10">
            <p className={`text-[#3F0408] text-[50px] ${naluka.className}`}>Bienvenue</p>
            <div className="font-medium text-white text-[20px] text-center flex flex-col gap-2">
                <p>Ce petit jeu à pour but de mesurer votre connaissance face au sujet de la valorisation des danses traditionnelles Béninoises. Les 5 questions qui vont suivre sont toutes issues de notre jeu de cartes présent dans la box de MI DU WE.</p>
                <p>
                Répondez correctement à chacune d’entre elles afin d’obtenir une récompense !
                </p>
                <p className="font-bold">BONNE CHANCE </p>
            </div>
            <div>
                <button className="bg-[#3F0408] rounded-3xl px-[60px] py-5 text-[#BE894A] text-xl">Jouer</button>
            </div>
                    
        </div>
    )
}