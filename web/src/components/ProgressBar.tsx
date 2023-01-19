interface ProgressBarProps {
  progress:number
}

export default function ProgressBar(props: ProgressBarProps) {
  const progressStyles ={
    width: `${props.progress}%`
  }

  return (
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div 
        className='h-3 rounded-xl bg-violet-600' 
        role="progressbar"
        aria-label="Habit of the habits completed at that day"
        aria-valuenow={props.progress}
        style={progressStyles}
      />
    </div>

  )
}
