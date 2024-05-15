// const apikey=cb061e6c5d454e9c941125624241505;
const button=document.getElementById('btn');
const input=document.getElementById('city-input');
const cityName =document.getElementById('city-name');
const cityTime =document.getElementById('city-time');
const temp=document.getElementById('temp');
const co=document.getElementById('co');
const circle=document.getElementById('circle');
const no2=document.getElementById('no2');
const so2=document.getElementById('so2');
const o3=document.getElementById('o3');
const humidity =document.getElementById('humidity');


button.addEventListener('click',async ()=>{
    value=input.value;
    const result=await getData(value);
   cityName.innerText=`${result.location.name},${result.location.region}`
   cityTime.innerText=result.location.localtime
   temp.innerText=result.current.temp_c;
   const coValue = result.current.air_quality.co;
   no2.innerText=result.current.air_quality.no2;
   so2.innerText=result.current.air_quality.so2;
   o3.innerText=result.current.air_quality.o3;
   humidity.innerText=result.humidity;
    co.innerText = coValue;

    if (coValue > 500) {
        circle.style.boxShadow = "inset 0 0 10px 5px, 0 0 10px 5px rgba(255, 0, 0, 0.5)";
    }
    else if(coValue>400){
        circle.style.boxShadow = "inset 0 0 10px 5px, 0 0 10px 5px rgb(240, 131, 51,0.5)";
 
    }
    else if(coValue>350){
        circle.style.boxShadow = "inset 0 0 10px 5px, 0 0 10px 5px rgb(255, 253, 84,0.5)";
 
    }
    else{
        circle.style.boxShadow = "inset 0 0 10px 5px, 0 0 10px 5px rgb(103, 222, 67,0.5)";
 
    }
   
});

async function getData(cityName){
  const promise= await  fetch(`http://api.weatherapi.com/v1/current.json?key=cb061e6c5d454e9c941125624241505&q=${cityName}&aqi=yes`);

return await promise.json();
}
