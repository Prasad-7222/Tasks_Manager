// import React from "react";

// const InfoCard = ({ icon, label, value, color }) => {
//   return (
//     <div className="flex items-center gap-3">
//       <div className={`w-2 md:w-2 h-3 md:h-5 ${color} rounded-full`}>
//         <p className="text-xs md:text-[14px] text-gray-500">
//           <span className="text-sm md:text-[15px] text-black font-semibold">
//             {value}
//           </span>
//           {label}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default InfoCard;

import React from "react";

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-3 bg-white p-4 rounded-xl shadow border border-gray-100 w-full">
      {/* Colored Dot */}
      <div className={`w-3 h-3 md:w-4 md:h-4 ${color} rounded-full`} />

      {/* Text Content */}
      <div>
        <p className="text-xs md:text-sm text-gray-500">{label}</p>
        <p className="text-sm md:text-base text-black font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default InfoCard;
