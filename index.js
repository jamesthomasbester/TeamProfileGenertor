console.log('test');

$.get('./Team.json', (data) => {
    data.forEach(element =>{

        let title;
        let extra;
        if(element.position.pager){
            extra = `
            <div class="info-item">
            <p id="pager">Pager</p>
            <p>${element.position.pager}</p>
            `
        }else if(element.position.github){
            extra = `
            <div class="info-item">
            <p id="pager">Github</p>
            <p><a>${element.position.github}</a></p>
            `
        }else if(element.position.contractEndDate){
            extra = `
            <div class="info-item">
            <p id="pager">Contract End Date</p>
            <p>${element.position.contractEndDate}</p>
            `
        }


        console.log(element)
        $('#main').append(`        
        <div class="employee-card">
        <div class="name-banner">
            <h2>${element.name}</h2>
            <h2>${element.position.title}</h2>
        </div>
        <div class="info-container">
        <div class="info-item">
            <p id="id">ID:</p>
            <p>${element.id}</p>
        </div>
        <div class="info-item">
            <p id="Email">Email:</p>
            <p>${element.email}</p>
        </div>
        <div class="info-item">
            <p id="Phone">Phone:</p>
            <p>${element.phone}</p>
        </div>
        ${extra}
    </div>
    </div>
    </div>
    `);
    })
})
