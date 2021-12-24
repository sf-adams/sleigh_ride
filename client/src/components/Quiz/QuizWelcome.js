import react from 'react';
import quizCracker from '../../assets/images/christmas_cracker_start.svg';
import quizElf from '../../assets/images/elf_happy.svg';

// import '../../css/Quiz.css';

const QuizWelcome = ({onButtonClick}) => {

    const handleClick = () => {
        onButtonClick();
    }


    return (
        <div className="quiz-welcome">
            <h2>Welcome to the Christmas quiz</h2>
            <div className="quiz-welcome-content-wrapper">
                <div className="quiz-welcome-text-wrapper">
                    <p>Buddy the elf loves candy canes, get answers right to help him keep his candy<br/>Get presents for each question you get right!</p>
                    <img className="quiz-start-svg" src={quizCracker} alt="Christmas cracker start" onClick={handleClick} />
                </div>
                <img className="quiz-welcome-elf" src={quizElf} alt="Christmas elf for page load"/>
            </div>
        </div>

    )
}


export default QuizWelcome