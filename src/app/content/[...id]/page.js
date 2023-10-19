

function getContent(id, author){
 // ...
}

export default function Content({params}) {

  const [id, author] = params.id;

  const content = getContent(id, author);

  return (
    <div>
      Hello I am Content of: 
      <div>Id: {id}</div>
      <div>Author: {author}</div>
    </div>
  )
}
