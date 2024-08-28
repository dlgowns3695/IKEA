
$(document).ready(function() {
    let youdo = $('.titles .titlesTop .mainTitleFadeIn .youdo');
    let yourhome = $('.titles .titlesTop .mainTitleFadeIn .yourhome');
    let subPtag = $('.titles .titlesTop .subTitleFadeIn .subPtag');

    let building = $('.backgroundBuilding');
    let livingBox = $('.backgroundBuilding .livingRoomBox');
    let bedBox = $('.backgroundBuilding .bedRoomBox');
    let kitchenBox = $('.backgroundBuilding .kitchenBox');
    let bathRoomBox = $('.backgroundBuilding .bathRoomBox');
    let bottomProps = $('.backgroundBuilding .bottomProps');

    let leftStreetLight = $('.streets .leftStreetLight');
    let leftCenterStreetLight = $('.streets .leftCenterStreetLight');
    let rightCenterStreetLight = $('.streets .rightCenterStreetLight')
    let rightStreetLight = $('.streets .rightStreetLight');

    let leftHuman = $('.leftHuman');
    let centerHuman = $('.centerHuman');
    let rightHuman = $('.rightHuman');


    // 페이지 로드 후 페이드 인 및 이동
    // 가운데 빌딩
    setTimeout(function() {
        building.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 500); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함

    setTimeout(function() {
        bottomProps.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 1000); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함


    // 빌딩 안 각 방의 써클
    setTimeout(function() {
        livingBox.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 1500); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함
    setTimeout(function() {
        bedBox.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 1900); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함
    setTimeout(function() {
        kitchenBox.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 2300); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함
    setTimeout(function() {
        bathRoomBox.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 2700); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함



    // 각 가로등
    setTimeout(function() {
        leftStreetLight.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 1800); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함
    setTimeout(function() {
        leftCenterStreetLight.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 2200); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함
    setTimeout(function() {
        rightCenterStreetLight.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 2600); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함
    setTimeout(function() {
        rightStreetLight.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 3000); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함


    // 사람
    setTimeout(function() {
        leftHuman.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 2000); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함
    setTimeout(function() {
        centerHuman.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 2600); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함
    setTimeout(function() {
        rightHuman.css({ opacity: '1'}); // 페이드 인 및 이동
    }, 3200); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함



    // 메인 타이틀
    setTimeout(function() {
        youdo.css({ opacity: '1', marginLeft: '-135px' }); // 페이드 인 및 이동
        yourhome.css({ opacity: '1', marginLeft: '150px' }); // 페이드 인 및 이동
    }, 3500); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함

    setTimeout(function() {
        subPtag.css({ opacity: '1', top: '0' }); // 페이드 인 및 이동
    }, 3700); // 약간의 딜레이를 주어 자연스럽게 페이드 인되도록 함





    let slides = $('.slides'); // slides클래스 모든 요소를 선택
    let slideItems = $('.slide'); // slide클래스 모든 요소를 선택
    let slideWidth = slideItems.eq(0).width(); // 변수 slideItems 의 첫번째 너비값

    let index = 0; 
    
    function nextSlide() {
        // slideItems.length; = 슬라이드의 총 개수 
        // index는 현재 인덱스
        // 다음 인덱스 계산, 배열의 길이를 벗어나면 처음으로 돌아갑니다.
        index = (index + 1) % slideItems.length;
        // ex) 마지막 인덱스 (2 + 1) % 총 개수 3 = 0 --> 다시 처음으로 돌림 
        updateSlide();
    }

    function updateSlide() {
        // 인덱스와 슬라이드 너비를 곱하여 transform 속성을 업데이트 ex) -(1 * 250px)
        slides.css('transform', `translateX(${-index * slideWidth}px)`);
    }

    // nextSlide를 , 2초마다 실행
    setInterval(nextSlide, 2000);

});

const mainCircle = $('.mainCircle');
    mainCircle.on('mouseenter', function() {
        $(this).parent().children().eq(1).toggleClass('show');
        $(this).parent().children().eq(2).css('color', '#fccb00');
        $(this).children().eq(0).css('borderColor', '#fccb00');
        $(this).children().eq(1).css('backgroundColor', '#fccb00');
        $(this).children().eq(2).css('backgroundColor', '#fccb00');
    });
    mainCircle.on('mouseleave', function() {
        $(this).parent().children().eq(1).toggleClass('show');
        $(this).parent().children().eq(2).css('color', '#fff');
        $(this).children().eq(0).css('borderColor', '');
        $(this).children().eq(1).css('backgroundColor', '');
        $(this).children().eq(2).css('backgroundColor', '#fff');
    });

// mainCircle.on('click', function() {
//     if ($(this).children().eq(2).hasClass('livingcircle')) { 
//         window.location.href = "http://127.0.0.1:5500/livingroom.html";
//     }
//     else if ($(this).children().eq(2).hasClass('bedcircle')) {
//         window.location.href = "http://127.0.0.1:5500/bedroom.html";
//     }
//     else if ($(this).children().eq(2).hasClass('kitchencircle')) {
//         window.location.href = "http://127.0.0.1:5500/kitchen.html";
//     }
//     else if ($(this).children().eq(2).hasClass('bathcircle')) {
//         window.location.href = "http://127.0.0.1:5500/bathroom.html";
//     }
// });

mainCircle.on('click', function() {
    if ($(this).children().eq(2).hasClass('livingcircle')) { 
        window.location.href = "livingroom.html";
    }
    else if ($(this).children().eq(2).hasClass('bedcircle')) {
        window.location.href = "bedroom.html";
    }
    else if ($(this).children().eq(2).hasClass('kitchencircle')) {
        window.location.href = "kitchen.html";
    }
    else if ($(this).children().eq(2).hasClass('bathcircle')) {
        window.location.href = "bathroom.html";
    }
});




// 잉크 위 부모임
const liquifyTrigger = document.querySelector('.js-liquify-trigger');
// const textTriggers = [...document.querySelectorAll('p')];
const inkTriggers = [...document.querySelectorAll('.js-ink-trigger')];

const controller = new ScrollMagic.Controller();

inkTriggers.map(ink => {
const sceneInk = new ScrollMagic.Scene({
    triggerElement: ink,
    triggerHook: 'onEnter',
})
.setClassToggle(ink, 'is-active')
.reverse(false)
.addTo(controller);
});
