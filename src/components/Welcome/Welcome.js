import React from "react";
import WelcomeTitle from "./WelcomeTitle";

const Welcome = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      {/* <video
        className="w-[90vw] h-[90vh]"
        autoPlay
        muted
        src="https://player.vimeo.com/external/369321390.hd.mp4?s=cb7186988c4858a9dc8c7f24bd6b9d0624220574&profile_id=175"
      /> */}

      <WelcomeTitle title={"BLAKE"} />
    </div>
  );
};

export default Welcome;
