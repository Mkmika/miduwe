import { naluka } from "@/fonts"

export default function Contact(){
    return(
        <div className="px-[25px] py-[30px] bg-default">
            <div className="flex flex-col justify-center items-center gap-10 py-[50px] px-[25px] ">
                <div className="flex flex-col gap-5">
                    <p className={`text-[#3F0408] text-[70px] ${naluka.className}`}>Contact</p>
                    <p className="text-white font-medium">Vous désirez me <span className="font-bold">poser une question</span>
                     ou encore <span className="font-bold">commander un de nos jeu</span>,profitez de ce formulaire pour nous transmettre votre demande.
                    </p>
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <input type="text" placeholder="FirstName" className="px-[13px] h-[40px] rounded-xl text-black text-sm " />
                    <input type="text" placeholder="LastName" className="px-[13px] h-[40px] rounded-xl text-black text-sm " />
                    <input type="text" placeholder="Email" className="px-[13px] h-[40px] rounded-xl text-black text-sm " />
                    <input type="text" placeholder="Message" className="px-[40px] h-[80px] rounded-xl text-black text-sm  " />
                    <div className="flex gap-2">
                        <input type="radio" name="" id="" />
                         <p className="text-sm text-[#3F0408] font-medium">S'inscrire a la Newsletter</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <button className="bg-[#3F0408] rounded-full px-10 py-4  text-[#BE894A] text-xs">Envoyer</button>
                    </div>
                </div>
                <div className="flex flex-col items-center text-[21px] gap-3">
                    <p className={`text-[#3F0408]  ${naluka.className}`}>
                        Rejoignez <span className={`text-[#1D1F26]  ${naluka.className}`}>le projet MI DU WE !</span> 
                        </p>
                    <div className=" flex flex-col items-center gap-2" >
                        <p className="text-[#3F0408] text-lg font-medium text-center">Inscrivez-vous à notre Newsletter et suivez-nous sur les réseaux 
                            sociaux pour profiter de contenus exclusifs.
                        </p>
                        <input type="text" placeholder="Email" className="px-[13px] h-[40px] rounded-xl text-[#3F0408] text-sm " />
                        <p className="font-thin text-white text-xs">Adresse mail sécurisée. Aucun spam</p>
                        <button className="bg-[#3F0408] rounded-full px-10 py-4 text-[#BE894A] text-xs">Envoyer</button>
                    </div>
                    <div className="bg-[#3F0408] w-[100px]">
                        <hr style={{ backgroundColor: '#3F0408', height: '2px', border: 'none' }} />
                    </div>                
                </div>
            </div>
            <div className="flex justify-between p-[25px] " >
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
        
    )
}