import GradingChartTd from "./GradingChartTd";

const GradingChart = () => {
  return (
    <div className="text-center text-xs md:text-base">
      <div className="flex justify-between ">
        <GradingChartTd val="Risk Categories" bold />
        <GradingChartTd val="Low" />
        <GradingChartTd val="Intermediate" />
        <GradingChartTd val="High" />
      </div>

      <div className="flex -mt-[2px]">
        <GradingChartTd val="T-score" bold />
        <GradingChartTd val="T1 to T2" className="basis-2/4" />
        <GradingChartTd val="T3" />
      </div>

      <div className="flex justify-between -mt-[2px]">
        <GradingChartTd val="Cancer Growth" bold />
        <GradingChartTd val="Least aggressive" />
        <GradingChartTd val="Average" />
        <GradingChartTd val="Most aggressive" />
      </div>

      <div className="flex justify-between -mt-[2px]">
        <GradingChartTd val="Gleason Score" bold />
        <GradingChartTd val="6" />
        <GradingChartTd val="7" />
        <GradingChartTd val="8 or more" />
      </div>

      <div className="flex justify-between -mt-[2px]">
        <GradingChartTd val="Grade" bold />
        <GradingChartTd val="Low" />
        <GradingChartTd val="Medium" />
        <GradingChartTd val="High" />
      </div>
    </div>
  );
};

export default GradingChart;
