import Sidebar from "@/components/Sidebar";
import { Inter } from "@next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Rebuilding Spotify</title>
      </Head>
      <main>
        <Sidebar />
        {/* Center */}
      </main>

      <section>{/* Player */}</section>
    </div>
  );
}
