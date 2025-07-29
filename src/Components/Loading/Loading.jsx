import React from "react";

const Loading = () => (
  <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
      <p className="text-primary font-bold">در حال بارگذاری...</p>
    </div>
  </div>
);

export default Loading; 