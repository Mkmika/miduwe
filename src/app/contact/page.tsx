import { naluka } from "@/fonts"

export default function Contact(){
    return(
        <div>
            <div className="flex flex-col justify-center items-center gap-10 ">
                <div className="flex flex-col gap-5">
                    <p className={`text-[#3F0408] text-[70px] ${naluka.className}`}>Contact</p>
                    <p className="text-white font-medium">Vous désirez me <span className="font-bold">poser une question</span>
                     ou encore <span className="font-bold">commander un de nos jeu</span>,profitez de ce formulaire pour nous transmettre votre demande.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <input type="text" placeholder="FirstName" className="px-[13px] h-[40px] rounded-xl text-black text-sm " />
                    <input type="text" placeholder="LastName" className="px-[13px] h-[40px] rounded-xl text-black text-sm " />
                    <input type="text" placeholder="Email" className="px-[13px] h-[40px] rounded-xl text-black text-sm " />
                    <input type="text" placeholder="Message" className="px-[40px] h-[80px] rounded-xl text-black text-sm  " />
                    <div className="flex gap-1">
                        <input type="radio" name="" id="" />
                         <p className="text-sm text-[#3F0408] font-medium">S'inscrire a la Newsletter</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-[#3F0408] rounded-3xl p-4  text-[#BE894A] text-xs">Envoyer</button>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <p className={`text-[#3F0408] text-[40px] ${naluka.className}`}>
                        Rejoignez <span className={`text-[#1D1F26] text-[40px] ${naluka.className}`}>le projet MI DU WE !</span> 
                        </p>
                    <div className=" flex flex-col items-center" >
                        <p className="text-[#3F0408]">Inscrivez-vous à notre Newsletter et suivez-nous sur les réseaux 
                            sociaux pour profiter de contenus exclusifs.
                        </p>
                        <input type="text" placeholder="Email" className="px-[13px] h-[40px] rounded-xl text-[#3F0408] text-sm " />
                        <p className="font-thin text-white text-xs">Adresse mail sécurisée. Aucun spam</p>
                        <button className="bg-[#3F0408] rounded-3xl p-4 text-[#BE894A] text-xs">Envoyer</button>
                    </div>
                    <div className="bg-[#3F0408] w-[50px]">
                        <hr style={{ backgroundColor: '#3F0408', height: '2px', border: 'none' }} />
                    </div>                
                </div>
            </div>
            <div className="flex" >
                <div>
                    <img src="images/linkedin.svg" alt="" />
                </div>
                <div>
                    <img src="images/facebook.svg" alt="" />
                </div>
                <div>
                    <img src="images/instagram.svg" alt="" />
                </div>
            </div>
        </div>
        
    )
}