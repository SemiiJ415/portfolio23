// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false);

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))



//  .top-line { 
width: 51%;
position: absolute;
right: 24px; 
left: 40px;
top: 20px;
border: 1px solid #146a7b;
}