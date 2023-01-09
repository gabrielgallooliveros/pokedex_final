import "./styles/Pagination.css"

function Pagination({currentPage, maxNumberPages, setCurrentPage}) {
  
  const pagesPerBlock = 5
  const currentBlock = Math.ceil(currentPage/pagesPerBlock);
  const maxNumberBlock = Math.ceil(maxNumberPages/pagesPerBlock)

  const arrayPages = []
  const initialPage = (currentBlock - 1)*pagesPerBlock + 1
  const finalPage = maxNumberBlock === currentBlock ? maxNumberPages : currentBlock * pagesPerBlock
  for(let i = initialPage; i <= finalPage; i++ ) {
    arrayPages.push(i)
  }

  const handlePage = number => {
    setCurrentPage(number)
  }
  const handlePreview = () => {
    if(currentPage - 1 > 0) { setCurrentPage(currentPage -1)}
  }
  const handleNext = () => {
    if(currentPage +1 <= maxNumberPages) {setCurrentPage(currentPage + 1)}
  }

  return(
    <div className="containerPag">
      <ul className="listPag">
        <li className="itemPag btnPag" onClick={handlePreview}>&#60;</li>
        {
          arrayPages.map(item => (
            <li className={`itemPag ${currentPage === item && 'activePage'}`} onClick={() => handlePage(item)} key={item}> {item} </li>
          ))
        }
        <li className="itemPag btnPag" onClick={handleNext}>&#62;</li>
      </ul>
    </div>
  ) 
}

export default Pagination