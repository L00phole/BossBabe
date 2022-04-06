 import styles from '../styles/Home.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <>
  
      <div className='grid gap-10 md:grid-cols-2 contain section bg-slate-400'>
        <div className='text-center '>
            <h2>
            BOSSBABE
            </h2> <br />
            <p>Work it like a queen</p>
            </div>
        </div>
          <div className="decoration-transparent">
        <a
          href="https://jennie-michele.0.capacedev.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Jennie och Michele {' '}
          <span>
            <Image src="/favicon.ico" alt="Bossbabe Logo" width={13} height={13} />
          </span>
        </a>
      </div>

    </>
  )
}
export default Footer;