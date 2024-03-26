export default function Header(){
   /*  const open_mobile_menu = () =>
        {
          menu.classList.remove("hidden")

        }; */
    return (

        <div className="bg-[#BE894A] px-[30px] py-[15px] flex flex-col gap-2">
            <div className="flex  justify-between ">
                <img src="images/logo.svg" alt="" />
                <div>
                    <img  src="images/Burger Menu.svg" alt="" />
                </div>    
            </div>
            <div className="bg-[#3F0408]">
                <hr style={{ backgroundColor: '#3F0408', height: '2px', border: 'none' }} />
            </div>
        </div>

    ) ;

   
}