import { Link } from "react-router-dom"

const NotFound = ({ message, image }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-7 w-screen h-screen text-white">
      <img
        src={image}
        alt="Decoration Image"
        className="w-3/4 max-w-[320px]" />

      <h2 className="text-5xl">
        {message}
      </h2>

      <Link
        to="/"
        className="py-2 px-5 hover:bg-secondary border-2 border-secondary rounded-3xl duration-300">
        Back Home
      </Link>
    </div>
  )
}

export default NotFound