function extractJobData(){

    const wrapElement = document.querySelectorAll('.je-2 .job-wrap');

    let extractedJobs = [];

    for (mainElement of wrapElement){

        let jobData = {};
        let title = mainElement.querySelector('.job-element .inner-job-element .job-title').innerText;
        let location = mainElement.querySelector('.job-element .inner-job-element .job-location').innerText;
        //This extracts url from onclick value. Given that the url is surrounded by quotes we split by that and extract the url in the middle
        let url = mainElement.querySelector('.job-element').attributes.onclick.value.split("'")[1];

        jobData.title = title;
        jobData.location = location;
        jobData.url = url;

        extractedJobs.push(jobData)
        
    }

    return extractedJobs;

}

function createOutput(extractedJobs){

    const mainOriginal = document.querySelector('main');
    const newSection = document.createElement('section');
    newSection.className = "job-extracted";
    
    mainOriginal.appendChild(newSection);

    const testAuthor = newSection.appendChild(document.createElement('h2'));    
    testAuthor.innerHTML="TEST: DAVID CATAÑO"
    testAuthor.style.backgroundColor = "black"
    testAuthor.style.color = "white"

    const table = newSection.appendChild(document.createElement('table'));
    table.className="table";

    //thead
    const thead = table.appendChild(document.createElement('thead'));

    //tbody
    const tbody= table.appendChild(document.createElement('tbody'));

    //THEAD
    let trH = thead.appendChild(document.createElement('tr'));

    //#
    let thH = trH.appendChild(document.createElement('th'));
    thH.innerText="#"

    //Title
    let thTitle = trH.appendChild(document.createElement('th'));
    thTitle.innerText="Title";

    //Location
    let thLocation = trH.appendChild(document.createElement('th'));
    thLocation.innerText="Location";

    //Url
    let thUrl = trH.appendChild(document.createElement('th'));
    thUrl.innerText= "Url";

     //TBODY
    for (let i = 0; i < extractedJobs.length; i++){

        let tr = tbody.appendChild(document.createElement('tr'));

        //#
        let th = tr.appendChild(document.createElement('th'));
        th.innerText=i
        //Title
        let tdTitle = tr.appendChild(document.createElement('td'));
        tdTitle.innerText=extractedJobs[i].title;
        //Location
        let tdLocation = tr.appendChild(document.createElement('td'));
        tdLocation.innerText=extractedJobs[i].location;
        //Url
        let tdUrl = tr.appendChild(document.createElement('td'));
        let a = tdUrl.appendChild(document.createElement('a'));
        a.innerText= extractedJobs[i].url;
        a.href= extractedJobs[i].url
        
    }

}

(function main() {

    console.clear();
    const extractedJobs = extractJobData();
    console.table(extractedJobs);
    createOutput(extractedJobs);

})();