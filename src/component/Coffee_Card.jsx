import { FaEye, FaPen, FaTrash } from "react-icons/fa";

const textStyle1 = "font-semibold text-xl text-accent ";
const textStyle2 = "text-xl text-[#5C5B5B] ";

const CoffeeCard = ({ item }) => {
  const { name, chef, supplier, url } = item;

  return (
    <div className="card card-side bg-[#F5F4F1]/50 rounded-[10px] p-10 ">
      <figure className="w-32">
        <img src={url} alt={name} className="rounded-md object-cover" />
      </figure>

      <div className="flex flex-1 justify-between items-center ml-10">
        <div className="space-y-2 text-start ralewayText">
          <p>
            <span className={textStyle1}>Name:</span>{" "}
            <span className={textStyle2}>{name}</span>
          </p>
          <p>
            <span className={textStyle1}>Chef:</span>{" "}
            <span className={textStyle2}>{chef}</span>
          </p>
          <p>
            <span className={textStyle1}>Supplier:</span>{" "}
            <span className={textStyle2}>{supplier} </span>
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <button className="btn btn-sm bg-[#D2B48C] text-white hover:bg-[#c1a173]">
            <FaEye size={18} />
          </button>
          <button className="btn btn-sm bg-[#3C393B] text-white hover:bg-black">
            <FaPen size={18} />
          </button>
          <button className="btn btn-sm bg-red-500 text-white hover:bg-red-600">
            <FaTrash size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
