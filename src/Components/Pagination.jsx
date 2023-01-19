
export  function Pagination ({}){
    let current=1
    const pre=(
        <button
        disabled={current===1}
        onClick={()=>(current-1)}
        >Previous</button>
        )
        const currentPage=(
            <button>{current}</button>
            )
            const next=(
                <button
                disabled={current===10}
                onClick={()=>(current+1)}
                >Next</button>
                )
                console.log(current)
  return (
    <div>
        {pre}
        {currentPage}
        {next}
    </div>
  )
}
