import './App.css'
import { FiSearch } from 'react-icons/fi';
import { useState } from 'react'
import Card from './components/Card/Card';


function App() {
  const [search, setSearch] = useState('')
  const [perfil, setPerfil] = useState('')
  const [card, setCard] = useState(false)
  const [input, setInput] = useState(true)
  const [message, setMessage] = useState(true)


  const handleSearch = () => {

    let api = `https://api.github.com/users/${search}`

    fetch(api)
      .then(response => response.json())
      .then(data => {
        setPerfil(data)
        setCard(true)
        setInput(true)
        setMessage(true)

        if (!data.id) {
          setCard(false)
          setInput(false)
          setMessage(false)
        }


      })

    setSearch('')

  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }


  return (
    <div className="app ">

      <div className="content">

        <header className='header'>
          <h1>GitSearch</h1>
          <p>Insira o user do perfil desejado</p>
        </header>

        <label htmlFor="search">
          <input value={search} onKeyDown={handleKeyPress} onChange={(e) => setSearch(e.target.value)} name='search' className={`${input ? '' : 'error'}`} type="text" placeholder='Digite o user do GitHub' />

          <button onClick={handleSearch} className='icon-search' > <FiSearch /> </button>

        </label>


        <div className="card-area">


          {message ? '' : <p>Usuário não existe</p>}

          {card && <Card key={perfil.id}
            image={perfil.avatar_url}
            name={perfil.name}
            login={perfil.login}
            repos={perfil.public_repos}
            followers={perfil.followers}
            following={perfil.following} />}

        </div>

      </div>



    </div>
  )
}

export default App
