import './header.css'

export default function Header() {
  return (
    <div>
        <header>
            <h1>Where in the world?</h1>

            <div className='flex'>
                <img src="./dark.svg" alt="" />
                <h4>Dark Mode</h4>
            </div>
        </header>
    </div>
  )
}
