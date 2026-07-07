import { MenuItem, JUSTEAT_URL, UBEREATS_URL } from "@/constants/menuData";
import { SiJusteat, SiUbereats } from "react-icons/si";
import { TbToolsKitchen2 } from "react-icons/tb";
import { PiPepperFill } from "react-icons/pi";
import { MdOutlineEco } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";

interface DishCardProps {
  item: MenuItem;
}

const DishCard = ({ item }: DishCardProps) => {
  return (
    <div className="flex flex-col rounded-2xl border border-neutral-800 bg-neutral-900 overflow-hidden transition-colors hover:border-neutral-700">
      {/* Image */}
      {item.image ? (
        <img
          src={item.image}
          alt={item.title}
          className="w-full aspect-4/3 object-cover"
        />
      ) : (
        <div className="w-full aspect-4/3 bg-neutral-800 flex items-center justify-center">
          <TbToolsKitchen2 className="text-neutral-600" size={36} />
        </div>
      )}

      <div className="flex flex-col flex-1 p-3 gap-2">
        {/* Title + price */}
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-bold tracking-tight leading-tight text-base flex-1">
            {item.title}
          </h3>
          <span className="text-amber-500 font-bold text-sm whitespace-nowrap">
            {item.price}
          </span>
        </div>

        {/* Badges */}
        {(item.spicy || item.vegetarian) && (
          <div className="flex gap-1.5">
            {item.spicy && (
              <span className="flex items-center gap-1 text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-red-900/50 text-red-400">
                <PiPepperFill size={9} /> Spicy
              </span>
            )}
            {item.vegetarian && (
              <span className="flex items-center gap-1 text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-green-900/50 text-green-400">
                <MdOutlineEco size={9} /> Veg
              </span>
            )}
          </div>
        )}

        {/* Description */}
        <p className="text-[11px] text-neutral-500 leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* Compact order icons */}
        {/* Compact order buttons */}
        <div className="flex gap-2 mt-auto pt-1">
          <a
            href={JUSTEAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on Just Eat"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 transition-colors py-2 text-xs font-bold text-white"
          >
            <SiJusteat size={12} />
            Just Eat
            <HiArrowUpRight size={10} className="opacity-70" />
          </a>
          <a
            href={UBEREATS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on Uber Eats"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors py-2 text-xs font-bold text-white border border-neutral-700"
          >
            <SiUbereats size={12} className="text-green-400" />
            Uber Eats
            <HiArrowUpRight size={10} className="opacity-70" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
