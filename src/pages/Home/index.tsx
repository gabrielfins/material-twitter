import './style.scss';
import Tweet from '../../components/Tweet';
import data from '../../data-tweets.json';
import UserProfileCard from '../../components/UserProfileCard';
import TweetComposer  from '../../components/TweetComposer';

export default function Home() {
    return (
        <div className="page-container">
            <div className="page-content">
                <div className="user-profile-container">
                    <UserProfileCard />
                </div>
                <div className="trending-topics-container">

                </div>
            </div>
            <div className="page-main-content">
                <div className="create-tweet">
                    <TweetComposer rowsNumber={ 1 } charachterCount={ 0 } />
                </div>
                <div className="tweets">
                    {data.tweets.map((data: any) => {
                        return (
                            <Tweet key={ data.id }
                                userImageUrl={ data.userImageUrl }
                                userName={ data.userName }
                                userUsername={ data.userUsername }
                                timeFromPosting={ data.timeFromPosting }
                                timePosted={ data.timePosted }
                                isUserFollowed={ data.isUserFollowed }
                                tweetText={ data.tweetText }
                                tweetImageUrl={ data.tweetImageUrl }
                                numberOfComments={ data.numberOfComments }
                                numberOfRetweets={ data.numberOfRetweets }
                                numberOfLikes={ data.numberOfLikes }
                                isTweetRetweeted={ data.isTweetRetweeted }
                                isTweetLiked={ data.isTweetLiked } />
                        );
                    })}
                </div>
            </div>
            <div className="page-content">
                <div className="who-to-follow-container">

                </div>
                <div className="extra-info-container">

                </div>
            </div>  
        </div>
    );
}