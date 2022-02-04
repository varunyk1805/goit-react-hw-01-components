import propTypes from "prop-types";
import styles from './Statistics.module.css';

const colors = ['#585528', '#6e4158', '#482c53', '#463368', '#2b414b', '#193527', '#353d21', '#7a4c31', '#8a2a8a', '#143823', '#3a203a', '#5c3338'];
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

const Statistics = (data) => {
    
    const statistics = styles.statistics;
    const title = styles.title;
    const stat_list = styles.stat_list;
    const item = styles.item;
    const label = styles.label;
    const percentage = styles.percentage;
    return (
        <>
            <section className={statistics}>
                {data.title && (
                    <h2 className={title}>{data.title}</h2>
                )}
                <ul className={stat_list}>
                    {data.stats.map(stat => (
                        <li key={stat.id} className={item} style={{ backgroundColor: randomColor() }}>
                            <span className={label}>{stat.label}</span>
                            <span className={percentage}>{stat.percentage}%</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.array.isRequired,
};

export default Statistics;