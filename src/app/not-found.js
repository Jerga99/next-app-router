import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>The page could not be found! :(</h1>
      <Link href="/">Home Page</Link>
    </div>
  )
}
