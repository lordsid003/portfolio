import Card from "../Templates/Card";
import "../styles/Profile.css";
import { cardItems } from "../constants/Data";

const Profile = () => {
    const items = cardItems;
    return (
        <div className="profile section" id="profile">
            <div className="items">
                <h2 id="header">
                        Skills
                </h2>
                <div className="profiledata">
                    {
                        items.map((item, index) => {
                            return (
                                <Card
                                    key={index.toString()}
                                    imgUrl={item.image}
                                    tech={item.tech}
                                    description={item.description}
                                    title={item.title}
                                    color={item.color}
                                    fontColor={item.fontColor}
                                    tag={item.tag}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Profile;