import React, { useState } from 'react';
import {Link} from "react-router-dom";
import './Quiz.css'
import {v4 as uuidv4} from "uuid"

export default function Quiz() {
	const questionsList = [
		{
			question: 'What is the full form of DC',
			answerList: [
				{ answer: 'Dont Care', isCorrect: false },
				{ answer: 'Direct Current', isCorrect: false },
				{ answer: 'Digital Communication', isCorrect: true },
				{ answer: 'Direct Connection', isCorrect: false },
			],
		},
		{
			question: 'Digital Communication is better than Analog Communication',
			answerList: [
				{ answer: 'False', isCorrect: false },
				{ answer: 'True', isCorrect: true },
				{ answer: 'Cant Say', isCorrect: false },
				{ answer: 'I will not say', isCorrect: false },
			],
		},
		{
			question: 'Full form of ES',
			answerList: [
				{ answer: 'Embedded Sysytem', isCorrect: true },
				{ answer: 'Error System', isCorrect: false },
				{ answer: 'Easy System', isCorrect: false },
				{ answer: 'Erase System', isCorrect: false },
			],
		},
		{
			question: 'Full form of MP',
			answerList: [
				{ answer: 'Mini Processor', isCorrect: false },
				{ answer: 'Madhya Pradesh', isCorrect: false },
				{ answer: 'Mega Processor', isCorrect: false },
				{ answer: 'Micro Processor', isCorrect: true },
			],
		},
	];



	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [clicked, setClicked] = useState(false);
	const [score, setScore] = useState(0);
    const [showScore,setShowScore]=useState(false);

	const handleCorrectAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		setClicked(true);
		
	};

    const handleNextQuestion=()=>
    {
        setClicked(false);
        if(currentQuestion<questionsList.length -1)
        {
            setCurrentQuestion(currentQuestion+1);
        }
        else 
        {
        setShowScore(true);
        }
    }

	return (
		<div className='app-wrapper'>
			{showScore ? (
                <div> 
				<div className='completed'>COMPLETED</div>
                <div className="score-section">
					You scored {score} out of {questionsList.length}
                    <div className="quiz-back">
                    <Link exact className="quiz-back-icon"  to="/More" >BACK</Link>
                    </div>
				</div>
                </div>
			) : (
                <div>
					<div className='question-section-wrapper'>
						<div className='question-count'>
							Question {currentQuestion + 1}/{questionsList.length}
						</div>
						<div className='question'>{questionsList[currentQuestion].question}</div>
					</div>
					<div className='answer-section-wrapper'>
						{questionsList[currentQuestion].answerList.map((answerOption) => (
							<li className="answer-list" key={uuidv4()}>
                               
                                <button disabled={clicked} className={`answer-button ${clicked && answerOption.isCorrect ? "correct" : " "}`}
                                onClick={()=>handleCorrectAnswer(answerOption.isCorrect)} > {answerOption.answer}</button>
                            </li>
                            	))}
					</div>
                    <div className="quiz-nxtbtn">
                        <button className="next-button" onClick={handleNextQuestion} disabled={!clicked} >NEXT</button>
                    </div>
                    </div>
				
			)}
		</div>
	);
}    