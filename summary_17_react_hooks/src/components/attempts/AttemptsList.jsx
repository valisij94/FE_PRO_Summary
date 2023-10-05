import React from "react";

export default function AttemptsList( {attempts, dropAttempt} ) {

  console.log('Render atempts list')
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