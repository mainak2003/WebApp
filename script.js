

const createCourseCard = () => {
    let article = document.createElement('article');
    article.classList.add('course');
    let div1 = document.createElement('div');
    div1.classList.add('course__image');
    let img = document.createElement('img');
    img.src = './images/2.jpg';
    div1.appendChild(img);
    let div2 = document.createElement('div');
    div2.classList.add('course__info');
    let h4 = document.createElement('h4')
    h4.innerHTML = 'CARD 1';
    let p = document.createElement('p');
    p.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aperiam deserunt eaque quos iure ad debitis.";
    let a = document.createElement('a');
    a.setAttribute('href','course.html');
    a.classList.add('btn');
    a.classList.add('btn-primary');
    a.innerText = 'Learn More';
    div2.appendChild(h4);
    div2.appendChild(p);
    div2.appendChild(a);
    article.appendChild(div1);
    article.appendChild(div2);
    return article;
}
const appendCourseCards = (className) =>{
    document.querySelector(className).appendChild(createCourseCard())
    document.querySelector(className).appendChild(createCourseCard())
    document.querySelector(className).appendChild(createCourseCard())
}
appendCourseCards('.courses__container')