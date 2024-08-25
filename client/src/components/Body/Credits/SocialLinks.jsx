import React from 'react'

const SocialLinks = ({member}) => {
  return (
    <div className='flex flex-row gap-1 pb-2 mx-auto'>

      {/* Linkedin Button */}
      {(member.links.link_linkedin !== '-') && (<button
        onClick={() => { window.open(`${member.links.link_linkedin}`, '_blank'); }}
      >
        <div className="bg-mylight1 w-10 h-10 rounded-full p-1 hover:p-0 transition-all duration-300 border-2 border-mydark1 hover:border-mygreen">
          <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" id="linkedin">
            <g fill="none" fillRule="evenodd">
              <g>
                <rect width="72" height="72" fill="#117EB8" rx="4"></rect>
                <path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z"></path>
              </g>
            </g>
          </svg>
        </div>
      </button>)}

      {/* Github Button */}
      {(member.links.link_github !== '-') && (<button
        onClick={() => { window.open(`${member.links.link_github}`, '_blank'); }}
      >
        <div className="bg-mylight1 w-10 h-10 rounded-full p-1 hover:p-0 transition-all duration-300 border-2 border-mydark1 hover:border-mygreen">
          <svg className='rounded-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="github">
            <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
          </svg>
        </div>
      </button>)}

      {/* Website Button */}
      {(member.links.link_website !== '-') && (<button
        onClick={() => { window.open(`${member.links.link_website}`, '_blank'); }}
      >
        <div className="bg-mylight1 w-10 h-10 rounded-full p-1 hover:p-0 transition-all duration-300 border-2 border-mydark1 hover:border-mygreen">
          <svg className='rounded-full' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 205.229 205.229" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <g> <path d="M102.618,205.229c-56.585,0-102.616-46.031-102.616-102.616C0.002,46.031,46.033,0,102.618,0 C159.2,0,205.227,46.031,205.227,102.613C205.227,159.198,159.2,205.229,102.618,205.229z M102.618,8.618 c-51.829,0-94.002,42.166-94.002,93.995s42.17,93.995,94.002,93.995c51.825,0,93.988-42.162,93.988-93.995 C196.606,50.784,154.444,8.618,102.618,8.618z"></path> </g> </g> <g> <g> <rect x="5.746" y="98.304" width="193.734" height="8.618"></rect> </g> </g> <g> <g> <path d="M104.941,62.111c-48.644,0-84.94-10.704-87.199-11.388l2.494-8.253 c0.816,0.247,82.657,24.336,164.38-0.004l2.452,8.26C158.405,59.266,130.021,62.111,104.941,62.111z"></path> </g> </g> <g> <g> <path d="M20.416,160.572l-2.459-8.26c84.271-25.081,165.898-1.027,169.333,0l-2.494,8.256 C183.976,160.318,102.142,136.24,20.416,160.572z"></path> </g> </g> <g> <g> <path d="M69.399,196.168C26.933,96.747,63.584,8.604,63.959,7.727l7.927,3.378 c-0.365,0.845-35.534,85.756,5.44,181.677L69.399,196.168z"></path> </g> </g> <g> <g> <path d="M135.168,196.168l-7.927-3.382c40.971-95.92,5.801-180.832,5.436-181.677l7.927-3.378 C140.973,8.604,177.627,96.747,135.168,196.168z"></path> </g> </g> <g> <g> <rect x="98.306" y="5.744" width="8.614" height="197.302"></rect> </g> </g> </g> </g> </g></svg>
        </div>
      </button>)}

      {/* Instagram Button */}
      {(member.links.link_instagram !== '-') && (<button
        onClick={() => { window.open(`${member.links.link_instagram}`, '_blank'); }}
      >
        <div className="bg-mylight1 w-10 h-10 rounded-full p-1 hover:p-0 transition-all duration-300 border-2 border-mydark1 hover:border-mygreen">
          <svg className='rounded-full' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fillRule="evenodd" clipRule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stopColor="#B13589"></stop> <stop offset="0.79309" stopColor="#C62F94"></stop> <stop offset="1" stopColor="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stopColor="#E0E8B7"></stop> <stop offset="0.444662" stopColor="#FB8A2E"></stop> <stop offset="0.71474" stopColor="#E2425C"></stop> <stop offset="1" stopColor="#E2425C" stopOpacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stopColor="#406ADC"></stop> <stop offset="0.467799" stopColor="#6A45BE"></stop> <stop offset="1" stopColor="#6A45BE" stopOpacity="0"></stop> </radialGradient> </defs> </g></svg>
        </div>
      </button>)}

    </div>
  )
}

export default SocialLinks