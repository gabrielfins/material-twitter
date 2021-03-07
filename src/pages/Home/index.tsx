import './style.scss';
import Tweet from '../../components/Tweet';

export default function Home() {
    return (
        <div className="page-container">
            <div className="page-content">
            </div>
            <div className="page-main-content">
                <Tweet />
                <div className="divider"></div>
                <Tweet />
            </div>
            <div className="page-content-left">
            </div>  
        </div>
    );
}