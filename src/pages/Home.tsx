import {
  TbCode,
  TbDeviceGamepad2,
} from "react-icons/tb";
import { FaUserGraduate } from "react-icons/fa";
import { SiArchlinux } from "react-icons/si";

export default function HomePage() {
  return (
    <main className="container px-5 md:px-0 my-10 xl:my-20 w-full text-black dark:text-white">
      <div className="mb-5 xl:mb-10 flex flex-col">
        <h1 className="text-2xl xl:text-3xl">Hello! I am Muhammadbobur</h1>
        <span className="text-grey text-xs xl:text-sm flex items-center flex-wrap gap-1">
          <TbCode />
          Software Engineer&nbsp; | &nbsp;
          <FaUserGraduate />
          WIUT Student&nbsp; | &nbsp;
          <SiArchlinux />
          I use Arch btw&nbsp; | &nbsp;
          <TbDeviceGamepad2 />
          Gamer
        </span>
      </div>

      <div className="text-justify flex flex-col gap-4 xl:gap-8">
        <p>
          I am just average programmer. Nothing fancy. Never built something unique. Always, copied others ideas and used in my works. Im not cp genius or leetcode cracker. I love programming coz I love looking at editor themes: files icons, colors, nerd fonts... I love typing on my mechanical keyboard. Yea, this may sound stupid but while coding I love writing well formatted code ... always, without it I cant think of any other thing.
        </p>

        <p>
          Currently, I am working at Ipak Yuli Bank, as frontend dev, since May, 2025. Thanks god for havin great friend who refered me to this job. I learned Vue there. But, I wont say that vue is better than react or reverse. I dont care abt prefering specific lang or framework. All of them are unique and beautiful in their own way.
        </p>

        <p>
          I love binge watching anime, movies and tv series. Though, I am not movie goer, never been in one. While coding I love listening musics, but I dont remember the names of the most songs. When I have free time, I love playing free fire and mlbb. I am average player there too.
        </p>

        <p>
          This is me. Thanks for reading this.
        </p>
      </div>
    </main>
  );
}
