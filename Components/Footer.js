 import styles from '../styles/Home.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <>
  
      <div className='grid gap-10 mb-5'>
        <div className='text-center '>
            <h1 className="font-bold text-xl cursor-pointer">
                  BOSS<span className="text-yellow-400">BABE</span>

                  </h1> <br />
            <p className="font-bold text-l">Work it like a queen</p>
            </div>
        </div>
          <div className="font-bold text-l mb-0 text-center ">
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