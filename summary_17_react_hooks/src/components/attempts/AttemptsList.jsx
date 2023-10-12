import React from "react";

function AttemptsList( {attempts, dropAttempt} ) {

  console.log('Render attemts list')
  return (
    <div>
      {
        attempts.map( elem => {
          return (
              <p
                  key={elem.date}
                  onClick={() => {
                      dropAttempt(elem.date);
                  }}
              >
                  {`${elem.login} ${elem.passwd} ${elem.date}`}
              </p>
          )
        })
      }
    </div>
  );
}

export default React.memo(AttemptsList);