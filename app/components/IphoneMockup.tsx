import { FaWifi } from "react-icons/fa";

type IphoneProps = {
  dark?: boolean;
  background?: string;
  borderDark?: boolean;
};

export const IphoneMockup = ({ dark, background, borderDark }: IphoneProps) => {
  return (
    <div className="border-2 border-gray-400  rounded-[50px]">
      <div
        style={
          background ? { backgroundImage: `url(${background})` } : undefined
        }
        className="w-80  bg-cover bg-center   h-160 border-5 border-black rounded-[50px] relative"
      >
        <div
          className={`absolute -left-2 top-20 w-1  h-6 ${
            borderDark ? "bg-gray-300 opacity-70" : "bg-black opacity-50"
          } rounded`}
        ></div>
        <div
          className={`absolute -left-2 top-32 w-1  h-12  ${
            borderDark ? "bg-gray-300 opacity-70" : "bg-black opacity-50"
          } rounded`}
        ></div>
        <div
          className={`absolute -left-2 top-48 w-1  h-12  ${
            borderDark ? "bg-gray-300 opacity-70" : "bg-black opacity-50"
          } rounded`}
        ></div>
        <div
          className={`absolute -right-2 top-36 w-1  h-18  ${
            borderDark ? "bg-gray-300 opacity-70" : "bg-black opacity-50"
          } rounded`}
        ></div>
        <div
          className={`absolute bottom-2 rounded h-1 w-24 bg-gray-600 opacity-80 left-1/2 -translate-x-1/2`}
        ></div>
        <div className="flex justify-between items-center px-8 ">
          <div className="text-xs font-bold mt-2.5 ">
            <span className={`${dark ? "text-gray-100" : "text-black"}`}>
              17.43
            </span>
          </div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-[#202020] h-5 w-16 flex justify-end items-center rounded-full">
            <div className="h-2.5 w-2.5 bg-gray-400  opacity-30 rounded-full mr-2"></div>
          </div>
          <div className="flex items-center gap-2 mt-2.5">
            <div className="flex  items-end gap-0.5">
              <span
                className={`w-0.75 h-1.5 rounded-2xl ${
                  dark ? "bg-gray-100" : "bg-black"
                }`}
              ></span>
              <span
                className={`w-0.75 h-2  rounded-2xl  ${
                  dark ? "bg-gray-100" : "bg-black"
                }`}
              ></span>
              <span
                className={`w-0.75 h-2.5  rounded-2xl ${
                  dark ? "bg-gray-100" : "bg-black"
                }`}
              ></span>
              <span
                className={`w-0.75 h-3  rounded-2xl ${
                  dark ? "bg-[#404040bd]" : "bg-gray-400"
                }`}
              ></span>
            </div>
            <span>
              <FaWifi
                className={`${dark ? "fill-gray-100" : "fill-black"}`}
                size={12}
              />
            </span>
            <span
              className={`font-bold h-3 text-[9px] ${
                dark ? "bg-gray-100 text-black" : "bg-black text-white"
              } rounded px-1 `}
            >
              100
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
