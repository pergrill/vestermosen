import type { InfoData } from "#/data/info-data"
import siteLabels from "#/data/site-labels"
import { Link } from "@tanstack/react-router"

const Card = ({ title, description, addresses, imgSrc, href }: InfoData) => (
  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
    <div className="h-full border-2 border-gray-200 border-opacity-60 dark:border-gray-700 rounded-md overflow-hidden">
      {href ? (
        <a href={href} aria-label={`Link to ${title}`}>
          <img
            alt={title}
            src={imgSrc}
            className="lg:h-48 md:h-36 object-cover object-center"
            width={544}
            height={306}
          />
        </a>
      ) : (
        <img
          alt={title}
          src={imgSrc}
          className="lg:h-48 md:h-36 object-cover object-center"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="text-2xl font-bold leading-8 tracking-tight mb-3">
          {href ? (
            <a href={href} aria-label={`Link to ${title}`}>
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
        <p className="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">{description}</p>
        {addresses.map((address) => {
          return (
            <div key={address.name}>
              <div className="pb-4">
                {address.name !== '' && (
                  <>
                    {address.name}
                    <br />
                  </>
                )}
                {address.street !== '' && (
                  <>
                    {address.street}
                    <br />
                  </>
                )}
                {address.city !== '' && (
                  <>
                    {address.city}
                    <br />
                  </>
                )}
                {address.phone !== '' && (
                  <>
                    {address.phone}
                    <br />
                  </>
                )}
                {address.extra !== '' && (
                  <>
                    {address.extra}
                    <br />
                  </>
                )}
              </div>
              <p className="text-gray-500 max-w-none dark:text-gray-400 mb-3">
                {address.times !== '' && (
                  <>
                    {address.times}
                    <br />
                  </>
                )}
              </p>
            </div>
          )
        })}
        {href && (
          <a
            href={href}
            className="text-base font-medium leading-6 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
            aria-label={`Link to ${title}`}
          >
            {siteLabels.seeMore} &rarr;
          </a>
        )}
      </div>
    </div>
  </div>
)

export default Card
