const menu_link=document.querySelectorAll('.nav-link');

menu_link.forEach((link) => link.addEventListener('click', event=>{
  event.preventDefault();

  document.querySelector(link.getAttribute('href')).scrollIntoView({
    behavior:'smooth' 
  })
}))

const hero_dot=document.querySelectorAll('.hero__dot');
const hero_image=document.querySelector('.hero__image');
const hero_title=document.querySelector('.dev-info-title');
const hero_text=document.querySelector('.dev-info-text');

const TITLES=[
  'Разработано 2000+ приложений',
  'Бесплатные приложения',
  'Тысячи довольных клиентов'
]

const TEXT=[
  'Для вашего удобства мы разработали множество приложений для вашего бизнеса и команды, которые доступны в любое время суток',
  'К любому сервисному обслуживанию мы подключим советы по управлению компанией совершенно бесплатно',
  'Накопленный нами опыт позволяет предлагать клиентам обширный спектр качественных приложений и сервисов'
]

hero_dot.forEach((dot,index)=>dot.addEventListener('click', ()=>{
  hero_dot.forEach(item=>{
    item.classList.remove('active');
  });

  dot.classList.add('active');
  hero_image.src="./img/hero"+index+".jpg";
  hero_title.textContent=TITLES[index];
  hero_text.textContent=TEXT[index];
}))