import React from "react";

const Unit : React.FC<{unitkey: number, selectkey: number, onClick: () => void}> = ({unitkey, selectkey, onClick}) => {
  const css = (unitkey === selectkey ? 'py-2 bg-blue-700 text-white text-2xl rounded-full cursor-pointer' : 'py-2 text-gray-300 hover:text-black hover:bg-gray-300 hover:rounded-full cursor-pointer');
  return (
    <li className={css} onClick={onClick}>
      Unit {unitkey}
    </li>
  );
};

export default Unit;