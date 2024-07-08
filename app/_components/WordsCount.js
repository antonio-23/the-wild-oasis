"use client";

import { useState } from "react";

function WordsCount({ observations }) {
  const [observationsValue, setObservationsValue] = useState(
    observations || ""
  );

  return (
    <>
      <textarea
        name='observations'
        className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
        defaultValue={observations}
        onChange={(event) => setObservationsValue(event.target.value)}
        maxLength={1000}
      />
      <span>{observationsValue.length} / 1000</span>
    </>
  );
}

export default WordsCount;
