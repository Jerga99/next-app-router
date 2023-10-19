import { delay } from "@/utils";
import { Suspense } from "react";


async function fetchTodo(id) {
  await delay(2000);
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + id);

  if (!res.ok) {
    throw new Error("Todo cannot be fetched!");
  }

  return res.json();
}

export default async function TodoPage({params}) {
  await delay(2000);

  return (
    <div>
      Todo:
      <Suspense fallback={<div>Loading Todo...</div>}>
        <Todo id={params.id}/>
      </Suspense>
    </div>
  )
}

async function Todo({id}) {
  const todo = await fetchTodo(id);
  return (
    <>
      <div>Id: {todo.id}</div>
      <div>Title: {todo.title}</div>
    </>
  )
}
