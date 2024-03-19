
const VideoComponent = () => {
  return (
    <div className="flex justify-center">
      <iframe
        className="w-3/4 h-96"
        src="https://www.youtube.com/embed/Ec7DBO8upO4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Demo video of ChatFleet application in action"
      ></iframe>
    </div>
  );
};

export default VideoComponent;

