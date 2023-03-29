import styles from "@/styles/Home.module.css";

export default function Card() {
  return (
    <>
      <div className="bg-blue-900 p-24">
        <div className="bg-green-900 text-center flex flex-row m-12">
            <div className="w-1/4">Image here</div>
            <div className="bg-yellow-200 w-3/4">description here</div>
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
