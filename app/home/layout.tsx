
import "@/styles/globals.scss" 

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
  return (
            <section className="">
                {children}
            </section>
    )
}
