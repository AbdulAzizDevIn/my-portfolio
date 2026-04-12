const Hero = () => {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_476px_at_54.8%_51.5%,#A8E5FD_0%,#F4F4FE_42.3%,#F4F4FE_100.2%)] flex items-center justify-center overflow-hidden dark:bg-[radial-gradient(circle_farthest-corner_at_50.3%_47.3%,#712A5C_0.1%,#28192E_90%)]">
      {/* content */}
      <div className="relative z-10 text-center">
        <div className="sm:mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-600 text-sm text-muted-foreground dark:text-gray-200 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            Available for opportunities
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
