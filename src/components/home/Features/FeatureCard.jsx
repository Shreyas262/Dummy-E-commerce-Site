import './features.css'

function FeaturesCard({ feature }) {
    return (
        <div className='feature-card card'>
            <div className="feature-icon">
                {<feature.icon />}
            </div>

            <h3 className="feature-title">
                {feature.title}
            </h3>

            <p className="feature-description">
                {feature.description}
            </p>

        </div>
    );
}

export default FeaturesCard
