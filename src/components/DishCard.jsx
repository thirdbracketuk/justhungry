// const DishCard = ({project}) => {
//     console.log(project)
//   return (
//     <div>
//         <img src={project.image} alt={project.title}  className=" rounded-3xl p-2 "/>
//         <div className=" p-4 ">
//             <h3 className=" mb-2 text-2xl font-bold tracking-tighter">
//                 {project.title}
//             </h3>
//             <p className=" text-sm ">{project.description}</p>
//         </div>
//     </div>
//   )
// }

// export default DishCard

import PropTypes from "prop-types";

const DishCard = ({ project }) => {
  return (
    <div>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-3xl p-2"
      />
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-bold tracking-tighter">
          {project.title}
        </h3>
        <p className="text-sm">{project.description}</p>
      </div>
    </div>
  );
};

DishCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default DishCard;
