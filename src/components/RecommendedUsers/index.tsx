import './style.scss';
import '@gabrielfins/ripple-effect';
import { FaUserCircle } from 'react-icons/fa';
import data from '../../data-recommended-users.json';

export default function RecommendedUsers() {
    return (
        <div className="recommended-users-content">
            <div className="recommended-users-title">
                <h2>Quem seguir</h2>
            </div>
            <div className="recommended-users">
                {data.recommendedUsers.map((data) => {
                    return (
                        <div role="button" key={data.id} className="recommended-user">
                            <FaUserCircle className="recommended-user-image" />
                            <div className="recommended-user-info">
                                <span>{data.name}</span>
                                <span>@{data.userName}</span>
                            </div>
                            <button className="ripple-effect ripples-theme follow-button">Seguir</button>
                        </div>
                    );
                })}
            </div>
            <button className="ripple-effect see-more-button">Ver mais</button>
        </div>
    );
}