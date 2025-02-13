// app/page.tsx
import Image from "next/image";
import Ali from "../../components/Ali";
import Link from "next/link";

export default function Home() {
  return (
    <div >
      <main>
        <Ali text="hello" />
        <p>hi!!</p>
        {/* Add a link to the Register page */}
        <Link href="/register" className="text-blue-500 hover:underline">
          Go to Register Page
        </Link>
      </main>
    </div>
  );
}