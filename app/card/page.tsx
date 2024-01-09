import Image from "next/image";
import Link from "next/link";
import DefaultLayout from "../components/default-layout/default-layout";

export default function Page() {
  return (
    <DefaultLayout>
      <Link href="/">Home</Link>
      <div>card</div>
    </DefaultLayout>
  );
}
