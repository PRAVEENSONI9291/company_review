let inputform = document.getElementById('inputform');
let searchform = document.getElementById('searchform');


inputform.addEventListener('submit', storeData);
searchform.addEventListener('submit', fetchData);


let url= `http://localhost:3000/review`



function printFetchedData(response){

    let arrayOfCompany= response.data;

    let resultDiv= document.getElementById('resultDiv');
    
    let sumOfRating= 0;
    arrayOfCompany.forEach(element => {
        sumOfRating+=element.rating;
    });

    let averageRating = sumOfRating/ arrayOfCompany.length*1;



    let companyDetail = `
    <div style="margin-top: 4rem;">
        <h3 style="text-decoration: underline; margin-bottom: 3rem">Company Reviews</h3>
        <h4>Company Name: <span>${arrayOfCompany[0].companyName}</span></h4>
        <h4>Company Rating: <span>${averageRating}</span></h4>
    </div>`;




    resultDiv.innerHTML= companyDetail;

    arrayOfCompany.forEach(element => {
        let reviewsList = `
            <div style="margin-top: 1rem;">
                <h4>________________________________</h4>
                <h6>Pros: <span>${element.pros}</span></h6>
                <h6>Cons: <span>${element.cons}</span></h6>
                <h6>Star Rating: <span>${element.rating}</span></h6>
            </div>`;
        resultDiv.innerHTML += reviewsList;


   


    })
}


async function fetchData(e){
    e.preventDefault();

    let searchCompany= document.getElementById('searchCompany').value;
    searchform.reset();
    
    try {
        let result= await axios.get(`${url}?companyName=${searchCompany}`)
        console.log(result.data);

        printFetchedData(result);

        

        
    } catch (error) {
        console.log("error in printing");
        
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

