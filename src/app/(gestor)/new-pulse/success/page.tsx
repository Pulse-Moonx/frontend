"use client";
import { Button } from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Success() {
  const { push } = useRouter();
  return (
    <section className="bg-black min-h-screen flex flex-col gap-6 items-center px-6 text-white text-center justify-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          alt="image"
          width={40}
          height={40}
          src={"/images/checkIcon.svg"}
          loading="lazy"
          draggable={false}
          className="object-cover"
        />
        <h1 className="font-semibold text-[30px]">SUCCESSFULLY SCHEDULED!</h1>
        <p>Congratulations! Your PULSE is scheduled. </p>
      </div>

      <h1
        onClick={() => navigator.clipboard.writeText("community.link")}
        className="text-[14px] cursor-pointer text-center text-blue flex items-center justify-center gap-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.1666 6.83334V4.61668C13.1666 3.72993 13.1666 3.28655 12.994 2.94786C12.8422 2.64994 12.6 2.40772 12.3021 2.25592C11.9634 2.08334 11.52 2.08334 10.6333 2.08334H4.61659C3.72984 2.08334 3.28646 2.08334 2.94777 2.25592C2.64984 2.40772 2.40762 2.64994 2.25582 2.94786C2.08325 3.28655 2.08325 3.72993 2.08325 4.61668V10.6333C2.08325 11.5201 2.08325 11.9635 2.25582 12.3022C2.40762 12.6001 2.64984 12.8423 2.94777 12.9941C3.28646 13.1667 3.72984 13.1667 4.61659 13.1667H6.83325M9.36658 17.9167H15.3833C16.27 17.9167 16.7134 17.9167 17.0521 17.7441C17.35 17.5923 17.5922 17.3501 17.744 17.0522C17.9166 16.7135 17.9166 16.2701 17.9166 15.3833V9.36668C17.9166 8.47993 17.9166 8.03655 17.744 7.69786C17.5922 7.39994 17.35 7.15772 17.0521 7.00592C16.7134 6.83334 16.27 6.83334 15.3833 6.83334H9.36658C8.47984 6.83334 8.03646 6.83334 7.69777 7.00592C7.39984 7.15772 7.15762 7.39994 7.00582 7.69786C6.83325 8.03655 6.83325 8.47993 6.83325 9.36668V15.3833C6.83325 16.2701 6.83325 16.7135 7.00582 17.0522C7.15762 17.3501 7.39984 17.5923 7.69777 17.7441C8.03646 17.9167 8.47984 17.9167 9.36658 17.9167Z"
            stroke="#21FFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        community.link
      </h1>

      <Button
        children={"See my PULSE's"}
        type="button"
        bgColor={"white"}
        onClick={() => push("/community")}
      />
    </section>
  );
}
