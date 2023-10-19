import Link from "next/link";


export function SectionTitle({title, href}) {

  return (
    <div className="mb-4">
      <h2 className="text-3xl mb-0">{title}</h2>
      <Link href={href} className="underline button is-text">
        See All
      </Link>
    </div>
  )
}
