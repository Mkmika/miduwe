import { naluka } from "@/fonts"

export default function Dancelistdetail({props}){
    return(
        <div className="px-[30px] py-[50px] bg-[#BE894A] flex flex-col gap-10">
            <div className="drop-shadow">
                <img src="/images/zinli.svg" alt="" />
            </div>
            <div  className="flex flex-col gap-1">
                <div className="flex flex-col gap-5">
                    <p className={`text-[#3F0408] text-[50px] ${naluka.className}`}>{props.title}</p>
                    <p>{props.description}</p>
                    {
                        props.list.map((e,i) => {
                            <>
                            <p className={` py-5 text-[#3F0408] text-[30px] ${naluka.className}`}>{e.title}</p>
                            <p>{e.description}</p>  
                            </>
                        })
                    }
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