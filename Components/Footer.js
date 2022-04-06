 import styles from '../styles/Home.module.css'
import Image from 'next/image'


const Footer = () => {
  return (
    <>
     
      <div className='text-center md:text-left'>
          <h2>
            BOSSBABE
          </h2>
          <p></p>
      </div>
       <div className="powered-by">
        <a
          href="https://jennie-michele.0.capacedev.se/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Jennie och Michele {' '}
          <span className={styles.logo}>
            <Image src="/favicon.ico" alt="Bossbabe Logo" width={13} height={13} />
          </span>
        </a>
      </div>
    </>
  )
}
export default Footer;