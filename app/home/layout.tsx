
import "@/styles/globals.scss"

import {
    Roboto,

  } from "next/font/google";
  
  export const roboto = Roboto({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
  });
  

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
            <section className="bg-white">
                {children}
            </section>
    )
}
