import styles from "@/styles/Home.module.css";
import Image from "next/image";
import profilePic from "../../public/profilePic.jpeg";

export default function Card() {
  return (
    <>
      <div className="bg-darkPurple1 p-24 text-center text-brokenWhite">
        <div>
          <Image
            src={profilePic}
            alt="profile picture"
            height={500}
            width={500}
            className="rounded-full mb-12 m-auto"
          />
        </div>
        <div>
          <h1 className="text-5xl font-monoton">Ario Bintang Nugraha</h1>
        </div>
        <div className="text-2xl font-oxygen mt-8">
          <div className="mb-2">
            <h2>Frontend Developer</h2>
          </div>
          <div>
            <h2>South Jakarta</h2>
          </div>
        </div>
        <div className="mt-5 border-black border text-sm text-justify font-oxygen">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </>
  );
}
