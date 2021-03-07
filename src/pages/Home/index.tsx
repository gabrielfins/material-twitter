import './style.scss';
import Tweet from '../../components/Tweet';
import data from '../../data-tweets.json';

export default function Home() {
    return (
        <div className="page-container">
            <div className="page-content">
            </div>
            <div className="page-main-content">
                {data.tweets.map((data: any) => {
                    return (
                        <>
                            <div className="divider"></div>
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
                        </>
                    );
                })}
            </div>
            <div className="page-content-left">
            </div>  
        </div>
    );
}