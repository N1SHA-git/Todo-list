import "./styles/globals.css";
import clsx from "clsx";
import { Baloo_2 } from "next/font/google";
import { Baloo_Tammudu_2 } from "next/font/google";

const baloo = Baloo_2({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const BalooTammudu2 = Baloo_Tammudu_2({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ToDo List</title>
      </head>
      <body
        className={clsx(
          baloo.className,
          "pt-px min-h-dvh bg-[#252525] text-white",
        )}
      >
        <header
          className="w-[436px] h-24 mt-14 flex items-center 
            justify-center mx-auto backdrop-blur-md bg-custom-gradient 
            rounded-[85px] shadow-lg border border-[#D9D9D9]"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-b from-purple-500 to-white bg-clip-text text-transparent">
            To-Do List
          </h1>
        </header>

        <main className={clsx(BalooTammudu2.className, "flex justify-center pl-64")}>{children}</main>
      </body>
    </html>
  );
}
