
import './App.css'
import './components/cardResidents.css'
import './components/locationInfo.css'
import './components/pagination.css'
import CardResidents from './components/CardResidents';
import LocationInfo from './components/LocationInfo';
import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import { useRef, useState } from 'react';
import Pagination from './components/Pagination';

function App() {

  const [inputDimensionValue, setInputDimensionValue] = useState(getRandomLocation())
  const [cardsPerPage, setCardsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex = currentPage * cardsPerPage 
  const firstIndex = lastIndex - cardsPerPage

  const urlLocation = `https://rickandmortyapi.com/api/location/${inputDimensionValue || 1}`
  const [location, hasError] = useFetch(urlLocation)
  
  const totalCards = location?.residents.length
  const inputDimension = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    setInputDimensionValue(inputDimension.current.value);
  }

  return (
    <div className="App">
      <article className='App__Container--Global'>
        <section className='App__SloganTop'>
          <img src="../public/image/fondo-slogan.png" alt="wallPaper Rick and Morty" />
          <img src="../public/image/imageTitle.svg" alt="Rick and Morty" />
        </section>
        <form className='App__Form' onSubmit={handleSubmit}>
          <input type="Number" ref={inputDimension} placeholder='Dimension #   ' required />
          <button>Search</button>
        </form>
        {
          hasError
            ? <section className='App__Container--Error'>
              <h2 className='App__Error--Title'>¡ Hey ! this is quite the pickle, morty... this dimension doesn´t exist.</h2>
              <h3 className='App__Error--Text'>! You must enter a code from 1 to 126 ¡</h3>
            </section>
            : <>
              <section className='App__Container--Location'>
                <LocationInfo location={location} />
              </section>
              <section className='App__Container--Pagination'>
                <Pagination
                  cardsPerPage={cardsPerPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalCards={totalCards}
                />
              </section>
              <section className='App__Container--CardResidents'>
                <section className='App__CardResidents'>
                  {
                    location?.residents.map(urlResident => (
                      <CardResidents key={urlResident} urlResident={urlResident} />
                    )).slice(firstIndex, lastIndex)
                  }
                </section>
              </section>
              <section className='App__Container--Pagination2'>
                <Pagination
                  cardsPerPage={cardsPerPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalCards={totalCards}
                />
              </section>
            </>
        }

      </article>
    </div>
  )
}

export default App
