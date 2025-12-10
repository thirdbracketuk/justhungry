import { DISHES } from "../constants";
import DishCard from "./DishCard";

const Dishes = () => {
  return (
    <section className="container mx-auto py-16 px-4 lg:px-0" id="dishes">
      <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter lg:text-4xl">
        Our Meals
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-8  ">
        {DISHES.map((project, index) => (
          <DishCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Dishes;
