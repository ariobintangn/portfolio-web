import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="bg-red-900 h-24">
        <div className="h-24 flex flex-row w-full border border-white text-center">
          <div className="border border-black w-3/4 align-middle flex flex-row">
            <div className="bg-black w-1/4 pt-5 text-4xl rounded-full">
              <h1>ABN</h1>
              <p className="text-xs">portfolio</p>
            </div>
          </div>
          <div className="border border-x-green-300 w-1/4">
            <button className=" bg-darkPurple1">Drop Down</button>
          </div>
        </div>
      </div>
    </>
  );
}
