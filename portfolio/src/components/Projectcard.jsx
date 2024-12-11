import React from 'react'



import PropTypes from 'prop-types';

const Projectcard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 ring-1 ring-inset ring-zinc-50 transition-colors" + classes}>
        <figure className="max-w-60 img-box aspect-square rounded-lg
        mb-4">
            <img 
            src={imgSrc}
            alt={title}
            loading='lazy'
            className='img-cover'
            />
        </figure>

        <div className=" flex items-center justify-between gap-4">
            <div>
                <h3 className="title-1 mb-3">
                    {title}
                </h3>
                <div className=" flex flex-wrap items-center gap-2">
                    {tags.map((label,key)=>
                    (
                        <span
                            key={key}
                            className='h-8 text-sm text-zinc-50 bg-zinc-700
                            grid items-center px-3 rounded-lg'
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-11 h-11 rounded-lg grid place-items-center bg-purple-500
            text-zinc-900 shrink-0">
                <span 
                className="material-symbols-rounded"
                aria-hidden
                >
                    arrow-outward
                </span>
            </div>
        </div>


        <a 
        href={projectLink}
        target='_blank' 
        className="absolute inset-0"></a>
    </div>
  )
}

Projectcard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
}
export default Projectcard