import react from 'react';

const QuizScore = ({score}) => {

    return (
        <div className="score-wrapper">
            <p>You made it through the quiz and Buddy still had candy canes left. Hooray!</p>
            {score.correctQuestions == 1 ?<p>You earned {score.correctQuestions} present!</p> : <p>You earned {score.correctQuestions} presents!</p>}
            {/* <p>You got {score.correctQuestions} questions correct out of {score.totalQuestions} </p> */}
        </div>
    )
}

export default QuizScore;