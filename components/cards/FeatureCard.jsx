

function FeatureCard({ iconType, title, description }) {
  const imageRoute =
    iconType === "card"
      ? "/images/card-icon.png"
      : iconType === "coin"
      ? "/images/coin-icon.png"
      : "/images/purse-icon.png";
  return (
    <div className="flex justify-center flex-col items-center">
      <img src={imageRoute} alt="feature icon" />
      <p className="mt-[2rem] mb-[0.63rem] font-[600] text-normal text-white text-center">
        {title}
      </p>
      <p className="text-grey text-center">{description}</p>
    </div>
  );
}

export default FeatureCard;