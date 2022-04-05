export default function Header(){
  return (
    <div>
      {
        ['header'].map((path) => {
          return (
            <div key={path}>
              <img src={`/${path}.jpg`} alt='header' style={{ width: '100%', height: '70%'}} />

            </div>
          )
        })
      }
   </div>
 ) 
}
