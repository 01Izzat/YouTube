import { Stack, Box } from '@mui/material'
import { VideoCard, ChannelCard, Loader } from '..'
import VideoCard from "../Video-card/VideoCard";

const Videos = ({ videos }) => {
	if (!videos.length) return console.log('malumot kemadi');

	return (
		<Stack
			width={'100%'}
			direction={'row'}
			flexWrap='wrap'
			justifyContent='start'
			alignItems='start'
			gap={2}
		>
			{videos.map((item, idx) => (
				<Box key={idx}>
					{item.id.videoId && <VideoCard video={item} />}
					{item.id.channelId && <ChannelCard video={item} />}
				</Box>
			))}
		</Stack>
	)
}

export default Videos
// import { Box, Stack } from "@mui/material";
// import VideoCard from "../Video-card/VideoCard";

// const Videos = ({videos}) => {
// console.log(videos);
//   return (
//     <Stack width={'100%'} direction='row' justifyContent={'start'} alignItems='center' flexWrap='wrap' gap={2}>
//       {videos.map(item => (
//         <Box key={item.id.videoId}>
//           {item.id.videoId && <VideoCard video={item}/>}
//         </Box>
//       ))}
//     </Stack>
//   )
// }

// export default Videos;