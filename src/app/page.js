
import blogs from "@/content/blogs.json";
import portfolios from "@/content/portfolios.json";

const items2 = [
  {value: 100, prop: "prop1"}, 
  {value: "Hi There",  prop: "prop2"}, 
  {value: 10,  prop: "prop3"}, 
  {value: "Something",  prop: "prop4"}
];

export default function Home() {

  const displayItems = () => 
    items2.map(item => 
      <div key={item.value}>{item.value} - {item.prop}</div>
    );
  

  return (
    <>
      <div>Hello World</div>
      <div> 
        { displayItems() }

        <hr></hr>
        { items2.map(obj =>
          <div key={obj.value}>{obj.value} - {obj.prop}</div>
        )}
      </div>
    </>
  )
}
