import React from 'react';

const Fallback = () => {
  return(
    <div className="fallback">
      <div>
        Forked From:{" "}
        <a href="https://github.com/shfshanyue/2019-ncov">
          shfshanyue/2019-ncov
        </a>
      </div>

      <div>
        Our GitHub:{" "}
        <a href="https://github.com/covid-19-au/covid-19-au.github.io">
          covid-19-au
        </a>
      </div>
      <div>
        This site is developed by a{" "}
        <a href="https://github.com/covid-19-au/covid-19-au.github.io/blob/dev/README.md">
          volunteer team
        </a>{" "}
        from Faculty of IT, Monash University for non-commercial use only.
      </div>
      <div>
        <a href="https://www.webfreecounter.com/" target="_blank">
          <img
            src="https://www.webfreecounter.com/hit.php?id=gevkadfx&nd=6&style=1"
            border="0"
            alt="hit counter"
          />
        </a>
      </div>
    </div>
  )
}

export default Fallback