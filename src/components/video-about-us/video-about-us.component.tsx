import React from 'react';

type VideoAboutUsProps = {
	videoUrl: string;
};

export const VideoAboutUs = ({ videoUrl }: VideoAboutUsProps) => {
	return (
		<div className="video-responsive aspect-video">
			<iframe
				width="100%"
				height="100%"
				src={videoUrl}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		</div>
	);
};
