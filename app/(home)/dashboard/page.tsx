import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconPencilX,
  IconAngle,
} from "@tabler/icons-react";
import React from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import Link from "next/link";
import MateCard from "@/components/mate-card";
import { Button } from "@/components/ui/button";
import MiniCard from "@/components/mini-card";
import RecentComplaint from "@/components/recent-complaints";

const Dashboard = () => {
  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      <Image
        src="/images/banner.jpg"
        alt="Placeholder"
        className="object-cover w-full h-full rounded-xl"
        width={400}
        height={400}
        priority
      />
    </div>
  );

  return (
    <div className=" grid max-w-7xl max-md:mx-auto  px-5 gap-4 ">
      {/* grid */}
      <div className="flex relative flex-col justify-between space-y-4 rounded border border-neutral-200 bg-white p-2 transition duration-200  dark:border-white/[0.2] dark:bg-black dark:shadow-none">
        <div className="flex flex-1 w-full h-full max-h-[14rem] rounded bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
          <Image
            src="/images/banner.jpg"
            alt="Placeholder"
            className="object-cover w-full h-full rounded"
            width={400}
            height={500}
            priority
          />
        </div>
        <div className="flex flex-col gap-2 absolute bottom-10 left-10">
          <h1 className="sm:text-3xl lg:text-4xl text-2xl  font-bold text-black dark:text-gray-300">
            Hello world
          </h1>
          <p className="sm:text-sm text-xs text-gray-600 max-w-xs md:max-w-xl w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ullam
            commodi, inventore omnis eveniet ad nobis laborum facilis ducimus
            nisi!
          </p>
          <div className="flex justify-center h-10 text-white px-1 py-2 items-center rounded-full w-[130px] bg-black">
            <span className="flex items-center justify-center uppercase  flex-grow text-[10px] tracking-wider font-semibold">
              Join Now{" "}
            </span>
            <span className="flex items-center text-center justify-center bg-white text-black size-8 rounded-full">
              <IconAngle className="font-bold" size={10} />
            </span>
          </div>
        </div>
        <div className="absolute top-3 left-5 text-sm font-semibold">
          Thursday 13 may, 2024
        </div>
      </div>

      <div className="grid md:grid-cols-3 grid-col-1 gap-5">
        <div className="md:col-span-2">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            <MiniCard />
            {/* <div className="justify-end cor-span-2 "> */}
            <Button variant="outline" className="rounded">
              Add Lugage
            </Button>
            <Button variant="outline" className="rounded">
              Make Complaint
            </Button>
            {/* </div> */}
          </div>
          <RecentComplaint/>
        </div>
        <div className="grid">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Room mate</h3>
            <span className="size-8 rounded-full border bg-transparent flex items-center justify-center">
              <Plus size={10} />
            </span>
          </div>
          <div className="border rounded-2xl grid space-y-4 p-5 mt-2 divide-accent divide-y">
            <MateCard />
            <MateCard />
            <MateCard />
            <MateCard />
            <Button
              variant="outline"
              className="rounded uppercase tracking-wider cursor-pointer text-sm"
            >
              See all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
