/**
 * @copyright 2024 Shravani Sawant
 * @license Apache-2.0
 */
import PropTypes from "prop-types"

export const SkillCard = ({
    imgSrc,
    label
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-400/100 rounded-2xl p-3 hover:bg-zinc-800 transition-colors'}>
        <figure className="bg-zinc-700 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-800 transition-colors">
            <img 
            src={imgSrc}
            width={32}
            height={32}
            alt={label} 
            />
        </figure>
        <div className="">
            <h3>{label}</h3>
            
        </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}
export default SkillCard