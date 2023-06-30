import Image from "next/image";
import getClientLocalTime from "@/util/localTime";
import BatteryStatus from "../BatterStatus";

export default function MobileHeader() {
  const localTime = getClientLocalTime();

  return (
    <section className="flex justify-evenly pt-1 px-2">
      <div className="flex items-center w-full ">
        <div className="mr-2">
          <Image
            src="/signal.png"
            height={1000}
            width={1000}
            className="h-6 w-6"
          />
        </div>
        <div>
          <Image
            src="/wifi.png"
            height={1000}
            width={1000}
            className="h-4 w-5"
          />
        </div>
      </div>

      <div className="w-full">{localTime}</div>

      <div>
        <BatteryStatus />
      </div>
    </section>
  );
}
