import { FaWhatsapp } from "react-icons/fa";

import info from "../info";

export default function Whatsapp() {
  return (
    <a href={info.whatsapp} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-5 right-5 h-16 w-16 bg-[#8e42fe] rounded-full">
        <div className="w-full h-full text-white flex flex-col flex-wrap justify-center items-center">
          <FaWhatsapp className="text-3xl" />
        </div>
      </div>
    </a>
  );
}
