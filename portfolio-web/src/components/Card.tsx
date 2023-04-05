import styles from "@/styles/Home.module.css";
import Image from "next/image";
import arioHanaInvitation from "../../public/ariohanainvitation.png";

export default function Card() {
  return (
    <>
      <div className="bg-blue-900 p-24">
        <div className="bg-green-900 text-center flex flex-row m-12">
          <div className="w-1/4">
            <Image src={arioHanaInvitation} width={500} height={500} alt="hana ario image" className="object-contain h-24" />
          </div>
          <div className="bg-yellow-200 w-3/4 border-4 border-black align-middle">description here</div>
        </div>
        <div className="bg-green-900 text-center flex flex-row m-12">
          <div className="w-1/4">Image here</div>
          <div className="bg-yellow-200 w-3/4">description here</div>
        </div>
        <div className="bg-green-900 text-center flex flex-row m-12">
          <div className="w-1/4">Image here</div>
          <div className="bg-yellow-200 w-3/4">description here</div>
        </div>
      </div>
    </>
  );
}
