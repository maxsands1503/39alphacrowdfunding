import Image from "next/image";
import logo from "@/app/assets/39alpha.png";

export default function Home() {
  return (
  <div className={'flex justify-center'}>
    
    <Image src={logo} alt="39 Alpha logo" height={150}/>
  </div>
  );
}
