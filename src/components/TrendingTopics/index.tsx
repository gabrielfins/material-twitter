import './style.scss';
import '@gabrielfins/ripple-effect';
import data from '../../data-trending-topics.json';
import { MdEdit } from 'react-icons/md';

export default function TrendingTopics() {
    return (
        <div className="trending-topics-content">
            <div className="trending-topics-title">
                <h2>Tendências de Brasil</h2>
                <button className="md-ripples ripples-theme edit-button"><MdEdit size="1.6em" /></button>
            </div>
            <div className="trending-topics">
                {data.trendingTopics.map((data: any) => {
                    return (
                        <button key={data.id} className="md-ripples trending-topic-button">
                            <span className="trending-topic-position">{data.position}</span>
                            <div className="trending-topic-button-details">
                                <span className="trending-topic-title">{data.title}</span>
                                <span className="trending-topic-amount">{data.amountOfTweets} Tweets</span>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}