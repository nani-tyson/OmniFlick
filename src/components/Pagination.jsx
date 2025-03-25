import React from "react";

function Pagination({ page, ip, dp }) {
  return (
    <div className="bg-gray-900/60 text-white flex items-center justify-center gap-6 py-3 px-6 rounded-lg">
      <div onClick={dp}>
        <i className="fa-solid fa-backward text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
      </div>
      <div className="text-xl font-semibold">{page}</div>

      <div onClick={ip}>
        <i className="fa-solid fa-forward text-2xl cursor-pointer hover:scale-110 transition-transform"></i>
      </div>
    </div>
  );
}

export default Pagination;
