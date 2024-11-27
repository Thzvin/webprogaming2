
function Input (){
   const  logika = () => {
      const nama = document.querySelector('input').value
      document.querySelector('#nama').innerText = nama;
     }
 return(
   <div className="inputContainer">
      <p id="nama"></p>

    <input type="text" placeholder="Agus"/>
    <button onClick={logika}    
     >Sumbit</button>

   </div>
 )
}


export default Input
