import React from 'react';
import PropTypes from 'prop-types';

const Projectcard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes
}) => {
  return (
    <div className={`relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700 ring-1 ring-inset ring-zinc-50 transition-colors w-full h-full ${classes} group`}>
      <div className="flex flex-col h-full justify-start">
        <figure className="w-full aspect-square rounded-lg overflow-hidden mb-4 flex-shrink-0">
          <img 
            src={imgSrc}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="flex flex-col flex-grow justify-start">
          <h3 className="title-1 mb-3 text-left"> {/* Ensure text-left is applied */}
            {title}
          </h3>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-zinc-50 bg-zinc-700 grid items-center justify-center px-3 rounded-lg group-hover:bg-purple-400 group-hover:text-zinc-50 transition-colors"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a 
        href={projectLink}
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute inset-0"
      ></a>
    </div>
  );
};

Projectcard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
};

export default Projectcard;
