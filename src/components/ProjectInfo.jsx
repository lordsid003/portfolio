const ProjectInfo = ({ title, tags }) => {
    return (
        <div className="info__header">
            <div className="info__title">
                <h2>{title}</h2>
                <div className="info__tags">
                    {
                        tags && 
                        tags.map((item, index) => {
                            return (
                                <div key={index.toString()} className="info__tag-item">{item.title}</div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="info__buttons">
                <div className="info__btn github"></div>
                <div className="info__btn heart">
                    <span className="material-symbols-outlined">
                        favorite
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;