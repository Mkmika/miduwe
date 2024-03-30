import { naluka } from "@/fonts"

export default function Zinli(){
    return(
        <div className="px-[30px] py-[50px] bg-[#BE894A] flex flex-col gap-10">
            <div className="drop-shadow">
                <img src="/images/zinli.svg" alt="" />
            </div>
            <div  className="flex flex-col gap-1">
                <div className="flex flex-col gap-5">
                    <p className={`text-[#3F0408] text-[50px] ${naluka.className}`}>Zinli</p>
                    <p>Le Zinli, autrefois appelé Avi zinli, est à la fois un rythme et une musique traditionnelle béninoise.C’est une danse culturelle du sud Benin se produisant principalement lors des cérémonies funéraires; majoritairement le département du Zou; plus précisément dans le plateau d’Abomey</p>
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>Histoire</p>
                    <p>L’histoire du Zinli remonte au temps des Rois du Danxomè. Le prince Gbéyin, futur roi Glèlè (1858 – 1889) de Danxomè aurait créé le Zinli au XIXè siècle à l’occasion des funérailles d’un des amis de son père, le roi Guézo. Depuis lors, ce rythme funéraire du plateau d’Abomey a gardé cette renommée initiale avant de s’inscrire dans le registre des musiques populaires. Mais si le Zinli a pu retrouver toute sa notoriété, c’est grâce à la touche particulière de Michel Loukou, plus connu du public sous le nom « Alèkpéhanhou ». La touche que l’artiste Alèkpéhanhou a apportée au Zinli à partir des années 1980 l’a fait connaître jusqu’aux extrémités de la terre. Grâce à son travail rénovateur, le roi du Zinli est sollicité sur bon nombre de festivals européens.</p>
                    <p className={`text-[#3F0408] text-[30px] ${naluka.className}`}>Pratique</p>
                    <p> Ce rythme est joué avec des vases en terre cuite caressés par un éventail qui lui confère un son assez lugubre, rappelant le deuil et le changement d’humeur des membres de la famille éplorée. Ce son est accompagné par d’autres instruments que sont le tambour « kpézen » et les gongs de diverses formes.</p>
                </div>
                <div>
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>Instrumental</p>
                    <div className="flex gap-3">
                        <img src="/images/play-circle.svg" alt="" />
                        <img src="/images/traitmusique.svg" alt="" />

                    </div>
                </div>
                <div>
                    <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>Photo-Video</p>
                    <div>
                        <img src="/images/zinliImage.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}