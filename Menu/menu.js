
document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('ruleButtonMenu').addEventListener('click', function(){
        document.getElementById('modal').style.display = 'flex';
        
    });
    document.querySelector('.close_modal_menu').addEventListener('click', function(){
        document.getElementById('modal').style.display = 'none';
    });
});
