import s from './Feedback.module.css';
import PropTypes from 'prop-types';

const Feedback = ({options}) => {

    // const options = ['good', 'neutral', 'bad']
    return (<div className={s.div}>
        <h2>Please leave feedback</h2>
        {options.map(option => {
            return (
                <button type="button" className={s.button} key={option} name={option}>{option}</button>
            )
        })}


    </div>
    
)
};

export default Feedback;

Feedback.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
}