import { naluka } from "@/fonts"

export default function Jeudecartes(){
    return(
        <div className="px-[30px] py-[50px] bg-[#BE894A] flex flex-col gap-10">
            <div className="">
                <img src="images/boxcocoon 1.svg" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
                <div>
                    <p className={` uppercase text-[#3F0408] text-[50px] ${naluka.className}`}>Le jeu de cartes mimes</p>
                    <p className="text-white font-medium text-xl">Promouvoir les danses traditionnelles béninoises à travers un jeu de cartes de mimes.</p>
                </div>
                <div>
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>Explications</p>
                    <p className="text-white font-medium text-xl">Le jeu de cartes MI DU WE propose d’aborder le sujet au travers un jeu de cartes de mimes contenant des illustrations ou des noms de danses traditionnelles béninoises, ainsi qu’une planche représentant une carte du Bénin avec des emplacements pour placer les cartes.</p>
                </div>
                <div>
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>Deroulement du jeu</p>
                    <p className="text-white font-medium text-xl">
                    - Les joueurs se rassemblent autour de la planche représentant la carte du Bénin. <br /> 
                    - Un joueur tire une carte du jeu de mimes sans la montrer aux autres joueurs. <br /> 
                    - Ce joueur doit ensuite mimer la danse traditionnelle béninoise indiquée sur la carte. <br />
                    - Les autres joueurs tentent de deviner quelle danse est représentée en désignant un endroit sur la carte où ils pensent que cette danse est pratiquée à l’aide des letttres en écrivant le nom de la danse dans l’endroit sur la carte. <br />
                    - Si un joueur devine correctement la danse et l’endroit correspondant sur la carte, il marque un point. <br />
                    - Le joueur qui a deviné correctement prend ensuite la prochaine carte et mime une nouvelle danse, et ainsi de suite. <br />
                    Fin du jeu : Le jeu se termine après un nombre prédéfini de tours ou lorsque toutes les cartes ont été utilisées. <br />
                    Le joueur ayant marqué le plus de points remporte la partie.
                    </p>
                </div>
            </div>
                     
        </div>
    )
}