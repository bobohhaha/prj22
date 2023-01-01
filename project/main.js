const search = document.querySelector('#search');
const clearBtn = document.querySelector('.btn');
const itemsContainer = document.querySelector('.section-container');
const pagination = document.querySelector('.pagination')


const items = itemsContainer.querySelectorAll('.product-container');

Array.from(items).forEach(function(item){
    item.addEventListener('mouseenter', scaleOut);
    item.addEventListener('mouseleave', scaleIn);

    /*
    item.addEventListener('click', changeColor)
    
    function changeColor(e) {
        e.target.style.backgroundColor = 'red';
        console.log(e.target.classList.contains('product-container'))
    }
    */
})

function scaleOut(e){
    e.target.style.transform = `scale(1.05)`
    e.target.style.transition = `0.7s` 
}

function scaleIn(e){
    e.target.style.transform = `scale(1)`
    e.target.style.transition = `0.7s` 
}


search.addEventListener('input', searchEvent);


clearBtn.addEventListener('click', deleteEvent);


function searchEvent(e){
    
    if(e.target.value.length > 0){
        clearBtn.style.display = 'block';
        pagination.style.display = 'none'
    } else {
        clearBtn.style.display = 'none';
       
        location.reload();
    }

  

 
    const text = e.target.value.toLowerCase();

    const items = itemsContainer.querySelectorAll('.product-container');
   
    Array.from(items).forEach(function(item){
        const itemListName = item.children[1].textContent;
        if(itemListName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })

}


function deleteEvent(e){
   
    search.value = '';

    e.target.style.display = 'none'

  
    location.reload();
}