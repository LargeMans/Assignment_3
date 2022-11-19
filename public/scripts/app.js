/* single page application */ 
(function(){
    function Start()
    {
        console.log("app started");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(button of deleteButtons)
        {
            button.addEventListener('click',(event) =>{
             if(!confirm("are you sure?"))
                {
                 event.preventDefault();
                  window.location.assign('/assignment-list');
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();