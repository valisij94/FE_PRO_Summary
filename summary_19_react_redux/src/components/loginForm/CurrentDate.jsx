import React, {useState, useEffect} from "react";

export default function CurrentDate() {
  const [dateNow, setDateNow] = useState(new Date().toLocaleString());
  useEffect( () => {

      const interalId = setInterval( () => {
          setDateNow(new Date().toLocaleString());
      }, 1000);

      return () => {
          clearInterval(interalId);
      }
  }, []);

  return <p>{dateNow}</p>
}