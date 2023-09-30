
const YOUtube_API_KEY = 'AIzaSyBTMwGFe5F2b8SgCbVLe71NAk-CZx6BXSY';
export const YoutubesearchApi = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
const youtubevideoapi = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1000&regionCode=IN&key=' + YOUtube_API_KEY;
export const chat_count=30;
export const RELATED_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&videoCategoryId=";
export const COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&maxResults=7";
export default youtubevideoapi;

