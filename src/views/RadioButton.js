import { useState } from "react"

const course = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'Java'
    },
    {
        id: 3,
        name: 'JavaScript'
    },
]
function RadioButton() {
    const [checked, setChecked] = useState([])
    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id)
            if (isChecked) {
                return checked.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    const handleSubmit = () => {
        console.log({ id: checked });
    }

    return (
        <div style={{ padding: 32 }}>
            {course.map(course => (
                <div key={course.id}>
                    <input
                        type="checkbox"
                        checked={checked.includes(course.id)}
                        onChange={() => handleCheck(course.id)}
                    />{course.name}
                </div>

            ))}
            <button onClick={handleSubmit}>Register</button>
        </div>
    )
}
export default RadioButton;