
export  function Pagination ({current,onChange}){
    
    const pre=(
        <button
        disabled={current===1}
        onClick={()=>onChange(current-1)}
        >Previous</button>
        )
        const currentPage=(
            <button>{current}</button>
            )
            const next=(
                <button
                disabled={current===10}
                onClick={()=>onChange(current+1)}
                >Next</button>
                )
              //  console.log(current)
  return (
    <div>
        {pre}
        {currentPage}
        {next}
    </div>
  )
}
