let dateTime = document.getElementById("date-time");
let today = new Date();
let date = today.getDay() + ', ' + today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
dateTime.innerHTML += `
    <span><strong>${today.toDateString()}</strong></span>
`
// empty Arrays


let responseData = [];

// fetching data from api
let topNews = fetch("https://newsapi.org/v2/everything?q=science&apiKey=f9ce6f53900f44b2b4afd0d3ecf3df92");

topNews.then((data) => {
    return data.json();
}).then(response => {
    responseData = response;
    // for (const key in responseData.articles) {
    //     if (Object.hasOwnProperty.call(responseData.articles, key)) {
    //         const element = responseData.articles[key];
    let cardContainer = document.getElementById('first');
    let secondCard = document.getElementById("second");
    let thirdCard = document.getElementById("third");
    let fourthCard = document.getElementById("fourth");

    for (let i = 0; i < responseData.articles.length; i++) {
        if (i < 5) {
            cardContainer.innerHTML += `
                <div class="card cardBoddy" style="width: 14rem;">
                    <img src="${responseData.articles[i].urlToImage}" class="card-img-top m-0px">
                    <div class="card-body">
                        <p class="card-text">${responseData.articles[i].title.substring(0, 200)}</p>
                    </div>
                </div>
                `
        } else if (i >= 5 && i < 10) {
            secondCard.innerHTML += `
                    <div class="card cardBoddy" style="width: 14rem;">
                        <img src="${responseData.articles[i].urlToImage}" class="card-img-top m-0px">
                        <div class="card-body">
                            <p class="card-text">${responseData.articles[i].title.substring(0, 200)}</p>
                        </div>
                    </div>
                    `
        } else if (i >= 10 && i < 15) {
            thirdCard.innerHTML += `
                    <div class="card cardBoddy" style="width: 14rem;">
                        <img src="${responseData.articles[i].urlToImage}" class="card-img-top m-0px">
                        <div class="card-body">
                            <p class="card-text">${responseData.articles[i].title.substring(0, 200)}</p>
                        </div>
                    </div>
                    `
        } else {
            fourthCard.innerHTML += `
                    <div class="card cardBoddy" style="width: 14rem;">
                        <img src="${responseData.articles[i].urlToImage}" class="card-img-top m-0px">
                        <div class="card-body">
                            <p class="card-text">${responseData.articles[i].title.substring(0, 200)}</p>
                        </div>
                    </div>
                    `
        }
    }
})

let everythingNews = fetch("https://newsapi.org/v2/everything?q=technology&apiKey=f9ce6f53900f44b2b4afd0d3ecf3df92")

let dataArray = [];

everythingNews.then((data) => {
    return data.json();
}).then((result) => {
    dataArray = result;

    let topStory = document.getElementById("target");
    let i = 0;
    topStory.innerHTML += `
    <div class="card top_news">
    <img src="${dataArray.articles[i].urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
        <h3>${dataArray.articles[i].title}</h3>
        <p class="card-text fs-5">${dataArray.articles[i].content}</p>
    </div>
</div>
    `
})

let bbc = fetch("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f9ce6f53900f44b2b4afd0d3ecf3df92");
let bbcArray = [];

bbc.then((data) => {
    return data.json();
}).then((resResult) => {

    bbcArray = resResult;

    let target2 = document.getElementById("target2")

    for (let i = 0; i < 4; i++) {

        target2.innerHTML += `
            <div class="card mb-3 cardMiddle">
                <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${bbcArray.articles[i].urlToImage}" class="img-fluid" alt="...">
                        </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h6 class="card-title">${bbcArray.articles[i].title}</h6>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
})

let everyAboutNews = fetch("https://newsapi.org/v2/everything?q=bitcoin&apiKey=f9ce6f53900f44b2b4afd0d3ecf3df92")

let tweetArray = [];
everyAboutNews.then((resp) => {
    return resp.json();
}).then((resultData) => {
    tweetArray = resultData;

    let target3 = document.getElementById("target3");

    for (let i = 0; i < 3; i++) {
        target3.innerHTML += `
        <div class="card border-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header">${tweetArray.articles[i].title}</div>
        <div class="card-body text-secondary">
          <h5 class="card-title">${tweetArray.articles[i].author}</h5>
          <p class="card-text">${tweetArray.articles[i].publishedAt}</p>
        </div>
      </div>
        `
    }
})


let politicNews = fetch("https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=f9ce6f53900f44b2b4afd0d3ecf3df92")

let poliArray = [];

politicNews.then((data) => {
    return data.json();
}).then((result) => {
    poliArray = result;

    let pol = document.getElementById("politic");

    for (let i = 0; i < 5; i++) {
        pol.innerHTML += `
        <div class="card mb-3" style="max-width: 95%;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${poliArray.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${poliArray.articles[i].title}</h5>
            </div>
          </div>
        </div>
      </div>
        `
    }

})

let businessNews = fetch("https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=f9ce6f53900f44b2b4afd0d3ecf3df92")

let businessArray = [];

businessNews.then((dataB) => {
    return dataB.json();
}).then((resultb) => {
    businessArray = resultb;

    let bus = document.getElementById("business");

    for (let i = 0; i < 5; i++) {
        bus.innerHTML += `
        <div class="card mb-3" style="max-width: 95%;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${businessArray.articles[i].urlToImage}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${businessArray.articles[i].title}</h5>
            </div>
          </div>
        </div>
      </div>
        `
    }

})




// fetching data from api
let topNews1 = fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=f9ce6f53900f44b2b4afd0d3ecf3df92");
let responseData1 = [];

topNews1.then((data3) => {
    return data3.json();
}).then(response1 => {
    responseData1 = response1;

    let cardContainer1 = document.getElementById('first1');
    let secondCard1 = document.getElementById("second1");
    let thirdCard1 = document.getElementById("third1");
    let fourthCard1 = document.getElementById("fourth1");

    for (let i = 0; i < responseData1.articles.length; i++) {
        if (i < 5) {
            cardContainer1.innerHTML += `
                <div class="card cardBoddy" style="width: 14rem;">
                    <img src="${responseData1.articles[i].urlToImage}" class="card-img-top m-0px">
                    <div class="card-body">
                        <p class="card-text">${responseData1.articles[i].title.substring(0, 200)}</p>
                    </div>
                </div>
                `
        } else if (i >= 5 && i < 10) {
            secondCard1.innerHTML += `
                    <div class="card cardBoddy" style="width: 14rem;">
                        <img src="${responseData1.articles[i].urlToImage}" class="card-img-top m-0px">
                        <div class="card-body">
                            <p class="card-text">${responseData1.articles[i].title.substring(0, 200)}</p>
                        </div>
                    </div>
                    `
        } else if (i >= 10 && i < 15) {
            thirdCard1.innerHTML += `
                    <div class="card cardBoddy" style="width: 14rem;">
                        <img src="${responseData1.articles[i].urlToImage}" class="card-img-top m-0px">
                        <div class="card-body">
                            <p class="card-text">${responseData1.articles[i].title.substring(0, 200)}</p>
                        </div>
                    </div>
                    `
        } else {
            fourthCard1.innerHTML += `
                    <div class="card cardBoddy" style="width: 14rem;">
                        <img src="${responseData1.articles[i].urlToImage}" class="card-img-top m-0px">
                        <div class="card-body">
                            <p class="card-text">${responseData1.articles[i].title.substring(0, 200)}</p>
                        </div>
                    </div>
                    `
        }
    }
})