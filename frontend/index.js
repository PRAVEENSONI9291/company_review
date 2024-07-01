let inputform = document.getElementById('inputform');
let searchform = document.getElementById('searchform');


inputform.addEventListener('submit', storeData);
searchform.addEventListener('submit', fetchData);


let url= `http://localhost:3000/review`


async function fetchData(e){
    e.preventDefault();

    let searchCompany= document.getElementById('searchCompany').value;
    
    try {
        let result= await axios.get(`${url}?companyName=${searchCompany}`)

        console.log(result.data);

        
    } catch (error) {
        
    }

}

async function storeData(e) {
    e.preventDefault()

    let companyName = document.getElementById('companyName').value;
    let companyPros = document.getElementById('companyPros').value;
    let companyCons = document.getElementById('companyCons').value;

    let starRating = 1;

    if (document.getElementById('5star').checked) {
        starRating = 5;
    }
    else if (document.getElementById('4star').checked) {
        starRating = 4;
    }
    else if (document.getElementById('3star').checked) {
        starRating = 3;
    }
    else if (document.getElementById('2star').checked) {
        starRating = 2;
    }
    else if (document.getElementById('1star').checked) {
        starRating = 1;
    }

    let myobj={
        companyName: companyName,
        pros: companyPros,
        cons:companyCons,
        rating:starRating
    }
    inputform.reset();
    

    try {
        await axios.post(url, myobj)
        
    } catch (error) {
        console.log("error");
        
    }




    // console.log(document.getElementById('5star').checked);




}

