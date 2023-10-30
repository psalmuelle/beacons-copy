import Image from "next/image";


const Header =()=>{
    return (
        <header>
            <div className="bg-[#1e2027] p-3">
              <Image width={100} height={20} src={'/gold-nuggets-banner-left.png'} alt={'Announcement'}/>  
              
            </div>

        </header>
    )
}


export default Header;