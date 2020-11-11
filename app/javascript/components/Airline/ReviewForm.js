import React from 'react';
import styled from 'styled-components';
import {Selected} from './stars/Selected'
import {Gray} from './stars/Gray'
import {Hover} from './stars/Hover'

const RatingContainer = styled.div`
  text-align: center;
  border-radius: 4px;
  font-size: 1.8rem;
  padding: 40px 0 10px 0;
  border: 1px solid #e6e6e6;
  background: #fff
`

const RatingBox = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;
  margin-top: 12px;
  
  input {
    display: none;
  }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Gray}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 70%
  }

  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Selected}")
  }

  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8, ${Hover}")
  }
`

const Field = styled.div`
  border-radius: 4px;

  input {
    min-height: 50px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 0 0 12px 0;
    padding: 12px;
    width: 96%;
    font-size: 14px; 
  }

  textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    margin: 12px 0;
    padding: 12px;
  }
`

const Wrapper = styled.div`
  background: black;
  padding: 20px;
  height: 100vh;
  padding-top: 100px;
`

const SubmitBtn = styled.button`
  color: #fff;
  background: #333;
  border-radius: 4px;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: ease-in-out 0.1s;
  border: 1px solid #fff;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background: #fff;
    color: black;
    border: 1px solid #fff;
  }
  
`
const Headline = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
  color: #fff;
`

const RatingTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold
`

export const ReviewForm = props => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <>
        <input
          type="radio"
          id="rating"
          value={score}
          onChange={() => console.log('selected', score)} checked={props.review.score == score}
        />
        <label
          htmlFor="rating"
          onClick={props.setRating.bind(this, score)}
        ></label>
      </>
    )
  })
  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Headline>Have an experience with {props.attributes.name}? Share your review</Headline>
        <Field>
          <label>
            <input
              type="text"
              name="title"
              placeholder="Review Title"
              onChange={props.handleChange}
              value={props.review.title}
            />
          </label>
        </Field>

        <Field>
          <label>
            <input
              type="text"
              name="description"
              placeholder="Review Description"
              onChange={props.handleChange}
              value={props.review.description}
            />
          </label>
        </Field>

        <Field>
          <RatingContainer>
            <RatingTitle>
              Rate this Airline
              <RatingBox>
                {ratingOptions}
              </RatingBox>
            </RatingTitle>
          </RatingContainer>
        </Field>

        <SubmitBtn type="submit">Submit Your Review</SubmitBtn>
      </form>
    </Wrapper>
  )
}