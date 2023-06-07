import css from './Statistics.module.css'
import PropTypes  from 'prop-types'

function Statistics({title, stats}) {
    return (
      <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statlist}>
        {stats.map(Statistics => (
         <li className={css.item} key={Statistics.id}>
             <span className={css.label}>{Statistics.label}:</span>
             <span className={css.percentage}>{Statistics.percentage}%</span>
         </li>
        ))}
      </ul>
     </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
    ).isRequired
  };


export default Statistics;  