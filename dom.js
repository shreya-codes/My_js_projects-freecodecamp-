var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
filter.addEventListener('keyup',filterItems);
itemList.addEventListener('click',removeItem);
// Form submit event
form.addEventListener('submit', addItem);
// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  var deletebtn= document.createElement('button');
  deletebtn.className='btn btn-danger btn-sn float-right delete';
  deletebtn.appendChild(document.createTextNode('X'));
  li.appendChild(deletebtn);
  itemList.appendChild(li);


  // Append li to list
  itemList.appendChild(li);
}
function removeItem(e){
    if(e.target.classList.contains('delete'))
    {
        if(confirm("are you sure")){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    var text=e.target.value.toLowerCase();
     var items=itemList.getElementsByTagName('li');
     Array.from(items).forEach(function(item){
         var itemName = item.firstChild.textContent;

         if (itemName.toLowerCase().indexOf(text) != -1)
         {
             item.style.display='block';

         }
         else{
             item.style.display='none';

         }

     })

}