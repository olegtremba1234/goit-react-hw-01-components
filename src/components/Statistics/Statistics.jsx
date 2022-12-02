import PropTypes from 'prop-types'
import style from './Statistics.module.css'

const colors = ['#984ED0', '#CDD25A', '#FDB05E', '#0475ED', '#F02C6E'];

export default function Statistics({ title, stats }) {
    return (
        <section className={style.statistics}>
            {title && <h2 className={style.title}>{title}</h2>}
            <ul className={style.statList}>
                {stats.map(({ id, label, percentage }, index) => (
                    <li className={style.item} key={id} style={{ background: colors[index] }}>
                        <span className={style.label}>{label}</span>
                        <span className={style.percentage}>{percentage}</span>
                    </li>
                ))};
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired
};