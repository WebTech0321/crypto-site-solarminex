import React from "react";
import VideoChunk from "./VideoChunk"
import { videoDesktopJpg, videoMobileJpg } from "../assets/video";

export default ({ source:{ desktop, mobile } }) => {
    return (
        <div className="bg-video">
            <div className="d-none d-md-block">
                <VideoChunk 
                    self={this}
                    poster={videoDesktopJpg}
                    id="video-bg__hd"
                >
                {
                    desktop.map(
                        ({ src, type }, i) =>
                            <source { ...{ src, type } } key={ i }/>
                    )
                }
                </VideoChunk>
            </div>
            <div className="d-md-none">
                <VideoChunk 
                    self={this}
                    poster={videoMobileJpg}
                    id="video-bg__ld"
                >
                {
                    mobile.map(
                        ({ src, type }, i) =>
                            <source { ...{ src, type } } key={ i }/>
                    )
                }
                </VideoChunk>
            </div>
        </div>
    )
}
