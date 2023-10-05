"use client";

import { useEffect, useState } from "react"

export function Test() {
  const [state, setState] = useState();

  useEffect(() => {
    console.log("Hello Test Component");
  }, [])

  return (
    <div>I am Test component</div>
  )
}
