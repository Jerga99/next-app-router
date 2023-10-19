"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [{
  href: "/",
  name: "Home"
}, {
  href: "/blogs",
  name: "Blogs"
}, {
  href: "/portfolios",
  name: "Portfolios"
}, {
  href: "/todos",
  name: "Todos"
}]

export function Navigation() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <ul className="navigation-list">
        { links.map(link =>
          <li key={link.href} className="navigation-item">
            <Link 
              className={`link ${pathname === link.href ? "active" : ""}`}
              href={link.href}>{link.name}
            </Link>
          </li>
        )}

        <button onClick={() => {
          router.push("/")
        }}>
          Go Home
        </button>

        <div>
          <p onClick={() => {
            router.push("/todos")
          }}>
            I am just random paragraph to todos!!!!!
          </p>
        </div>
    </ul>
  )
}
