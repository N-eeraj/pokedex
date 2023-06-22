import NotFound from "@components/NotFound"

const notFound = () => {
  return (
    <NotFound
      message="Pokemon not found"
      image="https://img.pokemondb.net/sprites/home/normal/ditto.png" />
  )
}

export default notFound