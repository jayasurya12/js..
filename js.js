const countryData=[]
const countryNames=[]
const countryCapital=[]
const alpha2Code=[]
const alpha3Code=[]
const latlng1=[]
const latlng2=[]
const latlng=[]
const region=[]
const flag=[]




//imageContainer..

let container=document.createElement('div');
container.setAttribute('class','container');
container.setAttribute('id','container');
document.body.appendChild(container);
//row..
let row =document.createElement('div');
row.setAttribute('class',"row row-cols-1 row-cols-lg-4 row-cols-md-3 g-4");
container.appendChild(row);

async function apicalls(){
  try{
    const api=await fetch("https://restcountries.eu/rest/v2/all");
    apiData=await api.json();

    apiData.filter((data)=>{
      countryNames.push(data.name)
      countryCapital.push(data.capital)
      alpha2Code.push(data.alpha2Code)
      alpha3Code.push(data.alpha3Code)
      latlng.push(data.latlng)
      latlng1.push(data.latlng[0])
      latlng2.push(data.latlng[1]);
      region
      region.push(data.region);
      flag.push(data.flag);
    })
        apiData.forEach(data => {
         //col..
         let col =document.createElement('div');
         col.setAttribute('class','col');
         row.appendChild(col);
         //card..
         let card =document.createElement('div');
         card.setAttribute('class','card');
         col.appendChild(card);
         //card Header..
         let cardHeader =document.createElement('div');
         cardHeader.setAttribute('class','card-header text-center');
         cardHeader.innerText=data.name;
         card.appendChild(cardHeader);
         //imgTag...
         let imgTag =document.createElement('img');
         imgTag.setAttribute('src',data.flag);
         imgTag.setAttribute('class','card-img-top');
         imgTag.setAttribute('atl','Flags');
         cardHeader.appendChild(imgTag);
         //card-body...
         let form=document.createElement("form");
         card.appendChild(form);
         //
         let cardBody =document.createElement('div');
         cardBody.setAttribute('class','card-body text-center');
         form.appendChild(cardBody);
         //sapn...
         let capitals=document.createElement('span');
         capitals.setAttribute('class',"badge  text-dark my-auto");
         capitals.innerText="Capital :";
         cardBody.appendChild(capitals);
         //capitalNames..
         let capitalName=document.createElement('span');
         capitalName.innerText=data.capital;
         capitalName.setAttribute('class',"badge bg-success");
         cardBody.appendChild(capitalName);
         //br..
         let br=document.createElement('br');
         cardBody.appendChild(br);
         //lai
         let regionName=document.createElement('span');
         regionName.innerText="Region :";
         cardBody.appendChild(regionName);
         //Regions...
         let capitalRegion=document.createElement('span');
         capitalRegion.innerText=data.region;
         capitalRegion.setAttribute('class','badge text-dark my-auto');
         cardBody.appendChild(capitalRegion);
         //br1
         //br..
         let br1=document.createElement('br');
         cardBody.appendChild(br1);
         
         //countryCode innerHtml..
         let countreCodeInner=document.createElement('span');
         countreCodeInner.innerText='CountryCode :';
         cardBody.appendChild(countreCodeInner);
         //countryCode..
         let CountryCode1=document.createElement('span');
         CountryCode1.innerText=data.alpha2Code+","+data.alpha3Code;
         CountryCode1.setAttribute('class','badge text-dark my-auto');
         cardBody.appendChild(CountryCode1);
         ///
         let br2=document.createElement('br');
         cardBody.appendChild(br2);
         // console.log(data)
         //Latlng...
         let lat=document.createElement('span');
         lat.innerText='LatLng :'+(data.latlng);
         cardBody.appendChild(lat);
        //  let latLng=document.createElement('span');
        //  latLng.innerText=;
        //  latLng.setAttribute('class','badge text-dark my-auto alpha3Code');
        //  cardBody.appendChild(latLng);
    
        let currency=document.createElement('div',"currency");
        currency.innerText="Currency Code :"+data.currencies[0].code;
        cardBody.appendChild(currency);

        //  let br4=document.createElement('br');
        //  cardBody.appendChild(br4);
         
         let currencyName=document.createElement('div',"currencyName");
        currencyName.innerText="Currency Name :"+data.currencies[0].name;
        cardBody.appendChild(currencyName);

        let currencySymbol=document.createElement('div',"currencySymbol");
        currencySymbol.innerText="Currency Symbol :"+data.currencies[0].symbol;
        cardBody.appendChild(currencySymbol);

         let footer=document.createElement("div");
         footer.setAttribute("class","card-footer text-center");
         form.appendChild(footer)

         let button=document.createElement("button");
         button.setAttribute("type","submit");
         button.setAttribute("class","btn btn-primary clicked ");
         button.setAttribute("data-bs-toggle","modal");
         button.setAttribute("data-bs-target","#staticBackdrop");
         button.innerText="CheckWeather";
         button.addEventListener("click",(event)=>{
           event.preventDefault()
           async function hi(){
             try{
               const apiColl=await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.latlng[0]}&lon=${data.latlng[1]}&appid=572dfa7c2665cce28fee4f24c7e9073b`)
               const newApi=await apiColl.json()
               const icon=newApi.weather[0].icon;
                let icons=(`http://openweathermap.org/img/wn/${icon}@2x.png`);
               const temp=newApi.main.temp;
                const tempValue=(temp-273).toFixed(0);
                CountryTemperature.innerText="Temperature :"+tempValue+" ℃";
                console.log(tempValue);
             }
             catch(err){
                  console.log(err);
             }
           }
           hi();
        })       
        footer.appendChild(button);
         let modal=document.createElement("div");
         modal.setAttribute("class","modal fade")
         modal.setAttribute("id","staticBackdrop")
         modal.setAttribute("data-bs-backdrop","static")
         modal.setAttribute("data-bs-keyboard","false")
         modal.setAttribute("tabindex","-1")
         modal.setAttribute("aria-labelledby","staticBackdropLabel")
         modal.setAttribute("aria-hidden","true")
         footer.appendChild(modal);
 
         let dialog=document.createElement("div");
         dialog.setAttribute("class","modal-dialog");
         modal.appendChild(dialog);
 
         let content=document.createElement("div");
         content.setAttribute("class","modal-content");
         dialog.appendChild(content);
 
         let header=document.createElement("div");
         header.setAttribute("class","modal-header");
         content.appendChild(header);
 
         let h5=document.createElement("h5");
         h5.setAttribute("class","modal-title")
         h5.setAttribute("id","staticBackdropLabel")
         h5.innerText="Weather Report";
         header.appendChild(h5);
 
         let btn_close=document.createElement("btn");
         btn_close.setAttribute("type","button")
         btn_close.setAttribute("class","btn-close")
         btn_close.setAttribute("data-bs-dismiss","modal")
         header.appendChild(btn_close);
 
         let modalBody=document.createElement("div");
         modalBody.setAttribute("class","modal-body");
         content.appendChild(modalBody);

         let countryName=document.createElement("h5");
         countryName.setAttribute("class","countryName");
         countryName.innerText="Country :"+data.name;
         modalBody.appendChild(countryName);
         
         let CountryTemperature=document.createElement('span');
         CountryTemperature.setAttribute("class","badge text-dark my-auto")
         
         modalBody.appendChild(CountryTemperature);

        // let temp=document.createElement('span',"badge text-dark my-auto");
        // modalBody.appendChild(temp);

         let modalFooter=document.createElement("div");
         modalFooter.setAttribute("class","modal-footer");
         content.appendChild(modalFooter);
 
         let footerBtn1=document.createElement("button");
         footerBtn1.setAttribute("type","button");
         footerBtn1.setAttribute("class","btn btn-secondary");
         footerBtn1.setAttribute("data-bs-dismiss","modal");
         footerBtn1.innerHTML="close";
         modalFooter.appendChild(footerBtn1);
 
         let footerBtn2=document.createElement("button");
         footerBtn2.setAttribute("type","button");
         footerBtn2.setAttribute("class","btn btn-primary");
         footerBtn2.innerHTML="Understood";
         modalFooter.appendChild(footerBtn2);
    })  
  }
  catch(err){
    console.log(err);
  }
}
apicalls();
 

