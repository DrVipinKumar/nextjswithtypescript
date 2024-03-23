'use server'

const NotFound = () => {
  return (
    <div className='h-screen flex bg-red-800 items-center justify-center'>
        <h1 className="text-white font-bold text-red-300xl">404 : You route is not found</h1>
    </div>
  )
}

export default NotFound