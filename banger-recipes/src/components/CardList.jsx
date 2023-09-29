import Card from "./Card";

export const recipes = [
  {
    id: 1,
    name: "Indian Dish",
    image:
      "https://images.pexels.com/photos/7438982/pexels-photo-7438982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tag: "Romantic Dinner",
    numberOfMinutes: 120,
  },
  {
    id: 2,
    name: "Banana Pie",
    image:
      "https://th.bing.com/th/id/OIP.bwWOPqQQgg3fcWbPYOT7pwHaLG?pid=ImgDet&rs=1",
    tag: "Nice Snakc",
    numberOfMinutes: 60,
  },
  {
    id: 3,
    name: "Beef Wellington",
    image:
      "https://th.bing.com/th/id/R.cab2b5ed4a4680d28c71b43f54f638d1?rik=vbC9c1mropV8zA&pid=ImgRaw&r=0",
    tag: "Very Romantic Dinner",
    numberOfMinutes: 140,
  },
  {
    id: 4,
    name: "Lasagna",
    image:
      "https://th.bing.com/th/id/R.1d79f3494a45b6cf63f308f0bdb6ba9d?rik=ovJu%2brw1ddIP3A&pid=ImgRaw&r=0",
    tag: "Best Dinner",
    numberOfMinutes: 80,
  },
];
const CardList = () => {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe} />
      ))}
    </section>
  );
};

export default CardList;
