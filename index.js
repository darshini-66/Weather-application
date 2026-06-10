myForm.addEventListener('submit',((event)=>{
    event.preventDefault();
    let inputValue=document.getElementById('info').value;
let apiKey="443ae0ae87615415afb2e8b19c81208f";
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`)
.then(result=>{
    console.log(result);
    console.log(result);
    document.getElementById('display').innerHTML=`<h2>City: ${result.data.name}</h2>
                                                <h2>temparature: ${result.data.main.temp}<sup>o</sup>C</h2>` 
                                            })
                                            .catch(()=>{
                                                alert('Please enter a valid city name')
                                            })
}))
