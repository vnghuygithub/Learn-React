import { useState, useEffect } from "react";

const lessons = [
    {
        id: 1,
        name: "React hay lam.."
    },
    {
        id: 2,
        name: "Angula hay lam.."
    },
    {
        id: 3,
        name: "Vue hay lam.."
    }
]

function Content() {
    const [lessonId, setLessonId] = useState(1)

    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment)

        //clean-up function
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id
                                ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}</li>
                ))}
            </ul>
        </div >
    );
}

export default Content;
