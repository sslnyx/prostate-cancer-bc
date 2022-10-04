const LoadingPing = () => {
  return (
    <div className="w-[44px] h-[44px] flex justify-center items-center">
      <span className="flex h-5 w-5 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-blue"></span>
      </span>
    </div>
  );
};

export default LoadingPing;
