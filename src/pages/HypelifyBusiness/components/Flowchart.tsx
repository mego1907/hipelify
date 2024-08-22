const FlowchartStep = ({ stepNumber, text, isDiamond }) => (
  <div className="relative flex flex-col items-center">
    {isDiamond ? (
      <div className="flex items-center justify-center w-16 h-16 text-black transform rotate-45 bg-white">
        <span className="transform -rotate-45">{stepNumber}</span>
      </div>
    ) : (
      <div className="flex items-center justify-center w-32 h-16 text-black bg-white">
        <span>{stepNumber}</span>
      </div>
    )}
    <p className="mt-4 text-sm text-center">{text}</p>
  </div>
);

const Flowchart = () => {
  return (
    <div className="p-8 space-y-8 text-white bg-black">
      <div className="flex flex-col items-center space-y-8">
        <FlowchartStep stepNumber="1" text="Client/Agency Creates Campaign" />
        <FlowchartStep
          stepNumber="2"
          text="Campaign approved"
          isDiamond={true}
        />
        <FlowchartStep
          stepNumber="3"
          text="Hypeilly Smart Engine determines campaign parameter"
        />
        <FlowchartStep
          stepNumber="4"
          text="Hyplify pushes campaign to the relevant hypeliers"
          isDiamond={true}
        />

        <div className="flex items-center justify-between w-full space-x-8">
          <FlowchartStep stepNumber="5" text="Hyplifers receive campaign" />
          <div className="flex flex-col items-center space-y-8">
            <FlowchartStep
              stepNumber="6"
              text="Hypeliers share campaign with network"
            />
            <FlowchartStep
              stepNumber="6"
              text="Hyplifers view and engage with campaign"
            />
          </div>
        </div>

        <FlowchartStep
          stepNumber="7"
          text="Hyplifers network engage with the campaign"
        />
      </div>
    </div>
  );
};

export default Flowchart;
