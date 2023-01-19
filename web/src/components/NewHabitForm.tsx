import * as Checkbox from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";
import { FormEvent, useState } from 'react';

const availableWeekDays = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

export default function NewHabitForm() {
  const [title , setTitle] = useState('')
  const [weekDays, setWeekDays] = useState<number[]>([])

  function createNewHabit(event: FormEvent){
    event.preventDefault();

  }

  function handleToggleWeekDay(weekDay: number){
    if(weekDays.includes(weekDay)){
      const weekDaysWithRemovedDays = weekDays.filter(day => day != weekDay)
      
      setWeekDays(weekDaysWithRemovedDays)
    }else {
      const weekDaysWithAddedDays = [...weekDays, weekDay]
      setWeekDays(weekDaysWithAddedDays)
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        What's your compromising?
      </label>
      <input 
        type="text"
        id="title"
        placeholder="ex.: Exercises, sleep well and more..."
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
        onChange={event => setTitle(event.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        How often?
      </label>

      <div className='mt-6 flex flex-col gap-2 mt-3'>
        {availableWeekDays.map((weekDay,index) => {
         return (
              <Checkbox.Root
              key={weekDay}
              className='flex items-center gap-3 group'
              onCheckedChange={() => handleToggleWeekDay(index)}
            >
              <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
                <Checkbox.CheckboxIndicator>
                  <Check size={20} className="text-white"/>
                </Checkbox.CheckboxIndicator>
              </div>

              <span className='text-white leading-tight'>
                {weekDay}
              </span>
            </Checkbox.Root>
          )
        })}


      </div>

      <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"> 
        <Check size={20} weight="bold" />
        Confirm
      </button>
    </form>
  )
}
