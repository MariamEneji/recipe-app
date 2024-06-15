import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex gap-10 flex-col justify-between items-center h-screen bg-slate-400">
      <h1 className="text-xl lg:text-4xl ">Let's Make That Meal</h1>
      <Link href={'recipes'} className='border p-4 border-black hover:bg-black hover:text-slate-400'>Explore Recipes Now</Link>
     
    </div>
  );
}
