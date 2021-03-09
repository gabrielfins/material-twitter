import './style.scss';
import tweetsData from '../../data-tweets.json';
import UserProfileCard from '../../components/UserProfileCard';
import TrendingTopics from '../../components/TrendingTopics';
import TweetComposer from '../../components/TweetComposer';
import Tweet from '../../components/Tweet';
import RecommendedUsers from '../../components/RecommendedUsers';
import ExtraInfo from '../../components/ExtraInfo';

export default function Home() {
    return (
        <div className="page-container">
            <div className="page-content">
                <div className="page-item-container">
                    <UserProfileCard />
                </div>
                <div className="page-item-container">
                    <TrendingTopics />
                </div>
            </div>
            <div className="page-main-content">
                <div className="create-tweet">
                    <TweetComposer rowsNumber={1} charachterCount={0} />
                </div>
                <div className="tweets">
                    {tweetsData.tweets.map((data: any) => {
                        return (
                            <Tweet key={data.id}
                                userImageUrl={data.userImageUrl}
                                userName={data.userName}
                                userUsername={data.userUsername}
                                timeFromPosting={data.timeFromPosting}
                                timePosted={data.timePosted}
                                isUserFollowed={data.isUserFollowed}
                                tweetText={data.tweetText}
                                tweetImageUrl={data.tweetImageUrl}
                                numberOfComments={data.numberOfComments}
                                numberOfRetweets={data.numberOfRetweets}
                                numberOfLikes={data.numberOfLikes}
                                isTweetRetweeted={data.isTweetRetweeted}
                                isTweetLiked={data.isTweetLiked} />
                        );
                    })}
                </div>
            </div>
            <div className="page-content">
                <div className="page-item-container">
                    <RecommendedUsers />
                </div>
                <div className="page-item-container">
                    <ExtraInfo />
                </div>
            </div>
        </div>
    );
}