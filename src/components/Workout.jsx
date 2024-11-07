import React from 'react'
import SectionWraper from './SectionWraper'
import ExerciseCard from './ExerciseCard'

export default function Workout(props) {
  const {workout} = props
  return (
    <SectionWraper id={'workout'} header={"welcome to"} title=
    {['The','DANGER','zone']}>
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i)=>{
          return(
            <ExerciseCard i={i} exercise={exercise} key={i}>

            </ExerciseCard>
          )
        })}
      </div>
      </SectionWraper>
  )
}
