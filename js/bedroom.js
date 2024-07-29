






// 다른 곳도 똑같게 수정하기

$(document).ready(function() {


    const arr = [
        $('.bedBox'),
        
        $('.bedpillowblue'),
        $('.bedpillowgreen01'),
        $('.bedpillowwhite1'),
        $('.bedpillowwhite2'),
        $('.bedpillowred'),
        $('.bedpillowblack'),
        $('.bedpillowgreen02'),
        $('.flowerpot'),
        $('.chairBox'),
        $('.tableBox'),
        $('.tv'),
        $('.sign'),
        
    ];

    let totalAnimationTime = 0;

    for (let i = 0; i < arr.length; i++) {
        let count = 200 * i + 200;
        totalAnimationTime = count + 200;  // 애니메이션이 끝나는 총 시간 계산
        $(arr[i]).delay(count).animate({ opacity: '1' }, 500);
        
        
    }

    // 첫 번째 애니메이션이 끝난 후1초 뒤에 두 번째 애니메이션 실행
    setTimeout(function() {
        const mainCircle = $('.mainCircle');

        for (let i = 0; i < mainCircle.length; i++) {
            let count = 200 * i;  // 각 원들은 1초마다 나타나게 함
            $(mainCircle[i]).delay(count).animate({ opacity: '1' }, 500);
        }
    }, totalAnimationTime + 200);  // 총 애니메이션 시간 + 1초 지연

    

    
    function updateColor(colorElement, popupContainer) {
        // 모든 circleColor 요소의 스타일 초기화
        popupContainer.find('.circleColor').css({
            'border': '',
            'box-shadow': '',
            'box-sizing': '',
            'width': '',
            'height': '',
            'top': '',
            'left': '',
        });
    
        // 클릭된 요소에 스타일 적용
        $(colorElement).css({
            'border': '3px solid #fff',
            'box-shadow': '0 5px 5px rgba(0, 0, 0, 0.2)',
            'box-sizing': 'border-box',
            'width': '46px',
            'height': '46px',
            'top': '-=3px',
            'left': '-=3px',
        });
    }
    
    /****** 아이콘 관련 ******/
    let currentUrl = window.location.href;
    // 페이지 이름이 "bedroom"인지 확인
    if (currentUrl.includes("bedroom")) {
        // icon02 이미지 src 변경
        $('.icon02 img').attr('src', '../imgs/bedIconClick.png');
    }

    let iconContiner = $('.iconContiner div');

    $(iconContiner).on('mouseenter', function() {
        // "bedroom" 페이지에서는 icon02의 이미지를 유지하고, 다른 아이콘만 처리
        if (currentUrl.includes("bedroom") && $(this).hasClass('icon02')) return;

        if ($(this).hasClass('icon01')) {
            $(this).find('img').attr('src', '../imgs/livingIconClick.png');
        } else if ($(this).hasClass('icon02')) {
            $(this).find('img').attr('src', '../imgs/bedIconClick.png');
        } else if ($(this).hasClass('icon04')) {
            $(this).find('img').attr('src', '../imgs/bathIconClick.png');
        } else if ($(this).hasClass('icon05')) {
            $(this).find('img').attr('src', '../imgs/kitchenClick.png');
        }
    });

    $(iconContiner).on('mouseleave', function() {
        // "bedroom" 페이지에서는 icon02의 이미지를 유지하고, 다른 아이콘만 처리
        if (currentUrl.includes("bedroom") && $(this).hasClass('icon02')) return;

        if ($(this).hasClass('icon01')) {
            $(this).find('img').attr('src', '../imgs/livingIcon.png');
        } else if ($(this).hasClass('icon02')) {
            $(this).find('img').attr('src', '../imgs/bedIcon.png');
        } else if ($(this).hasClass('icon04')) {
            $(this).find('img').attr('src', '../imgs/bathIcon.png');
        } else if ($(this).hasClass('icon05')) {
            $(this).find('img').attr('src', '../imgs/kitchenIcon.png');
        }
    });

    /****** 클릭할 서클 관련 ******/
    // mainCircle 전부
    const mainCircle = $('.mainCircle');
    // 호버, 클릭 시 적용할 클래스
    const hoverColorClass = 'hovered';
    const clickColorClass = 'clicked';
    // mainCircle 갯수까지 루프 돌면서 
    mainCircle.each(function() {
    $(this).on('mouseenter', function() {
        $(this).children().eq(0).addClass(hoverColorClass);
        $(this).children().eq(1).addClass(hoverColorClass);
        $(this).children().eq(2).addClass(hoverColorClass);

    }).on('mouseleave', function() {
        // !$(this).hasClass(clickColorClass)
        // 클릭 상태가 아닌 경우에만 원래 색상으로 복원
        if (!$(this).children().hasClass(clickColorClass)) {
            $(this).children().eq(0).removeClass(hoverColorClass);
            $(this).children().eq(1).removeClass(hoverColorClass);
            $(this).children().eq(2).removeClass(hoverColorClass);
            // 클릭이 된 상태는 계속 노란색임
        }
        });
    });




    // 각 팝업의 첫 번째 색상을 선택하고 이미지를 업데이트
    function initializePopup(popupContainer) {
        let firstColor = popupContainer.find('.circleColor').first();
        console.log(popupContainer);

        if (firstColor.length) {
            let color = firstColor.data('color');
            let containerClass = popupContainer.attr('class').split(' ')[0].replace('PopupContainer', '').toLowerCase();
            console.log(containerClass + '<<<<containerClass');
            switch (containerClass) {
                case 'bed':
                    popupContainer.find('.productBed img').attr('src', '../imgs/bedroom/bedPopup' + color + '.png');
                    console.log('스위치문 베드팝업')
                    break;
                case 'pillow':
                    popupContainer.find('.productPillow img').attr('src', '../imgs/bedroom/pillowPopup' + color + '.png');
                    break;
                case 'chair':
                    popupContainer.find('.productChair img').attr('src', '../imgs/bedroom/chairPopup' + color + '.png');
                    break;
                case 'table':
                    popupContainer.find('.productTable img').attr('src', '../imgs/bedroom/tablePopup' + color + '.png');
                    break;
                default:
                    // console.log('알 수 없는 컨테이너입니다.');
            }
            updateColor(firstColor, popupContainer);
        }
    }

    // 각 팝업 초기화 --> 첫 로딩때 써클, 첫 이미지 나타나는 구간
    $('.PopupContainer').each(function() {
        initializePopup($(this));
    });

    // 색상 변경 이벤트 핸들러
    $('.circleColor').click(function() {
        // 클릭된 요소의 부모 컨테이너 찾기
        let popupContainer = $(this).closest('.PopupContainer');
        console.log('popupContainer : ' + popupContainer)
        let containerClass = popupContainer.attr('class').split(' ')[0];
        console.log('containerClass : ' + containerClass)
        

        // 클릭된 요소의 색상 찾기
        let color = $(this).data('color');

        // 같은 팝업 내 써클 색상 업데이트
        updateColor(this, popupContainer);


        // 각 제품에 대해 스위치 문으로 이미지 업데이트
        switch (containerClass) {
            case 'bedPopupContainer':
                console.log('bedPopupContainer진입')
                popupContainer.find('.productBed img').attr('src', '../imgs/bedroom/bedPopup' + color + '.png');
                console.log('bedPopupContainer 의 이미지가 바뀌었습니다.')
                break;
            case 'pillowPopupContainer':
                console.log('pillowPopupContainer진입')
                popupContainer.find('.productPillow img').attr('src', '../imgs/bedroom/pillowPopup' + color + '.png');
                console.log('pillowPopupContainer 의 이미지가 바뀌었습니다.')
                break;
            case 'chairPopupContainer':
                console.log('chairPopupContainer진입')
                popupContainer.find('.productChair img').attr('src', '../imgs/bedroom/chairPopup' + color + '.png');
                console.log('chairPopupContainer 의 이미지가 바뀌었습니다.')
                break;
            case 'tablePopupContainer':
                console.log('tablePopupContainer진입')
                popupContainer.find('.productTable img').attr('src', '../imgs/bedroom/tablePopup' + color + '.png');
                console.log('tablePopupContainer 의 이미지가 바뀌었습니다.')
                break;
            default:
                console.log('알 수 없는 컨테이너입니다.');
        }
    });



    // 각 상품 가격들
    let prices = {
        bed: parseInt($('.bedPopupContainer .price').text()),
        pillow: parseInt($('.pillowPopupContainer .price').text()),
        light: parseInt($('.lightPopupContainer .price').text()),
        chair: parseInt($('.chairPopupContainer .price').text()),
        table: parseInt($('.tablePopupContainer .price').text())
    };

    // 메인 서클 요소를 클릭했을 때
    $('.mainCircle').on('click', function() {
        let parent = $(this).parent(); // 부모 요소 선택

        $(this).children().eq(0).addClass('clicked');
        $(this).children().eq(1).addClass('clicked');
        $(this).children().eq(2).addClass('clicked');

        // 어떤건지 판단해서 팝업열기, 딤 열기, 그에 맞는 수량, 금액, 상품의 가격
        if (parent.hasClass('bedBox')) {
            product('bedPopupContainer', 'bedDim', 'bedPopupContainer .quantity p', 'bedPopupContainer .price', prices.bed);
        }

        if (parent.hasClass('pillowBox')) {
            product('pillowPopupContainer', 'pillowDim', 'pillowPopupContainer .quantity p', 'pillowPopupContainer .price', prices.pillow);
        }

        if (parent.hasClass('lightingBox')) {
            product('lightPopupContainer', 'lightDim', 'lightPopupContainer .quantity p', 'lightPopupContainer .price', prices.light);
        }

        if (parent.hasClass('chairBox')) {
            product('chairPopupContainer', 'chairDim', 'chairPopupContainer .quantity p', 'chairPopupContainer .price', prices.chair);
        }

        if (parent.hasClass('tableBox')) {
            product('tablePopupContainer', 'tableDim', 'tablePopupContainer .quantity p', 'tablePopupContainer .price', prices.table);
        }
    });

// 상품 관련 정보 가져오려는 함수
function product(containerClass, dimClass, quantityClass, priceClass, pricePerItem) {
    // 컨테이너, 딤 열기
    $(`.${containerClass}`).css('display', 'block');
    $(`.${dimClass}`).css('display', 'block');

    // 수량 클래스가 가진 텍스트 가져오기 *가격 계산*
    let initialQuantity = parseInt($(`.${quantityClass}`).text());

    // 매개변수: ex) 1, 실제가격, 가격클래스
    updatePrice(initialQuantity, pricePerItem, priceClass);

    // 마이너스 버튼 클릭 이벤트
    $('.minus').off('click').on('click', function() {
        // 수량 클래스가 가진 텍스트 가져오기
        let currentQuantity = parseInt($(`.${quantityClass}`).text());
        // 수량이 1보다 크다면 줄이기, 0이면 줄일 필요 없음
        if (currentQuantity > 1) {
            currentQuantity--;
            // 수량 클래스의 텍스트 (줄인 수량)
            $(`.${quantityClass}`).text(currentQuantity);
            // 1, 40000, 가격클래스
            updatePrice(currentQuantity, pricePerItem, priceClass);
        }
    });

    // 플러스 버튼 클릭 이벤트
    $('.plus').off('click').on('click', function() {
        let currentQuantity = parseInt($(`.${quantityClass}`).text());
        currentQuantity++;
        $(`.${quantityClass}`).text(currentQuantity);
        updatePrice(currentQuantity, pricePerItem, priceClass);
    });
}

    // 가격을 계산하여 업데이트하는 함수
    function updatePrice(quantity, pricePerItem, priceClass) {
        // 총 금액 = 수량 * 실제 가격
        let totalPrice = quantity * pricePerItem;
        // 가격 클래스의 p = 총 금액으로 업데이트
        $(`.${priceClass}`).text(totalPrice.toLocaleString());
    }

    // 초기화 부분
    $('.close').on('click', function() {
        // 클릭 상태인 요소의 색상을 원래 색상으로 변경하고 클릭 상태 클래스 제거
        $('.mainCircle').children().removeClass('hovered');
        $('.mainCircle').children().removeClass('clicked');

        // 팝업과 딤을 닫기
        $('.dim, .PopupContainer').css('display', 'none');

        // 수량 및 금액 초기화
        $('.PopupContainer').each(function() {
            // 자기 자신 팝업에서 수량 텍스트를 찾아서 1로 초기화
            $(this).find('.quantity p').text('1');
            let containerClass = $(this).attr('class').split(' ')[0].replace('PopupContainer', '').toLowerCase();
            let popupContainer = containerClass+'Popup'
    
            // 가격 초기화
            updatePrice(1, prices[containerClass], `${containerClass}PopupContainer .price`);

            // 첫 번째 색상 선택, 첫번째 이미지로 바뀜
            initializePopup($(this));
            console.log('각 팝업 초기화')
        });
    });

    $('.gotoMain').on('click', function() {
        // 링크로 이동
        window.location.href = 'http://127.0.0.1:5500/index.html';
    });

    /****** 장바구니 옆 하트 관련 ******/
    $('.hart').on('click', function() {
        $(this).children('img').toggleClass('show');
    });

});


