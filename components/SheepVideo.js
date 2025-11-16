export default function BackgroundVideo() {
    return (
      <>
        {/* Clouds layer ) 
        <video
          className="bg-video bg-clouds"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/clouds_clip.mp4" type="video/mp4" />
        </video> */}
  
        {/* Sheep layer */}
        <video
          className="bg-video bg-sheep"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/sheep_clip.mp4" type="video/mp4" />
        </video>
      </>
    );
  }
  