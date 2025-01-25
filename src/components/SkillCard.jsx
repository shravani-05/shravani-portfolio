
/**
 * @copyright 2024 Shravani
 * @license Apache-2.0
 */
import PropTypes from "prop-types";

export const SkillCard = ({ imgSrc, label, description }) => {
  return (
    <div className="relative group flex flex-col items-center justify-center rounded-2xl p-6 bg-zinc-900 ring-2 ring-inset ring-zinc-400/100 hover:ring-zinc-50 colors duration-300 hover:scale-[1.1] hover:z-5">
      {/* Card Content */}
      <figure className="bg-zinc-700 rounded-lg overflow-hidden w-16 h-16 p-2">
        <img src={imgSrc} width={48} height={48} alt={label} />
      </figure>
      <h3 className="text-zinc-50 font-semibold mt-2">{label}</h3>

      {/* Overlay with Description */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-900 text-zinc-100 rounded-2xl opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
        <h4 className="text-xl font-bold mb-2">{label}</h4>
        <p className="text-sm text-center px-4">{description}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SkillCard;
