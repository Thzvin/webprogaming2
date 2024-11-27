function Nama (props){
  const {nama , npm , github} = props
    return(
        <div>
        <div className="namaContainer">
            <p>Nama : Dervin {nama}</p>
            <p>Npm : {npm}</p>
            <p>Github : <a href="https://github.com/Thzvin">{github}</a></p>
        </div>
        </div>
)

}

export default Nama