export function Video() {
  return (
    <div className=" flex justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Ec7DBO8upO4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Demo video of ChatFleet application in action"
      ></iframe>
    </div>
  );
}
