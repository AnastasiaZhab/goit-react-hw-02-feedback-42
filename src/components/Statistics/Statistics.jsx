import s from './Statistics.module.css';

const Statistics = ({ options }) => {
    return (<div className={s.div}>
        {options.map(option => {
            return (
                <p>{option}</p>
            )
        })
        }
        </div>
    )

}

export default Statistics;