import Title from 'components/Title/Title'
import { useState } from 'react'
import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
} from '@mui/material'

type Props = {}
type Review = {
    name: string
    text: string
}
const ReviewsPage = (props: Props) => {
    const arrReviews = [
        {
            name: 'Евгеній',
            text: 'Хороший телефон, тому що немає аналогів. Так, то звичайний 13, уже всі все про нього знають. Приємно, що нагадує старі айфони епохи айфон 5.є, але трішки більший. Було би добре, якщо окрім фейс айді був ще сканер в кнопці',
        },
        {
            name: 'Юрій',
            text: 'При постійному користуванні за пов року справність акамулятора знизилась до 90%! Я розумію, що я майже постійно з телефоном, але порівнюючи з Айфон ХС, який у мене був, за 5 років користування там батарея знизилась до 84%. Боюся навіть уявити скільки буде батарея на цьому за 5 років',
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <Title>Reviews</Title>
            {reviews.map(({ name, text }, i) => (
                <Card
                    sx={{
                        margin: '30px 0',
                    }}
                    key={i}
                    variant="outlined"
                >
                    <CardContent>
                        <div>{name}:</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}

            <form onSubmit={onSend}>
                <h3>Please leave a review</h3>
                <div>
                    <TextField
                        size="small"
                        placeholder="Your name"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <br />
                <div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your message"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <Button type="submit" variant="outlined">
                    Send
                </Button>
            </form>
        </>
    )
}
export default ReviewsPage
