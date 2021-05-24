import BackButton from '../components/back_button'

export default function Custom404() {
  return (
    <div className="h-screen -my-8 py-8 flex items-center justify-center">
      <div className="text-center">
        <div className="text-5xl font-semibold">404</div>
        <h1 className="my-4 text-lg">The page you requested cannot be found.</h1>
        <BackButton href="/" />
      </div>
    </div>
  )
}
